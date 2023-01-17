import classes from './Link.module.scss'
const Link = () => {
    return (
        <section className={classes.link}>
            <div className={classes.link__container}>
                <form action="">
                    <input type="text" placeholder="Shorten a link here..." />
                    <button type='button'>Shorten It!</button>
                </form>
            </div>
        </section>
    )
}

export { Link }