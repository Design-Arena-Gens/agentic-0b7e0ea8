export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-white font-bold">YA</span>
            <span className="text-lg font-semibold">YouTube Automation AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#testimonials" className="hover:text-zinc-900">Testimonials</a>
            <a href="#faqs" className="hover:text-zinc-900">FAQs</a>
          </nav>
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-zinc-800 focus:outline-none">Start Free</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
                Grow on YouTube 10x Faster with AI Automation
              </h1>
              <p className="mt-5 text-lg leading-7 text-zinc-600 max-w-xl">
                Save hours every week. Our AI optimizes scripts, generates thumbnails, schedules uploads, and tracks analytics?so you can focus on creating.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-zinc-800">
                  Start Free (No Credit Card)
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
                  See How It Works
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1">
                  <span>?</span>
                  <span>Automate the entire workflow</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1">
                  <span>??</span>
                  <span>Boost views with AI optimization</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1">
                  <span>??</span>
                  <span>Save 10+ hours/week</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_80px_-24px_rgba(0,0,0,0.25)]">
                <div className="grid grid-cols-2 gap-3">
                  <FeatureCard icon="??" title="AI Video SEO" desc="Titles, tags, and descriptions that rank." />
                  <FeatureCard icon="???" title="Thumbnails" desc="Eye-catching thumbnails in one click." />
                  <FeatureCard icon="??" title="Auto-Upload" desc="Publish to YouTube automatically." />
                  <FeatureCard icon="??" title="Smart Scheduling" desc="Post at the best time." />
                  <FeatureCard icon="??" title="Analytics" desc="Track CTR, watch time, and more." />
                  <FeatureCard icon="??" title="Collab Ready" desc="Roles, approvals, and workflows." />
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500">Mock UI preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">Automate your entire YouTube workflow</h2>
          <p className="mt-3 text-zinc-600">From idea to published video?AI handles the busywork, you focus on the content.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StepCard step="1" title="Optimize Video" desc="AI refines titles, descriptions, tags, and chapters based on trending keywords." />
          <StepCard step="2" title="Generate Thumbnails" desc="Auto-generate high-CTR thumbnails with A/B variants." />
          <StepCard step="3" title="Schedule & Upload" desc="Auto-upload drafts and schedule at peak times for your audience." />
          <StepCard step="4" title="Track Analytics" desc="Monitor CTR, retention, and growth with actionable insights." />
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white border-y border-zinc-200/70">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
          <ValueProp icon="?" title="Save Time" desc="Automate repetitive tasks and reclaim your week." />
          <ValueProp icon="??" title="Boost Views" desc="Use AI to improve titles, thumbnails, and SEO." />
          <ValueProp icon="??" title="Full Automation" desc="From upload to analytics, handled end-to-end." />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-600">Start free. Upgrade anytime as you grow.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PricingCard tier="Starter" price="$0" period="/mo" cta="Start Free" features={["5 video optimizations/mo","5 thumbnails/mo","Basic analytics"]} />
          <PricingCard tier="Pro" highlight price="$49" period="/mo" cta="Go Pro" features={["Unlimited optimizations","Unlimited thumbnails","Auto-upload & scheduling","Advanced analytics"]} />
          <PricingCard tier="Agency" price="$149" period="/mo" cta="Scale Up" features={["All Pro features","Multi-channel management","Team roles & approvals","Priority support"]} />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white border-y border-zinc-200/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">Creators growing faster with AI</h2>
            <p className="mt-3 text-zinc-600">Real results from busy channels just like yours.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Testimonial quote="Went from 2 videos/month to 8 with the same effort. CTR up 31%." name="Alex R." role="Tech YouTuber" />
            <Testimonial quote="Thumbnails and SEO are on autopilot now. Huge time saver." name="Mia K." role="Lifestyle Creator" />
            <Testimonial quote="Scheduling at peak times alone paid for Pro in a week." name="Daniel P." role="Gaming Channel" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">Frequently asked questions</h2>
          <p className="mt-3 text-zinc-600">Everything you need to know about getting started.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FAQ q="How does auto-uploading work?" a="Connect your YouTube account securely. We upload drafts and schedule based on your preferences." />
          <FAQ q="Do I keep control over my channel?" a="Yes. You approve everything. You can enable roles and approvals for your team." />
          <FAQ q="What about thumbnails?" a="Our generator produces multiple variants and suggests the highest-CTR options with A/B testing." />
          <FAQ q="Can I cancel anytime?" a="Absolutely. Free plan available. Upgrade or downgrade any time." />
          <FAQ q="Is my data secure?" a="We use industry-standard encryption and do not sell or train on your private content." />
          <FAQ q="Does it work for shorts?" a="Yes?optimization, scheduling, and analytics work for both long-form and shorts." />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <div className="absolute -top-20 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-500 to-lime-400 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950">Ready to automate your YouTube growth?</h2>
          <p className="mt-3 text-zinc-600">Start free today. Set up in minutes. No credit card required.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-8 py-3 text-sm font-medium shadow-sm hover:bg-zinc-800">
              Start Free
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-8 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>? {new Date().getFullYear()} YouTube Automation AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-800">Terms</a>
            <a href="#" className="hover:text-zinc-800">Privacy</a>
            <a href="#" className="hover:text-zinc-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="text-xl leading-none">{icon}</div>
        <div>
          <div className="font-medium text-zinc-900">{title}</div>
          <div className="text-sm text-zinc-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.15)]">
      <div className="inline-flex h-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-3 text-xs font-medium text-zinc-600">Step {step}</div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function ValueProp({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}

function PricingCard({
  tier,
  price,
  period,
  cta,
  features,
  highlight,
}: {
  tier: string;
  price: string;
  period: string;
  cta: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div className={`${highlight ? "ring-2 ring-zinc-900" : ""} rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_56px_-24px_rgba(0,0,0,0.2)]`}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-zinc-950">{tier}</h3>
        {highlight ? (
          <span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-medium text-white">Most Popular</span>
        ) : null}
      </div>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-zinc-950">{price}</span>
        <span className="text-sm text-zinc-600">{period}</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-zinc-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span>?</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800">
        {cta}
      </a>
    </div>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-6">
      <blockquote className="text-zinc-800">?{quote}?</blockquote>
      <figcaption className="mt-4 text-sm text-zinc-600">
        <span className="font-medium text-zinc-900">{name}</span> ? {role}
      </figcaption>
    </figure>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="font-medium text-zinc-950">{q}</div>
      <div className="mt-2 text-sm text-zinc-600">{a}</div>
    </div>
  );
}
