import {useState, useEffect} from "react";

import Button from "../../../../components/Button/Button";
import CarList from "../../../../components/CarList/CarList";
const CarsSettings = () => {
    return (
        <main className="max-w-[1440px] mx-[100px] p-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des véhicules
            </h1>
            <section className="lg:ml-[100px] mt-10">
                <p>Il y a actuellement X véhicules en stock.</p>
                <div className="mt-4 grid md:grid-cols-2">
                    <Button name={"Ajouter un véhicule"} fn={() => {}} />
                    <Button name={"Supprimer un véhicule"} fn={() => {}} />
                    <Button name={"Modifier un véhicule"} fn={() => {}} />
                    <Button name={"Chercher un véhicule"} fn={() => {}} />
                    <Button name={"Voir tous les véhicules"} fn={() => {}} />
                </div>
            </section>
            <section className="lg:ml-[100px] mt-10">
                <CarList />
            </section>
        </main>
    );
};

export default CarsSettings;
