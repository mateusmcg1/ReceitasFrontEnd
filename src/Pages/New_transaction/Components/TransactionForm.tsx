import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Installment } from "../../../models/Installment";
import InstallmentForm from "./InstallmentForm";
import axios from "axios";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

export default function TransactionForm({ walletId }: { walletId: string }) {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState<string | Date | Date[] | null>([new Date()]);
  const [reference, setReference] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [installmentNumber, setInstallmentNumber] = useState(0);
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [paid, setPaid] = useState(false);

  const asyncNewTransaction = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/transactions`,
        {
          reference: reference,
          due_date: installmentNumber > 0 ? selectedDate : date,
          installments: installments,
          type: selectedType,
          amount: value,
          wallet_id: walletId,
          paid: paid,
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

  const paidValidate = () => {
    const isPaid =
      installments.filter((i: Installment) => i.paid === false).length > 0;
    setPaid(!isPaid);
  };
  const selectedDate = installments
    .map((i: Installment) => i.due_date).slice(-1)[0];

  useEffect(() => {
    paidValidate();
  }, [installments]);

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
    <div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          <span className="p-float-label">
            <InputText
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <label htmlFor="reference">Referencia</label>
          </span>
        </div>
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          <span className="p-float-label">
            <InputNumber
              id="value"
              value={value}
              onValueChange={(e) => setValue(Number(e.value))}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
            />
            <label htmlFor="amount">Valor</label>
          </span>
        </div>
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          <span className="p-float-label">
            {installmentNumber > 0 ? (
              <Calendar
                value={date}
                onChange={(e: CalendarChangeEvent) => {
                  setDate(e.value!);
                }}
                locale="en"
                disabled
                dateFormat="dd/mm/yy"
              />
            ) : (
              <Calendar
                value={date}
                onChange={(e: CalendarChangeEvent) => {
                  setDate(e.value!);
                }}
                locale="en"
                dateFormat="dd/mm/yy"
              />
            )}
            <label htmlFor="date">Data</label>
          </span>
        </div>
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          <span className="p-float-label">
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
            <label htmlFor="type">Tipo</label>
          </span>
        </div>
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          <span className="p-float-label">
            <InputNumber
              value={installmentNumber}
              onChange={(e) => {
                updateInstallmentNumber(e.value!);
                setInstallmentNumber(e.value!);
              }}
              showButtons
              buttonLayout="horizontal"
              style={{ width: "9rem" }}
              decrementButtonClassName="p-button-secondary"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              min={0}
              decrementButtonIcon="pi pi-minus"
            />
            <label htmlFor="installments">Parcelas</label>
          </span>
        </div>
        {installmentNumber > 0 ? (
          <div></div>
        ) : (
          <div className="col-12">
            <div
              className="flex align-items-center"
              style={{ marginTop: "5%" }}
            >
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
        )}
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col-12">
          {installments.map((newInstallments, index) => {
            return (
              <InstallmentForm
                index={index}
                key={index}
                onHandleUpdate={onUpdateItem}
              ></InstallmentForm>
            );
          })}
        </div>
      </div>
      <div className="grid">
        <div className="col-12">
          <Button
            label="Salvar"
            onClick={asyncNewTransaction}
            style={{ marginTop: "10%" }}
          />
        </div>
      </div>
    </div>
  );
}
