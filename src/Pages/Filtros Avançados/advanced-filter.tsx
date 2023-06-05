import { Slider } from 'primereact/slider';
import './advanced-filter.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AdvancedFilter() {

    let navigate = useNavigate()

    return(

        <div className='filter-container'>

            <h1>Filtros Avançados</h1>

        </div>
    )

}