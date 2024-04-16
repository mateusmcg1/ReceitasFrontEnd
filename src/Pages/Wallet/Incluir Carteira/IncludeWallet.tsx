import { useEffect, useRef, useState } from "react";
import "./inclusao.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import { Toast, ToastMessage } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { CurrencyEnum } from "../../../Shared/enums/CurrencyEnum";

export default function IncludeWallet({
  closeDialog,
  onSuccess,
  onError,
}: {
  closeDialog: any;
  onSuccess: Function;
  onError: Function;
}) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const sharedClasses = {
    InputText: "w-full p-2 border rounded mb-4",
    select: "w-full p-2 border rounded mb-4",
    button:
      "w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700",
  };
  // const toast = useRef<Toast>(null);

  const [selectedCurrency, setSelectedCurrency] = useState("");
  var currencyTypes = Object.values(CurrencyEnum);

  const addWallets = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/wallets`,
        {
          currency: selectedCurrency,
          name: text1,
          createdAt: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          },
        }
      );
      onSuccess("success", "Success", "Carteira alterada com sucesso.");
      closeDialog();
    } catch (err) {
      if ((err = 400)) {
        onError("error", "Erro", "Invalid currency");
      }
    }
  };

  return (
    <div className="">
      {/* <h1>Incluir Funcionário</h1> */}

      <div className="flex-1 p-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Email</label>
              <InputText
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                type="email"
                className={sharedClasses.InputText}
                placeholder="Email"
              />
              <label className="block mb-2">Senha</label>
              <InputText
                type="password"
                className={sharedClasses.InputText}
                placeholder="Senha"
              />
              <label className="block mb-2">Confirmar Senha</label>
              <InputText
                type="password"
                className={sharedClasses.InputText}
                placeholder="Confirmar Senha"
              />
              <label className="block mb-2">Salário</label>
              <InputText
                type="text"
                className={sharedClasses.InputText}
                placeholder="Salário"
              />
            </div>
            <div>
              <label className="block mb-2">Usuário</label>
              <InputText
                type="text"
                className={sharedClasses.InputText}
                placeholder="Usuário"
              />
              <label className="block mb-2">RG</label>
              <InputText
                type="number"
                className={sharedClasses.InputText}
                placeholder="RG"
              />
              <label className="block mb-2">Data de Nascimento</label>
              <InputText type="date" className={sharedClasses.InputText} />
              <label className="block mb-2">Cargo</label>
              <select className={sharedClasses.select}>
                <option>Degustador</option>
              </select>
              <label className="block mb-2">Restaurante</label>
              <select className={sharedClasses.select}>
                <option>Casa Itália</option>
              </select>
            </div>
          </div>
          <div className="inclusao-button">
            <Button
              severity="success"
              label="Registrar"
              onClick={() => addWallets()}
            />
          </div>
        </div>
      </div>

      {/* <div className='inclusao-frame'>
                <label htmlFor="text1" style={{ marginBottom: "1%" }}>Email</label>
                <InputText value={text1} onChange={(e) => setText1(e.target.value)} />

                <label htmlFor="text2" style={{ marginBottom: "1%" }}>Cargo</label>
                <Dropdown value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.value)} options={currencyTypes}
                    className="w-full md:w-14rem" />
               

                <div className='inclusao-button'>
                    {<Button severity="success" label="Registrar" onClick={() => addWallets()} />}
                </div>
            </div> */}
    </div>
  );
}
