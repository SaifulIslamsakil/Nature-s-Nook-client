import {  ThreeCircles } from 'react-loader-spinner'
const Loder = () => {
    return (
        <div className='p-5'>
            <ThreeCircles
                visible={true}
                height="60"
                width="60"
                color="orange"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loder;