import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "60%" : "100%" }} // Sidebar visible when open
      transition={{ type: "tween", duration: 0.5 , ease: "easeInOut"}}
      className="fixed top-0 right-0 h-full w-[55%] bg-gray-900 text-white shadow-lg p-5 z-50"
    >
      {/* Close Button */}
      <button className="relative left-64 top-6 text-3xl text-white" onClick={() => setIsOpen(false)}>
        <IoClose></IoClose>
      </button>

      {/* Sidebar Links */}
      <ul className="mt-10 space-y-4 text-lg">
        
      </ul>
    </motion.div>
  );
};

export default Sidebar;
