//importo lo style
import style from './Card.module.css'

//importo languages
import languages from "../../database/languages"

//creo il componente Card
export default function Card() {
    const [active, setActive] = useState(-1)

    return (
        <div className={style.card}>
            {active === -1 ? <span>nessun linguaggio selezionato</span> : (languages.map((language, index) =>

                <div className={active == index ? style.active : style.hide} key={language.id}>
                    <h2>{language.title}</h2>
                    <p>{language.description}</p>
                </div>

            ))}
        </div>
    )
}