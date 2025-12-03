import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'I dive deep into your business to identify the optimal automation opportunities and relevant AI use cases.'
  },
  {
    number: '02',
    title: 'Solution Design & Blueprint',
    description: 'I architect a tailored AI automation solution designed precisely to meet your specific goals and requirements.'
  },
  {
    number: '03',
    title: 'Development & Optimization',
    description: 'I build and refine the automation, applying industry-leading frameworks and current best practices for robust performance.'
  },
  {
    number: '04',
    title: 'Deployment & Growth',
    description: 'I ensure secure implementation and configure the solution to scale seamlessly as your business evolves.'
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          My Process
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          From Idea to
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Implementation
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="relative bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFEB3B] rounded-full flex items-center justify-center mb-4 text-xl font-bold text-[#0A0A0A]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
