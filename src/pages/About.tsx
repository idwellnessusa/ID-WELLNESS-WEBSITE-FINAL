export default function About() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-serif mb-6">About Us</h1>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Discover the story behind ID Wellness Clinic and our commitment to your health and beauty.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg">
          <img 
            src="https://loremflickr.com/800/1000/doctors,team" 
            alt="Clinic Team" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-6">A New Standard of Care</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-6">
            At ID Wellness Clinic, we believe that true wellness encompasses both inner health and outer beauty. Founded by a team of board-certified specialists, our clinic bridges the gap between advanced dentistry and premium aesthetic treatments.
          </p>
          <p className="text-lg text-brand-muted leading-relaxed mb-8">
            Our state-of-the-art facility in Beverly Hills is designed to provide a relaxing, luxurious environment where you can feel confident in the care you receive. We use only the latest technology and evidence-based practices to ensure optimal results for every patient.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-dark/10">
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-brand-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-brand-gold mb-2">5k+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-brand-muted">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
