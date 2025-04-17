
import './App.css'
import MainSection from './component/mainSection/mainSection'
import Navbar from './component/navbar/navbar'
import Sidebar from './component/sidebar/sidebar'
import Footer from './component/footer/footer'

function App() {
  

  return (
    <>
      <div className="mainContainer">
        <Navbar/>
        <div className="mainSectionContainer">
          <Sidebar/>
          <MainSection/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
