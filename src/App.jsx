import './App.css'
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav'
import { Hero } from './components/Hero';

function App() {
  const [theme, setTheme] = useState(null);

  useEffect (() => {
    if (window.matchMedia('prefers-color-scheme: dark').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect (() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log((theme))
  }

  return (
    <div className=''>
      <Nav theme={handleThemeSwitch}/>
      <Hero />
    </div>
  )
}

export default App
