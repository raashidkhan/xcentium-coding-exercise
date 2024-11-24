import React from "react";
import styles from "./header.module.css";
import Logo from "@/svg/Logo";
import Link from "next/link";
import LogoMobile from "@/svg/LogoMobile";
const Header = ({ isMobile }) => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>{isMobile ? <LogoMobile /> : <Logo />}</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">TV Shows</Link>
        </li>
        <li>
          <Link href="/">Movies</Link>
        </li>
        <li>
          <Link href="/">New & Popular</Link>
        </li>
        <li>
          <Link href="/">My List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
