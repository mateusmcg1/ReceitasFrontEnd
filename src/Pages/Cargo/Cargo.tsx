import "./cargo.css";
import { Menu } from "primereact/menu";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { Dialog } from "primereact/dialog";
import { Toast, ToastMessage } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { FuncionarioDTO } from "../../models/FuncionarioDTO";
import IncluirCargo from "./IncluirCargo/IncluirCargo";

export default function Cargo() {
  const [find, setFind] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCargo, setSelectedCargo] = useState<any>();
  const [showNovoCargo, setShowNovoCargo] = useState(false);
  const [showEditCargo, setShowEditCargo] = useState(false);
  const [showDeleteCargo, setShowDeleteCargo] = useState(false);
  const [funcionario, setFuncionario] = useState<FuncionarioDTO[]>([]);
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const showToast = (
    severity: ToastMessage["severity"],
    summary: string,
    detail: string
  ) => {
    toast.current?.show([{ severity, summary, detail }]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/funcionario")
      .then((result) => {
        if (result.data.Status) {
          setFuncionario(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteFuncionario = async (id: number) => {
    axios
      .delete(`http://localhost:3000/auth/delete_funcionario/` + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Status);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wallet-container">
      <Toast ref={toast} />
      <div className="wallet-main-content">
        <h1>Cargo</h1>

        <div className="wallet-menu">
          <div className="wallet-text">
            <span className="p-float-label">
              <InputText
                id="text1"
                value={find}
                onChange={(e) => setFind(e.target.value)}
              />
              <label htmlFor="text1">Nome</label>
            </span>
          </div>

          <div className="wallet-buttons-container">
            <div className="wallet-first-button">
              <Button
                label="FILTRAR"
                // onClick={() => {
                //   fetchWallets({ name: find });
                // }}
              />
            </div>

            <div className="wallet-last-button">
              <Button
                id="inclusaoCargo"
                label="Cargo"
                icon="pi pi-plus"
                onClick={() => setShowNovoCargo(true)}
              />
            </div>
          </div>
        </div>

        <DataTable
          loading={loading}
          selectionMode="single"
          selection={selectedCargo}
          onSelectionChange={(e) => {
            setSelectedCargo(e.value);
          }}
          tableStyle={{ minWidth: "50rem" }}
          value={funcionario}
        >
          <Column
            body={(data) => {
              return (
                <span>
                  {new Date(data.Data_admissao).toLocaleDateString("pt-BR")}
                </span>
              );
            }}
            header="Data de criação"
          ></Column>
          <Column
            field="role"
            header="Cargo"
            body={(data) => (
              <div>
                <span>{data.Cargo}</span>
              </div>
            )}
          ></Column>
          <Column
            field="action"
            header="Ações"
            body={(data) => (
              <div>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-text"
                  onClick={() => {
                    setShowEditCargo(true);
                  }}
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-text"
                  onClick={() => {
                    confirmDialog({
                      message: "Deseja deletar?",
                      header: "Deletar Funcionário",
                      accept: () => deleteFuncionario(data.idFuncionario),
                      reject: () => setShowDeleteCargo(false),
                    });
                  }}
                />
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
      <Dialog
        header="Incluir Cargo"
        visible={showNovoCargo}
        style={{ width: "50vw" }}
        onHide={() => {
          setShowNovoCargo(false);
        }}
      >
        <IncluirCargo
          closeDialog={() => {
            setShowNovoCargo(false);
          }}
          onSuccess={showToast}
          onError={showToast}
        ></IncluirCargo>
      </Dialog>
      <ConfirmDialog />
    </div>
  );
}
