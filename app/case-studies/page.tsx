'use client';

import { useEffect } from 'react';
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
   
    category: 'AI-Powered Automations',
    description: 'Your routine tasks run automatically — emails, reminders, notes, updates, follow-ups. What used to eat hours every week becomes a background process you never think about. This gives you more output with less effort and creates an immediate ROI. Every task that no longer needs your time frees you to focus on work that generates revenue.',
    results: ['20–40% reduction in repetitive admin work', '3–8 hours saved per week', '2–3× more output without hiring'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
   
    category: 'Intelligent Chatbots',
    description: 'A friendly AI assistant handles customer questions, books appointments, collects details, and responds instantly — day and night. This reduces support workload, increases conversion rates, and makes your business feel more professional. If the bot closes even one extra customer per month, it already generates a big positive ROI.',
    results: ['Instant 24/7 replies for basic inquiries', '25–40% less support workload', '5–15% increase in booked calls or conversions'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
  
    category: 'Process Automation',
    description: 'Your entire workflow becomes predictable and hands-off. Information moves between tools, steps complete themselves, and errors disappear.This means lower operating costs and higher capacity. Even a simple automation that saves 10 minutes per task can save dozens of hours per month — more than enough to pay for itself many times over.',
    results:['40–70% of routine steps automated', '10–20% lower operating overhead', '10–20+ hours saved per month'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    
    category: 'Predictive Analytics',
    description: 'Your data becomes a decision-making tool. You see patterns early, understand customer behavior, and know what’s working before the competition does. Better decisions directly increase profit, spotting a trend one month earlier or correcting a mistake faster can save thousands. It’s like having a simple dashboard that quietly boosts your business intelligence.',
    results: ['Faster decisions via simple automated reports (10–20%)', '5–15% higher campaign efficiency from early insights', 'Reduced guesswork in everyday operations'],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
   
    category: 'Custom AI Solutions',
    description: 'A lightweight tool created specifically for your workflow — automating the exact problem you want solved. It fits your business perfectly because it’s designed around the way you operate. This delivers fast results and real financial value. a small custom AI saving even one hour per week can repay itself instantly and continue producing ROI every month.',
    results:['1–3 hours saved per week per custom tool', 'Simple workflows automated with 50–80% less manual effort', 'Fast ROI since builds rely on low-code systems'],
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    
    category: 'AI Consulting',
    description: 'Clear guidance on what to automate, where to start, and how to get results without wasting money. You get a realistic plan, tailored to your current tools, goals, and budget. This avoids trial-and-error and ensures every step you take leads to measurable impact. With the right roadmap, even small AI changes can create outsized returns.',
    results: ['Clear savings by avoiding wrong tools (10–30%)', '2× faster setup of basic automations', 'Immediate impact with low-cost, low-risk implementations'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function CaseStudies() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="relative z-10">
        <Navigation />

        <section className="container mx-auto px-6 pt-20 pb-12">
          <Link href="/">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16">
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Real Results from
              <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                Real Projects
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how I've helped businesses transform their operations with AI automation
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="mb-12 max-w-2xl mx-auto">
            <Card className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                    Become the first case study and get your business featured here. Share your success, improve SEO with a link, and let others see that you are at the forefront of innovation.
                  </span>
                </h2>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold mt-4">
                  Get Your Case Study
                </Button>
              </div>
            </Card>
          </div>

          <section className="container mx-auto px-6 pt-20 pb-12">
            <div className="text-center mb-16">
              <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
                My Services explained
              </Badge>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-white">AI Powered Solutions</span>
                <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                  Explained
                </span>
              </h2>

            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                id={study.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden scroll-mt-24"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[#D4AF37]/90 text-[#0A0A0A]">
                    {study.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {study.category}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
