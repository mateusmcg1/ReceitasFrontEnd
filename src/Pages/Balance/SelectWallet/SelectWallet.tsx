import { Dropdown } from "primereact/dropdown";

import { WalletDto } from "../../../models/wallet.dto";
import { useState } from "react";
import { Button } from "primereact/button";

export function SelectWallet({ wallets, onUpdate }: { wallets: WalletDto[], onUpdate: any }) {
    const [selectedWallet, setSelectedWallet] = useState<WalletDto>();

    return <div>
        <Dropdown value={selectedWallet} onChange={(e) =>setSelectedWallet(e.value)} options={wallets} optionLabel="name"
            placeholder="Selecione uma carteira" />
        
        <Button className="card flex flex-wrap justify-content-center" onClick={(e) => onUpdate(selectedWallet)}>Alterar</Button>
    </div>
}