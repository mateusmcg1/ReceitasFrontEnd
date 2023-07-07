import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Installment } from "../../../models/Installment";
import InstallmentForm from "./InstallmentForm";
import axios from "axios";
import { TransactionDTO } from "../../../models/TransactionDTO";
import { Button } from "primereact/button";

//FALTA IMPLEMENTAR O CSS DE ACORDO COM O PROTÓTIPO//

export default function TransactionForm() {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState<string | Date | Date[] | null>([new Date()]);
  const [reference, setReference] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [installmentNumber, setInstallmentNumber] = useState(0);
  const [installments, setInstallments] = useState<Installment[]>([
    new Installment(),
  ]);

  const asyncNewTransaction = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/transactions`,{
          reference: reference,
          due_date: date?.toString(),
          installments: installments,
          type:selectedType,
          amount: value
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")!}`,
          },
        }
      );
    } catch (err) {
      alert(err);
    }
  };


  const onUpdateItem = (installment: Installment, index: number) => {
    const installmentsArr = [...installments];
    installmentsArr[index] = installment;
    setInstallments(installmentsArr);
  };

  const updateInstallmentNumber = (installmentNumber: number) => {
    let installmentArr = [];
    for (let i = 0; i < installmentNumber; i++) {
      installmentArr.push({
        number: i,
      });
    }
    setInstallments(installmentArr);
  };

  return (
    <div className="flex flex-column gap-2">
      <label htmlFor="reference">Referencia</label>
      <InputText
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />
      <label htmlFor="value">Valor</label>
      <InputNumber
        inputId="currency-br"
        value={value}
        onValueChange={(e) => setValue(Number(e.value))}
        mode="currency"
        currency="BRL"
        locale="pt-BR"
      />
      <label htmlFor="date">Data</label>
      <Calendar
        value={date}
        onChange={(e: CalendarChangeEvent) => {
          setDate(e.value!);
        }}
        locale="en"
        dateFormat="dd/mm/yy"
      />
      <label htmlFor="type">Tipo</label>
      <Dropdown
        value={selectedType}
        onChange={(e: DropdownChangeEvent) => setSelectedType(e.value)}
        options={[
          { label: "Cobrança", value: "BILLING" },
          { label: "Pagamento", value: "PAYMENT" },
        ]}
        optionLabel="label"
        optionValue="value"
        editable
        placeholder="Selecione um tipo"
        className="w-full md:w-14rem"
      />
      <label htmlFor="installments">Parcelas</label>
      <InputNumber
        value={installmentNumber}
        onChange={(e) => updateInstallmentNumber(e.value!)}
        showButtons
        buttonLayout="horizontal"
        style={{ width: "9rem" }}
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        min={0}
        decrementButtonIcon="pi pi-minus"
      />
      {installments.map((newInstallments, index) => {
        return (
          <InstallmentForm
            index={index}
            key={index}
            onHandleUpdate={onUpdateItem}
          ></InstallmentForm>
        );
      })}
       <Button label="Submit" onClick={asyncNewTransaction} style={{ marginTop: "10%" }} />
    </div>
  );
}
