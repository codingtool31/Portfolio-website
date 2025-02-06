import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import About from "./Components/About"
import Services from "./Components/Services"
import MyWork from "./Components/MyWork"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App