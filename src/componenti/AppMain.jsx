import { useState } from "react"

//importo languages
import languages from "../database/languages"

//creo il componente AppMain
export default function AppMain() {

    const [active, setActive] = useState(-1)

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
        <main>
            <div className="container">
                <div className="tab">
                    {languages.map((language, index) =>

                        <div className="tabItem" key={language.id}>

                            <button className="btn" onClick={handleClick} data-index={index}>{language.title}</button>

                        </div>

                    )}

                </div>

                <div className="card">
                    {active === -1 ? (<span>Nessun linguaggio selezionato</span>) :

                        (languages.map((language, index) =>

                            <div className={active === index ? 'active' : 'hide'} key={language.id}>
                                <h2>{language.title}</h2>
                                <p>{language.description}</p>
                            </div>

                        )
                        )}
                </div>

            </div>

        </main>
    )
}