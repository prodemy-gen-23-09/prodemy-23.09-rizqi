import { CiSearch, CiHeart   } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";

function Header() {
  return (
    <div>
      <header>
        <nav className="flex bg-white justify-between mt-2 rounded-md shadow-md h-20 sticky top-0 items-center mx-[54px] p-[10px]">
          <img src="/src/assets/logo.png" alt="imglogo" className="m-5 w-52" />
          <div className="flex gap-20 cursor-pointer">
            <div className="text-black hover:text-color1_selected">Home</div>
            <div className="text-black hover:text-color1_selected">Shop</div>
            <div className="text-black hover:text-color1_selected">About</div>
            <div className="text-black hover:text-color1_selected">Contact</div>
          </div>
          <div className="flex m-5 gap-4">
            <CiSearch size={26} />
            <MdPerson size={26}/>
            <CiHeart size={26}/>
            <IoCartSharp size={26}/>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
