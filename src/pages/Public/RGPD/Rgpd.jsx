const RgpdPage = () => {
    return (
        <main className="max-w-[1440px] mx-auto mt-[160px] p-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Politique de confidentialité
            </h1>
            <section className="mt-10 md:text-lg">
                <p className="my-4">
                    Les informations recueillies sur ce formulaire sont
                    enregistrées dans un fichier informatisé par{" "}
                    <i className="font-bold">Garage Vincent Parot</i> afin de :
                    <br />
                    <ul className="ml-12">
                        <li className="list-disc">
                            Pouvoir vous recontacter en cas de besoin
                            (informations supplementaires, conseil, envoie de
                            devis, prise de rendez-vous...).
                        </li>
                        <li className="list-disc">
                            Afficher des commentaires si vous avez accepté leur
                            utilisation.
                        </li>
                    </ul>
                </p>
                <p className="my-4">
                    Les données collectées seront communiquées aux
                    seuls destinataires suivants :{" "}
                    <i className="font-bold">Garage Vincent Parot</i>. Les
                    données sont conservées pendant 5 ans maximum.
                </p>
                <p className="my-4">
                    Vous pouvez accéder aux données vous concernant, les
                    rectifier, demander leur effacement ou exercer votre droit à
                    la limitation du traitement de vos données (en fonction de
                    la base légale du traitement. Vous pouvez retirer à tout moment votre consentement au traitement de vos données. Vous pouvez également vous
                    opposer au traitement de vos données. Vous pouvez également
                    exercer votre droit à la portabilité de vos données).{" "}
                </p>
                <p className="my-4">
                    Consultez le site{" "}
                    <a
                        href="https://www.cnil.fr/fr"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline hover:decoration-red-02"
                    >
                        cnil.fr
                    </a>{" "}
                    pour plus d’informations sur vos droits.
                </p>
                <p className="my-4">
                    Pour exercer ces droits ou pour toute question sur le
                    traitement de vos données dans ce dispositif, vous pouvez
                    contacter (le cas échéant, notre délégué à la protection des
                    données ou le service chargé de l’exercice de ces droits) :
                    la direction du garage Vincent Parrot. Si vous estimez,
                    après nous avoir contactés, que vos droits « Informatique et
                    Libertés » ne sont pas respectés, vous pouvez adresser une
                    réclamation à la CNIL.
                </p>
            </section>
        </main>
    );
};

export default RgpdPage;
