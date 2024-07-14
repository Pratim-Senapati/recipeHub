import Link from "next/link";
import Image from "next/image";
import logoPath from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
import PlaceHoldersInput from "../search/placeholders-input";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoPath} alt="logo" width={100} height={100} priority />
        Recipe Hub
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.tags}>
          <PlaceHoldersInput />
          <li>
            <NavLink href="/meals">Browse Meal</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
