
const Heading = ({title,subTitle}) => {
    return (
        <div className="text-center md:text-2xl mb-10">
            <h1 className="text-center font-bold">{title}</h1>
            <p className="text-center">{subTitle}</p>
        </div>
    );
};

export default Heading;