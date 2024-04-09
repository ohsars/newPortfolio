import './App.css'
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav'
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
    <>
      <Nav theme={handleThemeSwitch}/>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
