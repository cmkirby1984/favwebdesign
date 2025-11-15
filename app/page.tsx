"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight">
            How developers build
            <br />
            <span className="text-posthog">better products</span>
          </h1>
          <p className="text-xl md:text-2xl text-darkblue/80 mb-10 max-w-3xl mx-auto">
            Product analytics, feature flags, session replay, experiments, and more.
            All in one platform. Built for engineers who ship fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-posthog hover:bg-[#E89D01] text-darkblue font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Get started - free forever
            </button>
            <button className="bg-darkblue hover:bg-darkblue/90 text-cream font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 hover:-translate-y-1 border-2 border-darkblue shadow-md">
              Talk to a human
            </button>
          </div>
          <p className="text-sm text-darkblue/60 mt-6">
            No credit card required • 1 million events/month free • Deploys in 5 minutes
          </p>
        </motion.div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 border-y border-darkblue/10 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm uppercase tracking-wider text-darkblue/60 mb-8"
          >
            Trusted by teams at
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {["Airbnb", "Spotify", "GitHub", "Netflix", "Stripe", "Shopify"].map(
              (company) => (
                <div
                  key={company}
                  className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer hover:scale-110 duration-300"
                >
                  <div className="text-2xl font-bold text-darkblue">{company}</div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Feature Section 1 - Image Left */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-darkblue/5 rounded-lg p-8 aspect-square flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <p className="text-darkblue/60 group-hover:text-darkblue transition-colors">Product Analytics Dashboard</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Analytics that don&apos;t require a PhD
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Track everything. Understand anything. Autocapture means you&apos;ll never say
                &ldquo;I wish we&apos;d tracked that&rdquo; again.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Autocapture every click, scroll, and rage-click",
                  "Funnels that actually make sense",
                  "Retention curves without the headaches",
                  "User paths (AKA see why users ghost you)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start group">
                    <span className="text-posthog mr-2 text-xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-lg group-hover:text-darkblue transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-darkblue/5 rounded-md p-4 border-l-4 border-posthog">
                <code className="text-sm text-darkblue/90">
                  posthog.capture(&apos;user_signed_up&apos;)
                </code>
                <p className="text-xs text-darkblue/60 mt-2">That&apos;s it. You&apos;re done.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Right */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ship features without the fear
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Deploy to prod on Friday. Test in production. Roll back instantly when
                things inevitably break. We won&apos;t judge.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Toggle features on/off in real-time",
                  "A/B test like your job depends on it",
                  "Gradual rollouts (0% → 100% at your pace)",
                  "Kill switches (for when you pushed on Friday)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start group">
                    <span className="text-posthog mr-2 text-xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-lg group-hover:text-darkblue transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-darkblue/5 rounded-md p-4 border-l-4 border-posthog">
                <code className="text-sm text-darkblue/90 block">
                  if (posthog.isFeatureEnabled(&apos;new-ui&apos;)) &#123;
                </code>
                <code className="text-sm text-darkblue/90 block pl-4">
                  {'//'} Ship it 🚀
                </code>
                <code className="text-sm text-darkblue/90 block">
                  &#125;
                </code>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg p-8 aspect-square flex items-center justify-center border-2 border-darkblue/10 shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <p className="text-darkblue/60 group-hover:text-darkblue transition-colors">Feature Flags Interface</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Image Left */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-darkblue/5 rounded-lg p-8 aspect-square flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
                  <p className="text-darkblue/60 group-hover:text-darkblue transition-colors">Session Recording Player</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Watch users break your UI in HD
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Session replay shows exactly where things went wrong. No more &ldquo;works on
                my machine&rdquo; excuses. We&apos;ve all been there.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Privacy-first (auto-redact sensitive data)",
                  "Console logs & network requests included",
                  "Skip inactivity (nobody has time for that)",
                  "Actually helpful error tracking",
                ].map((feature) => (
                  <li key={feature} className="flex items-start group">
                    <span className="text-posthog mr-2 text-xl group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-lg group-hover:text-darkblue transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-darkblue/5 rounded-md p-4 border-l-4 border-posthog">
                <p className="text-sm text-darkblue/90 italic">
                  &ldquo;I can&apos;t reproduce the bug&rdquo;
                </p>
                <p className="text-xs text-darkblue/60 mt-2">
                  — Things you&apos;ll never say again
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pricing that makes sense
            </h2>
            <p className="text-xl text-darkblue/80 max-w-2xl mx-auto">
              No per-seat pricing. No hidden fees. No &ldquo;contact sales&rdquo; unless you want to.
              Pay for events, not headcount. Revolutionary, we know.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                description: "For side projects and MVPs",
                features: [
                  "1M events/month (seriously)",
                  "1 year data retention",
                  "Unlimited team members",
                  "Community support (we&apos;re friendly)",
                ],
                cta: "Start building",
                highlighted: false,
              },
              {
                name: "Scale",
                price: "Usage-based",
                description: "For serious products",
                features: [
                  "$0.00045/event after free tier",
                  "Unlimited data retention",
                  "All features unlocked",
                  "Email & Slack support",
                ],
                cta: "Start free",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For when compliance matters",
                features: [
                  "Volume discounts (big ones)",
                  "SSO, SAML, & audit logs",
                  "SLA & dedicated support",
                  "MSA, DPA, you name it",
                ],
                cta: "Let&apos;s talk",
                highlighted: false,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-lg p-8 ${
                  plan.highlighted
                    ? "ring-4 ring-posthog transform scale-105 shadow-xl"
                    : "border-2 border-darkblue/10 shadow-md hover:shadow-lg transition-shadow"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-darkblue/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-posthog mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-md font-bold transition-all transform hover:scale-105 ${
                    plan.highlighted
                      ? "bg-posthog hover:bg-yellow-500 text-darkblue"
                      : "bg-darkblue hover:bg-darkblue/90 text-cream"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to build something people want?
            </h2>
            <p className="text-xl text-darkblue/80 mb-10">
              Join 30,000+ developers who ship faster with real data.
              <br />
              <span className="text-base">(Yes, this is a shameless CTA)</span>
            </p>
            <button className="bg-posthog hover:bg-[#E89D01] text-darkblue font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Start building for free →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-darkblue/10 py-12 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Analytics</li>
                <li>Feature Flags</li>
                <li>Session Recording</li>
                <li>A/B Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Tutorials</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-darkblue/60 text-sm">
            © 2024 PostHog Clone. Built with Next.js, Tailwind, and Framer Motion.
          </div>
        </div>
      </footer>
    </main>
  );
}
