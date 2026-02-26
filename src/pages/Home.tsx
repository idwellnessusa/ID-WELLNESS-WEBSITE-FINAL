import { ArrowRight, Star, ShieldCheck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Dental Medspa</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] mb-6">
              Where Advanced Dentistry Meets <span className="text-brand-gold italic">Aesthetic Wellness.</span>
            </h1>
            <p className="text-lg text-brand-muted mb-10 leading-relaxed max-w-lg">
              Experience a new standard of care. ID Wellness Clinic combines state-of-the-art dental procedures with premium medspa treatments in a luxurious, relaxing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2">
                Book an Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#services" className="bg-transparent border border-brand-dark/20 hover:border-brand-dark text-brand-dark px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img
                src="https://loremflickr.com/800/1000/spa,clinic"
                alt="Luxurious clinic interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-multiply"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://loremflickr.com/100/100/face,smile?lock=${i}`} alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
              <p className="text-sm font-medium">Trusted by 1,000+ patients in the area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-y border-brand-dark/5 bg-white py-10 mt-12 lg:mt-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-dark/5">
          {[
            { icon: Star, title: '5-Star Rated', desc: 'Consistently highly rated by our patients.' },
            { icon: ShieldCheck, title: 'Expert Medical Team', desc: 'Board-certified specialists & aestheticians.' },
            { icon: Calendar, title: 'Flexible Payment Plans', desc: 'Making premium care accessible to you.' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 pt-8 md:pt-0 md:px-8 first:pt-0 first:px-0">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-brand-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">Our Premium Services</h2>
            <p className="text-brand-muted text-lg">
              Tailored treatments designed to enhance your natural beauty and ensure optimal oral health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 'dental',
                title: 'Dental Page',
                description: 'Achieve the perfect smile with our advanced cosmetic dentistry services, utilizing the latest technology for painless, stunning results.',
                image: 'https://loremflickr.com/800/500/dentist,smile',
                services: ['Porcelain Veneers', 'Professional Teeth Whitening', 'Invisalign Clear Aligners', 'Smile Makeovers'],
                buttonText: 'Explore Dental Services'
              },
              {
                id: 'med-spa',
                title: 'Med Spa Page',
                description: 'Rejuvenate your skin and restore your youthful glow with our non-invasive, medical-grade aesthetic treatments.',
                image: 'https://loremflickr.com/800/500/spa,facial',
                services: ['Botox & Neuromodulators', 'Dermal Fillers', 'Laser Skin Rejuvenation', 'Medical Grade Facials'],
                buttonText: 'Explore Med Spa Services'
              },
              {
                id: 'physical-therapy',
                title: 'Physical Therapy Page',
                description: 'Recover faster and improve your mobility with our personalized physical therapy programs tailored to your needs.',
                image: 'https://loremflickr.com/800/500/massage,therapy',
                services: ['Sports Injury Rehabilitation', 'Post-Surgical Recovery', 'Manual Therapy', 'Posture Correction'],
                buttonText: 'Explore Physical Therapy'
              },
              {
                id: 'facial-treatments',
                title: 'Facial Treatments Page',
                description: 'Experience luxury and deep cleansing with our specialized facial treatments designed for all skin types.',
                image: 'https://loremflickr.com/800/500/skincare,mask',
                services: ['HydraFacial', 'Chemical Peels', 'Microneedling', 'Dermaplaning'],
                buttonText: 'Explore Facial Treatments'
              }
            ].map((card, index) => (
              <div key={index} className="group rounded-[2rem] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-dark/5 flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif mb-4">{card.title}</h3>
                  <p className="text-brand-muted mb-8 line-clamp-2">
                    {card.description}
                  </p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {card.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/service/${card.id}`} className="w-full py-4 rounded-full border border-brand-dark/20 hover:border-brand-gold hover:text-brand-gold transition-colors font-medium flex items-center justify-center gap-2 mt-auto">
                    {card.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
