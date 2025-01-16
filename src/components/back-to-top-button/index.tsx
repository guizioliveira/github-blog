import React, { useState, useEffect } from 'react'
import { Button } from './styles'
import { FaAngleUp } from 'react-icons/fa'

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <FaAngleUp size={16} />
          Back to Top
        </Button>
      )}
    </>
  )
}
