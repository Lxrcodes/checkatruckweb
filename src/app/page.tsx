import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import appScreenshot from "@/img/IMG_6604-left.png";
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
  Briefcase,
  FileText,
  Receipt,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    tier: "All plans",
    title: "DVSA-Compliant Daily Checks",
    description:
      "Guided walkarounds covering tyres, lights, brakes, bodywork, fuel and AdBlue. GPS location, reg plate photo and digital signature recorded at every check. MOT and PMI date tracking included.",
  },
  {
    icon: AlertTriangle,
    tier: "All plans",
    title: "Defect Management",
    description:
      "Defects are graded critical, major or minor. Vehicles can be marked Pass, Fail or Do-Not-Drive. Drivers must re-check before a failed vehicle returns to the road.",
  },
  {
    icon: LayoutDashboard,
    tier: "All plans",
    title: "Manager Dashboard & Audit Trail",
    description:
      "Full check history with reg plate photos and per-defect detail. Track open defects, monitor vehicle compliance and manage your drivers — all in one place.",
  },
  {
    icon: Briefcase,
    tier: "Manage & Control",
    title: "Job & Load Management",
    description:
      "Create and assign jobs with materials, load progress and collection-to-delivery tracking. Map collection and disposal locations. Monitor revenue by job from the dashboard.",
  },
  {
    icon: FileText,
    tier: "Manage & Control",
    title: "Digital Waste Transfer Notes",
    description:
      "Generate compliant WTNs on the job. DEFRA's Digital Waste Tracking mandate comes into force October 2026 — CheckATruck operators on Manage or Control are already ahead of it.",
  },
  {
    icon: Receipt,
    tier: "Control",
    title: "Invoicing & Online Payments",
    description:
      "Send professional invoices with VAT, share a public payment link, and accept card payments via Stripe. Money lands directly in your account — no third party in between.",
  },
];

const tierColour: Record<string, string> = {
  "All plans": "bg-slate-700 text-slate-300",
  "Manage & Control": "bg-orange-500/15 border border-orange-500/20 text-orange-400",
  "Control": "bg-orange-500/25 border border-orange-500/30 text-orange-300",
};

const steps = [
  {
    step: "1",
    title: "Set Up Your Fleet",
    description:
      "Add your vehicles and drivers. Our team configures your check templates to match your existing inspection sheets — free for every operator.",
  },
  {
    step: "2",
    title: "Run Your Operation",
    description:
      "Drivers complete walkaround checks on their phones. Managers assign jobs, track loads and monitor the whole fleet from one dashboard.",
  },
  {
    step: "3",
    title: "Stay Compliant and Get Paid",
    description:
      "Full DVSA audit trail always to hand. Digital WTNs ready for the DEFRA mandate. Professional invoices with Stripe-powered online payments.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-400 mb-6">
                <Shield className="h-4 w-4" />
                DVSA Compliant · HGV, Tipper, Grab &amp; Plant
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Fleet compliance and job management,{" "}
                <span className="text-orange-500">built for HGV operators</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                From the morning walkaround check to getting paid — CheckATruck covers the
                full operation. Start free, scale as you grow.
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
                  7-day free trial, no card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  No vehicle minimum
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  Free check template setup
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                From compliance to invoicing — all in one platform
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Built for HGV, tipper, grab and plant fleets. Simple tools
                that drivers actually use, and the commercial tools operators actually need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-slate-800 border border-slate-700 p-8 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tierColour[feature.tier]}`}
                    >
                      {feature.tier}
                    </span>
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

        {/* DEFRA callout banner */}
        <section className="py-10 bg-orange-500/8 border-y border-orange-500/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30">
                <AlertTriangle className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="text-white font-semibold">
                  DEFRA Digital Waste Tracking mandate — October 2026
                </p>
                <p className="mt-1 text-slate-300 text-sm max-w-3xl">
                  DEFRA is making digital Waste Transfer Notes a legal requirement for waste
                  carriers from October 2026. CheckATruck operators on the Manage or Control
                  plan already generate compliant WTNs digitally. Start now and be ready
                  before the deadline — no last-minute scramble.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How CheckATruck works
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Set up in a day. No training required. No call centre — direct access to
                the team who built it.
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
                    Works on any device, anywhere
                  </h3>
                  <p className="mt-4 text-slate-400">
                    CheckATruck installs instantly from the browser — no app store, no
                    updates to chase. It works like a native app on any smartphone or tablet.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                      <Smartphone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      Any smartphone or tablet — iOS or Android
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
                  <Image
                    src={appScreenshot}
                    alt="CheckATruck app on mobile"
                    className="rounded-xl w-1/2 h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customisation */}
        <section className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-400 mb-6">
                  <Wrench className="h-4 w-4" />
                  Built around your fleet
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Check templates set up free for your vehicles
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  Every operator gets their inspection forms configured before going live —
                  at no extra cost. Send us your current paper sheets and we&apos;ll set
                  everything up to match.
                </p>
                <p className="mt-4 text-slate-400">
                  You deal directly with the development team. No call centre, no support
                  tickets that go nowhere.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-800 border border-slate-700 p-8">
                <ul className="space-y-5">
                  {[
                    "Free check template setup for every new operator",
                    "Configured to your specific vehicle types — HGV, tipper, grab, plant",
                    "Matched to your existing inspection sheets",
                    "Direct access to the development team, not a call centre",
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

        {/* Pricing */}
        <PricingSection />

        {/* CTA */}
        <section className="py-20 md:py-32 bg-slate-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to get your fleet on CheckATruck?
              </h2>
              <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
                7-day free trial, no card required. No vehicle minimum. Our team sets up
                your check templates before you go live.
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
