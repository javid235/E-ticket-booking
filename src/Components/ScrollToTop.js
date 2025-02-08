import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ routesToScroll }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const shouldScroll = routesToScroll.some((route) =>
      pathname.startsWith(route)
    )

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, routesToScroll])

  return null
}

export default ScrollToTop
