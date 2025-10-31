import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
   
 
	<nav className={style.navbar}>   
            <ul>
		<li> <Link href="/home">Home</Link> </li>
                <li> <Link href="/blog">Blog</Link> </li>
                <li> <Link href="/resume">Portfolio</Link> </li>
                <li> <Link href="/about">Contact</Link> </li>
      	   </ul>
	</nav>

  );
}
