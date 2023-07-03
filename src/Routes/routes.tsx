import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Balance from '../Pages/Balance/balance'
import Admin from '../Pages/Admin/Admin'
import Erro from '../Pages/Erro/erro'
import Wallet from '../Pages/Wallet/Wallet'
import IncludeWallet from '../Pages/Incluir Carteira/IncludeWallet';
import Verifying from '../Pages/Verifying/verifying'
import { Casket } from '../Shared/Casket/Casket';
import New_Transaction from '../Pages/New_transaction/new_transaction';

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Verifying />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/include' element={<IncludeWallet />} />

                <Route element={<Casket />}>
                    <Route path='/balance' element={<Balance />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/new&transaction' element={<New_Transaction />} />

                </Route>

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;