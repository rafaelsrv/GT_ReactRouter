import { BrowserRouter, Route, Routes } from "react-router-dom"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import Component3 from "../components/Component3"
import Home from "../components/Home"
import Header from "../components/Header"
import Footer from "../components/Footer"
const Paths = () => {
    return(
        <>
        <div className="h-screen">
            <BrowserRouter>
                <div className="flex h-[95%]">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Component1' element={<Component1/>}/>
                        <Route path='/Component2' element={<Component2/>}/>
                        <Route path='/Component3' element={<Component3/>}/>
                    </Routes>
                </div>
                <div className="h-[5%]">
                <Footer/>
                </div>
            </BrowserRouter>
        </div>
        </>
    )
}
export default Paths