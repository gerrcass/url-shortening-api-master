import Link from 'next/link'
import Image from 'next/image'

import { Logo } from '../Header/Logo'
import classes from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <section className={classes.footer__main}>
                <div className={classes.footer__logo}><Logo /></div>
                <div className={classes.footer__listitems}>
                    <h3>Features</h3>
                    <ul>
                        <li><Link href="#">Link Shortening</Link></li>
                        <li><Link href="#">Branded Links</Link></li>
                        <li><Link href="#">Analytics</Link></li>
                    </ul>
                </div>
                <div className={classes.footer__listitems}>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Developers</Link></li>
                        <li><Link href="#">Support</Link></li>
                    </ul>
                </div>
                <div className={classes.footer__listitems}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Our Team</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
                <div className={classes.footer__social}>
                    <Link href="#" aria-label='Facebook Icon'>
                        <Image src='/images/icon-facebook.svg' width={24} height={24} alt="Facebook logo" />
                    </Link>
                    <Link href="#" aria-label='Twitter Icon'>
                        <Image src='/images/icon-twitter.svg' width={24} height={24} alt="Twitter logo" />
                    </Link>
                    <Link href="#" aria-label='Pinterest Icon'>
                        <Image src='/images/icon-pinterest.svg' width={24} height={24} alt="Pinterest logo" />
                    </Link>
                    <Link href="#" aria-label='Instagram Icon'>
                        <Image src='/images/icon-instagram.svg' width={24} height={24} alt="Instagram logo" />
                    </Link>
                </div>

            </section>
            <section className={classes.footer__attribution}>
                Challenge by &nbsp;
                <a
                    href="https://gerardocastillo.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by &nbsp;
                <a
                    href="https://gerardocastillo.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @gerrcass
                </a>
                .
            </section>
        </footer>
    )
}

export { Footer }