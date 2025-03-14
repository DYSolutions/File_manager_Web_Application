import { motion } from "framer-motion";

interface ToastProps {
    setToast: string;
}

const Toast: React.FC<ToastProps> = ({ setToast }) => {
    return (
        <motion.div
            initial={{x: 50 }}
            animate={{x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
            className="fixed text-[18px] w-[300px] h-[60px] flex items-center justify-center top-4 right-4 bg-white text-[#a19c9c] border-l-8 border-[#07f713] p-3 rounded shadow-2xs"
        >
            {setToast}
        </motion.div>
    );
};

export default Toast;
