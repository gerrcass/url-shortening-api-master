import Link from "next/link"
import { useState } from "react"

import classes from "./Header.module.scss"
import { Logo } from "./Logo"
import { MobileMenu } from "./MobileMenu"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <Link href="#" className={classes.header__logo} aria-label="Logo"><Logo /></Link>
                <nav className={classes.header__navbar}>
                    <ul>
                        <li><Link href="#" className={classes.header__link}>Features</Link></li>
                        <li><Link href="#" className={classes.header__link}>Pricing</Link></li>
                        <li><Link href="#" className={classes.header__link}>Resources</Link></li>
                        <li className={classes.header__linkspace}>
                            <Link href="#" className={classes.header__link}>Login</Link>
                        </li>
                        <li>
                            <Link href="#" className={`${classes.header__link} ${classes.header__signup}`}>Sign Up</Link>
                        </li>
                    </ul>
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className={`${classes.mobilemenu} ${isMenuOpen ? classes.mobilemenu__open : ''}`}
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`${classes.mobilemenu__line} ${classes.mobilemenu__up}`} />
                        <span className={`${classes.mobilemenu__line} ${classes.mobilemenu__middle}`} />
                        <span className={`${classes.mobilemenu__line} ${classes.mobilemenu__down}`} />
                    </button>
                    {isMenuOpen &&
                        <MobileMenu setOpenModal={setIsMenuOpen} />
                    }
                </nav>
            </div>
        </header >
    )
}

export { Header }