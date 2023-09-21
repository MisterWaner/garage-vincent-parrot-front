import { useState } from "react";
import AnimatedSection from "../../../components/AnimatedSection/AnimatedSection";
import Slider from "../../../components/Slider/Slider";
import CarousselTestimonials from "../../../components/CarousselTestimonials/CarousselTestimonials";
import ReviewFormModal from "../../../components/Modals/ReviewFormModal";
import Logo from "../../../assets/logo-garage.png"

// Component to display the home page
const Home = () => {
    const [showModal, setShowModal] = useState(false);

    // Function to toggle the modal to add a review
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
                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row gap-4 md:items-center ">
                        <div className="w-full flex justify-center md:w-1/2 md:block lg:w-1/3 my-2 ">
                            <img
                                className="w-1/2  md:w-full "
                                src={Logo}
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                Bienvenue chez Garage V
                                <span className="text-red-02">.</span> Parrot -
                                L&apos;Art de la Conduite
                            </h2>
                            <p className="mt-2 text-lg">
                                Chez{" "}
                                <span className="text-yellow-02 italic font-bold underline underline-offset-2 decoration-red-02">
                                    Garage V. Parrot
                                </span>
                                , nous croyons que l&apos;automobile est bien
                                plus qu&apos;un simple moyen de transport.
                                C&apos;est une passion, une extension de votre
                                vie, et un symbole de liberté. Notre mission est
                                de vous aider à entretenir, réparer et améliorer
                                votre véhicule pour qu&apos;il soit à la hauteur
                                de vos rêves et de vos ambitions.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row-reverse gap-4 md:items-start">
                        <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                            <img
                                className="w-full rounded-md"
                                src="images/mecanique.jpg"
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                Notre Univers Automobile
                            </h2>
                            <p className="mt-2 text-lg">
                                Notre garage est bien plus qu&apos;un endroit où
                                l&apos;on répare des voitures. C&apos;est un
                                lieu où les moteurs chantent, où les problèmes
                                sont résolus, et où les rêves prennent forme.
                                Que vous ayez besoin de notre service de
                                mécanique pour redonner vie à votre bolide ou de
                                notre service de carrosserie pour lui rendre sa
                                splendeur d&apos;antan, nous sommes là pour
                                répondre à vos besoins avec expertise et
                                passion.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row gap-4 md:items-start">
                        <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                            <img
                                className="w-full rounded-md"
                                src="images/carwash.jpg"
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                L&apos;Expertise qui Fait la Différence
                            </h2>
                            <p className="mt-2 text-lg">
                                Notre équipe de mécaniciens et de spécialistes
                                en carrosserie est composée de passionnés de
                                l&apos;automobile. Chacun d&apos;entre nous est
                                fier de son rôle dans la préservation et
                                l&apos;amélioration de ces machines incroyables
                                que sont les voitures. Nous nous engageons à
                                fournir des services de la plus haute qualité,
                                en utilisant les technologies les plus avancées
                                et les meilleures pratiques de l&apos;industrie.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row-reverse gap-4 md:items-start">
                        <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                            <img
                                className="w-full rounded-md"
                                src="images/vente.jpg"
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                Votre Satisfaction, Notre Priorité
                            </h2>
                            <p className="mt-2 text-lg">
                                Chez{" "}
                                <span className="text-yellow-02 italic font-bold underline underline-offset-2 decoration-red-02">
                                    Garage V. Parrot
                                </span>
                                , votre satisfaction est notre boussole. Nous
                                comprenons à quel point votre véhicule est
                                important pour vous, c&apos;est pourquoi nous
                                nous efforçons de dépasser vos attentes à chaque
                                visite. Notre approche personnalisée signifie
                                que nous prenons le temps de vous écouter, de
                                comprendre vos besoins et de vous conseiller sur
                                les meilleures solutions pour votre véhicule.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row gap-4 md:items-start">
                        <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                            <img
                                className="w-full rounded-md"
                                src="images/route.jpg"
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                Au-Delà de la Route
                            </h2>
                            <p className="mt-2 text-lg">
                                Pour nous, les voitures sont plus qu&apos;un
                                simple métier, elles sont une passion qui nous
                                anime. Nous organisons régulièrement des
                                événements et des rencontres pour les amateurs
                                de voitures, car nous croyons en la communauté
                                automobile. Rejoignez-nous pour partager votre
                                amour des voitures et découvrez ce que signifie
                                vraiment être un propriétaire de voiture
                                passionné.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
                <section className="py-14">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
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

                <AnimatedSection>
                    <section className="py-14 flex flex-col md:flex-row-reverse gap-4 md:items-start ">
                        <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                            <img
                                className="w-full rounded-md"
                                src="images/mecanique.jpg"
                                alt=""
                            />
                        </div>
                        <article className="w-full md:w-1/2 lg:w-2/3">
                            <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                                Contactez-nous
                            </h2>
                            <p className="mt-2 text-lg">
                                Que vous soyez un passionné de voitures
                                classiques, un conducteur au quotidien ou
                                simplement à la recherche d&apos;un service de
                                confiance pour votre véhicule,{" "}
                                <span className="text-yellow-02 font-bold underline underline-offset-2 italic decoration-red-02">
                                    Garage V. Parrot
                                </span>{" "}
                                est là pour vous. Découvrez nos services de
                                mécanique et de carrosserie de classe mondiale
                                et prenez le contrôle de votre expérience
                                automobile. <br />
                                <br /> Merci de nous faire confiance pour
                                prendre soin de votre précieux moyen de
                                transport. Chez{" "}
                                <span className="text-yellow-02 italic font-bold underline underline-offset-2 decoration-red-02">
                                    Garage V. Parrot
                                </span>
                                , l&apos;automobile est bien plus qu&apos;un
                                métier, c&apos;est une passion que nous
                                partageons avec vous.
                            </p>
                        </article>
                    </section>
                </AnimatedSection>
            </main>
        </>
    );
};

export default Home;
