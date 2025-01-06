//importo useState da React
import { useState } from "react"

//importo languages
import languages from "../database/languages"

//importo Card
import Card from "./card/Card";

//importo Buttons
import Buttons from "./bottoni/Buttons";

//creo il componente AppMain
export default function AppMain() {

    const [active, setActive] = useState(-1)

    return (
        <main>
            <div className="container">

                <Buttons active={active} setActive={setActive} />

                <Card active={active} languages={languages} />

            </div>

        </main>
    )
}