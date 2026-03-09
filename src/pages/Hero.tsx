export default function Hero() {
  return (
    <div className="bg-[#0F0F1B] text-white min-h-screen flex flex-col">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-purple-400">
          FinPilot AI
        </h1>

        <div className="flex gap-8 text-gray-300">

          <a href="#" className="hover:text-white">Home</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#policy" className="hover:text-white">Policy</a>

        </div>

        <div className="flex gap-4">

          <a
            href="/login"
            className="px-5 py-2 border border-gray-600 rounded-lg hover:border-white"
          >
            Login
          </a>

          <a
            href="/signup"
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
          >
            Get Started
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        {/* purple gradient glow */}
        <div className="absolute w-[700px] h-[700px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <h1 className="text-6xl font-bold mb-8">
          FinPilot AI
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-12">
          Your AI powered financial assistant. Analyze stocks, calculate EMI,
          evaluate ROI, and make smarter investment decisions with AI.
        </p>

        <div className="flex gap-6">

          <a
            href="/signup"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg"
          >
            Start Free
          </a>

          <a
            href="/login"
            className="px-8 py-3 border border-gray-600 rounded-lg hover:border-white"
          >
            Login
          </a>

        </div>

      </section>

      {/* FEATURES */}

      <section id="features" className="py-24 px-10 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#1A1A2E] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              📈 Stock Analysis
            </h3>
            <p className="text-gray-400">
              Get real time stock insights and price analysis powered by AI.
            </p>
          </div>

          <div className="bg-[#1A1A2E] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              💰 Investment Advisor
            </h3>
            <p className="text-gray-400">
              Ask AI about SIP, FD, mutual funds and investment strategies.
            </p>
          </div>

          <div className="bg-[#1A1A2E] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              🧮 Financial Tools
            </h3>
            <p className="text-gray-400">
              Calculate EMI, ROI and financial projections instantly.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-400 mb-4">
          Have questions or feedback? Reach out to us anytime.
        </p>

        <p className="text-purple-400">
          support@finpilot.ai
        </p>

      </section>

      {/* FOOTER */}

      <footer
        id="policy"
        className="border-t border-gray-800 py-10 px-10 text-gray-400"
      >

        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>

            <h3 className="text-lg font-semibold text-white mb-2">
              FinPilot AI
            </h3>

            <p className="max-w-sm">
              AI powered financial intelligence platform helping users
              make smarter financial decisions.
            </p>

          </div>

          <div className="flex gap-10">

            <div>
              <h4 className="text-white mb-3">Product</h4>
              <p>Features</p>
              <p>Updates</p>
              <p>Pricing</p>
            </div>

            <div>
              <h4 className="text-white mb-3">Company</h4>
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>

            <div>
              <h4 className="text-white mb-3">Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>

          </div>

        </div>

        <div className="mt-10 text-center text-gray-500">
          © 2026 FinPilot AI. All rights reserved.
        </div>

      </footer>

    </div>
  );
}