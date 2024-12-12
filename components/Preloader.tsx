'use client'

import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const fill = keyframes`
  from {
    top: 400px;
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    top: -50px;
    transform: translateX(-50%) rotate(360deg);
  }
`

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2044D1;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease;
`

const LogoOverlay = styled.img`
  width: 500px;
  position: absolute;
  top: 10%;
  border: 10px solid #2044D1;
`

const Box = styled.div`
  width: 800px;
  height: 300px;
  border-radius: 10px;
  line-height: 200px;
  text-align: center;
  color: #ddd;
  font-size: 25px;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: #ffffff;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 40%;
    animation: ${fill} 7s ease-out infinite;
    z-index: -1;
    border: 3px solid blue;
  }
`

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let isLCPLoaded = false

    const fadeOutPreloader = () => {
      setIsVisible(false)
    }

    const observer = new PerformanceObserver((entries) => {
      entries.getEntries().forEach((entry) => {
        if (entry.element && entry.element.tagName === "VIDEO") {
          entry.element.addEventListener("loadeddata", () => {
            isLCPLoaded = true
            fadeOutPreloader()
          })
        }
      })
    })

    observer.observe({ type: "largest-contentful-paint", buffered: true })

    const fallbackTimeout = setTimeout(() => {
      if (!isLCPLoaded) {
        fadeOutPreloader()
      }
    }, 5000)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <PreloaderContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <LogoOverlay src="http://backend.hotumatur.com/wp-content/uploads/2024/12/footer3background.webp" alt="Logo" />
      <Box />
    </PreloaderContainer>
  )
}

