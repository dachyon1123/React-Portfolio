import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import Footer from './Footer'

function App() {
  const [body, setBody] = useState(0) //0=AboutMe 1=Portfolio 2=Contact 3=Resume

  return (
    <div className='main-container'>
      <Header setBody={setBody} />

      {body === 0 ? <AboutMe /> :
      body === 1 ? <Portfolio /> :
      body === 2 ? <Contact /> :
      body === 3 ? <Resume /> : null}

      <Footer />
    </div>
  )
}

export default App
