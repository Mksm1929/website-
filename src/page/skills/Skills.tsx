import './Skills.css';
import { skillsData } from "./SkillsData";


export const Skills = () => {

  return (
    <div className="cards">
      {skillsData.map((e, i) => {
        return <div key={`${i + e}${Date.now()}`} className="card">
          <div className="card__inner">
            <div className="card__front">
              <span>{e}</span>
            </div>
            <div className="card__back">
              {e}
            </div>
          </div>
        </div>
      })
      }
    </div>
  )
}
