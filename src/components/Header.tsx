import { FC } from "react";
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { logout } from "../store/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { removeTokenFromLocalStorage } from "../helpers/localStorage.helper";
import { toast } from "react-toastify";

const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    removeTokenFromLocalStorage("token");
    toast.success("You are logged out");
    navigate("/");
  };
  return (
    <header className="flex items-center bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FaBtc size={20} />
      </Link>

      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          </ul>
        </nav>
      )}

      {isAuth ? (
        <button className="btn btn-red" onClick={logoutHandler}>
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link
          className="py-2 text-white/50 hover:text-white ml-auto"
          to={"auth"}
        >
          Log In / Sign In
        </Link>
      )}
    </header>
  );
};

export default Header;
