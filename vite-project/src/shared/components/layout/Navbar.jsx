import { useState, useRef, useEffect, cloneElement } from "react";
import { 
  HiOutlineSearch, HiOutlineBell, HiOutlineAdjustments, 
  HiOutlineSun, HiOutlineMoon, HiOutlineZoomIn, 
  HiOutlineZoomOut, HiOutlineRefresh, HiOutlineLogout, 
  HiOutlineUser, HiOutlineShieldCheck, HiOutlineMail
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onThemeToggle, theme, onZoomIn, onZoomOut, onZoomReset }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activePanel, setActivePanel] = useState(null); // 'notifications' or 'profile'

  const navRef = useRef(null);

  const togglePanel = (panel) => {
    setActivePanel((current) => (current === panel ? null : panel));
  };

  useEffect(() => {
    const onClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActivePanel(null);
      }
    };

    const onEscKey = (event) => {
      if (event.key === 'Escape') {
        setActivePanel(null);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscKey);

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscKey);
    };
  }, []);

  

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-[#050a0a]/70 backdrop-blur-xl border-b border-emerald-500/10 px-4 md:px-8 py-3">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between relative">
        
        {/* Left: Brand */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[3px] font-bold text-emerald-800">
            <span className="opacity-50">Trex</span>
            <span className="text-emerald-500">/</span>
            <span className="text-emerald-400/80">Dashboard</span>
          </div>
          <h2 className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">
            Hostel <span className="text-emerald-500">Elite</span>
          </h2>
        </div>

        {/* Center: Search */}
        <div className="hidden lg:block relative group">
          <motion.div animate={{ width: isSearchFocused ? 400 : 300 }} className="relative">
            <HiOutlineSearch className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isSearchFocused ? 'text-emerald-400' : 'text-emerald-800'}`} size={18} />
            <input 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              type="text" 
              placeholder="Search anything..."
              className="w-full bg-emerald-950/20 border border-emerald-500/10 text-emerald-100 text-sm rounded-2xl pl-12 pr-4 py-2.5 focus:outline-none focus:border-emerald-500/40 transition-all shadow-inner"
            />
          </motion.div>
        </div>

        {/* Right: Controls & Profile */}
        <div className="flex items-center gap-2 md:gap-5">
          
          <div className="hidden md:flex items-center gap-1 bg-emerald-950/30 p-1 rounded-2xl border border-emerald-500/5 shadow-inner">
            <NavUtilityBtn onClick={onThemeToggle} icon={theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />} />
            <div className="w-[1px] h-4 bg-emerald-800/30 mx-1" />
            <NavUtilityBtn onClick={onZoomOut} icon={<HiOutlineZoomOut />} />
            <NavUtilityBtn onClick={onZoomReset} icon={<HiOutlineRefresh />} />
            <NavUtilityBtn onClick={onZoomIn} icon={<HiOutlineZoomIn />} />
          </div>

          {/* Notification Trigger */}
          <div className="relative">
            <button 
              onClick={() => togglePanel('notifications')}
              className={`relative p-2.5 rounded-xl border transition-all ${activePanel === 'notifications' ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-emerald-500/5 text-emerald-500 border-emerald-500/10'}`}
            >
              <HiOutlineBell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></span>
            </button>
            <NotificationPanel isOpen={activePanel === 'notifications'} />
          </div>

          {/* Profile Trigger */}
          <div className="relative">
            <motion.div 
              onClick={() => togglePanel('profile')}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="hidden sm:block text-right leading-none">
                <p className="text-xs font-black text-white">TREX ADMIN</p>
                <span className="text-[9px] font-bold text-emerald-700 uppercase">Owner</span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-900 p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-[#050a0a] rounded-[14px] overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            <ProfilePanel isOpen={activePanel === 'profile'} />
          </div>

        </div>
      </div>
    </nav>
  );
};

// --- SUB-PANEL: NOTIFICATIONS ---
const NotificationPanel = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        className="absolute right-0 mt-4 w-80 bg-[#0a1515] border border-emerald-500/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl z-50"
      >
        <div className="p-5 border-b border-emerald-500/10 flex justify-between items-center bg-emerald-500/5">
          <h3 className="text-white font-bold tracking-tight">Notifications</h3>
          <span className="bg-emerald-500 text-[#050a0a] text-[10px] font-black px-2 py-0.5 rounded-full">3 NEW</span>
        </div>
        <div className="max-h-[350px] overflow-y-auto">
          <NotificationItem title="Late Payment" desc="Room 204 - Rahul Sharma" time="2 mins ago" type="urgent" />
          <NotificationItem title="New Complaint" desc="Water issue in Wing B" time="1 hour ago" type="info" />
          <NotificationItem title="Booking Request" desc="Aman Verma requested Room 102" time="3 hours ago" type="success" />
        </div>
        <button className="w-full p-4 text-[11px] font-bold text-emerald-500 hover:bg-emerald-500/10 transition-colors uppercase tracking-widest border-t border-emerald-500/10">
          View All Notifications
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

const NotificationItem = ({ title, desc, time, type }) => (
  <div className="p-4 border-b border-emerald-500/5 hover:bg-emerald-500/5 transition-all cursor-pointer group">
    <div className="flex gap-3">
      <div className={`w-2 h-2 rounded-full mt-1.5 ${type === 'urgent' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-emerald-500'}`} />
      <div>
        <p className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</p>
        <p className="text-[11px] text-emerald-900 font-medium leading-relaxed mt-0.5">{desc}</p>
        <p className="text-[9px] text-emerald-950 mt-2 font-bold uppercase tracking-tighter">{time}</p>
      </div>
    </div>
  </div>
);

// --- SUB-PANEL: ADMIN PROFILE ---
const ProfilePanel = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        className="absolute right-0 mt-4 w-72 bg-[#0a1515] border border-emerald-500/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl z-50"
      >
        <div className="p-6 text-center bg-gradient-to-b from-emerald-500/10 to-transparent">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 p-1 mb-3 border border-emerald-500/30">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Felix" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <h3 className="text-white font-black text-lg">Trex Admin</h3>
          <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase mt-1">Super Administrator</p>
        </div>
        
        <div className="px-2 pb-2">
          <ProfileLink icon={<HiOutlineUser />} label="My Profile" />
          <ProfileLink icon={<HiOutlineMail />} label="Inbox" />
          <ProfileLink icon={<HiOutlineShieldCheck />} label="Security" />
          <div className="my-2 border-t border-emerald-500/10 mx-4" />
          <ProfileLink icon={<HiOutlineLogout />} label="Logout" color="text-rose-400 hover:bg-rose-500/10" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProfileLink = ({ icon, label, color = "text-emerald-500 hover:bg-emerald-500/10" }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-xs ${color}`}>
    <span className="text-lg">{icon}</span>
    {label}
  </button>
);

const NavUtilityBtn = ({ onClick, icon }) => (
  <motion.button 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick} 
    className="p-2 text-emerald-600 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-all"
  >
    {cloneElement(icon, { size: 18 })}
  </motion.button>
);

export default Navbar;