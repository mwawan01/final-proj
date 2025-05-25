import { useEffect } from 'react';

export default function VirtualAssistantAgency() {
  useEffect(() => {
    document.title = "NovaAssist™ | Virtual Assistants That Scale With You";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <header className="max-w-6xl mx-auto flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold">NovaAssist™</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">What We Do</a>
          <a href="#clients" className="hover:underline">Clients</a>
          <a href="#join" className="hover:underline">Join Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center mt-16" id="hero">
        <h2 className="text-5xl font-bold mb-4">Scale Smarter with NovaAssist™</h2>
        <p className="text-lg text-gray-700 mb-6">AI-powered virtual assistants trusted by elite businesses across the U.S. to save time, follow leads, and grow faster.</p>
        <a href="https://calendly.com/yourlink/va-consult" target="_blank" className="bg-black text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition">Book a Free 10-Min Call</a>
      </section>

      <section className="mt-24 max-w-6xl mx-auto text-center" id="clients">
        <h3 className="text-3xl font-bold mb-8">Trusted by High-Performing Teams</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <p className="font-semibold">🏘️ Everstone Realty</p>
            <p className="text-sm text-gray-600">Luxury listings, CRM & calendar support</p>
          </div>
          <div>
            <p className="font-semibold">🦷 Luxe Dental Group</p>
            <p className="text-sm text-gray-600">Scheduling & patient coordination</p>
          </div>
          <div>
            <p className="font-semibold">⚖️ Atlas Law Group</p>
            <p className="text-sm text-gray-600">Case file prep & legal client outreach</p>
          </div>
          <div>
            <p className="font-semibold">🧴 Radiant Skin Labs</p>
            <p className="text-sm text-gray-600">Front desk & Instagram booking</p>
          </div>
          <div>
            <p className="font-semibold">📦 Clearstone Brands</p>
            <p className="text-sm text-gray-600">Product listing & customer service</p>
          </div>
          <div>
            <p className="font-semibold">🧾 ZenScale Financial</p>
            <p className="text-sm text-gray-600">Admin + calendar for consulting firm</p>
          </div>
        </div>
      </section>

      <section className="mt-32 max-w-4xl mx-auto" id="about">
        <h3 className="text-3xl font-semibold mb-4">About NovaAssist</h3>
        <p className="text-gray-700 text-lg">We're on a mission to redefine support. NovaAssist provides elite virtual assistants trained in communication, CRM, content, admin, and AI workflows. Our goal is to help professionals focus on what matters while we handle the rest.</p>
      </section>

      <section className="mt-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-10" id="services">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h4 className="text-xl font-semibold mb-2">Admin & Inbox Management</h4>
          <p className="text-gray-600">Scheduling, inbox cleanup, calendar control — handled with care and class.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h4 className="text-xl font-semibold mb-2">Lead Generation & CRM</h4>
          <p className="text-gray-600">No more dropped leads. We manage outreach, CRMs, and smart follow-ups.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h4 className="text-xl font-semibold mb-2">Social & Content Support</h4>
          <p className="text-gray-600">VA-managed posts, DMs, and engagement so your brand stays active & clean.</p>
        </div>
      </section>

      <section className="mt-32 max-w-4xl mx-auto text-center" id="join">
        <h3 className="text-3xl font-bold mb-4">Join NovaAssist</h3>
        <p className="mb-6 text-gray-600">We're hiring virtual assistants, sales closers, and client success reps. Help us build the future of business support.</p>
        <a href="mailto:join@workwithnova.com" className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow hover:bg-blue-700 transition">Apply Now</a>
      </section>

      <section className="mt-24 max-w-4xl mx-auto text-center" id="contact">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="text-gray-600 mb-4">Have questions or want to partner? Reach out anytime.</p>
        <a href="mailto:info@workwithnova.com" className="text-blue-600 underline">info@workwithnova.com</a>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} NovaAssist™. All rights reserved.</p>
      </footer>
    </div>
  );
}
