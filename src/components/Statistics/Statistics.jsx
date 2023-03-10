import classes from './Statistics.module.scss'
const Statistics = () => (
    <section className={classes.statistics}>
        <div className={classes.statistics__header}>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className={classes.statistics__cardlist}>
            <article className={classes.firstcard}>
                <span></span>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </article>
            <article className={classes.middlecard}>
                <span></span>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </article>
            <article className={classes.lastcard}>
                <span></span>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </article>

        </div>
    </section>
)

export { Statistics }