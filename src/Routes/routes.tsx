import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Balance from '../Pages/Balance/balance'
import Admin from '../Pages/Admin/Admin'
import Erro from '../Pages/Erro/erro'
import Wallet from '../Pages/Wallet/Wallet'
import AdvancedFilter from '../Pages/Filtros Avançados/advanced-filter'
import InclusaoCarteira from '../Pages/Incluir Carteira/inclusao'
import Verifying from '../Pages/Verifying/verifying'
import { Casket } from '../Shared/Casket/Casket';

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Verifying/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route element={<Casket/>}>
                    <Route path='/balance' element={<Balance />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/advancedfilter' element={<AdvancedFilter />} />
                    <Route path='/addwallet' element={<InclusaoCarteira />} />
                </Route>

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;