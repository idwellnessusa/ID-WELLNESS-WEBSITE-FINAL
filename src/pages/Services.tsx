import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
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
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-serif mb-6">Our Premium Services</h1>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Tailored treatments designed to enhance your natural beauty and ensure optimal oral health.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {servicesList.map((card, index) => (
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
  );
}
