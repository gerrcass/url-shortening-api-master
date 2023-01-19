import { useState } from 'react'
import classes from './LinkList.module.scss'

const LinkList = ({ url, shortenedUrl }) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {

        if (!isClicked) {
            navigator.clipboard.writeText(shortenedUrl)
            setIsClicked(true)
            setTimeout(() => {
                setIsClicked(false)
            }, 5000);
        }
    }

    return (
        <div className={classes.linkitem}>
            <p className={classes.linkitem__link}>{url}</p>
            <div className={classes.linkitem__shortenlink}>
                <p>{shortenedUrl}</p>
                <button
                    className={isClicked ? `${classes.linkitem__button} ${classes.linkitem_buttoncolor}` : classes.linkitem__button}
                    onClick={handleClick}
                >{isClicked ? 'Copied!' : 'Copy'}</button>
            </div>
        </div>
    )
}

export { LinkList }