"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { GoBell } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import admin from "../../../public/images/admin.jpg";
import logo from "../../../public/images/nms-logo.png";
import line from "@/app/line/page";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { VscTypeHierarchySub } from "react-icons/vsc";
import {
  BiSolidDashboard,
  BiMoneyWithdraw,
  BiSolidUserBadge,
  BiSolidUserAccount,
} from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  Dashboard,
  Document,
  DocumentList,
  ELetter,
  Menu,
  Report,
  Upload,
  WorkflowConfig,
} from "@/components/icon";
import NextNProgress from "nextjs-progressbar";
import { GrDocumentConfig } from "react-icons/gr";
import { VscRequestChanges } from "react-icons/vsc";
import { SlEnvolopeLetter } from "react-icons/sl";
import { destroyCookie, parseCookies } from "nookies";
import { getCookie } from "cookies-next";
import { role } from "@/utils/globalfunction";
import { FaUser, FaUserPlus, FaUsers, FaBell } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  const [currentTime, setCurrentTime] = useState("");

  // Function to update time
  const updateTime = () => {
    // Get the current time
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // Format: HH:MM:SS

    // Set the current time
    setCurrentTime(timeString);
  };

  // Call updateTime function initially to set the time

  const pathname = usePathname();
  const { push } = useRouter();
  const userId = getCookie("user_id");

  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const logout = () => {
    const cookies = parseCookies();
    Object.keys(cookies).forEach((cookieName) => {
      destroyCookie(null, cookieName);
    });
    push("/login");
  };

  // This effect runs only on the client-side
  // useEffect(() => {
  //   //Fetch user data from cookies
  //   // const userPhoto = getCookie("user_photo");
  //   // const userName = getCookie("name");
  //   // const userRole = role(); // Assuming this can safely execute on both server and client

  //   interface UserData {
  //     userPhoto: string;
  //     userName: string;
  //     userRole: string;
  //   }

  //   // Initialize userData with default values
  //   const [userData, setUserData] = useState<UserData>({
  //     userPhoto: "",
  //     userName: "",
  //     userRole: "",
  //   });

  // }, []);

  const [userData, setUserData] = useState<UserData>({
    userPhoto: "",
    userName: "",
    userRole: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  interface UserData {
    userPhoto: string;
    userName: string;
    userRole: string;
  }
  // This effect runs only on the client-side
  useEffect(() => {
    //Fetch user data from cookies
    // const userPhoto = getCookie("user_photo");
    // const userName = getCookie("name");
    // const userRole = role(); // Assuming this can safely execute on both server and client

    const userPhoto = "/admin.jpg";
    const userName = "Tanvir Shahriar";
    const userRole = "Admin";

    // Update state with user data
    setUserData({ userPhoto, userName, userRole });
  }, []);

  return (
    <>
      <NextNProgress
        color="#588EEB"
        startPosition={0}
        height={2}
        showOnShallow={true}
      />
      {pathname === "/login" ? (
        <div className="min-h-screen w-full">{children}</div>
      ) : (
        <>
          <div className="w-full navbar justify-between items-center py-3 bg-gradient-to-r from-[#0165B9] to-[#23A5CE] shadow-rb-shadow-1 border-b-1 border-b-rb-gray-50 sticky top-0 z-30 ">
            <div className="pl-8 xl:pl-16">
              <div className="w-full h-auto">
                <picture>
                  <Image src={logo} alt="siam" height={100} width={150} />
                </picture>
              </div>
            </div>
            <div className="navbar-end justify-end gap-4 ">

              <label className="input input-bordered rounded-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                <input type="text" className="grow" placeholder="Search" />
              </label>

              <div className="bg-white rounded-full p-4">
                <FaBell className="text-[#C3CAD9] text-xl" />
              </div>
              <ul className="menu menu-horizontal gap-2 ">
                <li className="bg-white rounded-md py-2 px-5">
                  <details>
                    <summary className="!p-0 hover:bg-transparent !active:bg-none">
                      {userData.userPhoto ? (
                        <div className="avatar">
                          <div className=" w-10 rounded-full ">
                            <picture>
                              <Image src={admin} alt="" />
                            </picture>
                          </div>
                        </div>
                      ) : (
                        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
                      )}
                      <div className="hidden xl:block">
                        {userData.userName ? (
                          <h3 className="text-rb-body-p3-hi font-semibold">
                            {userData.userName}
                          </h3>
                        ) : (
                          <div className="skeleton h-4 w-28 mb-2"></div>
                        )}
                        {userData.userRole ? (
                          <p className="text-rb-body-p5 text-[#C4C4C4] font-semibold">
                            {userData.userRole}
                          </p>
                        ) : (
                          <div className="skeleton h-4 w-20"></div>
                        )}
                      </div>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-md min-w-full left-0">
                      <li className="hidden">
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li>
                        <Link href="/preference">Preference</Link>
                      </li>
                      <li className="hidden">
                        <a>Settings</a>
                      </li>

                      <li onClick={logout}>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>

              <button className="block xl:hidden mx-2 cursor-pointer">
                <div className="drawer cursor-pointer">
                  <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer p-2">
                    <HiMenuAlt3 className="text-2xl" />
                  </label>
                </div>
              </button>

              {showNotifications && (
                <div className="toast toast-top toast-end mt-16 p-4 bg-white border-2 h-screen">
                  <div className="flex items-center font-bold">
                    <FaTemperatureLow className="w-5 h-4 ml-2" />
                    <span className="text-sm text-[#E8600D] ml-2">
                      Critical Temperature 45 Degrees
                    </span>
                  </div>
                  <i className="ml-2 text-end text-[10px]">{currentTime}</i>
                  <hr />

                  <div className="flex items-center">
                    <WiHumidity className="w-7 h-5" />
                    <span className="ml-2 text-sm text-[#07E415]">
                      Normal Humidity 47 g.m
                    </span>
                  </div>
                  <i className="ml-2 text-end text-[10px]">{currentTime}</i>
                  <hr />
                </div>
              )}

              <button className="btn btn-ghost btn-circle outline-0 hidden">
                <CiSquarePlus size={28} />
              </button>
            </div>
          </div>

          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <div className="main-body">{children}</div>
            </div>
            <div className="drawer-side shadow-2xl">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-[#E1F1FF] text-base-content min-h-full w-80 p-4 gap-3">
                {/* Sidebar content here */}

                <li onClick={() => push("/")}>
                  <summary
                    className={`group text-rb-body-p3 font-semibold bg-rb-white-100 py-3
                        ${pathname === "/" && "!bg-gradient-to-r from-[#0165B9] to-[#23A5CE] !text-rb-white-100"}`}
                  >
                    <span className="bg-gray-100 rounded-lg p-1">
                      <BiSolidDashboard
                        className={`${pathname === "/" && "text-gray-500"} text-xl`}
                      />
                    </span>
                    Dashboard
                  </summary>
                </li>

                <li>
                  <details>
                    <summary className={`group text-rb-body-p3 font-semibold bg-rb-white-100 py-3 
                      ${pathname === "/Devices" || pathname === "/DeviceType" ? "!bg-gradient-to-r from-[#0165B9] to-[#23A5CE] !text-rb-white-100" : ""}`}>
                      <span className="bg-gray-100 rounded-lg p-1">
                        <BsFillMenuButtonWideFill className={`${pathname === "/Devices" || pathname === "/DeviceType" ? "text-gray-500" : ""} text-xl`} />
                      </span>
                      Devices
                    </summary>
                    <ul className="flex flex-col gap-2 mt-2">

                      <li onClick={() => push("/DeviceType")}>
                        <summary
                          className={`group text-rb-body-p3 font-semibold bg-rb-white-100 py-3
                        ${pathname === "/DeviceType" && "!bg-gradient-to-r from-[#0165B9] to-[#23A5CE] !text-rb-white-100"}`}
                        >
                          <span className="bg-gray-100 rounded-lg p-1">
                            <VscTypeHierarchySub
                              className={`${pathname === "/DeviceType" && "text-gray-500"} text-xl`}
                            />
                          </span>
                          Device Type
                        </summary>
                      </li>

                      <li onClick={() => push("/Devices")}>
                        <summary
                          className={`group text-rb-body-p3 font-semibold bg-rb-white-100 py-3
                        ${pathname === "/Devices" && "!bg-gradient-to-r from-[#0165B9] to-[#23A5CE] !text-rb-white-100"}`}
                        >
                          <span className="bg-gray-100 rounded-lg p-1">
                            <FaUsers
                              className={`${pathname === "/Devices" && "text-gray-500"} text-xl`}
                            />
                          </span>
                          Devices
                        </summary>
                      </li>

                    </ul>
                  </details>
                </li>

              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}


