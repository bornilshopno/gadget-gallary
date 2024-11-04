import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const items=<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/stats">Statistics</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
        </>
    return (
        <div>
       <div className="navbar bg-base-100">
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
        <AiOutlineShoppingCart className="text-xl font-semibold border-2 rounded-full w-7 h-7" />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <IoMdHeartEmpty className="text-xl font-semibold border-2 rounded-full w-7 h-7" />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;