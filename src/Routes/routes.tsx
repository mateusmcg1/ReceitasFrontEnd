import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Balance from '../Pages/Balance/balance'
import Admin from '../Pages/Admin/Admin'
import Erro from '../Pages/Erro/erro'
import Wallet from '../Pages/Wallet/Wallet'
import IncludeWallet from '../Pages/Wallet/Incluir Carteira/IncludeWallet';
import Verifying from '../Pages/Verifying/verifying'
import { Casket } from '../Shared/Casket/Casket';
import WalletDetail from '../Pages/Wallet/WalletDetail/WalletDetail';


function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Verifying />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route element={<Casket />}>
                    <Route path='/balance' element={<Balance />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/wallet/detail' element={<WalletDetail />} />
                 

                </Route>

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;