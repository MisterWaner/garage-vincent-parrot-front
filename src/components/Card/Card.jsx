// eslint-disable-next-line react/prop-types
const Card = ({ img, title, content }) => {
    return (
        <>
            {/*<!-- Component: Horizontal card--> */}
            <div className="flex flex-col overflow-hidden bg-yellow-02 rounded text-black-02 sm:flex-row">
                {/*  <!-- Image --> */}
                <figure className="flex-1">
                    <img
                        src={img}
                        alt="card image"
                        className="object-cover min-h-full aspect-auto"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 sm:flex sm:flex-col p-6 sm:mx-6 sm:px-0">
                    <header className="flex gap-4 mb-4">
                        <div>
                            <h2 className="text-2xl font-medium text-black-02">
                                {title}
                            </h2>
                        </div>
                    </header>
                    <p className="sm:grow sm:justify-items-center">{content}</p>
                    {/*  <!-- Action base sized link button --> */}
                    <div className="flex justify-end gap-2 mt-8 p-2 pt-0">
                        <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-bold tracking-wide text-yellow-02 bg-red-02 transition duration-300 hover:bg-black-02 hover:text-yellow-02 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                            <span>Read more</span>
                        </button>
                    </div>
                </div>
            </div>
            {/*<!-- End Horizontal card--> */}
        </>
    );
};

export default Card;
