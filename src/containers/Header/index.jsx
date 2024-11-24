"use client";
import React from "react";
import styles from "./header.module.css";
import Logo from "@/svg/Logo";
import Link from "next/link";
import LogoMobile from "@/svg/LogoMobile";

const Header = ({ isMobile }) => {
  return (
    <nav className={styles.header} aria-label="Main Navigation">
      <div className={styles.logo} aria-label="Website Logo">
        {isMobile ? <LogoMobile /> : <Logo />}
      </div>
      <ul className={styles.navList}>
        <li>
          <Link href="/" aria-label="Go to Home Page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/tv-shows" aria-label="View TV Shows">
            TV Shows
          </Link>
        </li>
        <li>
          <Link href="/movies" aria-label="View Movies">
            Movies
          </Link>
        </li>
        <li>
          <Link href="/new-and-popular" aria-label="See New & Popular">
            New & Popular
          </Link>
        </li>
        <li>
          <Link href="/my-list" aria-label="View My List">
            My List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
