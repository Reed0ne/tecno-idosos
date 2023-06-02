import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InitialScreen from './screens/initialScreen';
import CursosScreen from './screens/cursosScreen';
import SobreScreen from './screens/soobreScreen';
import SuporteScreen from './screens/suporteScreen';
import EquipeScreen from './screens/equipeScreen';


const WebRouts = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialScreen/>}/>
                <Route path='/cursos' element={<CursosScreen/>} />
                <Route path='/sobre-nos' element={<SobreScreen />} />
                <Route path='/suporte' element={<SuporteScreen/>}/>
                <Route path='/equipe' element={<EquipeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouts