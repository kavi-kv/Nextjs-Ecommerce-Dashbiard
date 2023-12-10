"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import { sideLinks } from "@/Links/SideLinks";

function Sidebar() {
  const [openSubProduct, setOpenSubProduct] = useState(false);

  const handleProductClick = () => {
    setOpenSubProduct(!openSubProduct);
  };

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sideLinks.map((link) => (
              <div key={link.id}>
                {link.sub ? (
                  <div>
                    <Link
                      href={link.url}
                      onClick={handleProductClick}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      {link.icon}
                      <span className="ms-3">{link.title}</span>
                    </Link>

                    {openSubProduct && (
                      <ul>
                        {link.sub.map((subLink) => (
                          <Link href={subLink.url}>
                            <span className="p-2 block hover:bg-gray-100 dark:hover:bg-gray-700">
                              {subLink.title}
                            </span>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.url}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {link.icon}
                    <span className="ms-3">{link.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
