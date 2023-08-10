import CarsGallery from "../../../components/CarsGallery/CarsGallery";

const Cars = () => {
    return (
        <>
            <main className="text-white container mx-auto mt-[160px] p-5">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">Notre parc automobile</h1>
                <section className="py-14">
                    <CarsGallery />
                </section>
            </main>
        </>
    )
};

export default Cars;
