import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const FindEmployee = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/3 text-black-02">
                <h2 className="text-lg font-bold mb-4">Chercher un employé</h2>
                <Button name="Fermer" fn={onClose} />
            </div>
        </div>
    );
};

export default FindEmployee;