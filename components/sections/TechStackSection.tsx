import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu } from 'lucide-react';

const technologies = [
  { name: 'GPT 5', category: 'LLM' },
  { name: 'Grok 4.0', category: 'AI Model' },
  { name: 'Perplexity Pro', category: 'AI Search' },
  { name: 'Bolt', category: 'Development' },
  { name: 'N8N', category: 'Automation' },
  { name: 'Make', category: 'Workflow' },
  { name: 'Voiceflow', category: 'Conversational AI' },
  { name: 'Supabase', category: 'Database' },
];

export function TechStackSection() {
  return (
    <section id="tech" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          Technology Stack
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Built with
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Cutting-Edge Tech
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center group hover:scale-105"
          >
            <Cpu className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 group-hover:rotate-180 transition-transform duration-500" />
            <div className="font-bold text-white mb-1">{tech.name}</div>
            <div className="text-xs text-white/50">{tech.category}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
