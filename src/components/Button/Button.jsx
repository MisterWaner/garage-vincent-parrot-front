
// eslint-disable-next-line react/prop-types
const Button = ({name, fn}) => {
    return (
        <button className="w-full inline-flex flex-col gap-2 items-center font-bold font-racer rounded my-2 bg-yellow-02 text-red-02 transition duration-300 hover:bg-red-02 hover:text-yellow-02"
        onClick={fn}
        >
            {name}
        </button>
    );
};

export default Button;
