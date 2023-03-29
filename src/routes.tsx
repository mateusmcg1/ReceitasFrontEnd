import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Erro from './Pages/Erro/erro'

function Rotas(){
    return(
        <BrowserRouter>
        
            <Routes>
                
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;