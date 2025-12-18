import { TextWriter } from "../TextWriter";
import "./About.css";


export const About = () => {

    return (
        <div className="container-welcome-p">
            <TextWriter
                text={`Начинающий Frontend-разработчик с уверенными знаниями HTML, CSS, JavaScript\r\n
                   и базовым опытом работы с React.\r\n
                  Читаю профильную литературу, например "Чистый код".\n
                  Быстро обучаюсь, умею работать с Git.\n
                  Ищу первую работу в команде, где смогу развиваться и приносить пользу.`}
                speed={25}
            />
        </div>
    )
}