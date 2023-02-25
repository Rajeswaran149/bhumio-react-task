import {useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

export const Portal = ({children}) => {

    const el = useRef(document.createElement('div'))
  
    useEffect(() => {
      const portalRoot = document.createElement('div')
      portalRoot.classList.add('portal-root')
  
      document.body.appendChild(portalRoot)
  
      portalRoot.appendChild(el.current)
  
      return () => {
        portalRoot.remove()
      }
    }, [])
  
    return createPortal(children, el.current)
}
