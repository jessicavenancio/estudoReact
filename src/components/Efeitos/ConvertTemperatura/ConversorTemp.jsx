import "./ConversorTemp.css";
import { useState, useEffect } from "react";

//Efeitos = ações secundárias

export function ConversorTemp(){
    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);

    //use effect = recebe uma função(arrow) e um array
    //passa o efeito desejado e de acordo com a mudança de quem ele acontece
    useEffect(()=>{
        //quando a tempC for alterada essa função/efeito será executado automaticamente
        //será executado automaicamente
        //const resultConvert = tempC * 1.8 + 32;
        //const resultKelvin = Number(tempC) + 273
        setTempF(tempC * 1.8 + 32);
        setTempK(Number(tempC) + 273);
    }, [tempC]);

    return (
    <div>
        <input
        type="number"
        placeholder="Temperatura em C"
        onChange={(evento) => setTempC(evento.target.value)}
        />
        <p>Valor em celsius: {tempC} °C</p>
        <p>Temperatura em Fahrenheit: {tempF} °F</p>
        <p>Temperatura em Kelvin: {tempK} °F</p>
    </div>
    )
}