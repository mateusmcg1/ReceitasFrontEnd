import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login/Login'
import Dashboard from '../Pages/Dashboard/Admin'
import Erro from '../Pages/Erro/erro'
import Funcionario from '../Pages/Funcionario/Funcionario'
import { Casket } from '../Shared/Casket/Casket';
import Cargo from '../Pages/Cargo/Cargo';
import Restaurante from '../Pages/Restaurante/Restaurante';
import Categoria from '../Pages/Categoria/Categoria';
import Referencia from '../Pages/Referencia/Referencia';
import Receita from '../Pages/CriarReceita/Receita';
import Composicao from '../Pages/Composicao/Composicao';
import Medida from '../Pages/Medida/Medida';
import Ingredientes from '../Pages/CriarIngredientes/Ingredientes';



function Rotas() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login/>} />
                <Route path='/login' element={<Login />} />
                <Route path='criarReceita/composicao' element={<Composicao />} />

                <Route element={<Casket />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/funcionario' element={<Funcionario />} />
                    <Route path='/cargo' element={<Cargo />} />
                    <Route path='/restaurante' element={<Restaurante />} />
                    <Route path='/categoria' element={<Categoria />} />
                    <Route path='/referencia' element={<Referencia />} />
                    <Route path='/criarReceita' element={<Receita />} />
                    <Route path='/medida' element={<Medida />} />
                    <Route path='/criarIngredientes' element={<Ingredientes />} />
                    

                </Route>

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;