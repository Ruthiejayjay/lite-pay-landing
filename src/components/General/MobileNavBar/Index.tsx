import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Styles.module.scss";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const navActions = [
    { title: "How it Works", route: "#how-it-works" },
    { title: "About", route: "#about-us" },
    { title: "Testimonials", route: "#testimonials" },
    { title: "FAQs", route: "faqs" },
    { title: "Contact", route: "#contact" },
  ];

  const authActions = [
    { title: "Login", route: "login", filled: false },
    { title: "Sign Up", route: "register", filled: true },
  ];

  return (
    <>
      <nav className={styles.mobileNav}>
        <div className={styles.header}>
          <Link href="/" className={clsx("navbar-brand", styles.navbarBrand)}>
            <span className={styles.logo}>Lite Pay</span>
          </Link>
          <button className={styles.toggleButton} onClick={toggleMenu}>
            <span
              className={clsx(styles.toggleIcon, { [styles.open]: isOpen })}
            />
          </button>
        </div>
        <div className={clsx(styles.overlay, { [styles.open]: isOpen })}>
          <div className={styles.navLinks}>
            {navActions.map((action, index) => (
              <Link
                key={index}
                href={action.route}
                onClick={handleNavLinkClick}
              >
                {action.title}
              </Link>
            ))}
          </div>
          <div className={styles.authLinks}>
            {authActions.map((action, index) => (
              <Link
                key={index}
                href={action.route}
                className={clsx(
                  action.filled ? styles.filledLink : styles.outlinedLink
                )}
                onClick={handleNavLinkClick}
              >
                {action.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {isOpen && <div className={styles.backDrop} onClick={toggleMenu} />}
    </>
  );
}
