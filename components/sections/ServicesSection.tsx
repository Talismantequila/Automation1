import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Brain,
  Workflow,
  Bot,
  BarChart3,
  Code2,
  Target,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI-Powered Automations',
    description: 'Streamline your workflow with smart AI solutions, no coding required. I design automations and tools that save time, reduce repetitive work, and give actionable insights tailored to your business',
    features: ['AI workflows for everyday tasks', 'Data insights without complexity', 'AI Assistants that improve productivity']
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Simplify your workflows and save time with smart automations. I set up systems that handle repetitive tasks so you can focus on what really matters.',
    features: ['Easy workflow setups', 'Automations for everyday tasks', 'Tools that scale with your needs']
  },
  {
    icon: Bot,
    title: 'Intelligent Chatbots',
    description: 'Create friendly AI assistants that handle questions and support your customers around the clock. Simple to set up, yet effective.',
    features: ['24/7 Support', 'Multi-Language', 'Context Aware']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Turn your data into insights you can actually use. I help you spot trends and make informed decisions without complex setups.',
    features: ['Understand your data easily', 'Spot trends and patterns', 'Get insights in real time']
  },
  {
    icon: Code2,
    title: 'Custom AI Solutions',
    description: 'Build AI tools tailored to your unique needs. Practical, straightforward, and designed to help you get results fast.',
    features: ['Solutions that fit your workflow', 'Cloud-friendly and lightweight', 'Scales as your needs grow']
  },
  {
    icon: Target,
    title: 'AI Consulting',
    description: 'Get simple, actionable guidance for using AI in your business. I help you plan what to automate, where to start, and how to get the most value.',
    features: ['Practical AI strategy', 'Step-by-step guidance', 'Focused on ROI and impact']
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          My Services
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered Solutions for
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Every Challenge
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          From concept to deployment, I deliver AI solutions that transform businesses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 backdrop-blur-sm p-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <service.icon className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
              {service.title}
            </h3>

            <p className="text-white/70 mb-4 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-white/50">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  {feature}
                </div>
              ))}
            </div>

            <Link href={`/case-studies#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="block">
              <Button variant="ghost" className="mt-4 text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 w-full group">
                Learn More
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
