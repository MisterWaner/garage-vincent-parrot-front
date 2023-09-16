const Carrosserie = () => {
    return (
        <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Carrosserie
            </h1>
            <section className="py-14 flex flex-col md:flex-row gap-4 md:items-start ">
                <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                    <img
                        className="w-full rounded-md"
                        src="images/mecanique.jpg"
                        alt=""
                    />
                </div>
                <article className="w-full md:w-1/2 lg:w-2/3">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Notre Expertise en Carrosserie
                    </h2>
                    <p className="mt-2 text-lg">
                        Avec des années d&apos;expérience dans le domaine de la
                        carrosserie automobile, notre équipe de spécialistes
                        qualifiés est prête à redonner à votre véhicule son
                        éclat d&apos;origine. Que ce soit pour la réparation de
                        bosses, la peinture, la rénovation de la carrosserie ou
                        la restauration après un accident, nous mettons notre
                        savoir-faire à votre disposition pour que votre véhicule
                        retrouve son aspect neuf.
                    </p>
                </article>
            </section>
            <section className="py-14 flex flex-col md:flex-row-reverse gap-4 md:items-start ">
                <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                    <img
                        className="w-full rounded-md"
                        src="images/frein.jpg"
                        alt=""
                    />
                </div>
                <article className="w-full md:w-1/2 lg:w-2/3">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Qualité et Engagement
                    </h2>
                    <p className="mt-2 text-lg">
                        La qualité est notre credo. Nous nous engageons à
                        utiliser les meilleurs matériaux et techniques de
                        réparation pour garantir que votre carrosserie soit
                        restaurée avec le plus grand soin. Votre véhicule mérite
                        d&apos;être traité avec une attention minutieuse, et
                        c&apos;est précisément ce que nous offrons.
                    </p>
                </article>
            </section>
            <section className="py-14 flex flex-col md:flex-row gap-4 md:items-start ">
                <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                    <img
                        className="w-full rounded-md"
                        src="images/mecanique.jpg"
                        alt=""
                    />
                </div>
                <article className="w-full md:w-1/2 lg:w-2/3">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Service Personnalisé
                    </h2>
                    <p className="mt-2 text-lg">
                        Chez <span className="text-yellow-02 font-bold underline underline-offset-2 decoration-red-02">Garage V. Parrot</span>, chaque véhicule a son
                        histoire unique, et nous en sommes conscients. Notre
                        approche personnalisée signifie que nous écoutons
                        attentivement vos besoins, discutons des options et
                        travaillons en étroite collaboration avec vous pour vous
                        tenir informé de chaque étape du processus de
                        restauration. Votre satisfaction est notre priorité
                        absolue.
                    </p>
                </article>
            </section>
            <section className="py-14 flex flex-col md:flex-row-reverse gap-4 md:items-start ">
                <div className="w-full md:w-1/2 lg:w-1/3 my-2">
                    <img
                        className="w-full rounded-md"
                        src="images/frein.jpg"
                        alt=""
                    />
                </div>
                <article className="w-full md:w-1/2 lg:w-2/3">
                    <h2 className="text-xl text-yellow-02 underline underline-offset-2 decoration-red-02 lg:text-2xl">
                        Nous Contacter
                    </h2>
                    <p className="mt-2 text-lg">
                        N&apos;hésitez pas à nous contacter pour discuter de vos
                        besoins en matière de carrosserie automobile. Que vous
                        ayez besoin d&apos;une réparation mineure, d&apos;une rénovation
                        de carrosserie complète ou d&apos;une peinture sur mesure,
                        notre équipe est là pour vous. Nous sommes impatients de
                        redonner à votre véhicule son aspect d&apos;origine, voire de
                        le transformer en une œuvre d&apos;art roulante.<br/><br/> Merci de
                        nous faire confiance pour prendre soin de l&apos;apparence de
                        votre précieux moyen de transport. Chez <span className="text-yellow-02 font-bold underline underline-offset-2 decoration-red-02">Garage V. Parrot</span>, la carrosserie automobile est plus qu&apos;une
                        réparation, c&apos;est une restauration de l&apos;âme de votre
                        véhicule.
                    </p>
                </article>
            </section>
        </main>
    );
};

export default Carrosserie;
