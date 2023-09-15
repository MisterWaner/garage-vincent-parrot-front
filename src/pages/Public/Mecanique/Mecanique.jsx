import { Link } from "react-router-dom";

const Mecanique = () => {
    return (
        <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Mecanique
            </h1>
            <section className="py-14">
                <div className="w-full flex justify-start my-6">
                    <img className="w-full md:w-1/2 rounded-md lg:w-2/6" src="images/mecanique.jpg" alt="" />
                </div>
                <article className="my-4">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Notre Expertise Mécanique
                    </h2>
                    <p className="mt-2">
                        Avec des années d&apos;expérience dans le domaine de la
                        mécanique automobile, notre équipe de mécaniciens
                        qualifiés est prête à relever tous les défis mécaniques.
                        Que ce soit pour une réparation, un entretien préventif
                        ou une restauration complète, nous mettons à profit
                        notre savoir-faire pour garantir que votre véhicule soit
                        toujours dans un état optimal de fonctionnement.
                    </p>
                </article>

                <div className="w-full flex justify-center my-6">
                    <img className="w-full md:w-1/2 lg:w-2/6" src="images/frein.jpg" alt="" />
                </div>
                <article className="my-4">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Qualité et Engagement
                    </h2>
                    <p className="mt-2">
                        La qualité est notre credo. Nous nous engageons à
                        n&apos;utiliser que des pièces de rechange de haute
                        qualité et les dernières technologies pour réparer et
                        entretenir votre véhicule. Notre objectif est de
                        prolonger la durée de vie de votre voiture tout en
                        maintenant ses performances à leur meilleur niveau.
                    </p>
                </article>

                <div className="w-full flex justify-end my-6">
                    <img className="w-full md:w-1/2 rounded-md lg:w-2/6" src="images/moteur.jpg" alt="" />
                </div>
                <article className="my-4">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Service Personnalisé
                    </h2>
                    <p className="mt-2">
                        Chez Garage V. Parrot, nous considérons chaque client
                        comme un membre de notre famille automobile. Notre
                        approche personnalisée signifie que nous écoutons
                        attentivement vos besoins, discutons des options et vous
                        tenons informés à chaque étape du processus de
                        réparation. Votre satisfaction est notre priorité
                        absolue.
                    </p>
                </article>

                <div className="w-full flex justify-center my-6">
                    <img className="w-full md:w-1/2 rounded-md lg:w-2/6" src="images/image_slider2.jpg" alt="" />
                </div>
                <article>
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Nous Contacter
                    </h2>
                    <p className="mt-2">
                        N&apos;hésitez pas à nous{" "}
                        <span className="bg-yellow-02 text-red-02 p-1 rounded-md">
                            <Link to="/contact">contacter</Link>
                        </span>{" "}
                        pour discuter de vos besoins en matière de mécanique
                        automobile. Que vous ayez besoin d&apos;une simple
                        révision, d&apos;une réparation majeure ou de conseils
                        d&apos;entretien, notre équipe est là pour vous. Nous
                        sommes impatients de vous aider à garder votre véhicule
                        en parfait état de marche. Merci de nous faire confiance
                        pour prendre soin de votre précieux moyen de transport.
                        Chez Garage V. Parrot, la mécanique automobile est notre
                        passion et notre promesse de qualité.
                    </p>
                </article>

                <div className="w-full flex justify-start mt-6">
                    <img className="w-full md:w-1/2 rounded-md lg:w-2/6" src="images/chevrolet_camaro.jpg" alt="" />
                </div>
            </section>
        </main>
    );
};

export default Mecanique;
