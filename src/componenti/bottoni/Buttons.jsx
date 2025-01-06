//importo lo style
import style from './Buttons.module.css'

//importo languages
import languages from "../../database/languages"

//creo il componente Buttons
export default function Buttons({ active, setActive }) {

    function handleClick(e) {

        // Prendo tutti i bottoni dalla DOM
        const btnEl = document.querySelectorAll('.btn');

        // Rimuovo la classe "clickedButton" da tutti i bottoni
        btnEl.forEach((btn) => btn.classList.remove('clickedButton'));

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