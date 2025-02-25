"use client";
import React, { useEffect, useState } from "react";
import { fetchNavbar } from "../lib/contentful";
import Link from "next/link";
import { FieldsType } from "contentful";
import { usePathname } from "next/navigation";
/* i was going to have this be a ssr but who would have thought
 that it is so difficult getting the current url on the server */
const Navbar = () => {
  const [nav, setNav] = useState<FieldsType[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const getNavbarData = async () => {
      const navbarData = await fetchNavbar();
      setNav(navbarData);
    };

    getNavbarData();
  }, []);

  return (
    <div className="py-6 px-6">
      {nav.map((item: FieldsType) => {
        return (
          <div className="flex items-center justify-between " key={item.sys.id}>
            <Link href={"/"} className="text-2xl cursor-pointer">
              {item.fields.companyName.slice(0, 6)}

              <span className="bg-gradient-to-r from-[#50A7BA] to-[#6793AE] text-white p-1">
                {item.fields.companyName.slice(7)}
              </span>
            </Link>
            <ul className="space-x-4">
              {item.fields.links.map((link: FieldsType) => (
                <Link
                  className={`hover:text-[#50A7BA] duration-300 p-2 text-lg ${
                    pathname === link.fields.url
                      ? "border-b-4 border-[#50A7BA]"
                      : ""
                  }`}
                  key={link.sys.id}
                  href={link.fields.url}
                >
                  {link.fields.textLabel}
                </Link>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
