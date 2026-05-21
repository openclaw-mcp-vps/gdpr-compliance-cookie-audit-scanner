export default function Home() {
  const faqs = [
    {
      q: "What does the scanner detect?",
      a: "It crawls your site to identify tracking cookies set before consent, missing or broken consent banners, absent cookie policies, and third-party scripts that drop non-essential cookies without user approval."
    },
    {
      q: "Do I need technical knowledge to use it?",
      a: "No. Enter your website URL, run the scan, and receive a plain-English compliance report with step-by-step fix recommendations you can hand directly to your developer."
    },
    {
      q: "Is this suitable for agencies managing multiple clients?",
      a: "Yes. The dashboard lets you manage unlimited scans across multiple domains, schedule recurring audits, and export white-label PDF reports for your clients."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan websites for{" "}
          <span className="text-[#58a6ff]">GDPR cookie violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically crawl any website to detect non-compliant cookies, missing consent banners, and rogue tracking scripts. Get a detailed report with actionable fixes in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Scanning — $14/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🍪", title: "Cookie Detection", desc: "Identifies all cookies set before and after consent, flagging violations automatically." },
          { icon: "🛡️", title: "Banner Analysis", desc: "Checks for compliant consent banners, opt-out mechanisms, and cookie policy links." },
          { icon: "📄", title: "Compliance Reports", desc: "Generates detailed PDF reports with severity ratings and prioritised fix recommendations." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited website scans",
              "Full cookie & banner analysis",
              "PDF compliance reports",
              "Scheduled recurring audits",
              "Multi-domain dashboard",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} GDPR Cookie Audit Scanner. All rights reserved.
      </footer>
    </main>
  );
}
