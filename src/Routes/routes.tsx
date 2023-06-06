import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Balance from '../Pages/Balance/balance'
import Admin from '../Pages/Admin/Admin'
import Erro from '../Pages/Erro/erro'
import Wallet from '../Pages/Wallet/Wallet'
import AdvancedFilter from '../Pages/Filtros Avançados/advanced-filter'
import InclusaoCarteira from '../Pages/Incluir Carteira/inclusao'

function Rotas(){
    return(
        <BrowserRouter>
        
            <Routes>
                
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/balance' element={<Balance/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/wallet' element={<Wallet/>}/>
                <Route path='/advancedfilter' element={<AdvancedFilter/>}/>
                <Route path='/addwallet' element={<InclusaoCarteira/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;