import { useFormik } from 'formik';

import { useLinks } from '@/hooks/useLinks';
import { LinkList } from './LinkList'
import classes from './Link.module.scss'


//https://shrtco.de/docs
const shrtApi = 'https://api.shrtco.de/v2'
const apiErrorCode = {
    1: 'No URL specified',
    2: 'Invalid URL',
    3: 'Rate limit reached. Wait a second and try again',
    4: 'IP-Address has been blocked because of violating our terms of service',
    5: 'shrtcode code (slug) already taken/in use',
    6: 'Unknown error',
    7: 'No code specified ("code" parameter is empty)',
    8: 'Invalid code submitted (code not found/there is no such short-link)',
    9: 'Missing required parameters',
    10: 'Trying to shorten a disallowed Link',
}

const Link = () => {
    const { links, saveLink } = useLinks()

    const formik = useFormik({
        initialValues: {
            url: ''
        },
        validate: values => {
            const errors = {};

            if (!values.url) {
                errors.url = 'Please add a link';
            } else if (!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(values.url)) {
                errors.url = 'Invalid link';
            }

            const isInList = links.some(link => link.url === values.url)
            if (isInList) errors.url = 'This link has already been shortened'

            return errors;
        },
        onSubmit: async ({ url }, { resetForm }) => {
            try {
                const response = await fetch(`${shrtApi}/shorten?url=${url}`)
                const data = await response.json()
                if (response.ok) {
                    saveLink({ url, shortenedUrl: data.result.full_short_link })
                    resetForm();
                } else {
                    formik.setFieldError("url", apiErrorCode[data.error_code]);
                }
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <section className={formik.touched.url && formik.errors.url ? `${classes.link} ${classes.errorstate}` : classes.link}>
            <div className={classes.link__container}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classes.link__input}>
                        <input
                            name="url"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.url}
                            placeholder="Shorten a link here..."
                        />
                        {formik.touched.url && formik.errors.url ? (
                            <p>{formik.errors.url}</p>
                        ) : null}
                    </div>
                    <button
                        disabled={formik.isSubmitting}
                        className={formik.isSubmitting ? `${classes.link__submit} ${classes.link__loading}` : classes.link__submit}
                        type="submit"
                    >Shorten It!</button>
                </form>
            </div>
            {links &&
                (<div className={classes.link__list}>
                    {links.map((link, index) =>
                        <LinkList
                            key={index}
                            url={link.url}
                            shortenedUrl={link.shortenedUrl}
                        />
                    )}
                </div>)
            }
        </section>
    )
}

export { Link }