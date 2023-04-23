import './Admin.css';
import { Menu } from 'primereact/menu';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Admin() {

    let navigate = useNavigate()

    let items = [
        {label: 'Balanço', icon: 'pi pi-user'},
        {label: 'Contas a pagar', icon: 'pi pi-user'},
        {label: 'Contas a receber', icon: 'pi pi-user'},
        {label: 'Gestão de Carteiras', icon: 'pi pi-user'},
        {label: 'Gestão de Acessos', icon: 'pi pi-user'}
    ];
    return(
        <div className="container">
            <div className="menu">
                <Menu model={items}/>
            </div>
            <div className="main-content">
                <h1></h1>
            </div>
        </div>
    )
}