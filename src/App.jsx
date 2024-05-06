import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'

import ContactHeader from './Components/ContactHeader.jsx/ContactHeader'
import Navbar from './Components/Navigation/Navbar'

function App() {
  

  return (
    <>
    
      <Navbar/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
      
      
    
    </>
  )
}

export default App
