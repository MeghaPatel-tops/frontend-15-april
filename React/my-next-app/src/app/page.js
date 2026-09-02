import Image from "next/image";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
      <div>
         <Navbar/>
         <h1 className="text-6xl text-blue-900">Welcome to app</h1>
      </div>
  );
}
