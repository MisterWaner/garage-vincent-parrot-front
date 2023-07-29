import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import CarousselTestimonials from "../../components/CarousselTestimonials/CarousselTestimonials";

const Home = () => {
    return (
        <>
            <main className=" text-white max-w-[1400px] mx-auto mt-[160px] p-5">
                <h1 className="text-center text-3xl text-yellow-02 underline mb-6 sm:text-5xl decoration-red-02">
                    Garage V<span className="text-red-02">.</span> Parrot
                </h1>
                <Slider />
                <section id="mecanique" className="py-14">
                    <Card
                        img="/images/mecanique.jpg"
                        title="Mécanique et Entretien"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita rerum ipsum itaque facilis ea voluptatum et
                    repellat! Nostrum culpa quibusdam eos quia dolor rem nihil
                    reiciendis provident ad vitae veniam eligendi magnam, odit,
                    architecto corporis ex modi impedit expedita quas quod
                    fugiat! Labore nemo rerum perferendis ducimus eveniet, porro
                    odio repellendus molestias amet dolorem alias."
                        button="Nous contacter"
                    />
                </section>
                <section id="carrosserie" className="py-14">
                    <Card
                        img="/images/carrosserie.jpg"
                        title="Carrosserie"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita rerum ipsum itaque facilis ea voluptatum et
                    repellat! Nostrum culpa quibusdam eos quia dolor rem nihil
                    reiciendis provident ad vitae veniam eligendi magnam, odit,
                    architecto corporis ex modi impedit expedita quas quod
                    fugiat! Labore nemo rerum perferendis ducimus eveniet, porro
                    odio repellendus molestias amet dolorem alias."
                    button="Nous contacter"
                    />
                </section>
                <section id="auto" className="py-14">
                    <Card
                        img="/images/vente.jpg"
                        title="Les voitures en stock"
                        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita rerum ipsum itaque facilis ea voluptatum et
                    repellat! Nostrum culpa quibusdam eos quia dolor rem nihil
                    reiciendis provident ad vitae veniam eligendi magnam, odit,
                    architecto corporis ex modi impedit expedita quas quod
                    fugiat! Labore nemo rerum perferendis ducimus eveniet, porro
                    odio repellendus molestias amet dolorem alias."
                    button="Voir les véhicules"
                    />
                </section>
                <section id="avis" className="py-14">
                    <CarousselTestimonials />
                </section>
            </main>
        </>
    );
};

export default Home;
