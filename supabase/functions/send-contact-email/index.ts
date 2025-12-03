import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  full_name: string;
  email: string;
  phone_number?: string;
  company_organization?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data: ContactFormData = await req.json();

    const { full_name, email, phone_number, company_organization, message } = data;

    if (!full_name || !email) {
      return new Response(
        JSON.stringify({ error: "Full name and email are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailBody = `
New AI Automation Lead Submission
================================

Name: ${full_name}
Email: ${email}
Phone: ${phone_number || "Not provided"}
Company/Organization: ${company_organization || "Not provided"}
Message: ${message || "Not provided"}

Submitted: ${new Date().toISOString()}

Customer's Intent: I want to start my AI automation journey
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@yourdomain.com",
        to: "meierkevin887@gmail.com",
        subject: `New AI Automation Lead - ${full_name}`,
        html: `<pre>${emailBody}</pre>`,
      }),
    });

    if (!response.ok) {
      console.error("Email send failed:", await response.text());
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
