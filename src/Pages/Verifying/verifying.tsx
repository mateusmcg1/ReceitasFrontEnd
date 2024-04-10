import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Verifying(){
    let navigate = useNavigate();
    
    useEffect(() => {
        if(!(sessionStorage.getItem("access_token"))){
            navigate('/login')
        }
        else{
            navigate('/admin')
        }
    }, []);

    return(
        <div>
            <ProgressSpinner aria-label="Loading" />
        </div>
    )
}