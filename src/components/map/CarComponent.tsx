import { CarIcon as car } from "./icon/CarIcon";
import { ICarIcon } from "../../interfaces/carIconInterface";
const CarComponent = ({x, y, width, height, rotation} : ICarIcon)=>{
    const styles = {
        transform : `scale(0.1)`
    }
    return(
        <span style={styles}>{car({x, y, width, height, rotation})}</span>
    )

    
}

export default CarComponent;