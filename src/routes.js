import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InitialScreen from './screens/initialScreen';
import CursosScreen from './screens/cursosScreen';
import ContatoScreen from './screens/contatoScreen';
import SuporteScreen from './screens/suporteScreen';

const WebRouts = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialScreen/>}/>
                <Route path='/cursos' element={<CursosScreen/>} />
                <Route path='/contato' element={<ContatoScreen />} />
                <Route path='/suporte' element={<SuporteScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouts