import { Button } from "primereact/button";
import { Formik, useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "primereact/calendar";
import axios from "axios";
import { Toast, ToastMessage } from 'primereact/toast';

export default function Step2NaturalPerson() {


    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [telphoneValue, setTelphoneValue] = useState('');
    const [SSN, setSSN] = useState<any>('');
    const [postalCodelValue, setPostalCodelValue] = useState<any>('');
    const [stateValue, setStateValue] = useState('');
    const [countyValue, setCountyValue] = useState('');
    const [neighborhoodValue, setNeighborhoodValue] = useState('');
    const [publicPlaceValue, setPublicPlaceValue] = useState('');
    const [numberValue, setNumberValueValue] = useState('');
    const [birthday, setBirthday] = useState('');
    const toast = useRef<Toast>(null);

    const showStepToast = (severity: ToastMessage["severity"], summary: string, detail: string) => {
        toast.current?.show([{ severity, summary, detail }]);
    
      };

    let maxDate = new Date();
    const checkPostalCode = async () => {
        try {
            const result = await axios.get(
                "https://viacep.com.br/ws/" + postalCodelValue + "/json/"
            );
            setStateValue(result.data.uf);
            setNeighborhoodValue(result.data.bairro);
            setPublicPlaceValue(result.data.logradouro);
            setCountyValue(result.data.localidade)
        } catch (err) {
            alert(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            completeName: "",
            //       value: null,
            //       date: [],
            //       selectedType: '',
            //       group: ''
        },
        validate: (data) => {
            let errors: any = {};

            !data.completeName ? (
                (errors.reference = data?.completeName?.length === 0)
            ) : <></>
            //   !data.value ? (
            //     (errors.value = data?.value === null)
            //   ) : <></>
            //       !data.date ? (
            //         (errors.date = data?.date === null)
            //       ) : <></>
            //       !data.selectedType ? (
            //         (errors.selectedType = data?.selectedType?.length === 0)
            //       ) : <></>

            return errors;
        },
        onSubmit: (data) => {

            data && showStepToast('error', 'Erro', '' + data);
            formik.resetForm();

        },
    });

    const isFormFieldInvalid = (fieldName: string) => {
        const formikToucheds: any = formik.touched;
        const formikError: any = formik.errors;
        return !!formikToucheds[fieldName] && !!formikError[fieldName];
    };


    useEffect(() => {
        if (postalCodelValue.length == 8) {
            checkPostalCode();
        }
        else {
            setStateValue('');

            setNeighborhoodValue('');
            setPublicPlaceValue('');
        }
    }, [postalCodelValue]);

    return (
        <div>
            <Toast ref={toast} />
            <form onSubmit={formik.handleSubmit}>
                <div className="grid">

                    <div className="col-12">
                        <span className="p-float-label" >
                            <InputText
                                id="completeName"
                                name="completeName"

                                value={formik.values.completeName}
                                onChange={(e) => {setNameValue(e.target.value); 
                                formik.setFieldValue("completeName", e.target.value);}} />
                            <label htmlFor="completeName">Nome Completo*</label>
                        </span>
                    </div>
                </div>

                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-6">
                        <span className="p-float-label" >
                            <InputText value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                            <label htmlFor="email">Email*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={telphoneValue} onChange={(e) => setTelphoneValue(e.target.value)} />
                            <label htmlFor="telphone">Telefone*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={SSN} onChange={(e) => setSSN(e.target.value)} />
                            <label htmlFor="SSN">CPF*</label>
                        </span>
                    </div>
                </div>

                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={postalCodelValue} onChange={(e) => setPostalCodelValue(e.target.value)} />
                            <label htmlFor="postalCode">CEP*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={stateValue} onChange={(e) => setStateValue(e.target.value)} />
                            <label htmlFor="state">UF*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={countyValue} onChange={(e) => setCountyValue(e.target.value)} />
                            <label htmlFor="county">Municipio*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText
                                //  disabled 
                                value={neighborhoodValue} onChange={(e) => setNeighborhoodValue(e.target.value)} />
                            <label htmlFor="neighborhood">Bairro*</label>
                        </span>
                    </div>
                </div>

                <div className="grid" style={{ marginTop: '2%' }}>
                    <div className="col-6">
                        <span className="p-float-label" >
                            <InputText value={publicPlaceValue} onChange={(e) => setPublicPlaceValue(e.target.value)} />
                            <label htmlFor="publicPlace">Logradouro*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <InputText value={numberValue} onChange={(e) => setNumberValueValue(e.target.value)} />
                            <label htmlFor="numberValue">Número*</label>
                        </span>
                    </div>
                    <div className="col-3">
                        <span className="p-float-label" >
                            <Calendar
                                id='date'
                                value={birthday}
                                maxDate={maxDate}
                                onChange={(e: any) => {
                                    setBirthday(e.value);

                                }}

                                selectionMode="single"
                                locale="en"
                                dateFormat="dd/mm/yy"
                            />
                            <label htmlFor="SSN">Data de Nascimento*</label>
                        </span>
                    </div>

                </div>

                <div className='grid' style={{ marginTop: '5%' }} >

                    <div className='col-11'>
                    </div>

                    <div className='col-1'>
                        <div className="secondButton">
                            <Button label="PRÓXIMO" type="submit" />

                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}