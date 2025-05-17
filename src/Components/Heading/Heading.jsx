
const Heading = ({title,subTitle}) => {
    return (
        <div className="mb-10 md:text-2xl  ">
            <h1 className="text-center font-bold">{title}</h1>
            <p className="text-center">{subTitle}</p>
        </div>
    );
};

export default Heading;