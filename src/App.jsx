import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "../src/components/home/home"

function App() {

    return (
        <>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
        </>
    )
}

export default App;
