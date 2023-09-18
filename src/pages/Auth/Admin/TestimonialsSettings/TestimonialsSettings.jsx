import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import ReviewModal from "../../../../components/Modals/ReviewModal";
import Pagination from "../../../../components/Pagination/Pagination";
import Axios from "../../../../api/axios";
import formatBackendDate from "../../../../services/formatBackendDate";
import { deleteReviewDataFromBack } from "../../../../services/deleteDataFromBack";

const TestimonialsSettings = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewPerPage] = useState(5);

    // Pagination
    const indexOfLastReview = currentPage * reviewPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const countUnvalidatedReviews = () => {
        return reviews.filter((review) => !review.isValidated).length;
    }

    useEffect(() => {
        const getReviewsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/reviews");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setReviews(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        }

        getReviewsDataFromBack();
    }, []);

    const formatDate = (date) => {
        const jsDate = formatBackendDate(date);
        return jsDate.toLocaleDateString("fr-FR");
    }

    const markReviewAsValidated = async (reviewId) => {
        const updatedReviews = reviews.map((review) => {
            if (review.id === reviewId) {
                return { ...review, isValidated: true };
            }
            return review;
        });

        setReviews(updatedReviews);

        try {
            const res = await Axios.put(`/api/reviews/${reviewId}`);
            if (res.status === 200) {
                console.log(res.data, "Le commentaire a bien été validé");
                return res.data;
            } else {
                console.error(res.data, "Une erreur est survenue lors de la mise à jour du commentaire");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    };

    const handleReviewDeletionModal = async (review) => {
        try {
            const res = await deleteReviewDataFromBack(review.id);
            if (res) {
                const updatedReviews = reviews.filter((r) => r.id !== review.id);
                setReviews(updatedReviews);
                setSelectedReview(null);
                alert("Le commentaire a bien été supprimé");
                console.log("le commentaire a bien été supprimé");
            } else {
                console.error(res, "Une erreur est SURVENUE");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    }
    

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
                <p>Vous avez actuellement {reviews.length} commentaires dont {countUnvalidatedReviews()} non validés.</p>
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
                            {currentReviews.map((review) => (
                                <tr key={review.id} className="hover:bg-red-02/50">
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <Button name={"Lire"} fn={() => openReview(review)} />
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.firstname} {review.lastname}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.title}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.comment}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.rating}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{formatDate(review.date)}</td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{review.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {
                        selectedReview && (
                            <ReviewModal review={selectedReview} onClose={closeReview}
                                handleReviewDeletionModal={handleReviewDeletionModal}
                            markReviewAsValidated={markReviewAsValidated}/>
                        )
                    }
                </div>
            </section>
            <Pagination itemsPerPage={reviewPerPage} totalItems={reviews.length} paginate={paginate}/>
        </main>
    );
};

export default TestimonialsSettings;
