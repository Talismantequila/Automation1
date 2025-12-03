'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ContactFormModal } from '@/components/ui/ContactFormModal';

export function CTASection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <ContactFormModal isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      <section className="container mx-auto px-6 py-24">
      <Card className="relative overflow-hidden bg-white/5 border-white/10 p-12 text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#D4AF37]">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging AI to transform their operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => setIsContactFormOpen(true)} className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold text-lg px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8">
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
      </section>
    </>
  );
}
