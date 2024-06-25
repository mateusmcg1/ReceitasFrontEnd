import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import { IngredientesDTO } from "../../../models/IngredientesDTO";

interface EditarIngredienteProps {
  ingrediente: IngredientesDTO | null;
  closeDialog: () => void;
  onSuccess: (severity: "success" | "error" | "info" | "warn" | undefined, summary: string, detail: string) => void;
  onError: (severity: "success" | "error" | "info" | "warn" | undefined, summary: string, detail: string) => void;
}

export default function EditarIngrediente({ ingrediente, closeDialog, onSuccess, onError }: EditarIngredienteProps) {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  useEffect(() => {
    if (ingrediente) {
      setNome(ingrediente.Nome || "");
      setDescricao(ingrediente.descricao || "");
    }
  }, [ingrediente]);

  const updateIngrediente = (e: any) => {
    e.preventDefault();
    if (!ingrediente) return;
    axios
      .put(`http://localhost:3000/chef/edit_ingrediente/${ingrediente.idIngredientes}`, {
        nome,
        descricao,
      })
      .then((result) => {
        if (result.data.Status) {
          closeDialog();
          window.location.reload();
          onSuccess("success", "Sucesso", "Ingrediente atualizado com sucesso!");
        } else {
          onError("error", "Erro", result.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
        onError("error", "Erro", "Erro ao atualizar ingrediente.");
      });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <div>
          <label className="block mb-2">Nome</label>
          <InputText
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Nome"
          />
        </div>
        <div>
          <label className="block mb-2">Descrição</label>
          <InputText
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Descrição"
          />
        </div>
        <Button
          severity="success"
          label="Atualizar"
          onClick={updateIngrediente}
          className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700"
        />
      </div>
    </div>
  );
}
