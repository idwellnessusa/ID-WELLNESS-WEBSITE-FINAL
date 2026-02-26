import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-serif mb-6">Contact Us</h1>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          We're here to answer your questions and help you schedule your next visit.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-brand-dark/5">
          <h2 className="text-3xl font-serif mb-8">Send us a message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-brand-dark">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light/50" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-brand-dark">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light/50" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-brand-dark">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light/50" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-brand-dark">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-gold transition-colors bg-brand-light/50" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-brand-gold hover:bg-brand-gold-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Info */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Visit Us</h3>
              <p className="text-brand-muted leading-relaxed">123 Wellness Blvd, Suite 100<br />Beverly Hills, CA 90210</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Call Us</h3>
              <p className="text-brand-muted leading-relaxed">(555) 123-4567<br />Mon-Fri, 9am - 6pm</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Email Us</h3>
              <p className="text-brand-muted leading-relaxed">hello@idwellnessclinic.com<br />We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
