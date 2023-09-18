import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import MailModal from "../../../../components/Modals/MailModal";
import Pagination from "../../../../components/Pagination/Pagination";
import Axios from "../../../../api/axios";
import { deleteMailDataFromBack } from "../../../../services/deleteDataFromBack";
import formatBackendDate from "../../../../services/formatBackendDate";

const Mail = () => {
    const [selectedMail, setSelectedMail] = useState(null);
    const [mails, setMails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const mailPerPage = 5;

    // Pagination
    const indexOfLastItem = currentPage * mailPerPage;
    const indexOfFirstItem = indexOfLastItem - mailPerPage;
    const currentItems = mails.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const countUnreadMails = () => {
        return mails.filter((mail) => !mail.isRead).length;
    };

    useEffect(() => {
        const getMailsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/mails");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setMails(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getMailsDataFromBack();
    }, []);

    const formatDate = (date) => {
        const jsDate = formatBackendDate(date);
        return jsDate.toLocaleDateString("fr-FR");
    };

    const markMailAsRead = async (mailId) => {
        const updatedMails = mails.map((mail) => {
            if (mail.id === mailId) {
                return { ...mail, isRead: true };
            }
            return mail;
        });

        setMails(updatedMails);

        try {
            const res = await Axios.put(`/api/mails/${mailId}`);
            if (res.status === 200) {
                console.log(res.data, "La lecture a bien été mise à jour");
                return res.data;
            } else {
                console.error(
                    res.data,
                    "Une erreur est survenue lors de la mise à jour de la lecture"
                );
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    };

    const handleMailDeletionModal = async (mail) => {
        try {
            const res = await deleteMailDataFromBack(mail.id);
            if (res) {
                const updatedMails = mails.filter((m) => m.id !== mail.id);
                setMails(updatedMails);
                setSelectedMail(null);
                alert("Le message a bien été supprimé");
                console.log("Le message a bien été supprimé");
            } else {
                console.error(res, "Une erreur est SURVENUE");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    };

    const openMail = (mail) => {
        setSelectedMail(mail);
        if (!mail.isRead) {
            markMailAsRead(mail.id);
        }
    };
    const closeMail = () => {
        setSelectedMail(null);
    };

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Messages
            </h1>
            <section className="mt-10">
                <p>
                    Vous avez actuellement {mails.length} messages dont{" "}
                    {countUnreadMails()} non lus.
                </p>
            </section>
            <section className="mt-10">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    Action
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    Auteur
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    E-mail
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    Numéro de téléphone
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    Sujet
                                </th>

                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer w-1/6">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {currentItems.map((mail) => (
                                <tr
                                    key={mail.id}
                                    className="hover:bg-red-02/50"
                                >
                                    <td className="py-4 px-6 whitespace-nowrap w-1/6">
                                        <Button
                                            name={"Lire"}
                                            fn={() => openMail(mail)}
                                        />
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02 w-1/6">
                                        {mail.firstname} {mail.lastname}
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02 w-1/6">
                                        {mail.email}
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02 w-1/6">
                                        {mail.phone}
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02 w-1/6">
                                        {mail.subject}
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02 w-1/6">
                                        {formatDate(mail.date)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedMail && (
                        <MailModal
                            mail={selectedMail}
                            onClose={closeMail}
                            handleMailDeletionModal={handleMailDeletionModal}
                        />
                    )}
                </div>
            </section>
                <Pagination
                    itemsPerPage={mailPerPage}
                    totalItems={mails.length}
                    paginate={paginate}
                />
        </main>
    );
};

export default Mail;
