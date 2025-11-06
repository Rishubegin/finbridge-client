import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between p-2 items-center bg-[#fff7cc]">
      <div className="flex">
        <div>logo</div>
        <div className="font-bold text-3xl">FINBRIDGE</div>
      </div>
      <button className="md:hidden">
        <Menu size={24} color="black" />
      </button>
      <ul className="hidden md:flex items-center md:w-3/5 lg:w-1/2 2xl:w-2/5 justify-around font-[inter] ">
        <li>Credit Score</li>
        <li>Financial tools</li>
        <li>Resources</li>
        <button className="bg-gray-300 px-3 py-1 rounded-sm m-1 ">Login</button>
        <button className="text-white px-3 py-1 rounded-sm bg-blue-700  m-1">
          Signup
        </button>
      </ul>
    </div>
  );
};

export default Header;
