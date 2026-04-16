/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Diamond, 
  Heart, 
  Gem, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  RotateCcw, 
  Hammer, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownRight,
  Facebook,
  Instagram,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const GOLD_PRICES = [
  { type: "Vàng SJC (1L - 10L)", buy: "82.50", sell: "85.00", trend: "up" },
  { type: "Nhẫn Tròn Trơn 9999", buy: "74.20", sell: "75.80", trend: "up" },
  { type: "Vàng Nữ Trang 18K", buy: "54.10", sell: "56.50", trend: "down" },
  { type: "Vàng Nữ Trang 14K", buy: "41.50", sell: "43.90", trend: "up" },
];

const COLLECTIONS = [
  {
    title: "Tình Yêu Vĩnh Cửu",
    subtitle: "Bộ sưu tập nhẫn cưới",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Kim Cương Tinh Tế",
    subtitle: "Đẳng cấp thượng lưu",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
    icon: <Diamond className="w-6 h-6" />,
  },
  {
    title: "Quà Tặng Phong Thủy",
    subtitle: "Tài lộc & May mắn",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    icon: <Gem className="w-6 h-6" />,
  },
];

const FEATURES = [
  {
    title: "Thu đổi 100% giá trị",
    desc: "Cam kết thu mua lại sản phẩm với giá trị tối ưu nhất.",
    icon: <RotateCcw className="w-8 h-8" />,
  },
  {
    title: "Kiểm định quốc tế",
    desc: "Sản phẩm đi kèm giấy chứng nhận GIA, PNJ, SJC uy tín.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Chế tác thủ công",
    desc: "Đội ngũ nghệ nhân kim hoàn hơn 20 năm kinh nghiệm.",
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    title: "Uy tín thương hiệu",
    desc: "Hơn 30 năm đồng hành cùng vẻ đẹp Việt tại Hưng Yên.",
    icon: <Award className="w-8 h-8" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-gold/10 ${
          scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-lg" : "bg-white/50 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center shadow-lg shadow-gold/20">
              <Diamond className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-widest leading-none text-gold">
                BẢO TÍN
              </span>
              <span className="text-xs tracking-[0.3em] font-medium text-midnight/80">
                MINH HƯNG
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["Trang chủ", "Trang sức cưới", "Vàng 9999", "Bảng giá vàng", "Liên hệ"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold text-midnight/90"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 bg-gold-gradient px-6 py-2.5 rounded-none text-midnight font-bold text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/30 transition-all active:scale-95 animate-shine">
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Tư vấn Zalo
              </span>
            </button>
            
            <button 
              className="md:hidden text-midnight p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-midnight/10 p-6 flex flex-col gap-6"
          >
            {["Trang chủ", "Trang sức cưới", "Vàng 9999", "Bảng giá vàng", "Liên hệ"].map((item) => (
              <a key={item} href="#" className="text-midnight text-lg font-serif tracking-wide">{item}</a>
            ))}
            <button className="w-full bg-gold-gradient py-4 rounded-none text-white font-bold uppercase tracking-widest">
              Tư vấn Zalo
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Jewelry Crafting" 
            className="w-full h-full object-cover opacity-20 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/80 via-transparent to-white" />
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.5em] uppercase text-sm font-semibold mb-6 block">
              Tinh Hoa Chế Tác - Giữ Trọn Niềm Tin
            </span>
            <h1 className="text-5xl md:text-8xl text-midnight font-bold mb-8 leading-[1.1]">
              BẢO TÍN MINH HƯNG <br />
              <span className="text-gold-gradient italic">Tôn Vinh Vẻ Đẹp</span>
            </h1>
            <p className="text-midnight/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Trang sức cao cấp - Chế tác tinh xảo - Bảo chứng niềm tin. <br className="hidden md:block" />
              Khám phá những tuyệt tác kim hoàn được tạo nên từ tâm huyết của những nghệ nhân bậc thầy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto btn-primary">
                Khám Phá Bộ Sưu Tập
              </button>
              <button className="w-full sm:w-auto btn-outline">
                Xem Bảng Giá Vàng
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-midnight/40"
        >
          <div className="w-6 h-10 border-2 border-midnight/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Gold Price Board */}
      <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">Bảng Giá Vàng Trực Tuyến</h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-text-dim italic">Cập nhật lúc: {new Date().toLocaleTimeString('vi-VN')} - 15/04/2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {GOLD_PRICES.map((item, idx) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-none shadow-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  {item.trend === "up" ? (
                    <ArrowUpRight className="text-green-600 w-6 h-6" />
                  ) : (
                    <ArrowDownRight className="text-ruby w-6 h-6" />
                  )}
                </div>
                <h3 className="text-gold font-bold text-lg mb-6 tracking-wide">{item.type}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-midnight/50 text-xs uppercase tracking-widest">Mua vào</span>
                    <span className="text-midnight text-2xl font-serif font-bold">{item.buy} <span className="text-sm font-sans font-normal opacity-60">Tr/Lượng</span></span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-midnight/50 text-xs uppercase tracking-widest">Bán ra</span>
                    <span className="text-gold text-2xl font-serif font-bold">{item.sell} <span className="text-sm font-sans font-normal opacity-60">Tr/Lượng</span></span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-midnight/10 flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase ${item.trend === "up" ? "text-green-600" : "text-ruby"}`}>
                    {item.trend === "up" ? "+0.45%" : "-0.12%"}
                  </span>
                  <button className="text-midnight/40 hover:text-gold transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 bg-white text-midnight">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Tuyệt Tác Kim Hoàn</span>
              <h2 className="text-4xl md:text-6xl font-bold">Bộ Sưu Tập Nổi Bật</h2>
            </div>
            <button className="group flex items-center gap-2 text-gold hover:text-gold-light transition-colors tracking-widest uppercase text-sm font-bold">
              Xem tất cả <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COLLECTIONS.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative h-[500px] group cursor-pointer overflow-hidden rounded-none border border-midnight/5"
              >
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 border-0 group-hover:border-2 border-gold/50 m-4 rounded-none transition-all duration-500 scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="w-12 h-12 bg-gold/10 backdrop-blur-md rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    {col.icon}
                  </div>
                  <span className="text-gold text-xs uppercase tracking-[0.3em] mb-2 block">{col.subtitle}</span>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-gold transition-colors">{col.title}</h3>
                  <button className="flex items-center gap-2 text-midnight/60 group-hover:text-midnight transition-colors text-sm uppercase tracking-widest">
                    Khám phá ngay <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gold/5 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-8 border border-gold rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold mb-4 tracking-[0.2em] uppercase text-gold">{feature.title}</h3>
                <p className="text-text-dim text-xs font-light leading-relaxed uppercase tracking-wider">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-midnight pt-24 pb-12 px-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                  <Diamond className="text-white w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold tracking-widest leading-none text-gold">
                    BẢO TÍN
                  </span>
                  <span className="text-sm tracking-[0.3em] font-medium text-midnight/80">
                    MINH HƯNG
                  </span>
                </div>
              </div>
              <p className="text-midnight/50 mb-10 max-w-md leading-relaxed font-light">
                Tự hào là thương hiệu vàng bạc đá quý uy tín hàng đầu tại Hưng Yên. Chúng tôi cam kết mang đến những giá trị đích thực và sự hài lòng tuyệt đối cho quý khách hàng.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-midnight/70">
                  <MapPin className="text-gold w-5 h-5 flex-shrink-0" />
                  <span>Số 22 đường Phố Nối, Tỉnh Hưng Yên</span>
                </div>
                <div className="flex items-center gap-4 text-midnight/70">
                  <Phone className="text-gold w-5 h-5 flex-shrink-0" />
                  <span>Hotline: 0123.456.789</span>
                </div>
                <div className="flex items-center gap-4 text-midnight/70">
                  <Mail className="text-gold w-5 h-5 flex-shrink-0" />
                  <span>contact@baotinminhhung.vn</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-gold font-bold text-lg mb-8 tracking-widest uppercase">Liên kết nhanh</h4>
              <ul className="space-y-4 text-midnight/60">
                {["Về chúng tôi", "Chính sách thu đổi", "Kiểm định kim cương", "Tuyển dụng", "Tin tức & Sự kiện"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-gold transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-gold font-bold text-lg mb-8 tracking-widest uppercase">Nhận báo giá vàng</h4>
              <p className="text-midnight/50 mb-6 font-light">Đăng ký để nhận cập nhật giá vàng hằng ngày qua Email/Zalo.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email / Số điện thoại" 
                    className="w-full bg-midnight/5 border border-gold/30 rounded-none px-6 py-4 focus:outline-none focus:border-gold transition-colors text-midnight text-sm"
                  />
                </div>
                <button className="w-full bg-ruby py-4 rounded-none text-white font-bold uppercase tracking-widest hover:bg-ruby/90 transition-all active:scale-[0.98]">
                  Đăng ký ngay
                </button>
              </form>
              <div className="flex gap-4 mt-10">
                <a href="#" className="w-12 h-12 rounded-full bg-midnight/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-midnight/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-midnight/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-midnight/10 flex flex-col md:flex-row justify-between items-center gap-6 text-midnight/40 text-sm">
            <p>&copy; 2026 Vàng Bạc Bảo Tín Minh Hưng. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-midnight transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-midnight transition-colors">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Zalo Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
          alt="Zalo" 
          className="w-10 h-10 relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-full mr-4 bg-white text-midnight px-4 py-2 rounded-lg shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Tư vấn ngay qua Zalo
        </div>
      </a>
    </div>
  );
}
