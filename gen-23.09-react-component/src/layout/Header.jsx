import { CiSearch, CiHeart   } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoCartSharp } from "react-icons/io5";
import { Link , Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav className="flex bg-white justify-between mt-2  h-20 sticky top-0 items-center mx-[54px] p-[10px]">
          <img src="/src/assets/logo.png" alt="imglogo" className="m-5 w-52" />
          <div className="flex gap-20 cursor-pointer">
            <Link to="/"><div className="text-black hover:text-color1_selected">Home</div></Link>
            <Link to ="/shop"> <div className="text-black hover:text-color1_selected">Shop</div></Link>
            <div className="text-black hover:text-color1_selected">About</div>
            <div className="text-black hover:text-color1_selected">Contact</div>
          </div>
          <div className="flex m-5 gap-5">
            <CiSearch size={30} />
            <MdPerson size={30}/>
            <CiHeart size={30}/>
            <IoCartSharp size={30}/>
          </div>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default Header;
