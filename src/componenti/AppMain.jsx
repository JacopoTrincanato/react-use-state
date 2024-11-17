//importo Buttons
import Buttons from "./bottoni/Buttons";

//importo Card
import Card from "./card/Card";

//creo il componente AppMain
export default function AppMain() {

    return (
        <main>
            <div className="container">

                <Buttons />

                <Card />



            </div>

        </main>
    )
}