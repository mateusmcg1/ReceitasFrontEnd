import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login'
import EmailRegister from '../Pages/Register/Email_Register'
import Register from '../Pages/Register/Register_Step1'
import Dashboard from '../Pages/Dashboard/Admin'
import Erro from '../Pages/Erro/erro'
import Wallet from '../Pages/Wallet/Wallet'
import { Casket } from '../Shared/Casket/Casket';
import WalletDetail from '../Pages/Wallet/WalletDetail/WalletDetail';
import StoreMainPage from '../Pages/Store/Components/StoreMainPage';
import Store2nd from '../Pages/Store/Components/Store2ndPage';
import { ConfirmationCode } from '../Pages/Register/Confirmation_Code';


function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/email_register' element={<EmailRegister />} />
                <Route path='/register' element={<Register />} />
                <Route path='/confirmationcode' element={<ConfirmationCode/>}/>

                <Route element={<Casket />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/wallet' element={<Wallet />} />
                    <Route path='/wallet/detail/:selectedWallet' element={<WalletDetail />} />
                    <Route path='/store' element={<StoreMainPage />} />
                    <Route path='/storeresume/:cardId' element={<Store2nd />} />


                </Route>

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;