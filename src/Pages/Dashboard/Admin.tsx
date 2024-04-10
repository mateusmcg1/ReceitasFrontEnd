import './Admin.css';
import { useEffect, useState } from 'react';
import { Menu } from 'primereact/menu';
import 'primeicons/primeicons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';
import { Chart } from 'primereact/chart';
import { Calendar } from 'primereact/calendar';
import { CurrencyEnum } from '../../Shared/enums/CurrencyEnum';
import { Period } from '../../Shared/enums/Period';
import { Year } from '../../Shared/enums/Year';
import { Dropdown } from 'primereact/dropdown';


export default function Dashboard() {

    let navigate = useNavigate()
    // const [chartData, setChartData] = useState({});
    // const [chartOptions, setChartOptions] = useState({});
    // const [chartData2, setChartData2] = useState({});
    // const [chartOptions2, setChartOptions2] = useState({});
    // const [chartData3, setChartData3] = useState({});
    // const [chartOptions3, setChartOptions3] = useState({});
    // const [chartData4, setChartData4] = useState({});
    // const [chartOptions4, setChartOptions4] = useState({});
    // const [chartDataProfit, setChartDataProfit] = useState({});
    // const [chartOptionsProfit, setChartOptionsProfit] = useState({});
    // const [chartOut, setChartOut] = useState<any[]>([]);
    // const [chartIn, setChartIn] = useState<any[]>([]);
    // const [cashflow, setCashflow] = useState<any[]>([]);
    // const [profitability, setProfitability] = useState<any>({});
    // const [selectedCurrency, setSelectedCurrency] = useState(CurrencyEnum.BRL);
    // const [selectedPeriod, setSelectedPeriod] = useState(30);
    // const [selectedYear, setSelectedYear] = useState(2023);
    // var currencyTypes = Object.values(CurrencyEnum);
    // var periodOptions = Object.values(Period);
    // const [cashIn, setCashIn] = useState(0);
    // const [cashOut, setCashOut] = useState(0);
    // const [FutureCashIn, setFutureCashIn] = useState(0);
    // const [FutureCashOut, setFutureCashOut] = useState(0);

    // const fetchCashOut = async (params?: any) => {
    //     try {
    //         const result = await axios.get(
    //             `${process.env.REACT_APP_API_URL}/v1/charts/cash-out`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    //                 },
    //                 params
    //             }
    //         );
    //         setChartOut(result.data);
    //         console.log(result.data)
    //         chartCashOut(params.currency, params.days_gone, result.data);


    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const fetchCashIn = async (params?: any) => {
    //     try {
    //         const result = await axios.get(
    //             `${process.env.REACT_APP_API_URL}/v1/charts/cash-in`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    //                 },
    //                 params
    //             }
    //         );
    //         setChartIn(result.data);
    //         chartCashIn(params.currency, params.period, result.data);

    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const fetchCashflow = async (params?: any) => {
    //     try {
    //         const result = await axios.get(
    //             `${process.env.REACT_APP_API_URL}/v1/charts/cashflow`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    //                 },
    //                 params,
    //             }
    //         );
    //         setCashflow(result.data);
    //         chartCashflow(params.currency, params.days_gone, result.data);
    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const fetchProfitability = async (params?: any) => {
    //     try {
    //         const result = await axios.get(
    //             `${process.env.REACT_APP_API_URL}/v1/charts/profit`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    //                 },
    //                 params,
    //             }
    //         );
    //         setProfitability(result.data);
    //         chartProfitability(result.data)

    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const fetchCurrencyStats = async (params?: any) => {
    //     try {
    //         const result = await axios.get(
    //             `${process.env.REACT_APP_API_URL}/v1/charts/currency-stats`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    //                 },
    //                 params,
    //             }
    //         );

    //         setCashIn(result.data.cashinAmount)
    //         setCashOut(result.data.cashoutAmount)
           
    //         setFutureCashIn(result.data.futureCashin)
    //         setFutureCashOut(result.data.futureCashout)

    //     } catch (err) {
    //         alert(err);
    //     }
    // };

    // const chartCashOut = (currency: CurrencyEnum, period: number, co: any[]) => {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const data = {
    //         labels: co.map((p, index) => {
    //             return p.name
    //         }),
    //         datasets: [
    //             {
    //                 data: co.map((p, index) => {
    //                     return p.transactions
    //                 }),
    //                 backgroundColor: co.map((p, index) => {
    //                     return p.color
                       
    //                 }),
    //                 // hoverBackgroundColor: [
    //                 //     documentStyle.getPropertyValue('--blue-400'),
    //                 //     documentStyle.getPropertyValue('--yellow-400'),
    //                 //     documentStyle.getPropertyValue('--green-400')
    //                 // ]
    //             }
    //         ]
    //     };
    //     const options = {
    //         cutout: '60%'
    //     };
    //     setChartData3(data);
    //     setChartOptions3(options);
    // };


    // const chartCashIn = (currency: CurrencyEnum, period: number, ci: any[]) => {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const data = {
    //         labels: ci.map((p, index) => {
    //             return p.name
    //         }),
    //         datasets: [
    //             {
    //                 data: ci.map((p, index) => {
    //                     return p.transactions
    //                 }),
    //                 backgroundColor: ci.map((p, index) => {
    //                     return p.color
    //                 }),
    //                 // hoverBackgroundColor: [
    //                 //     documentStyle.getPropertyValue('--blue-400'),
    //                 //     documentStyle.getPropertyValue('--yellow-400'),
    //                 //     documentStyle.getPropertyValue('--green-400')
    //                 // ]
    //             }
    //         ]
    //     };
    //     const options = {
    //         cutout: '60%'
    //     };

    //     setChartData4(data);
    //     setChartOptions4(options);
    // };

    // const chartProfitability = (p: any) => {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const textColor = documentStyle.getPropertyValue('--text-color');
    //     const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    //     const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    //     const data = {
    //         labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    //         datasets: Object.keys(p).map((keyName: any, index: number) => {

    //             return {
    //                 label: keyName,
    //                 backgroundColor: documentStyle.getPropertyValue('--blue-500'),
    //                 borderColor: documentStyle.getPropertyValue('--blue-500'),
    //                 data: Object.keys(p[keyName]).map((month) => p[keyName][month])
    //             }
    //         })

    //     };
    //     const options = {
    //         maintainAspectRatio: false,
    //         aspectRatio: 0.8,
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     fontColor: textColor
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     color: textColorSecondary,
    //                     font: {
    //                         weight: 500
    //                     }
    //                 },
    //                 grid: {
    //                     display: false,
    //                     drawBorder: false
    //                 }
    //             },
    //             y: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false
    //                 }
    //             }
    //         }
    //     };

    //     setChartDataProfit(data);
    //     setChartOptionsProfit(options);
    // };

    // const chartCashflow = (currency: CurrencyEnum, period: number, cf: any[]) => {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const textColor = documentStyle.getPropertyValue('--text-color');
    //     const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    //     const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    //     const data = {
    //         labels: cf.map((p, index) => {
    //             return new Date(p.x).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    //         }),
    //         datasets: [
    //             {
    //                 label: currency,
    //                 data: cf.map((p, index) => {
    //                     return p.y;
    //                 }),
    //                 fill: false,
    //                 borderColor: documentStyle.getPropertyValue('--blue-500'),
    //                 tension: 0.4
    //             },

    //         ]
    //     };
    //     const options = {
    //         maintainAspectRatio: false,
    //         aspectRatio: 0.6,
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: textColor
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder
    //                 }
    //             },
    //             y: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder
    //                 }
    //             }
    //         }
    //     };

    //     setChartData(data);
    //     setChartOptions(options);
    // };


    // useEffect(() => {

    //     fetchCurrencyStats({ currency: CurrencyEnum.BRL, days_gone: 30 })
    //     fetchProfitability({ currency: CurrencyEnum.BRL, year: 2023 });
    //     fetchCashflow({ currency: CurrencyEnum.BRL, days_gone: 30 })
    //     fetchCashOut({ currency: CurrencyEnum.BRL, days_gone: 30 })
    //     fetchCashIn({ currency: CurrencyEnum.BRL, days_gone: 30 })

    // }, []);

    return (
        <div className="container">
            <div className="admin-main-content">
                <h1>Dashboard</h1>
                <div className='grid'>
                    <div className='col-11'>
                        <TabView style={{ width: '100%' }}>

                            <TabPanel header="Fluxo de Caixa">

                                
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
    )
}