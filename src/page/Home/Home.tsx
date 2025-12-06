import { SimpleSlider, type Slide } from "./Carousel/Carousel";
import Image1 from "../../assets/Images_Project/TODO_LIST.jpg";
import Image2 from "../../assets/Images_Project/CLICKER_1.jpg";
import { FlyingBall } from "./FlyingBall/FlyingBall";


const images: Slide[] = [
    {
        id: '1',
        src: Image1,
        alt: 'Список задач',
        title: 'Список задач'
    },
    {
        id: '2',
        src: Image2,
        alt: 'Мини игра кликер',
        title: 'Мини игра кликер'
    },
]

export const Home = () => {

    return (

        <div>
            <FlyingBall />
            <SimpleSlider
                slides={images}
            />
        </div>
    )
}