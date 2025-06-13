import { Armchair, Check, Heart, Info, MailCheck, Menu, PhoneCall, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import logoo from '../../assets/Banner/logoo.png';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideTopBar(currentY > 60);
      setScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className={`bg-[#272343] h-[45px] w-full text-white text-sm font-inter transition-all duration-300 ${hideTopBar ? '-translate-y-full' : 'translate-y-0'} fixed top-0 left-0 z-40`}>
        <div className="container mx-auto px-4 pt-3 md:px-32 flex justify-between items-center w-full">
          <p className="hidden md:flex items-center gap-4">
            <PhoneCall size={16} /> +91-8001290110
            <MailCheck size={16} /> ahadgazi28@gmail.com
          </p>
          <div className="flex items-center gap-4">

            <Link to="/faqs" className="capitalize hidden sm:inline-block">Faqs</Link>
            <Link to="/help" className="capitalize flex items-center gap-1">
              <Info size={16} /> Need Help
            </Link>
          </div>
        </div>
      </div>

      <div className={`bg-white w-full shadow fixed ${hideTopBar ? 'top-0' : 'top-[45px]'}  left-0 z-50 transition-all duration-300 py-3`}>
        <div className="container mx-auto px-4 md:px-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl text-black font-medium">
            {/* <img src={logoo} alt="Logo" className="h-16 w-auto object-contain" /> */}
            <h4 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  drop-shadow-lg">
              A.S. ENTERPRISES
            </h4>


          </Link>

          <form className="hidden md:block relative w-full max-w-[300px] h-[44px]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-full pl-4 pr-10 rounded-lg border-2 border-black text-black"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search size={22} color="#000000" />
            </button>
          </form>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <Search size={22} color="#000000" />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/" className="text-sm font-medium capitalize text-[#029fae]">Home</NavLink>
              <NavLink to="/shop" className="text-sm font-medium capitalize text-[#636270]">About</NavLink>
              <NavLink to="/product" className="text-sm font-medium capitalize text-[#636270]">Product</NavLink>
              <NavLink to="/pages" className="text-sm font-medium capitalize text-[#636270]">Shop</NavLink>
              <NavLink to="/about" className="text-sm font-medium capitalize text-[#636270]">Contact</NavLink>

              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn flex items-center gap-2 capitalize">
                  <Menu size={18} /> All Categories
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10">
                  <li><Link to="#">Chair</Link></li>
                  <li><Link to="#">Bar Stool</Link></li>
                  <li><Link to="#">Table</Link></li>
                  <li><Link to="#">Booth</Link></li>
                  <li><Link to="#">Sofa</Link></li>
                </ul>
              </div>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} color="#000000" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 py-4 bg-white border-t">
            <nav className="flex flex-col gap-4 text-sm">
              <NavLink to="/" className="text-[#029fae]">Home</NavLink>
              <NavLink to="/shop" className="text-[#636270]">Shop</NavLink>
              <NavLink to="/product" className="text-[#636270]">Product</NavLink>
              <NavLink to="/pages" className="text-[#636270]">Pages</NavLink>
              <NavLink to="/about" className="text-[#636270]">About</NavLink>
              <div className="mt-4">
                <p className="font-semibold mb-2">Categories</p>
                <ul className="pl-4 flex flex-col gap-2 text-gray-600">
                  <li><Link to="#">Chair</Link></li>
                  <li><Link to="#">Pant</Link></li>
                  <li><Link to="#">Shirt</Link></li>
                  <li><Link to="#">T-Shirt</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;