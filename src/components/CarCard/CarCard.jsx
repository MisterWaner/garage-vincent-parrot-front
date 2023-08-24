import Button from "../Button/Button";
import { useState } from "react";
import CarFormInfoContact from "../Modals/CarFormInfoContact";


const CarCard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/*<!-- Car card component --> */}
            <div className="overflow-hidden rounded bg-white w-80">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src="https://picsum.photos/id/25/800/600"
                        alt="card image"
                        className="aspect-videpo w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-black-02">
                            Greek breakfast
                        </h3>
                        <p className=" text-slate-400"> $8.99</p>
                    </header>
                    <p className="text-black-02">
                        Blueberry Superpower: Vanilla Greek Yogurt + Fresh
                        Blueberries + Granola + Honey.
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <Button name="En savoir plus" fn={() => toggleModal()} />
                </div>
            </div>
            {isOpen && <CarFormInfoContact toggleModal={toggleModal} />}
            {/*<!-- End car card component --> */}
        </>
    );
};

export default CarCard;
