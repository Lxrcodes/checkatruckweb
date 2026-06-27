"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

type Period = "annual" | "monthly";

const plans = [
  {
    id: "comply",
    name: "Comply",
    tagline: "The essentials of staying legally compliant.",
    annual: {
      displayPrice: "£36.40",
      unit: "per vehicle per year + VAT",
      equivalence: "70p per vehicle per week",
    },
    monthly: {
      displayPrice: "£3.55",
      unit: "per vehicle per month + VAT",
    },
    features: [
      "DVSA-compliant daily walkaround checks",
      "Critical, major and minor defect severity",
      "Pass / Fail / Do-Not-Drive vehicle status",
      "GPS location and digital signature per check",
      "MOT and PMI date tracking",
      "Manager dashboard and full audit trail",
      "Offline support with auto-sync",
      "Analytics included",
    ],
    featured: false,
  },
  {
    id: "manage",
    name: "Manage",
    tagline: "Everything in Comply, plus tools to run jobs day to day.",
    annual: {
      displayPrice: "£78.00",
      unit: "per vehicle per year + VAT",
      equivalence: "£1.50 per vehicle per week",
    },
    monthly: {
      displayPrice: "£7.65",
      unit: "per vehicle per month + VAT",
    },
    features: [
      "Everything in Comply",
      "Job management and assignment",
      "Load tracking with materials and progress",
      "Digital Waste Transfer Notes",
      "Collection and disposal location mapping",
      "Job-based revenue tracking",
    ],
    featured: true,
  },
  {
    id: "control",
    name: "Control",
    tagline: "Everything in Manage, plus the commercial side.",
    annual: {
      displayPrice: "£130.00",
      unit: "per vehicle per year + VAT",
      equivalence: "£2.50 per vehicle per week",
    },
    monthly: {
      displayPrice: "£12.70",
      unit: "per vehicle per month + VAT",
    },
    features: [
      "Everything in Manage",
      "Professional invoicing with VAT calculation",
      "Shareable public invoice links",
      "Email invoice delivery",
      "Online card payments via Stripe",
      "Client management",
    ],
    featured: false,
  },
];

const volumeDiscounts = [
  { size: "1–10 vehicles", saving: "Standard rate", highlight: false },
  { size: "11–25 vehicles", saving: "10% off", highlight: true },
  { size: "26–50 vehicles", saving: "15% off", highlight: true },
  { size: "51+ vehicles", saving: "20% off", highlight: true },
];

export default function PricingSection() {
  const [period, setPeriod] = useState<Period>("annual");

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            No vehicle minimum. No hidden fees. 7-day free trial on every plan — no card required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center rounded-xl bg-slate-800 border border-slate-700 p-1 gap-1">
            <button
              type="button"
              onClick={() => setPeriod("annual")}
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                period === "annual"
                  ? "bg-orange-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                  period === "annual"
                    ? "bg-white/20 text-white"
                    : "bg-orange-500/15 border border-orange-500/30 text-orange-400"
                }`}
              >
                Save 15%
              </span>
            </button>
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                period === "monthly"
                  ? "bg-orange-500 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Flex
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mb-10">
          {period === "annual"
            ? "12-month subscription, billed upfront. Best value."
            : "Pay month to month. Cancel anytime."}
        </p>

        {/* Plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => {
            const pricing = period === "annual" ? plan.annual : plan.monthly;
            const equivalence = period === "annual" ? plan.annual.equivalence : undefined;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl bg-slate-800 p-8 ${
                  plan.featured
                    ? "border-2 border-orange-500 relative"
                    : "border border-slate-700"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>

                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{pricing.displayPrice}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{pricing.unit}</p>
                {equivalence && (
                  <p className="mt-1 text-xs text-orange-400">{equivalence}</p>
                )}

                <p className="mt-4 text-sm text-slate-400">{plan.tagline}</p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.checkatruck.co.uk"
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors ${
                    plan.featured
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-slate-600 text-white hover:bg-slate-700"
                  }`}
                >
                  Start Free Trial
                  {plan.featured && <ArrowRight className="h-4 w-4" />}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          All prices exclude VAT.
          {period === "monthly" && (
            <> Volume discounts are available on annual plans.</>
          )}
        </p>

        {/* Volume discounts — annual only */}
        {period === "annual" && (
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              Volume Discounts
            </h3>
            <p className="text-center text-sm text-slate-400 mb-8">
              Annual plans only. The more vehicles you add, the less you pay per vehicle.
            </p>
            <div className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="px-6 py-4 text-left font-medium text-slate-400">
                      Fleet size
                    </th>
                    <th className="px-6 py-4 text-right font-medium text-slate-400">
                      Discount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {volumeDiscounts.map((row, i) => (
                    <tr
                      key={row.size}
                      className={i < volumeDiscounts.length - 1 ? "border-b border-slate-700" : ""}
                    >
                      <td className="px-6 py-4 text-white">{row.size}</td>
                      <td
                        className={`px-6 py-4 text-right font-medium ${
                          row.highlight ? "text-orange-400" : "text-slate-400"
                        }`}
                      >
                        {row.saving}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
