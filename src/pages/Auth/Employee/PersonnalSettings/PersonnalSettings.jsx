import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import UpdatePasswordForm from "../../../../components/UpdatePasswordForm/UpdatePasswordForm";

//Component to display the personnal settings of the employee
const PersonnalSettings = () => {
    const [firstname, setFirstname] = useState("");

    //Get the firstname of the user
    useEffect(() => {
        const storedFirstname = Cookies.get("firstname");
        setFirstname(storedFirstname);
    }, []);

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Bonjour {firstname}, bienvenue dans votre compte
            </h1>
            <section className="mt-10">
                <p className="w-full text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    iusto est quo autem, cumque quos? Recusandae amet minus
                    corrupti illo, sed optio eaque, ad veritatis quasi debitis
                    porro magni totam inventore nobis enim ullam nemo rerum
                    minima adipisci expedita ipsum ut, sunt numquam. Quae qui
                    odio, facilis voluptate nulla itaque?
                </p>
            </section>
            <section className="mt-10 p-4 bg-white text-black-02 w-full lg:w-1/2 xl:w-1/3 rounded-md">
                <h2 className="text-lg text-center font-bold mb-4">
                    Modifier mon mot de passe
                </h2>
                <UpdatePasswordForm />
            </section>
        </main>
    );
};

export default PersonnalSettings;
