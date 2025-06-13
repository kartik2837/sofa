import { Armchair, Banknote, CreditCard, Facebook, Instagram, MailCheck, PhoneCall, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="border-t border-b border-gray-700 pt-12 pb-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
              <div className="mb-6">
                {/* <Link to="/" className="text-2xl lg:text-3xl font-inter font-medium flex items-center gap-2 text-white">
              <Armchair size="2rem" color="#00bfa6" /> comforty
            </Link> */}

                <h4 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  drop-shadow-lg">
                  A.S. ENTERPRISES
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-300 font-inter mb-4 max-w-[350px]">
                A.S. ENTERPRISES is a trusted provider of quality products and reliable solutions, committed to excellence, innovation, and customer satisfaction across every project we undertake.
              </p>
              <div className="flex items-center gap-3">
                <Link className="p-2 border border-[#00bfa6] rounded-full"><Facebook color="#00bfa6" /></Link>
                <Link className="p-2"><Twitter color="#00bfa6" /></Link>
                <Link className="p-2"><Instagram color="#00bfa6" /></Link>
                <Link className="p-2"><Youtube color="#00bfa6" /></Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-400 font-inter font-medium uppercase mb-4">Category</h3>
              <ul className="space-y-2">
                {["Table", "Chair", "Bar Stool", "Sofa", "Booth"].map((item) => (
                  <li key={item}>
                    <Link className="text-sm sm:text-base text-white hover:text-[#00bfa6] font-inter capitalize">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-400 font-inter font-medium uppercase mb-4">Quik Link</h3>
              <ul className="space-y-2">
                {["Home", "About", "Product", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link className="text-sm sm:text-base text-white hover:text-[#00bfa6] font-inter capitalize">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-400 font-inter font-medium uppercase mb-4">Newsletter</h3>
              <form className="flex flex-col sm:flex-row gap-3 max-w-[424px]">
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="w-full h-[44px] bg-gray-800 text-white border border-gray-600 rounded-lg px-3 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full sm:w-[127px] h-[44px] bg-[#00bfa6] text-white rounded-lg text-sm sm:text-base font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 sm:py-6 border-t border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-gray-400 text-center">
              © 2025 A.S. Enterprises — Designed & Developed by <span className="text-white font-medium">Web4businesssolutions</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm sm:text-base">
              <p className="flex items-center gap-2"><PhoneCall size={16} />+91-8001290110</p>
              <p className="flex items-center gap-2"><MailCheck size={16} /> ahadgazi28@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;