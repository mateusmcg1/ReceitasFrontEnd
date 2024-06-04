import './Admin.css';
import { useEffect, useState } from 'react';
import { Menu } from 'primereact/menu';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';
import { Chart } from 'primereact/chart';
import { Calendar } from 'primereact/calendar';
import { Period } from '../../Shared/enums/Period';
import { Year } from '../../Shared/enums/Year';
import { Dropdown } from 'primereact/dropdown';


export default function Dashboard() {
    return (
        <div className="container">
            <div className="admin-main-content">
                <h1>Dashboard</h1>
                <div className='grid'>
                    <div className='col-11'>

                    </div>
                </div>
            </div>
        </div>
    )
}