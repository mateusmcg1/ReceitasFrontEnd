import './Admin.css';
import { useEffect, useState } from 'react';
import { Menu } from 'primereact/menu';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Admin() {

    let navigate = useNavigate()

    const [users, setUsers] = useState('');
    let items = [
        { label: 'Balanço', icon: 'pi pi-dollar', command: () => navigate('/balance') },
        // { label: 'Contas a pagar', icon: 'pi pi-user' },
        // { label: 'Contas a receber', icon: 'pi pi-user' },
        { label: 'Gestão de Carteiras', icon: 'pi pi-wallet', command: () => navigate('/wallet') },
        { label: 'Gestão de Acessos', icon: 'pi pi-user', },
    ];


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get(
                    `$https://dev-api.pjx.f3ssoftware.com/v1/users/logged-in`,
                    {
                        headers: {
                            'Authorization': `Bearer ${sessionStorage.getItem("access_token")}`
                        }
                    });
                // Successful response
                setUsers(result.data);
                console.log(result.data)
            } catch (err:any) {
                // Unauthorized because of invalid token (expired)
                if (err.status === 403) {
                    try {
                        // Avoid using same name 'result' again, because of shadowed names of variables
                        const resultRefresh = await axios.post(`$https://dev-api.pjx.f3ssoftware.com/v1/refresh-token`, { refresh_token: sessionStorage.getItem('refresh_token') })
                        sessionStorage.setItem("access_token", resultRefresh.data.access_token);    
                        // Call again 
                        fetchUsers();
                    } catch (error) { // Avoid using 'err' name again, because of shadowed variable
                        // Any error response here indicates refresh token can't do your job
                        // redirect your user to login page again
                        navigate('login');
                    }
                }
            }

        }
    }, []);
    return (
        <div className="container">
            <div className="menu">
                <Menu model={items} />
            </div>
            <div className="main-content">
                <h1></h1>
            </div>
        </div>
    )
}