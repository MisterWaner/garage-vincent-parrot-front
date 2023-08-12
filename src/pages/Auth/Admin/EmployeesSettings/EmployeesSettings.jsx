import Button from "../../../../components/Button/Button";

const EmployeesSettings = () => {
    return (
        <main className="max-w-[1440px] mx-[100px] p-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des employés
            </h1>
            <section className="lg:ml-[100px]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum vel sit suscipit iusto magnam eius fuga obcaecati dolorum optio.</p>
                <div className="mt-10 grid md:grid-cols-2">
                    <Button name={"Ajouter un employé"} fn={() => {}} />
                    <Button name={"Supprimer un employé"} fn={() => {}} />
                    <Button name={"Modifier un employé"} fn={() => {}} />
                    <Button name={"Chercher un employé"} fn={() => {}} />
                    <Button name={"Voir tous les employés"} fn={() => {}} />
                </div>
            </section>
        </main>
    );
};

export default EmployeesSettings;
