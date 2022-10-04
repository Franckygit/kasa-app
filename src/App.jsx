import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Error from './Pages/Error'
import Home from './Pages/Home'
import House from './Pages/House'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Content } from './Styles/content'

const App = () => {
    return (
        <BrowserRouter>
            <Content>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/logement/:id" element={<House />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Content>
            <Footer />
        </BrowserRouter>
    )
}

export default App
