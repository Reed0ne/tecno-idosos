import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InitialScreen from './screens/initialScreen';
import CursosScreen from './screens/cursosScreen'

const WebRouts = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialScreen/>}/>
                <Route path='/cursos' element={<CursosScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouts