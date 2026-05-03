import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClipboardCheck,
  Camera,
  AlertTriangle,
  LayoutDashboard,
  WifiOff,
  FileText,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Digital Daily Checks",
    description:
      "Guided checklists walk drivers through complete vehicle inspections on their phone. No more paper forms.",
  },
  {
    icon: Camera,
    title: "Photo Evidence",
    description:
      "Capture photos of defects, damage, or vehicle condition. Visual proof for every inspection.",
  },
  {
    icon: AlertTriangle,
    title: "Instant Defect Reporting",
    description:
      "Issues flagged immediately to managers. Know about problems before vehicles leave the yard.",
  },
  {
    icon: LayoutDashboard,
    title: "Fleet Dashboard",
    description:
      "View all vehicles, drivers, and check history in one place. Complete visibility across your fleet.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "No signal? No problem. Checks work without internet and sync automatically when back online.",
  },
  {
    icon: FileText,
    title: "Full Audit Trail",
    description:
      "Every check timestamped and stored. Ready for DVSA inspections and compliance audits.",
  },
];

const steps = [
  {
    step: "1",
    title: "Driver Opens the App",
    description:
      "Select the vehicle and start the daily walkaround check. Works on any smartphone.",
  },
  {
    step: "2",
    title: "Complete the Inspection",
    description:
      "Follow the guided checklist covering all DVSA requirements. Add photos where needed.",
  },
  {
    step: "3",
    title: "Submit and Go",
    description:
      "Sign off the check digitally. Defects are reported instantly, and records are stored securely.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-400 mb-6">
                <Shield className="h-4 w-4" />
                DVSA Compliant
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Daily walkaround checks,{" "}
                <span className="text-orange-500">done in minutes</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                Digital vehicle inspections for commercial fleets. Keep your drivers safe,
                your fleet compliant, and your paperwork in order.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.checkatruck.co.uk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-8 py-4 text-lg font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  See How It Works
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  No contracts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Everything you need for compliant daily checks
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Purpose-built for HGVs, tippers, and commercial vehicles. Simple tools
                that drivers actually want to use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-slate-800 border border-slate-700 p-8 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How CheckaTruck works
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Get started in minutes. No training required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500 to-slate-700" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-slate-800 border border-slate-700 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Built for drivers on the go
                  </h3>
                  <p className="mt-4 text-slate-400">
                    CheckaTruck is a Progressive Web App (PWA) that works like a native
                    app but installs instantly from your browser. No app store downloads,
                    no waiting for updates.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                      <Smartphone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      Works on any smartphone or tablet
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <WifiOff className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      Full offline support
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        DVSA-compliant checks in 10 minutes
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Smartphone className="h-16 w-16 text-orange-500 mx-auto" />
                      <p className="mt-4 text-slate-400">Mobile-first design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Simple, transparent pricing
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                No hidden fees. No long-term contracts. Just straightforward pricing
                that scales with your fleet.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="rounded-2xl bg-slate-800 border-2 border-orange-500 p-8 md:p-10">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Per Vehicle</h3>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-white">70p</span>
                    <span className="text-xl text-slate-400">/week</span>
                  </div>
                  <p className="mt-2 text-slate-400">per vehicle</p>
                </div>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Unlimited daily checks
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Unlimited drivers
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Photo uploads included
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Fleet management dashboard
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Offline capability
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Full audit trail & exports
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Email support
                  </li>
                </ul>

                <a
                  href="https://app.checkatruck.co.uk"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to simplify your daily checks?
              </h2>
              <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                Join fleet operators across the UK who have switched from paper to
                CheckaTruck. Get started in minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.checkatruck.co.uk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="mailto:admin@tipperconnect.co.uk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
