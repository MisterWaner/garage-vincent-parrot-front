import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../Validations/contactValidation.js";
import { sendMailDataToBack } from "../../../services/sendDataToBack";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactSchema),
        mode: "onTouched",
    });

    const onInvalid = (errors) => console.error(errors);

    const onSubmit = async (data, event) => {
        event.preventDefault();

        const mailFormData = new FormData(event.target);
        try {
            const res = await sendMailDataToBack(mailFormData);
            const newMail = res.data;
            console.log("data envoyé :", newMail);
            alert("Votre message a bien été envoyé et sera traité dans les plus brefs délais");
            reset();
            console.log(data);
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    };

    return (
        <main className="max-w-[1440px] mx-auto mt-[160px] p-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Contact
            </h1>
            <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                <form
                    onSubmit={handleSubmit(onSubmit, onInvalid)}
                    action=""
                    className="w-full h-full flex flex-col items-center"
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("lastname")}
                        />
                        {errors.lastname ? (
                            <p className="error-msg text-center">
                                {errors.lastname?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("firstname")}
                        />
                        {errors.firstname ? (
                            <p className="error-msg text-center">
                                {errors.firstname?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("email")}
                        />
                        {errors.email ? (
                            <p className="error-msg text-center">
                                {errors.email?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="phone">Téléphone</label>
                        <input
                            type="phone"
                            name="phone"
                            id="phone"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("phone")}
                        />
                        {errors.phone ? (
                            <p className="error-msg text-center">
                                {errors.phone?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="subject">Sujet du message</label>
                        <select
                            name="subject"
                            id="subject"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        >
                            <option value="">
                                Veuillez choisir un sujet
                            </option>
                            <option value="Devis Mecanique / Entretien">
                                Devis Mécanique / Entretien
                            </option>
                            <option value="Devis Carrosserie">Devis Carrosserie</option>
                            <option value="Achat d'un véhicule">Achat d&apos;un véhicule</option>
                            <option value="Vente d'un véhicule">Vente d&apos;un véhicule</option>
                            <option value="Prendre un rendez-vous">Prendre un rendez-vous</option>
                            <option value="Autre...">Autre...</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("message")}
                        ></textarea>
                        {errors.message ? (
                            <p className="error-msg text-center">
                                {errors.message?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex justify-end w-full mt-4">
                        <Button name={"Envoyer le message"} />
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Contact;
