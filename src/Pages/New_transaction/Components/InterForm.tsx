import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import axios from "axios";
import { Button } from "primereact/button";
import { WalletDto } from "../../../models/wallet.dto";


export default function InterForm({ walletId }: { walletId: string }) {
  const [amount, setAmount] = useState<number>();
  const [baseDate, setBaseDate] = useState<string | Date | Date[] | null>([
    new Date(),
  ]);
  const [reference, setReference] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [wallets, setWallets] = useState<any[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<WalletDto>()

  const fetchWallets = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/v1/wallets`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('access_token')!}`,
            },
        });
        setWallets(result.data);
    } catch (err) {
        alert(err);
    }

}

useEffect(() => {
  fetchWallets();
}, []);

  const asyncNewInterWallet= async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/transactions/inter-wallet`,
        {
          reference: reference,
          due_date: baseDate,
          type: selectedType,
          amount: amount,
          wallet_id: walletId,
          destinatary_wallet_id: selectedWallet?.id
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


  return (
    <div>
      <div className="grid" style={{ marginTop: "2%" }}>
        <div className="col">
          <span className="p-float-label">
          <Dropdown value={selectedWallet} onChange={(e) => setSelectedWallet(e.value)} options={wallets} optionLabel="name"
            placeholder="Selecione uma carteira" />
            <label htmlFor="type">Carteira Destino</label>
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
      <Button
        label="Salvar"
        onClick={asyncNewInterWallet}
        style={{ marginTop: "10%" }}
      />
    </div>
  );
}
