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
                        <li><a href="#" className={classes.menu__link}>Features</a></li>
                        <li><a href="#" className={classes.menu__link}>Pricing</a></li>
                        <li><a href="#" className={classes.menu__link}>Resources</a></li>
                        <li className={classes.menu__linkspace}><a href="#" className={classes.menu__link}>Login</a></li>
                        <li><a href="#" className={`${classes.menu__link} ${classes.menu__signup}`}>Sign Up</a></li>
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export { MobileMenu }