import Body from "./components/Body"
import Head from "./components/Head"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import WatchPage from "./components/WatchPage"
import Sidebar from "./components/Sidebar"


function App() {
  return (

    <Router>
      <Head></Head>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/watch/:id" element={<WatchPage />} />


      </Routes>



    </Router>


  )
}

export default App
