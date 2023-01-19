import useMediaQuery from "@/hooks/useMediaQuery"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [selector])

    const bodyRef = useRef(document.querySelector('body'))
    useEffect(() => {
        bodyRef.current.style.overflow = 'hidden'
        return () => bodyRef.current.style.overflow = 'auto'
    }, [mounted])

    const isNarrowScreen = useMediaQuery('(max-width: 1024px)')
    useEffect(() => {
        console.log('isNarrowScreen:', isNarrowScreen)
        if (isNarrowScreen) {
            bodyRef.current.style.overflow = 'hidden'
        } else {
            bodyRef.current.style.overflow = 'auto'
        }
    }, [isNarrowScreen])

    return mounted ? createPortal(children, document.querySelector(selector)) : null
}

export { Modal }