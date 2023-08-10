import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connectionSchema } from "../../../Validations/connectionValidation.js";
import Axios from "../../../api/axios.js";

const LOGIN_URL = "";

const Connexion = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(connectionSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(LOGIN_URL, data);
            console.log(res);
            const {roleId, token, id} = res.data;




            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <main className="container mx-auto mt-[160px] p-5 text-white">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                    Connexion
                </h1>
                <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        action=""
                        className="w-full h-full flex flex-col items-center"
                    >
                        <div className="flex flex-col mb-4 w-full">
                            <label htmlFor="">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
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
                            <label htmlFor="">Mot de passe</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                {...register("password")}
                            />
                            {errors.password ? (
                                <p className="error-msg text-center">
                                    {errors.password?.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="flex justify-end w-full mt-4">
                            <button
                                type="submit"
                                className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-bold tracking-wide text-red-02 bg-yellow-02 transition duration-300 hover:bg-red-02 hover:text-yellow-02 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                            >
                                Se connecter
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-sm mt-4">
                        Mot de passe oublié ?{" "}
                        <Link
                            className="no-underline text-yellow-02 font-bold hover:underline hover:decoration-red-02"
                            to=""
                        >
                            cliquez-ici
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
};

export default Connexion;
