import { useState } from "react";

import Slider from "../../../components/Slider/Slider";
import Card from "../../../components/Card/Card";
import CarousselTestimonials from "../../../components/CarousselTestimonials/CarousselTestimonials";
import ReviewFormModal from "../../../components/Modals/ReviewFormModal";
import { datas } from "../../../components/Card/CardData";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                    Garage V<span className="text-red-02">.</span> Parrot
                </h1>
                <Slider />

                {datas.map((item) => (
                    <section key={item.id} id={`${item.link}`} className="py-14">
                        <Card
                            img={item.img}
                            title={item.title}
                            contents={item.contents}
                            button={item.button}
                            url={item.url}
                        />
                    </section>
                ))}
                <section id="avis" className="py-14">
                    <h2 className="text-3xl font-medium text-yellow-02 mb-2">
                        Ce qu&apos;ils pensent de nous
                    </h2>
                    <CarousselTestimonials />
                    <div className="flex justify-end p-2 gap-2">
                        <button
                            className="font-racer inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-bold tracking-wide text-red-02 bg-yellow-02 transition duration-300 hover:bg-red-02 hover:text-yellow-02 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                            onClick={toggleModal}
                        >
                            Laisser un avis
                        </button>
                    </div>
                    {showModal && <ReviewFormModal toggleModal={toggleModal} />}
                </section>
            </main>
        </>
    );
};

export default Home;
