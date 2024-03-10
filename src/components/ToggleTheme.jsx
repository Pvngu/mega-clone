import React, { useState, useEffect } from 'react'

function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {

  });

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if(theme === "dark") document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", theme);
  },[theme])

  return (
    <button className='max-lg:flex max-lg:items-center max-lg:gap-x-3' onClick={handleClick}>
        <i className={`bx bx-${theme === 'light' ? 'moon' : 'sun'} text-2xl`}></i>
        <span className='lg:hidden'>Switch to light mode</span>
    </button>
  )
}

export default ToggleTheme