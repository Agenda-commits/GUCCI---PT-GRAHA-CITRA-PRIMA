/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle2, 
  BarChart3, 
  Lock, 
  Share2,
  ChevronRight,
  Scale,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sistem', href: '#sistem' },
    { name: 'Iklan', href: '#iklan' },
    { name: 'Konsep', href: '#penjelasan' },
    { name: 'Affiliate', href: '#affiliate' },
    { name: 'Komisi', href: '#komisi' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Legalitas', href: '#legalitas' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-warm/80 backdrop-blur-md border-b border-accent-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlnPCtUz7f8TsF6_8NHdDs5f8yYn2H3Axrw&s" 
              alt="Logo" 
              className="w-8 h-8 object-contain mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-[10px] sm:text-base tracking-[0.1em] text-accent-green uppercase">GUCCI - PT GRAHA CITRA PRIMA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold text-accent-gold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-accent-green transition-colors">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-accent-green text-white px-6 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-sm">
              Gabung
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-accent-green p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-warm border-b border-accent-gold/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-[10px] font-bold text-accent-gold uppercase tracking-widest hover:bg-accent-green/5 hover:text-accent-green transition-all border-b border-accent-gold/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-accent-green text-white py-4 rounded-none text-[10px] font-bold uppercase tracking-widest">
                  Gabung Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 gradient-bg">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 mb-6 md:mb-8 text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-accent-gold uppercase border-b border-accent-gold/30">
          Transparansi & Keamanan
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-accent-green tracking-tighter mb-8 md:mb-10 uppercase leading-tight">
          GUCCI DI BINA SECARA LANGSUNG <br className="hidden sm:block" />
          <span className="text-accent-gold italic font-sans uppercase tracking-normal">
            PT GRAHA CITRA PRIMA
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-[10px] sm:text-sm font-medium text-text-charcoal/70 mb-10 md:mb-12 uppercase tracking-widest leading-relaxed">
          Platform periklanan berbasis performa yang transparan. Maksimalkan pendapatan Anda melalui sistem pembagian komisi yang adil.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a href="#penjelasan" className="px-8 md:px-10 py-3 md:py-4 bg-accent-green text-white rounded-none font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-accent-green/90 transition-all flex items-center justify-center gap-2 shadow-lg">
            Pelajari Konsep <ChevronRight className="w-3 h-3" />
          </a>
          <a href="#legalitas" className="px-8 md:px-10 py-3 md:py-4 bg-transparent text-accent-green border border-accent-green rounded-none font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-accent-green hover:text-white transition-all flex items-center justify-center">
            Latar Belakang
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-10 bg-white rounded-none border border-accent-gold/10 shadow-sm hover:shadow-md transition-all group">
    <div className="w-12 h-12 bg-accent-green/5 rounded-none flex items-center justify-center mb-8 group-hover:bg-accent-green transition-colors">
      <Icon className="w-5 h-5 text-accent-green group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xs font-bold text-accent-green mb-4 uppercase tracking-[0.2em]">{title}</h3>
    <p className="text-text-charcoal/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const SectionHeading = ({ badge, title, subtitle }: { badge: string, title: string, subtitle: string }) => (
  <div className="text-center mb-12 md:mb-20">
    <span className="text-accent-gold font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em]">{badge}</span>
    <h2 className="text-2xl md:text-4xl font-bold text-accent-green mt-4 mb-4 md:mb-6 uppercase tracking-tight">{title}</h2>
    <p className="text-text-charcoal/50 text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">{subtitle}</p>
  </div>
);

const PlatformMarquee = () => {
  const logos = [
    { name: 'Facebook', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' },
    { name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
    { name: 'TikTok', url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { name: 'YouTube', url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
    { name: 'Google Ads', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
    { name: 'X / Twitter', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' },
    { name: 'LinkedIn', url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  ];

  return (
    <div className="py-12 bg-white border-y border-accent-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-[10px] font-bold text-accent-gold/60 uppercase tracking-[0.5em]">Platform Jangkauan Iklan Kami</span>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-4 transition-all cursor-pointer">
              <img src={logo.url} alt={logo.name} className="h-6 w-auto object-contain" referrerPolicy="no-referrer" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-green">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


const GucciSlideshow = () => {
  const images = [
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1765474246/866732_FAFV9_9653_001_083_0031_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1773819903/866734_AAGIQ_1053_001_100_0056_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1774542605/875019_FAFV9_9653_001_094_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1774373418/866732_AAGIQ_2243_001_083_0023_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1773819906/866734_AAGIR_2146_001_100_0051_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1764954952/864485_AAGDQ_1053_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1764954957/864485_FAFWA_1053_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1764954954/864485_FAFV9_9653_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1743526051/834458_FAEOI_9746_001_096_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1766155515/866979_AAGF7_1053_001_088_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1764784876/867337_FAF1B_9653_001_076_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1747117803/572767_9IK3T_8745_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1749227500/839112_AAFEQ_1069_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1714492962/799873_FADRU_9050_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1761552931/856041_FAFKD_9049_001_066_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1668190576/740391_9AACF_8167_001_085_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1765548906/840337_9AAI3_8597_001_086_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1764081003/854500_IFFA0_8483_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1762450207/838987_I1600_8591_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1762450206/838986_I1600_8606_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1728578768/814047_I18X0_8759_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1729183532/814057_I18G0_8561_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1729183534/814062_IE9A0_9812_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1719864237/796857_I16F0_1108_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1719864238/796858_I16F0_8591_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1740764711/832426_IEXA0_8759_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1745857873/824258_I16F0_8535_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1710351032/783405_I1610_8591_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1751528757/838731_ICUA0_8561_001_100_0000_Light.jpg",
    "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1728578744/811582_I1600_1193_001_100_0000_Light.jpg"
  ];
  
  const [index, setIndex] = useState(0);
  const [commission, setCommission] = useState(Math.floor(Math.random() * (50 - 20 + 1)) + 20);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setCommission(Math.floor(Math.random() * (50 - 20 + 1)) + 20);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="aspect-[4/5] rounded-none overflow-hidden shadow-sm border border-accent-gold/10 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Gucci P4P Advertising"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover sepia-[0.1] opacity-95"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-accent-green/80 via-transparent to-transparent flex flex-col justify-start p-8 z-10">
          <div className="text-white">
            <div className="text-xs font-medium opacity-80 mb-1 uppercase tracking-widest">P4P Advertising Recognition</div>
            <div className="text-2xl font-sans font-bold italic uppercase tracking-widest">Gucci Global Program 2026</div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-none shadow-sm border border-accent-gold/10 max-w-[150px] md:max-w-[200px] z-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={commission}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-accent-green font-black text-xl md:text-3xl mb-1"
          >
            {commission}%
          </motion.div>
        </AnimatePresence>
        <div className="text-[8px] md:text-[10px] font-bold text-accent-gold uppercase tracking-widest">Premium Commission</div>
      </div>
    </div>
  );
};


const DynamicCommissionTable = () => {
  const [items, setItems] = useState<{ price: number, rate: number }[]>([]);

  useEffect(() => {
    const generateItems = () => {
      // Generate 10 items with prices between 100,000 and 1,500,000
      return Array.from({ length: 10 }).map(() => ({
        price: Math.floor(Math.random() * 1400001) + 100000,
        rate: Math.floor(Math.random() * 31) + 20, // 20-50%
      }));
    };

    setItems(generateItems());

    const interval = setInterval(() => {
      setItems(generateItems());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white border border-accent-gold/10 shadow-sm">
        <thead>
          <tr className="bg-accent-green text-white">
            <th className="p-4 text-left text-[10px] uppercase tracking-widest font-bold border border-white/10">Harga Produk (IDR)</th>
            <th className="p-4 text-center text-[10px] uppercase tracking-widest font-bold border border-white/10">Komisi (%)</th>
            <th className="p-4 text-right text-[10px] uppercase tracking-widest font-bold border border-white/10">Hasil Komisi (IDR)</th>
            <th className="p-4 text-right text-[10px] uppercase tracking-widest font-bold border border-white/10">Total Penarikan (IDR)</th>
          </tr>
        </thead>
        <tbody className="relative">
          <AnimatePresence mode="popLayout">
            {items.map((item, idx) => {
              const result = (item.price * item.rate) / 100;
              const total = item.price + result;
              return (
                <motion.tr 
                  key={`${idx}-${item.price}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="hover:bg-bg-warm transition-colors border-b border-accent-gold/5"
                >
                  <td className="p-3 md:p-4 text-[10px] md:text-sm font-medium text-accent-green border-r border-accent-gold/5 whitespace-nowrap">
                    Rp {item.price.toLocaleString('id-ID')}
                  </td>
                  <td className="p-3 md:p-4 text-center text-[10px] md:text-sm font-bold text-accent-gold border-r border-accent-gold/5">
                    {item.rate}%
                  </td>
                  <td className="p-3 md:p-4 text-right text-[10px] md:text-sm font-medium text-text-charcoal border-r border-accent-gold/5 whitespace-nowrap">
                    Rp {result.toLocaleString('id-ID')}
                  </td>
                  <td className="p-3 md:p-4 text-right text-[10px] md:text-sm font-black text-accent-green whitespace-nowrap">
                    Rp {total.toLocaleString('id-ID')}
                  </td>
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};


export default function App() {
  return (
    <div className="min-h-screen bg-bg-warm text-text-charcoal font-sans selection:bg-accent-gold/20 selection:text-accent-green">
      <Navbar />
      
      <Hero />

      <PlatformMarquee />

      {/* Sistem Akun Kerja Section */}
      <section id="sistem" className="py-20 bg-bg-warm border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            badge="Sistem Akun Kerja"
            title="Bagaimana Akun Kerja Beroperasi?"
            subtitle="Sistem manajemen akun yang dirancang untuk efisiensi dan keamanan data setiap anggota."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Lock}
              title="Keamanan Terpusat"
              description="Setiap akun kerja dilindungi dengan enkripsi tingkat tinggi dan sistem verifikasi otomatis."
            />
            <FeatureCard 
              icon={Users}
              title="Manajemen Tim"
              description="Kolaborasi antar anggota dalam satu ekosistem yang terintegrasi untuk hasil maksimal."
            />
            <FeatureCard 
              icon={BarChart3}
              title="Monitoring Real-time"
              description="Pantau performa akun kerja Anda secara langsung melalui dashboard yang transparan."
            />
          </div>
        </div>
      </section>

      {/* Advertising P4P Section */}
      <section id="iklan" className="py-20 bg-bg-warm border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-gold font-bold text-sm uppercase tracking-widest">Advertising P4P</span>
              <h2 className="text-4xl font-bold text-accent-green mt-2 mb-6 uppercase tracking-tight">Iklan Berbasis Performa</h2>
              <p className="text-text-charcoal/70 text-lg mb-8 leading-relaxed">
                Kami menjalankan kampanye iklan di berbagai platform media sosial utama dengan target yang presisi. Pendapatan dihasilkan hanya ketika iklan memberikan hasil nyata.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' },
                  { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
                  { name: 'TikTok Ads', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
                  { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
                  { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
                  { name: 'X / Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' },
                  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' },
                  { name: 'Meta Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' }
                ].map((platform) => (
                  <div key={platform.name} className="flex items-center gap-4 p-4 bg-white rounded-none border border-accent-gold/10 hover:border-accent-green transition-colors group">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="w-5 h-5 object-contain transition-all" 
                      referrerPolicy="no-referrer" 
                    />
                    <span className="font-bold text-accent-green uppercase text-[10px] tracking-widest">{platform.name}</span>
                    <CheckCircle2 className="ml-auto w-4 h-4 text-accent-green opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white p-8 rounded-none border border-accent-gold/10 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold text-accent-green uppercase text-sm tracking-widest">Jangkauan Global (32 Negara)</h4>
                  <Globe className="text-accent-green w-5 h-5" />
                </div>
                
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-8">
                  {[
                    'USA', 'UK', 'Germany', 'France', 
                    'Italy', 'Spain', 'Canada', 'Australia',
                    'Japan', 'S. Korea', 'China', 'Brazil',
                    'Mexico', 'Indonesia', 'Singapore', 'Malaysia',
                    'Thailand', 'Vietnam', 'Philippines', 'India',
                    'UAE', 'Saudi Arabia', 'Turkey', 'Russia',
                    'S. Africa', 'Netherlands', 'Switzerland', 'Sweden',
                    'Norway', 'Denmark', 'New Zealand', 'Argentina'
                  ].map((country) => (
                    <div key={country} className="text-[8px] font-bold text-text-charcoal/40 uppercase tracking-tighter border border-accent-gold/5 p-1 text-center hover:bg-accent-green hover:text-white transition-colors cursor-default">
                      {country}
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="h-2 bg-bg-warm rounded-none overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      className="h-full bg-accent-green" 
                    />
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-text-charcoal/40">Global Engagement</span>
                    <span className="text-accent-green">85%</span>
                  </div>
                  <div className="h-2 bg-bg-warm rounded-none overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '72%' }}
                      className="h-full bg-accent-green" 
                    />
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-text-charcoal/40">Global Conversion</span>
                    <span className="text-accent-green">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penjelasan Akun Kerja Section */}
      <section id="penjelasan" className="py-24 bg-white border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            badge="Fungsi Akun Kerja"
            title="Pusat Kendali Keuangan Anda"
            subtitle="Memahami peran akun kerja sebagai alat pemantauan pendapatan dan pengelolaan dana hasil iklan."
          />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="p-8 bg-bg-warm border border-accent-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <h4 className="text-lg font-bold text-accent-green mb-4 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-green text-white flex items-center justify-center text-xs">01</span>
                  Pantau Pendapatan & Saldo
                </h4>
                <p className="text-text-charcoal/70 text-sm leading-relaxed">
                  Akun Kerja berfungsi sebagai dashboard utama untuk memantau setiap rupiah pendapatan yang masuk secara real-time. Anda dapat melihat akumulasi saldo harian dari hasil performa iklan yang berjalan secara otomatis.
                </p>
              </div>

              <div className="p-8 bg-bg-warm border border-accent-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <h4 className="text-lg font-bold text-accent-green mb-4 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent-gold text-white flex items-center justify-center text-xs">02</span>
                  Koneksi Rekening & Withdraw
                </h4>
                <p className="text-text-charcoal/70 text-sm leading-relaxed">
                  Melalui fitur ini, Anda dapat menautkan rekening bank pribadi untuk proses pencairan dana (withdraw). Sistem kami memastikan setiap transaksi keluar dan masuk dana tercatat secara transparan dan aman.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-accent-green p-12 flex flex-col justify-center border border-accent-gold/20 shadow-2xl">
                <h3 className="text-3xl font-sans italic text-accent-gold mb-6">"Transparansi Penuh dalam Setiap Transaksi Pencairan Dana."</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-1 bg-accent-gold h-12"></div>
                    <p className="text-white/80 text-sm italic">
                      "Kami memprioritaskan kemudahan akses bagi pengguna untuk menarik hasil kerja mereka kapan saja sesuai jadwal yang ditentukan."
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlnPCtUz7f8TsF6_8NHdDs5f8yYn2H3Axrw&s" 
                          alt="Security" 
                          className="w-6 h-6 object-contain mix-blend-multiply"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xs uppercase tracking-widest">Keamanan Penarikan</div>
                        <div className="text-white/50 text-[10px] uppercase tracking-widest">Verifikasi Berlapis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-accent-gold/20 -z-10"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-accent-gold/20 -z-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: 'Monitoring', desc: 'Pantau saldo harian secara akurat.' },
              { title: 'Konektivitas', desc: 'Tautkan rekening bank dengan aman.' },
              { title: 'Withdrawal', desc: 'Proses pencairan dana yang cepat.' },
              { title: 'Manajemen', desc: 'Kelola dana masuk dan keluar dengan mudah.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 md:p-6 border-t border-accent-gold/10">
                <div className="text-accent-gold font-black text-lg md:text-xl mb-2">/0{i+1}</div>
                <h5 className="text-[10px] md:text-xs font-bold text-accent-green uppercase tracking-widest mb-2">{item.title}</h5>
                <p className="text-[8px] md:text-[10px] text-text-charcoal/50 uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gucci Affiliate Program Section */}
      <section id="affiliate" className="py-24 bg-bg-warm border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-accent-gold text-accent-gold text-xs font-bold uppercase tracking-widest mb-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlnPCtUz7f8TsF6_8NHdDs5f8yYn2H3Axrw&s" 
                  alt="Badge" 
                  className="w-3 h-3 object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                /> Luxury Partnership
              </div>
              <div className="text-accent-green font-bold text-sm uppercase tracking-[0.2em] mb-2">
                GUCCI DI BINA SECARA LANGSUNG PT GRAHA CITRA PRIMA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-accent-green mb-6 leading-tight uppercase tracking-tighter">
                Gucci Luxury <br />
                <span className="italic text-accent-gold">Affiliate Program</span>
              </h2>
              <p className="text-text-charcoal/70 text-lg mb-8 leading-relaxed">
                Tingkatkan prestise branding Anda dengan bergabung dalam program eksklusif afiliasi produk mewah. Inilah produk-produk yang dipromosikan menggunakan sistem Advertising P4P, di mana Anda dapat memperoleh pendapatan komisi secara acak antara 20% hingga 50% untuk setiap produk premium Gucci.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-accent-green flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-accent-green uppercase text-xs tracking-widest">Influencer Network</h5>
                    <p className="text-sm text-text-charcoal/50">Optimalkan promosi produk mewah dengan sistem Advertising P4P.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-accent-green flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-accent-green uppercase text-xs tracking-widest">Global Exposure</h5>
                    <p className="text-sm text-text-charcoal/50">Dapatkan pendapatan secara acak 20-50% melalui pasar internasional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <GucciSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Pembagian Komisi Section */}
      <section id="komisi" className="py-20 bg-bg-warm border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            badge="Simulasi Pendapatan"
            title="Daftar Komisi Produk"
            subtitle="Contoh perhitungan pendapatan berdasarkan harga produk dan persentase komisi yang diterima."
          />
          
          <DynamicCommissionTable />
          
          <div className="mt-10 p-6 bg-accent-green/5 border border-accent-green/10 text-center">
            <p className="text-[10px] text-accent-green font-bold uppercase tracking-[0.3em]">
              * Perhitungan di atas adalah simulasi. Nilai sebenarnya dapat bervariasi tergantung pada performa iklan harian.
            </p>
          </div>
        </div>
      </section>

      {/* Portofolio Perusahaan Section */}
      <section id="portofolio" className="py-24 bg-white border-b border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            badge="Portofolio"
            title="Portofolio Perusahaan"
            subtitle="Dokumentasi aktivitas dan pencapaian kami dalam industri periklanan global."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://www.gla.it/wp-content/uploads/2019/12/2-10.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSj412N54v5rSZ7dDAJg-nmai82_n7igQNBg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqe95lZ3PyQC2pJ7qjy1JZNX4i48CA8F8hw&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvA2KfvN0xG5nqQeFre723xp93db-9rCz8w&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJvK8KbCnzhH7iHFP6mM16zJvkWoGI1m27w&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDhrOKH-e5lg9Rn6gwcH-SITC4VgrLlh_ow&s"
            ].map((url, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-video overflow-hidden border border-accent-gold/10 group relative"
              >
                <img 
                  src={url} 
                  alt={`Portfolio ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center">
                    <CheckCircle2 className="text-accent-green w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="legalitas" className="py-20 md:py-32 bg-accent-green text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-accent-gold font-bold text-[10px] md:text-sm uppercase tracking-[0.3em]">Legalitas & Keamanan</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-10 uppercase tracking-tight leading-tight">Infrastruktur Hukum <br className="hidden md:block" /> & Keamanan Digital</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <Scale className="text-accent-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold mb-3 uppercase tracking-widest text-accent-gold">Smart Contract & Digital Agreement</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Setiap partisipasi dalam program Gucci Advertising P4P dilindungi oleh kontrak digital otomatis yang tidak dapat diubah (immutable). Sistem ini memastikan bahwa pembagian komisi antara 20% hingga 50% dieksekusi secara instan dan tepat sasaran tanpa campur tangan manual, menjamin hak setiap anggota secara absolut.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlnPCtUz7f8TsF6_8NHdDs5f8yYn2H3Axrw&s" 
                      alt="Shield" 
                      className="w-6 h-6 object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold mb-3 uppercase tracking-widest text-accent-gold">Kepatuhan Regulasi Internasional</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Operasional kami di bawah binaan PT GRAHA CITRA PRIMA sepenuhnya mematuhi standar regulasi periklanan digital global dan kebijakan privasi data internasional (GDPR). Kami menjamin bahwa seluruh alur dana dan data anggota dikelola secara legal sesuai dengan hukum yang berlaku di 32 negara jangkauan operasional kami.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <Lock className="text-accent-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold mb-3 uppercase tracking-widest text-accent-gold">Protokol Anti-Fraud & Audit Transparansi</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Sistem kami dilengkapi dengan algoritma deteksi kecurangan real-time yang memantau setiap aktivitas akun kerja. Selain itu, kami melakukan audit transparansi berkala untuk memastikan bahwa setiap rupiah komisi yang dihasilkan dari kampanye iklan benar-benar didistribusikan kepada anggota yang berhak.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 md:p-12 rounded-none border border-white/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest text-accent-gold border-b border-white/10 pb-4">Latar Belakang Perusahaan</h3>
                <p className="text-white/80 text-sm md:text-base mb-10 leading-relaxed italic">
                  "Visi kami adalah menciptakan ekosistem periklanan yang paling transparan di dunia, di mana teknologi dan kepercayaan menyatu untuk memberikan nilai maksimal bagi setiap mitra kami."
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-none border border-white/5 hover:bg-white/10 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">10k+</div>
                    <div className="text-[10px] text-accent-gold uppercase tracking-[0.2em] font-bold">Mitra Aktif</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-none border border-white/5 hover:bg-white/10 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">$2.5M</div>
                    <div className="text-[10px] text-accent-gold uppercase tracking-[0.2em] font-bold">Total Komisi</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 border border-white/10 bg-white/5">
                  <CheckCircle2 className="text-accent-gold w-5 h-5 mb-4" />
                  <h5 className="text-[10px] font-bold uppercase tracking-widest mb-2">Enkripsi End-to-End</h5>
                  <p className="text-[10px] text-white/50 leading-relaxed">Seluruh data transaksi dan identitas anggota dilindungi enkripsi militer.</p>
                </div>
                <div className="p-6 border border-white/10 bg-white/5">
                  <TrendingUp className="text-accent-gold w-5 h-5 mb-4" />
                  <h5 className="text-[10px] font-bold uppercase tracking-widest mb-2">Real-time Settlement</h5>
                  <p className="text-[10px] text-white/50 leading-relaxed">Pencairan dana diproses melalui sistem otomatis yang tersedia 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-warm border-t border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlnPCtUz7f8TsF6_8NHdDs5f8yYn2H3Axrw&s" 
              alt="Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-base md:text-xl tracking-[0.1em] text-accent-green uppercase">GUCCI - PT GRAHA CITRA PRIMA</span>
          </div>
          <p className="text-accent-gold/60 text-[8px] md:text-[10px] uppercase tracking-widest mb-8">
            © 2026 PT GRAHA CITRA PRIMA. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-[8px] md:text-[10px] font-bold text-accent-gold uppercase tracking-widest">
            <a href="#" className="hover:text-accent-green transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-accent-green transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-accent-green transition-colors">Hubungi Kami</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
