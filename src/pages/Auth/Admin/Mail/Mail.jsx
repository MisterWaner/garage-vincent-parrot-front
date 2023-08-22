import { useState } from "react";
import Button from "../../../../components/Button/Button";
import MailModal from "../../../../components/Modals/MailModal";
import { mails } from "../../../../components/TestDatas/MailData.js";

const Mail = () => {

    const [selectedMail, setSelectedMail] = useState(null);

    const openMail = (mail) => {
        setSelectedMail(mail);
    }
    const closeMail = () => {
        setSelectedMail(null);
    }

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Messages
            </h1>
            <section className="mt-10">
                <p>Vous avez actuellement {mails.length} messages non lus.</p>
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
                            {mails.map ((mail) => (
                                <tr key={mail.id} className="hover:bg-red-02/50">
                                    <td className="py-4 px-6 whitespace-nowrap w-1/6">
                                        <Button name={"Lire"} fn={() => openMail(mail)} />
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
                                        {mail.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedMail && (
                        <MailModal mail={selectedMail} onClose={closeMail} />
                    )}
                </div>
            </section>
        </main>
    );
};

export default Mail;
