import { HiOutlineBriefcase } from "react-icons/hi";

const Logo = () => {
  return (
    <div className=" flex justify-center items-center gap-2">
         <HiOutlineBriefcase size={36} className="text-primary-700"/>        
        <p className=" font-semibold text-2xl">MyJob</p>
    </div>
  )
}

export default Logo
