import { motion } from "framer-motion";
import Image from "next/image";

interface CreateFolderProps {
    onClose: () => void;
  }


const CreateFolder=({onClose}:CreateFolderProps)=>{
    return (
        <motion.div
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#5f5a5a77]"
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
            <Image src="/folder.png" width={70} height={70} alt="create_folder"/>
            <input type="text" placeholder="Folder name" className="w-full h-[40px] outline-none px-5 border border-[#a3c9fa] rounded-md"/>
            <button className="btn btn-active btn-info text-white w-[160px] hover:bg-[#0077ff] transition-all">Create</button>
          </div>




        </motion.div>
      </motion.div>
      );
}

export default CreateFolder;