import Oven from './Oven';
import Sink from './Sink';
const Kitchen = () => {
    return (
        <div className='room Kitchen'>
            <div>
                <Oven/>
            </div>
            <div>
                <Sink/>
            </div>
            <h1>
                Kitchen
            </h1>
        </div>
    );
}

export default Kitchen;