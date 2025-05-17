import Banner from '../../assets/banner.jpg'
const Hero = () => {
    return (
        <div className='mt-10 mb-10'>
           <img  className='w-150 mx-auto h-80 md:h-150 md:w-400' src={Banner} alt="" />
        </div>
    );
};

export default Hero;