/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Star, 
  Gift, 
  Sparkles, 
  Gem, 
  Heart, 
  Instagram, 
  Facebook, 
  Clock,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-ivory/80 backdrop-blur-md border-b border-blush/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-2xl font-serif text-charcoal tracking-wide">Mia Bella's</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold -mt-1">Boutique</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#collections" className="text-sm font-medium text-charcoal/70 hover:text-gold transition-colors">Collections</a>
            <a href="#experience" className="text-sm font-medium text-charcoal/70 hover:text-gold transition-colors">Experience</a>
            <a href="#visit" className="text-sm font-medium text-charcoal/70 hover:text-gold transition-colors">Visit Us</a>
            <a href="tel:2092291886" className="btn-gold !py-2 !px-6 !text-sm flex items-center gap-2">
              <Phone size={14} /> Call Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-ivory border-b border-blush/20 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#collections" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-charcoal">Collections</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-charcoal">Experience</a>
          <a href="#visit" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-charcoal">Visit Us</a>
          <a href="tel:2092291886" className="btn-gold w-full text-center flex items-center justify-center gap-2">
            <Phone size={18} /> Call Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://i.imgur.com/kBnk5xS.png" 
        alt="Mia Bella's Boutique Storefront" 
        className="w-full h-full object-cover opacity-70"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory"></div>
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
      >
        Where Every Gift Feels Personal
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-serif text-charcoal mb-6 leading-tight"
      >
        Step Into Tracy’s Most <br /> <span className="italic text-gold">Beautiful Boutique</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Curated gifts, seasonal decor, and timeless jewelry — handpicked to make every moment special.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#visit" className="btn-gold">Shop In-Store</a>
        <a href="tel:2092291886" className="btn-outline flex items-center justify-center gap-2">
          <Phone size={18} /> Call Now
        </a>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <div className="bg-blush/30 py-6 border-y border-blush/20">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
      <div className="flex items-center gap-2">
        <div className="flex text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <span className="font-medium text-charcoal/80">4.7 Rating | Loved by the Tracy Community</span>
      </div>
      <div className="h-px w-12 bg-gold/30 hidden md:block"></div>
      <p className="italic text-charcoal/70 text-center md:text-left">
        "Shopping at Mia Bella's is like stepping into a wonderland of beautiful things!"
      </p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    { icon: <Sparkles className="text-gold" />, title: "Unique Gifts", desc: "Hard-to-find treasures handpicked for you." },
    { icon: <Gift className="text-gold" />, title: "Seasonal Decor", desc: "Beautiful holiday displays for every season." },
    { icon: <Gem className="text-gold" />, title: "Elegant Jewelry", desc: "Timeless accessories to elevate your style." },
    { icon: <Heart className="text-gold" />, title: "Warm Experience", desc: "Friendly, no-pressure shopping atmosphere." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">Why Everyone Loves Mia Bella’s</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-2xl transition-all"
            >
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blush/20">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{f.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  const items = [
    { title: "Seasonal Decor", desc: "Transform your home with our unique holiday collections.", img: "https://i.imgur.com/4v8cjRG.png" },
    { title: "Jewelry", desc: "Handpicked pieces that tell a beautiful story.", img: "https://i.imgur.com/TXJ2Roe.png" },
    { title: "Gifts & Home", desc: "Thoughtful accents for every corner of your life.", img: "https://i.imgur.com/upfXtQF.png" },
    { title: "Holiday Specials", desc: "Limited edition items for the most wonderful time of year.", img: "https://i.imgur.com/ft9anY6.png" },
  ];

  return (
    <section id="collections" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-xs mb-2 block">Curated Selection</span>
            <h2 className="text-4xl font-serif text-charcoal">Featured Collections</h2>
          </div>
          <button className="text-gold font-medium flex items-center gap-2 hover:gap-4 transition-all">
            View All Collections <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-blush/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <button className="text-gold font-semibold text-sm uppercase tracking-widest border-b-2 border-gold/20 pb-1 hover:border-gold transition-all">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blush/20 rounded-full blur-3xl z-0"></div>
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://i.imgur.com/gw0vTRI.png" 
              alt="The Mia Bella's Experience" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl z-20 max-w-[240px]">
            <p className="text-charcoal font-serif italic text-lg">"A wonderland of beautiful things."</p>
          </div>
        </div>
        <div>
          <span className="text-gold font-medium tracking-widest uppercase text-xs mb-4 block">The Mia Bella Way</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
            More Than Shopping — <br /> It’s an Experience
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            From the moment you walk in, you’re surrounded by thoughtfully styled displays, handpicked items, and a warm, welcoming atmosphere. Whether you’re finding the perfect gift or decorating your home, Mia Bella’s makes it unforgettable.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-gold"><Sparkles size={20} /></div>
              <p className="text-charcoal/80">Thoughtfully styled displays that inspire.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 text-gold"><Heart size={20} /></div>
              <p className="text-charcoal/80">Personalized attention for every customer.</p>
            </div>
          </div>
          <a href="#visit" className="btn-gold inline-block">Plan Your Visit</a>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => {
  const reviews = [
    { text: "Lovely shopping experience… beautiful decor and such a warm atmosphere.", author: "Sarah M." },
    { text: "My go-to spot for unique, quality gifts in Tracy. I always find something special.", author: "Jessica L." },
    { text: "Friendly staff and amazing selection. It's my favorite place to browse!", author: "Emily R." },
  ];

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-blush/10 relative">
              <div className="absolute top-6 left-6 text-blush/30">
                <Star size={40} fill="currentColor" />
              </div>
              <div className="relative z-10">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-charcoal/80 italic mb-6 leading-relaxed">"{r.text}"</p>
                <p className="font-semibold text-charcoal">— {r.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisitUs = () => (
  <section id="visit" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif text-charcoal mb-8">Visit Us in Downtown Tracy</h2>
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center flex-shrink-0 text-gold border border-blush/20">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                <p className="text-charcoal/70">61 W 10th St, Tracy, CA 95376</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center flex-shrink-0 text-gold border border-blush/20">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Call Store</h4>
                <p className="text-charcoal/70">(209) 229-1886</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center flex-shrink-0 text-gold border border-blush/20">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Store Hours</h4>
                <div className="text-charcoal/70 space-y-1">
                  <p>Mon - Sat: 10:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    Updated Hours
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=61+W+10th+St,+Tracy,+CA+95376" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
            >
              <MapPin size={18} /> Get Directions
            </a>
            <a href="tel:2092291886" className="btn-outline flex items-center justify-center gap-2">
              <Phone size={18} /> Call Store
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-ivory rounded-2xl border border-blush/20">
            <p className="text-sm text-charcoal/60 italic">
              "We’re here to help — please ask our team about our return & exchange options before purchase so we can make sure you love what you take home."
            </p>
          </div>
        </div>
        <div className="h-[500px] rounded-[40px] overflow-hidden shadow-xl border-8 border-ivory relative">
          {/* Mock Map Embed */}
          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin size={48} className="text-gold mx-auto mb-4" />
              <p className="font-serif text-xl mb-2">Downtown Tracy</p>
              <p className="text-charcoal/60 text-sm">61 W 10th St, Tracy, CA</p>
              <div className="mt-6 w-full h-32 bg-slate-300 rounded-xl animate-pulse"></div>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.375267433893!2d-121.4285437!3d37.7343467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80901509a8f4c549%3A0x6b4f7e5f8e5f8e5f!2s61%20W%2010th%20St%2C%20Tracy%2C%20CA%2095376!5e0!3m2!1sen!2sus!4v1711754522000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-charcoal text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col mb-6">
            <span className="text-3xl font-serif text-white tracking-wide">Mia Bella's</span>
            <span className="text-xs uppercase tracking-[0.3em] text-gold -mt-1">Boutique</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Where every gift feels personal. Curating beauty and luxury in the heart of Downtown Tracy.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
            <li><a href="#experience" className="hover:text-gold transition-colors">Experience</a></li>
            <li><a href="#visit" className="hover:text-gold transition-colors">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Store Hours</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex justify-between"><span>Mon - Sat</span> <span>10am - 5pm</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm mb-6">Join our list for new arrivals and holiday specials.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 rounded-full px-6 py-2 text-sm focus:outline-none focus:border-gold w-full"
            />
            <button className="bg-gold p-2 rounded-full hover:scale-105 transition-transform">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-10 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Mia Bella's Boutique. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Collections />
        <Experience />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
