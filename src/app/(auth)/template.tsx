"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import './style.css'

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const[input,setInput]=useState('')
  return (
    <div>
      <div>
        <input value={input} onChange={(e)=>setInput(e.target.value
        )} style={{border:'2px solid red'}}/>
      </div>
      <h1>Inner Layout</h1>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "font-bold mr-4 text-red-500"  : "text-blue-500 mr-2"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
