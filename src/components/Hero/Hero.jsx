import classes from './Hero.module.scss'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.hero__text}>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <a href="">Get Started</a>
            </div>
            <Image
                width={733}
                height={482}
                src='images/illustration-working.svg'
                alt='Hero image'
                priority={true}
            />
        </section>
    )
}

export { Hero }