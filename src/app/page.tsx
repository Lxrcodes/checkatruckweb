import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClipboardCheck,
  AlertTriangle,
  LayoutDashboard,
  WifiOff,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Shield,
  Clock,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Complete Vehicle Inspections",
    description:
      "Guided walkarounds covering tyres, lights, brakes, bodywork, fuel, and AdBlue levels. GPS location, reg plate photo, and digital signature recorded at every check.",
  },
  {
    icon: Shield,
    title: "DVSA Compliance Built In",
    description:
      "Timestamped records drivers can show at a DVSA roadside stop. Full check history ready for managers to present at site inspections. One check per driver per vehicle per day — no duplicates.",
  },
  {
    icon: AlertTriangle,
    title: "Defect Management",
    description:
      "Defects are logged automatically when a check item fails. Workshop marks them resolved, and drivers must re-check the vehicle before it goes back on the road.",
  },
  {
    icon: LayoutDashboard,
    title: "Manager Dashboard",
    description:
      "Full check history with reg plate photos and per-defect details. Separate defects view, vehicle management, and driver management all in one place.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "Checks work without internet and sync automatically when back online. A completed check survives logout, app close, and view switching — nothing gets lost.",
  },
  {
    icon: Smartphone,
    title: "Easy to Get Started",
    description:
      "In-app onboarding walks you through a demo check before going live. 7-day free trial with Stripe-powered billing — no charge until your trial ends.",
  },
];

const steps = [
  {
    step: "1",
    title: "Try the Demo",
    description:
      "Complete an in-app demo check during onboarding so you see exactly how CheckaTruck works before going live with your fleet.",
  },
  {
    step: "2",
    title: "Complete the Inspection",
    description:
      "Drivers follow the guided walkaround on their phone. GPS location is recorded, photos added, and the check signed off digitally.",
  },
  {
    step: "3",
    title: "Managers Stay in Control",
    description:
      "Review check history, track open defects, and ensure every vehicle has been inspected — all from the manager dashboard.",
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
                  Start Free Trial
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
                  7-day free trial
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
                      Offline support — checks sync when back online
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      Completed checks survive logout and app close
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

        {/* Customisation Section */}
        <section className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-400 mb-6">
                  <Wrench className="h-4 w-4" />
                  Built around your fleet
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Customised to your vehicles and your checks
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Our development team works closely with every new customer to configure
                  the inspection forms around their specific vehicles and existing check
                  processes.
                </p>
                <p className="mt-4 text-slate-400">
                  If your vehicles aren&apos;t already in the system, just send us a copy of
                  your current vehicle inspection sheets — we&apos;ll set everything up before
                  you go live.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-8">
                <ul className="space-y-5">
                  {[
                    "Inspection areas tailored to your vehicle types",
                    "Check items configured to match your existing forms",
                    "Direct support from the development team during setup",
                    "Go live with checks that actually match your fleet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-32">
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 text-sm text-orange-400 mb-4">
                    7-day free trial — no charge until trial ends
                  </div>
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
                    Photo uploads — reg plates and defects
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    GPS location recording
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Manager dashboard & defects view
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    Offline support with auto-sync
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    DVSA-ready check history & audit trail
                  </li>
                </ul>

                <a
                  href="https://app.checkatruck.co.uk"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-4 text-center text-sm text-slate-500">
                  Powered by Stripe. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to simplify your daily checks?
              </h2>
              <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                Join fleet operators across the UK who have switched from paper to
                CheckaTruck. Start your free trial today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.checkatruck.co.uk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Start Free Trial
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
