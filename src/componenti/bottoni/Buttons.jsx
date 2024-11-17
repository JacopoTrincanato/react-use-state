//importo useState da react
import { useState } from 'react';

//importo lo style
import style from './Buttons.module.css'

//importo languages
import languages from "../../database/languages"

//creo il componente Buttons
export default function Buttons() {

    const [active, setActive] = useState(-1)

    function handleClick(e) {

        // Aggiungo la classe "clickedButton" al bottone cliccato
        e.target.classList.add('clickedButton');


        const newActive = Number(e.target.getAttribute('data-index'));

        setActive(newActive)


    }

    return (
        <div className={style.tab}>
            {languages.map((language, index) =>

                <div className={style.tabItem} key={language.id}>

                    <button className={`${style.btn} ${active === index ? style.clickedButton : ''}`} onClick={handleClick} data-index={index}>{language.title}</button>

                </div>

            )}

        </div>
    )
}