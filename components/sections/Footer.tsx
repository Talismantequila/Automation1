import { CircuitBoard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <CircuitBoard className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xl font-bold">NeuralSync</span>
          </div>
          <p className="text-white/60 text-sm">
            Building the future of business automation with AI
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">AI Development</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Automation</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
        © 2025 NeuralSync AI. All rights reserved.
      </div>
    </footer>
  );
}
