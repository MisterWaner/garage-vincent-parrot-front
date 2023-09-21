/* eslint-disable react/prop-types */

//Button component to use in the app, it takes a name and a function as props
const Button = ({ name, fn }) => {
    return (
        <button
            className="w-full inline-flex flex-col gap-2 items-center font-bold font-racer rounded p-2 my-2 bg-yellow-02 text-red-02 transition duration-300 hover:bg-red-02 hover:text-yellow-02 active:scale-[0.98]"
            onClick={fn}
        >
            {name}
        </button>
    );
};

export default Button;
