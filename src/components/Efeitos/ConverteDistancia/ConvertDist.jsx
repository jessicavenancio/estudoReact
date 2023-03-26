import { useState, useEffect } from "react"

export function ConvertDist(){
    const [distM, setdistM] = useState(0);
    const [distMm, setdistMm] = useState(0);
    const [distCm, setdistCm] = useState(0);
    const [distKm, setdistKm] = useState(0);

    useEffect (()=>{
        setdistMm(distM * 1000)
        setdistCm(distM * 100 )
        setdistKm(distM / 1000)
    }, [distM]);

    return(
        <div>
            <input type="number"
            placeholder="Distância em metros"
            onChange={(evento) => setdistM(evento.target.value)}
            />
            <p>Valor em metros: {distM}</p>
            <p>Valor em milímetros: {distMm}</p>
            <p>Valor em centímetros: {distCm}</p>
            <p>Valor em quilômetros: {distKm}</p>
        </div>
    )
}