import Logo from "@/components/common/logo";
import { Link, useNavigate } from "react-router-dom";
import menuItems from "./content";
import logoutIcon from "@/assets/icons/logout.svg";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import

const Sidebar = () => {
  const pathname: string = window.location.pathname || "";

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const submit = () => {
    console.log("ok");

    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleLogout(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div>
      <nav className="side-nav">
        <Link
          to="/"
          className="bg-white intro-x flex justify-center items-center p-3 rounded-lg"
        >
          <Logo />
        </Link>
        <div className="side-nav__devider my-6"></div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={
                  item.link == pathname || item.children.includes(pathname)
                    ? "side-menu--active side-menu text-black"
                    : "side-menu text-black"
                }
              >
                <div className="side-menu__icon">
                  {item.link == pathname || item.children.includes(pathname) ? (
                    <img src={item.activeIcon} />
                  ) : (
                    <img src={item.icon} />
                  )}
                </div>
                <div className="side-menu__title">{item.label}</div>
              </Link>
            </li>
          ))}
          <li>
            <a
              className="side-menu text-white"
              style={{ cursor: "pointer" }}
              onClick={() => submit()}
            >
              <div className="side-menu__icon">
                <img src={logoutIcon} />
              </div>
              <div className="side-menu__title  text-white">Logout</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
