import imgMusic1 from "../../assets/images/1.png";
import imgMusic2 from "../../assets/images/2.png";
import imgMusic3 from "../../assets/images/3.png";
import "./ListMusic.css";
import { Music } from "../Music/Music";


export function ListMusic(){
    return(
        //fragmant = colocar a tag vazia
        <>
            <Music
            image={imgMusic1}
            title = "5GB"
            author = "Node modules"
            />
            <Music 
            image={imgMusic2}
            title = "Oi react"
            author = "Zé HTML e CSS"
            />
            <Music 
            image={imgMusic3}
            title = "Batata"
            author = "Mago Almir"
            />
        </>
    );
};