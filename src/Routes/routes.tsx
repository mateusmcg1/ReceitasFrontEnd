import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Balance from '../Pages/Balance/balance'
import Admin from '../Pages/Admin/Admin'
import Erro from '../Pages/Erro/erro'

function Rotas(){
    return(
        <BrowserRouter>
        
            <Routes>
                
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/balance' element={<Balance/>}/>
                <Route path='/admin' element={<Admin/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;