import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button/Button.jsx";
import { connectionSchema } from "../../../Validations/connectionValidation.js";
import Cookies from "js-cookie";
import Axios from "../../../api/axios.js";

const Connexion = () => {
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);
    const [role, setRole] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const storedToken = Cookies.get("token");

        if(storedToken) {
            setToken(storedToken);
            setLoggedIn(true);

            const storedUserId = Cookies.get("id");
            setId(storedUserId);
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(connectionSchema),
        mode: "onTouched",
    });

    const handleLogin = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post("/api/login", data);
            console.log(res.data);

            if (res.status === 200) {
                const { token, role, id } = res.data;

                setToken(token);
                setRole(role);
                setLoggedIn(true);
                setId(id);

                Cookies.set("token", token, { secure: true, sameSite: "None", expires: 1 });
                Cookies.set("id", id, { secure: true, sameSite: "None", expires: 1 });
                
                const route = `/${role === 'admin' ? 'admin' : 'employee'}/${id}`;
                navigate(route);
            } else {
                console.error(res, "Échec de l'authentification");
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };

    return (
        <>
            <main className="max-w-[1440px] mx-auto mt-[160px] p-5 text-white">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                    Connexion
                </h1>
                <section className="w-1/2 mx-auto h-full mt-6 mb-12 lg:w-[500px]">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
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
                            <Button name={"Se connecter"}  />
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
