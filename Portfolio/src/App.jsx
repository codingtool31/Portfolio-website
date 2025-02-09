// import Navbar from "./Components/Navbar"
// import Hero from './Components/Hero'
// import About from "./Components/About"
// import Services from "./Components/Services"
// import MyWork from "./Components/MyWork"
// import Contact from "./Components/Contact"


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Services/>
//       <MyWork/>
//      <Contact/>
//     </div>
//   )
// }

// export default App

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="mywork">
        <MyWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
