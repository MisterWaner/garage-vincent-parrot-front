import { useState } from "react";
import Button from "../../../../components/Button/Button";
import ReviewModal from "../../../../components/Modals/ReviewModal";
import {reviews} from "../../../../components/TestDatas/ReviewData";

const TestimonialsSettings = () => {

    const [selectedReview, setSelectedReview] = useState(null);

    

    const openReview = (review) => {
        setSelectedReview(review);
    };

    const closeReview = () => {
        setSelectedReview(null);
    };

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des commentaires
            </h1>
            <section className="mt-10">
                <p>Vous avez actuellement {reviews.length} commentaires non approuvés</p>
            </section>
            <section className="mt-10">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Action
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Auteur
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Titre
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Message
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Note
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Date
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    E-mail
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {reviews.map((review) => (
                                <tr key={review.id} className="hover:bg-red-02/50">
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <Button name={"Lire"} fn={() => openReview(review)} />
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.firstname} {review.lastname}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.title}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.message}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.rating}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.date}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {
                        selectedReview && (
                            <ReviewModal review={selectedReview} onClose={closeReview} />
                        )
                    }
                </div>
            </section>
        </main>
    );
};

export default TestimonialsSettings;
