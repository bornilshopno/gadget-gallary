import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Root/Root";



const Navbar = () => {
  const{pathname}=useLocation();
  const { data, updatedData, setUpdatedData,cartData, setCartData,wishlist, setWishlist } = useContext(DataContext);

    const items=<>
    <NavLink className={({ isActive }) =>
              `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
            } to="/">Home</NavLink>
    <NavLink className={({ isActive }) =>
              `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
            } to="/stats">Statistics</NavLink>
    <NavLink className={({ isActive }) =>
              `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
            } to="/dashboard">Dashboard</NavLink>

<NavLink className={({ isActive }) =>
              `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
            } to="/offer">Offer!</NavLink>
        </>
    return (
        <div className={`${(pathname==='/' || pathname==="/dashboard")?'bg-special-500 ':'bg-white'} `}>
       <div className="navbar w-full mx-auto px-5 md:px-10 fixed z-50 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <RxHamburgerMenu className="text-xl font-semibold  w-7 h-7"/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {items}
      </ul>
    </div>
    <a className="text-xl font-semibold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-10 px-1">
    {items}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <AiOutlineShoppingCart className="text-xl font-semibold rounded-full w-7 h-7" />
          <span className="badge badge-sm indicator-item">{cartData.length}</span>
        </div>
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <IoMdHeartEmpty className="text-xl font-semibold rounded-full w-7 h-7" />
          <span className="badge badge-sm indicator-item">{wishlist.length}</span>
        </div>
      </div>
  </div>
</div>
<div className="h-16 "></div>
        </div>
    );
};

export default Navbar;