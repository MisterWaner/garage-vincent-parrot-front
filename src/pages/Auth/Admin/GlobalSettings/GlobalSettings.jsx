import Planning from "../../../../components/Planning/Planning";

const GlobalSettings = () => {
    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion globale
            </h1>
            <section>
                <h2>Gestion des horaires d&apos;ouverture</h2>
                <div>
                    <Planning />
                </div>
            </section>
        </main>
    );
};

export default GlobalSettings;
