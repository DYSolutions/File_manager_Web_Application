import { motion } from "framer-motion";

interface ConfirmSignOutProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmSignOut = ({ onClose, onConfirm }: ConfirmSignOutProps) => {
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
        <div className="text-[20px]">Are you sure want to log out?</div>
        <div className="w-full p-3 flex flex-row items-center justify-center gap-4">
          <button
            onClick={onClose}
            className="w-[30%] p-2 bg-[white] hover:bg-[#cecccc3d] border border-[black] rounded-md cursor-pointer"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="w-[30%] p-2 bg-[blue] hover:bg-[#006eff] rounded-md cursor-pointer text-white"
          >
            Yes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmSignOut;
