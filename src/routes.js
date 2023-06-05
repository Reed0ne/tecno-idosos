import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import InitialScreen from './screens/initialScreen';
import CursosScreen from './screens/cursosScreen';
import SobreScreen from './screens/soobreScreen';
import SuporteScreen from './screens/suporteScreen';
import EquipeScreen from './screens/equipeScreen';
import InformaticaBasicaScreen from './screens/cursoCBScreen';
import VovoTechScreen from './screens/vovotechScreen';
import InformaticaInicianteScreen from './screens/informaticaIniciantesScreen';
import MatematicaScreen from './screens/matematicaScreen';
import ErrorScreen from './screens/404Screen';

const WebRouts = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<InitialScreen/>}/>
                <Route path='/cursos' element={<CursosScreen/>} />
                <Route path='/sobre-nos' element={<SobreScreen />} />
                <Route path='/suporte' element={<SuporteScreen/>}/>
                <Route path='/equipe' element={<EquipeScreen />} />
                <Route path='/cursos/curso/informatica-basica' element={<InformaticaBasicaScreen/>} />
                <Route path='/cursos/curso/smartphone-dicas' element={<VovoTechScreen />} />
                <Route path='/cursos/curso/informatica-para-iniciantes' element={<InformaticaInicianteScreen />}/>
                <Route path='/cursos/curso/matematica-basica' element={<MatematicaScreen/>} />
                <Route path='/404' element={<ErrorScreen/>} />
                
                <Route path="*" element={ <Navigate to="/404" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebRouts