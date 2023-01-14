import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false)
    const bodyRef = useRef(document.querySelector('body'))

    useEffect(() => {
        bodyRef.current.style.overflow = 'hidden'
        return () => bodyRef.current.style.overflow = 'auto'
    }, [mounted])

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [selector])

    return mounted ? createPortal(children, document.querySelector(selector)) : null
}

export { Modal }