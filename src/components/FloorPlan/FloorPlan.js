import Kitchen from "../Kitchen/Kitchen";
import LivingRoom from '../LivingRoom';
import Bath from '../Bath';
import Bed from '../Bed';
import './FloorPlanStyle.css';

const FloorPlan = () => {
    return (
        <div className="FloorPlan">
        <Kitchen/>
        <Bed number='1'/>
        <LivingRoom/>
        <Bed number='2'/>
        <Bed number='3'/>
        <Bath size='half'/>
        <Bath size='full'/>
        </div>
    );
};

export default FloorPlan;