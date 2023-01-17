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
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div className={classes.footer__listitems}>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className={classes.footer__listitems}>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={classes.footer__social}>
                    <Image src='/images/icon-facebook.svg' width={24} height={24} alt="Facebook logo" />
                    <Image src='/images/icon-twitter.svg' width={24} height={24} alt="Twitter logo" />
                    <Image src='/images/icon-pinterest.svg' width={24} height={24} alt="Pinterest logo" />
                    <Image src='/images/icon-instagram.svg' width={24} height={24} alt="Instagram logo" />
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