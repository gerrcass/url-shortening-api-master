import Link from "next/link"

import { Modal } from "../Modal/Modal"
import classes from "./MobileMenu.module.scss"

const MobileMenu = ({ setOpenModal }) => {
    return (
        <div onClick={() => setOpenModal(false)}>
            <Modal
                selector='#modal'
                setOpenModal={setOpenModal}
            >
                <div className={classes.container}>
                    <ul onClick={(e) => e.stopPropagation()} className={classes.menu}>
                        <li><Link href="#" className={classes.menu__link}>Features</Link></li>
                        <li><Link href="#" className={classes.menu__link}>Pricing</Link></li>
                        <li><Link href="#" className={classes.menu__link}>Resources</Link></li>
                        <li className={classes.menu__linkspace}><Link href="#" className={classes.menu__link}>Login</Link></li>
                        <li><Link href="#" className={`${classes.menu__link} ${classes.menu__signup}`}>Sign Up</Link></li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export { MobileMenu }