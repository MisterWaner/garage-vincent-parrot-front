const CarCard = () => {
    return (
        <>
            {/*<!-- Car card component --> */}
            <div className="overflow-hidden rounded bg-yellow-02 w-80">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src="https://picsum.photos/id/25/800/600"
                        alt="card image"
                        className="aspect-videpo w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-black-02">
                            Greek breakfast
                        </h3>
                        <p className=" text-slate-400"> $8.99</p>
                    </header>
                    <p className="text-black-02">
                        Blueberry Superpower: Vanilla Greek Yogurt + Fresh
                        Blueberries + Granola + Honey.
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-red-02 text-yellow-02 px-5 text-sm font-bold tracking-wide transition duration-300 hover:bg-black-02 hover:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>En savoir +</span>
                    </button>
                </div>
            </div>
            {/*<!-- End car card component --> */}
        </>
    );
};

export default CarCard;
