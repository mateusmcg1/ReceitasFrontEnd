import { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { Installment } from "../../../models/Installment";

export default function InstallmentForm({
  index,
  onHandleUpdate,
}: {
  index: number;
  onHandleUpdate: any;
}) {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState<string | Date | Date[] | null>([new Date()]);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const i: Installment = {
      amount: amount,
      due_date: date?.toString(),
      paid: paid,
      number: (index+1)
    };
    onHandleUpdate(i, index);
  }, [amount, date, paid]);

  return (
    <div className="formgrid grid ">
      <div className="field col">
        <label htmlFor="value">Valor (Parcela {index+1})</label>
        <InputNumber
          inputId="currency-br"
          value={amount}
          onValueChange={(e) => setAmount(Number(e.value))}
          mode="currency"
          currency="BRL"
          locale="pt-BR"
        />
      </div>
      <div className="field col">
        <label htmlFor="date">Data</label>
        <Calendar
          value={date}
          onChange={(e: CalendarChangeEvent) => {
            setDate(e.value!);
          }}
          locale="en"
          dateFormat="dd/mm/yy"
        />
      </div>
      <div className="field col">
        <div className="flex align-items-center">
          <Checkbox
            inputId="paid"
            name="paid"
            value=""
            onChange={(e) => setPaid(e.checked!)}
            checked={paid}
          ></Checkbox>
          <label htmlFor="paid" className="ml-2">
            Pago
          </label>
        </div>
      </div>
    </div>
  );
}
