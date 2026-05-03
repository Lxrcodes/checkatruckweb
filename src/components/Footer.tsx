import Link from "next/link";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CheckaTruck</span>
            </Link>
            <p className="mt-4 text-slate-400 max-w-md">
              Simple, affordable daily vehicle checks for commercial fleets.
              Stay DVSA compliant with digital walkaround inspections.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:admin@tipperconnect.co.uk"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  admin@tipperconnect.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://tipperconnect.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  TipperConnect
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
           
            <p className="text-slate-500 text-sm">
              Part of the{" "}
              <a
                href="https://tipperconnect.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400"
              >
                TipperConnect
              </a>
              {" "}family
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
