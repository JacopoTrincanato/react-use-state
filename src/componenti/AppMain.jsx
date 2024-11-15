//importo lo useState
import { useState } from "react"

//importo languages
import languages from "../database/languages"

//creo il componente AppMain
export default function AppMain() {

    const [active, setActive] = useState(0)

    function handleClick(e) {

        const newActive = Number(e.target.getAttribute('data-index'));

        setActive(newActive)
    }

    return (
        <main>
            <div className="tab">
                {languages.map((language, index) =>

                    <div className="tabItem" key={language.id}>
                        <button className="btn" onClick={handleClick} data-index={index}>{language.title}</button>
                        <div className={active == index ? 'active' : 'hide'}>
                            <h2>{language.title}</h2>
                            <p>{language.description}</p>
                        </div>
                    </div>

                )}

            </div>

        </main>
    )
}