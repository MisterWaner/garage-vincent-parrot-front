import CarsGallery from "../../../components/CarsGallery/CarsGallery";

const Cars = () => {
    return (
        <>
            <main className="text-white max-w-[1400px] mx-auto mt-[160px] p-5">
                <h1 className="text-center text-3xl text-yellow-02 underline mb-6 sm:text-5xl decoration-red-02">Notre parc automobile</h1>
                <section className="py-14">
                    <CarsGallery />
                </section>
            </main>
        </>
    )
};

export default Cars;
