import Image from "next/image";
import './style.css'
export default function Home() {
  return (
    <div className="w-full">
      <div className=" w-full h-72" id="kocak"></div>
      <img src="/image/logonexus.png" alt="" className=" w-64 h-96" />
      <Image src={'/image/logonexus.png'} alt="logo" width={300} height={400} />
    </div>
  );
}
