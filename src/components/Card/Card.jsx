// eslint-disable-next-line react/prop-types
const Card = ({ img, title, content }) => {

    return (
        <>
            {/*<!-- Component: Horizontal card--> */}
            <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                {/*  <!-- Image --> */}
                <figure className="flex-1">
                    <img
                        src={img}
                        alt="card image"
                        className="object-cover min-h-full aspect-auto"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                    <header className="flex gap-4 mb-4">
                        <div>
                            <h3 className="text-xl font-medium text-slate-700">
                                {title}
                            </h3>
                        </div>
                    </header>
                    <p>{content}</p>
                </div>
                {/*  <!-- Action base sized link button --> */}
                <div className="flex justify-end gap-2 p-2 pt-0">
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>Read more</span>
                    </button>
                </div>
            </div>
            {/*<!-- End Horizontal card--> */}
        </>
    );
};

export default Card;
