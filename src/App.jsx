import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { OptionsContextProvider } from "./contexts/OptionsContext";
import { ToastContainer } from "react-toastify"
import './App.css'
function App() {
  return (
    <OptionsContextProvider>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <Projects />
      </section>
      <footer >
        <Footer />
      </footer>
      <ToastContainer />
    </OptionsContextProvider>
  )
}
export default App