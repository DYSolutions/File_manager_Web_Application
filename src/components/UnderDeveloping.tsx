import { motion } from "framer-motion";

interface ConfirmModelProps {
    onClose: () => void;
  }

const UnderDeveloping=({onClose}:ConfirmModelProps)=>{
    return (
        <motion.div
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#5f5a5a77]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-[30%] h-[160px] rounded-lg relative flex flex-col items-center justify-center shadow-md shadow-[#00000044]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 absolute right-1 top-1 cursor-pointer hover:scale-110 transition-all"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <div className="text-[20px]">This Option Not available right now !</div>
        </motion.div>
      </motion.div>
      );
}

export default UnderDeveloping;