import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import axios from "axios";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";


export default function RecurrencyForm({
  walletId,
  onSuccess,
  onError,
}: {
  walletId: string;
  onSuccess: Function;
  onError: Function;
}) {
  const [amount, setAmount] = useState<number>();
  const [baseDate, setBaseDate] = useState<string | Date | Date[] | null>([
    new Date(),
  ]);
  const [reference, setReference] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [includeWeekends, setIncludeWeekends] = useState(false);

  const asyncNewRecurrency = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/recurrency/${walletId}`,
        {
          reference: reference,
          base_date: baseDate,
          frequency: selectedFrequency,
          type: selectedType,
          amount: amount,
          includeWeekends: includeWeekends,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")!}`,
          },
        }
      );
      onSuccess("success", "Successo", "Transação incluida com sucesso.");
    } catch (err) {
      {
        err = 400
          ? onError("error", "Erro", "Preencha todos os campos obrigatórios")
          : onError("error", "Erro", "");
      }
    }
  };

  return (
    <div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col">
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
        <div className="col">
          <span className="p-float-label">
            <InputNumber
              id="amount"
              value={amount}
              onValueChange={(e) => setAmount(Number(e.value))}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
            />
            <label htmlFor="amount">Valor</label>
          </span>
        </div>
      </div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col">
          <span className="p-float-label">
            <Calendar
              value={baseDate}
              onChange={(e: CalendarChangeEvent) => {
                setBaseDate(e.value!);
              }}
              locale="en"
              dateFormat="dd/mm/yy"
            />
            <label htmlFor="date">Data Base</label>
          </span>
        </div>
        <div className="col">
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
        <div className="col">
          <span className="p-float-label">
            <Dropdown
              value={selectedFrequency}
              onChange={(e: DropdownChangeEvent) =>
                setSelectedFrequency(e.value)
              }
              options={[
                { label: "Diária", value: "DAILY" },
                { label: "Semanal", value: "WEEKLY" },
                { label: "Mensal", value: "MONTHLY" },
              ]}
              optionLabel="label"
              optionValue="value"
              editable
              placeholder="Selecione uma frequência"
              className="w-full md:w-14rem"
            />
            <label htmlFor="frequency">Frequência</label>
          </span>
        </div>
        <div className="col">
          <div
            className="flex jusitfy-content-center"
            style={{ marginTop: "4%" }}
          >
            <Checkbox
              inputId="includeWeekends"
              name="weekends"
              value=""
              onChange={(e) => setIncludeWeekends(e.checked!)}
              checked={includeWeekends}
            ></Checkbox>
            <label htmlFor="paid" className="ml-2">
              Incluir dias não úteis
            </label>
          </div>
        </div>
      </div>
      <Button
        label="Salvar"
        onClick={asyncNewRecurrency}
        style={{ marginTop: "10%" }}
      />
    </div>
  );
}
