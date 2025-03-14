import { motion } from "framer-motion";
import Image from "next/image";
import { db } from "../../config/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify"
import { useRouter, useSearchParams } from "next/navigation";


interface CreateFolderProps {
  onClose: () => void;
}

const CreateFolder = ({ onClose }: CreateFolderProps) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [folderName, setFolderName] = useState<String>()

  const searchParams=useSearchParams()
  const parentFolderName=searchParams.get("name")
  const parentFolderId=searchParams.get("id")

  async function handleCreate() {
    if (!folderName || folderName === "") {
      return
    }
    const docId = Date.now().toString()
    onClose();
    if(!parentFolderId){
    try {
      await setDoc(doc(db, "Folders", docId), {
        name: folderName,
        id: docId,
        createdBy: session?.user?.email
      });
      router.push("/")
    } catch {
      toast.error("Failed folder create!!!")
    }}else{
      try {
        await setDoc(doc(db, `Folders/${parentFolderId}/subFolders`, docId), {
          name: folderName,
          id: docId,
          parentFolderId:parentFolderId,
          createdBy: session?.user?.email
        });
        router.refresh()
      } catch {
        toast.error("Failed folder create!!!")
      }
    }
    setFolderName("")
  }

  return (
    <motion.div
      className="absolute z-30 top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#5f5a5a77]"
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
          <Image src="/folder.png" width={70} height={70} alt="create_folder" />
          <input onChange={(e) => setFolderName(e.target.value)} type="text" placeholder="Folder name" className="w-full h-[40px] outline-none px-5 border border-[#a3c9fa] rounded-md" />
          <button onClick={handleCreate} className="btn btn-active btn-info text-white w-[160px] hover:bg-[#0077ff] transition-all">Create</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CreateFolder;