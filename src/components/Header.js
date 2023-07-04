import React, { useState, useEffect, useCallback } from 'react'
import './Header.css'
import Toggle from './Toggle'
import { keepTheme } from '../utils/theme'

function Header() {

  const theme = localStorage.getItem('theme')
  const [togClass, setTogClass] = useState('dark')

  const callback = useCallback((theme) => {
    setTogClass(theme)
  }, [setTogClass])

  useEffect(() => {
    keepTheme()
    const storedTheme = localStorage.getItem('theme')
    setTogClass(storedTheme)
  }, [togClass])

  return (
    <div className="header">
      <h1>
        Emoji Search <span role="img" aria-label="Cat Emoji">😼</span>
      </h1>
      <p>
        A simple emoji search tool made with ReactJS.
      </p>
      <p className="made-by">
        Made with ♥ by <a href="https://instagram.com/romanroman.nya">L RMN</a>
      </p>
  
      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">
          Switch to your preferred theme.
        </p>
      </div>
    </div>
  )
  
}

export default Header
