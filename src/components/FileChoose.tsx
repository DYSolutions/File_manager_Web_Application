import { motion } from "framer-motion";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FileChooseProps {
    onClose: () => void;
}


const FileChoose = ({ onClose }: FileChooseProps) => {
    return (
        <motion.div
            className="absolute z-10 top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#5f5a5a77]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white w-[20%] h-[auto] p-8 rounded-lg relative flex flex-col items-center justify-center shadow-md shadow-[#00000044]"
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



                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative h-[200px] w-[200px] border rounded-2xl border-dashed border-[#616060] bg-[#d1d1d118] flex flex-col gap-5 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Choose file
                        <input type="file" className="bg-[#cec7c7] w-[100px] h-[100px] absolute opacity-0 cursor-pointer"/>
                    </div>
                    <button  onClick={() => toast.error("Sorry you cant't upload any file right now!")} className="btn btn-active btn-info text-white w-[160px] hover:bg-[#0077ff] transition-all">Upload</button>
                </div>

            </motion.div>
            <ToastContainer position="top-right" autoClose={3000} aria-label={undefined} />
        </motion.div>
    );
}

export default FileChoose;