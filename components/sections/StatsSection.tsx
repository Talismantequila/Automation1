import { Card } from '@/components/ui/card';
import { Zap, Target, Rocket, BarChart3 } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">10x</div>
          <div className="text-white/70">Productivity Increase</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Target className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">85%</div>
          <div className="text-white/70">Cost Reduction</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Rocket className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">2 days</div>
          <div className="text-white/70">Average Deployment</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <BarChart3 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">250%</div>
          <div className="text-white/70">ROI Average</div>
        </Card>
      </div>
    </section>
  );
}
