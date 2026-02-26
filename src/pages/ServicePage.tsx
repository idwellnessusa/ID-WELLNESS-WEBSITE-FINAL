import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';

const servicesData: Record<string, any> = {
  'dental': {
    title: 'Dental Aesthetics',
    description: 'Achieve the perfect smile with our advanced cosmetic dentistry services, utilizing the latest technology for painless, stunning results.',
    image: 'https://loremflickr.com/1920/1080/dentist,clinic',
    services: [
      { name: 'Porcelain Veneers', image: 'https://loremflickr.com/600/400/teeth,smile?lock=1' },
      { name: 'Professional Teeth Whitening', image: 'https://loremflickr.com/600/400/teeth,whitening' },
      { name: 'Invisalign Clear Aligners', image: 'https://loremflickr.com/600/400/braces,smile' },
      { name: 'Smile Makeovers', image: 'https://loremflickr.com/600/400/smile,perfect' },
      { name: 'Dental Implants', image: 'https://loremflickr.com/600/400/dentist,implant' },
      { name: 'Routine Cleanings', image: 'https://loremflickr.com/600/400/dentist,cleaning' }
    ],
    longDescription: 'Our dental aesthetics team is dedicated to giving you the smile of your dreams. We use cutting-edge technology and minimally invasive techniques to ensure your comfort and deliver exceptional, natural-looking results. From simple whitening to complete smile makeovers, we tailor every treatment to your unique facial structure and aesthetic goals.'
  },
  'med-spa': {
    title: 'Med Spa Treatments',
    description: 'Rejuvenate your skin and restore your youthful glow with our non-invasive, medical-grade aesthetic treatments.',
    image: 'https://loremflickr.com/1920/1080/spa,laser',
    services: [
      { name: 'Botox & Neuromodulators', image: 'https://loremflickr.com/600/400/botox,face' },
      { name: 'Dermal Fillers', image: 'https://loremflickr.com/600/400/lips,filler' },
      { name: 'Laser Skin Rejuvenation', image: 'https://loremflickr.com/600/400/laser,skincare' },
      { name: 'Medical Grade Facials', image: 'https://loremflickr.com/600/400/facial,spa' },
      { name: 'Body Contouring', image: 'https://loremflickr.com/600/400/body,spa' },
      { name: 'IV Therapy', image: 'https://loremflickr.com/600/400/iv,therapy' }
    ],
    longDescription: 'Experience the ultimate in skin rejuvenation. Our med spa offers a range of treatments designed to combat signs of aging, improve skin texture, and restore a radiant, youthful complexion. Our board-certified specialists use only the highest quality products to ensure safe, effective, and beautiful outcomes.'
  },
  'physical-therapy': {
    title: 'Physical Therapy',
    description: 'Recover faster and improve your mobility with our personalized physical therapy programs tailored to your needs.',
    image: 'https://loremflickr.com/1920/1080/physical,therapy',
    services: [
      { name: 'Sports Injury Rehabilitation', image: 'https://loremflickr.com/600/400/sports,injury' },
      { name: 'Post-Surgical Recovery', image: 'https://loremflickr.com/600/400/rehabilitation,therapy' },
      { name: 'Manual Therapy', image: 'https://loremflickr.com/600/400/massage,therapist' },
      { name: 'Posture Correction', image: 'https://loremflickr.com/600/400/posture,spine' },
      { name: 'Dry Needling', image: 'https://loremflickr.com/600/400/acupuncture,needle' },
      { name: 'Kinesio Taping', image: 'https://loremflickr.com/600/400/kinesio,tape' }
    ],
    longDescription: 'Our expert physical therapists work with you one-on-one to develop a customized treatment plan. Whether you are recovering from surgery, managing a chronic condition, or rehabilitating a sports injury, we are here to help you regain optimal function. We focus on treating the root cause of your pain, not just the symptoms.'
  },
  'facial-treatments': {
    title: 'Facial Treatments',
    description: 'Experience luxury and deep cleansing with our specialized facial treatments designed for all skin types.',
    image: 'https://loremflickr.com/1920/1080/skincare,mask',
    services: [
      { name: 'HydraFacial', image: 'https://loremflickr.com/600/400/hydrafacial,spa' },
      { name: 'Chemical Peels', image: 'https://loremflickr.com/600/400/chemical,peel' },
      { name: 'Microneedling', image: 'https://loremflickr.com/600/400/microneedling,face' },
      { name: 'Dermaplaning', image: 'https://loremflickr.com/600/400/dermaplaning,spa' },
      { name: 'LED Light Therapy', image: 'https://loremflickr.com/600/400/led,therapy' },
      { name: 'Customized Masks', image: 'https://loremflickr.com/600/400/clay,mask' }
    ],
    longDescription: 'Pamper your skin with our luxurious facial treatments. We customize each session to address your specific skin concerns, leaving your complexion refreshed, hydrated, and glowing. Our estheticians analyze your skin type and recommend the perfect combination of exfoliation, extraction, and nourishment.'
  }
};

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="pt-48 pb-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
        <Link to="/" className="text-brand-gold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <Link to="/#services" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden relative shadow-lg">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-8 lg:p-16">
            <h1 className="text-5xl lg:text-7xl font-serif text-white">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-serif mb-6">Overview</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-12">
            {service.longDescription}
          </p>
          
          <h2 className="text-3xl font-serif mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.services.map((item: { name: string, image: string }, idx: number) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-dark/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white font-serif text-xl font-medium">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-brand-dark text-white p-8 rounded-[2rem] sticky top-32">
            <h3 className="text-2xl font-serif mb-4">Ready to transform?</h3>
            <p className="text-white/70 mb-8">
              Schedule a consultation with our specialists to discuss your goals and create a personalized treatment plan.
            </p>
            <button className="w-full bg-brand-gold hover:bg-brand-gold-hover text-white px-6 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
