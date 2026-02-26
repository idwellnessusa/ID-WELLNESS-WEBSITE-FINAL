export default function BeforeAfter() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-serif mb-6">Before & After</h1>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          Real results from our actual patients. See the transformations for yourself.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {[
          {
            title: 'Smile Makeover',
            desc: 'Combination of Porcelain Veneers and Professional Whitening.',
            before: 'https://loremflickr.com/600/600/teeth,before?lock=1',
            after: 'https://loremflickr.com/600/600/teeth,after?lock=1'
          },
          {
            title: 'Facial Rejuvenation',
            desc: 'Dermal Fillers and Botox for a youthful, natural look.',
            before: 'https://loremflickr.com/600/600/wrinkles,face?lock=1',
            after: 'https://loremflickr.com/600/600/smooth,face?lock=1'
          },
          {
            title: 'Invisalign Treatment',
            desc: '12 months of clear aligner therapy.',
            before: 'https://loremflickr.com/600/600/crooked,teeth?lock=1',
            after: 'https://loremflickr.com/600/600/straight,teeth?lock=1'
          },
          {
            title: 'Skin Resurfacing',
            desc: 'Laser Skin Rejuvenation to clear sun damage and even tone.',
            before: 'https://loremflickr.com/600/600/freckles,face?lock=1',
            after: 'https://loremflickr.com/600/600/clear,skin?lock=1'
          }
        ].map((item, i) => (
          <div key={i} className="rounded-[2rem] overflow-hidden shadow-sm border border-brand-dark/5 bg-white">
            <div className="grid grid-cols-2">
              <div className="relative aspect-square">
                <img src={item.before} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md">Before</div>
              </div>
              <div className="relative aspect-square">
                <img src={item.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm shadow-md">After</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
              <p className="text-brand-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
