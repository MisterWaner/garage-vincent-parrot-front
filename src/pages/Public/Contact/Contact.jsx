import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../Validations/contactValidation.js";

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

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);
        reset();
    };

    return (
        <main className="max-w-[1440px] mx-auto mt-[160px] p-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Contact
            </h1>
            <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="w-full h-full flex flex-col items-center"
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("name")}
                        />
                        {errors.name ? (
                            <p className="error-msg text-center">
                                {errors.name?.message}
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
                        <label htmlFor="object">Sujet du message</label>
                        <select
                            name="object"
                            id="object"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        >
                            <option value="">
                                Veuillez choisir un sujet
                            </option>
                            <option value="">
                                Devis Mécanique / Entretien
                            </option>
                            <option value="">Devis Carrosserie</option>
                            <option value="">Achat d&apos;un véhicule</option>
                            <option value="">Vente d&apos;un véhicule</option>
                            <option value="">Prendre un rendez-vous</option>
                            <option value="">Autre...</option>
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
