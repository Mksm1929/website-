import './Skills.css';
import { skillsData } from "./SkillsData";

type Cards = {
  cardName?: string,
}

export const Skills: React.FC<Cards> = () => {



  return (
    <div className="card-container">
      {skillsData.map((e, id) => {
        if (id === e.id) {
          return <div className="card">
            <div className="card__inner">
              <div className="card__front">
                {e.name}
              </div>
              <div className="card__back">
                {e.name}
              </div>
            </div>
          </div>
        }

      })
      }

    </div>
  )
}
