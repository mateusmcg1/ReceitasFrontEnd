import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Calendar } from "primereact/calendar";


export default function Step3() {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('');
    const [value10, setValue10] = useState('');
    const [value11, setValue11] = useState('');
    const [value12, setValue12] = useState('');
    const [value13, setValue13] = useState('');
    const [value14, setValue14] = useState('');
    const [value15, setValue15] = useState('');



    return (
        <div className="steps-container">
            <div className="grid" style={{ marginBottom: '2%' }}>
                <div className="col-2">
                    <span className="p-float-label" >
                        <Dropdown

                        />
                        <label htmlFor="payment">Método de Pagamento</label>
                    </span>
                </div>
                <div className="col-10">

                </div>
            </div>

            <div className="info-container">

                <span style={{ fontSize: '16px', marginLeft: '0.3%' }}>Informações Pessoais</span>

                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                            <label htmlFor="email">Email*</label>
                        </span>
                    </div>

                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="telephone">Telefone*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value3} onChange={(e) => setValue3(e.target.value)} />
                            <label htmlFor="docs">Documento</label>
                        </span>
                    </div>
                    <div className="col-2">
                        <span className="p-float-label" >
                            <Calendar
                                id='date'
                                value={value4}
                                onChange={(e: any) => {
                                    setValue4(e.value);

                                }}

                                selectionMode="single"
                                locale="en"
                                dateFormat="dd/mm/yy"
                            />
                            <label htmlFor="birthdate">Data de Nascimento</label>
                        </span>
                    </div>
                </div>
                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value5} onChange={(e) => setValue5(e.target.value)} />
                            <label htmlFor="postal-code">CEP</label>
                        </span>
                    </div>

                    <div className="col-2">
                        <span className="p-float-label" >
                            <InputText value={value6} onChange={(e) => setValue6(e.target.value)} />
                            <label htmlFor="state">UF</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value7} onChange={(e) => setValue7(e.target.value)} />
                            <label htmlFor="county">Município</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value8} onChange={(e) => setValue8(e.target.value)} />
                            <label htmlFor="neighborhood">Bairro</label>
                        </span>
                    </div>

                </div>
                <div className="grid" style={{ marginTop: '2%', marginBottom: '2%' }}>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={value9} onChange={(e) => setValue9(e.target.value)} />
                            <label htmlFor="payment">Logradouro</label>
                        </span>
                    </div>

                    <div className="col-2">
                        <span className="p-float-label" >
                            <InputText value={value10} onChange={(e) => setValue10(e.target.value)} />
                            <label htmlFor="payment">Número</label>
                        </span>
                    </div>
                </div>

                {/* <span style={{ fontSize: '16px', marginLeft: '0.3%' }}>Dados do Cartão</span>

                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-4">
                        <span className="p-float-label" >
                            <InputText value={value11} onChange={(e) => setValue11(e.target.value)} />
                            <label htmlFor="payment">Nome Impresso no Cartão*</label>
                        </span>
                    </div>

                    <div className="col-4">
                        <span className="p-float-label" >
                            <InputText value={value12} onChange={(e) => setValue12(e.target.value)} />
                            <label htmlFor="payment">Número do Cartão*</label>
                        </span>
                    </div>
                </div>
                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-2">
                        <span className="p-float-label" >
                            <InputText value={value13} onChange={(e) => setValue13(e.target.value)} />
                            <label htmlFor="payment">Validade*</label>
                        </span>
                    </div>

                    <div className="col-2">
                        <span className="p-float-label" >
                            <InputText value={value14} onChange={(e) => setValue14(e.target.value)} />
                            <label htmlFor="payment">CVV*</label>
                        </span>
                    </div>
                    <div className="col-4">
                        <span className="p-float-label" >
                            <Dropdown
                            />
                            <label htmlFor="payment">Parcelas</label>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>

    )
}