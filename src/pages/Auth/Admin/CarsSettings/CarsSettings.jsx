import cars from "../../../../components/CarList/CarData.js";

import Button from "../../../../components/Button/Button";
import CarList from "../../../../components/CarList/CarList";
const CarsSettings = () => {
    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des véhicules
            </h1>
            <section className="mt-10">
                <p>Il y a actuellement {cars.length} véhicules en stock.</p>
                <div className="mt-4 grid lg:grid-cols-2 gap-2 ">
                    <Button name={"Ajouter un véhicule"} fn={() => {}} />
                    <Button name={"Supprimer un véhicule"} fn={() => {}} />
                    <Button name={"Modifier un véhicule"} fn={() => {}} />
                    <Button name={"Chercher un véhicule"} fn={() => {}} />
                </div>
            </section>
            <section className=" mt-10">
                <CarList />
            </section>
        </main>
    );
};

export default CarsSettings;
