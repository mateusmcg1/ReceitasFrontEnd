import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";

//FALTA IMPLEMENTAR O CSS DE ACORDO COM O PROTÓTIPO//

export default function TransactionForm() {
  const [value1, setValue1] = useState(0);
  const [date, setDate] = useState<string | Date | Date[] | null>([new Date()]);
  const [reference, setReference] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [checked, setChecked] = useState<boolean>(false);
  // const [installments, setInstallments] = useState<string>({})
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
        value={value1}
        onValueChange={(e) => setValue1(Number(e.value))}
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
      <div className="flex align-items-center">
        {" "}
        <Checkbox
          inputId="installments"
          onChange={(e) => setChecked(e.checked!)}
          checked={checked}
        ></Checkbox>
        <label className="ml-2" htmlFor="installments">Possui parcelamento</label>
      </div>
      {checked === true ?  <div></div> : <></> }
    </div>
  );
}
