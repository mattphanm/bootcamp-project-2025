import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.header}>
      <h1> Matthew Phan's Personal Website </h1>
	<nav id="navbar">
                <Link href="/index">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/resume">Portfolio</Link>
                <Link href="/about">Contact</Link>
      </nav>
    </header>
  );
}
