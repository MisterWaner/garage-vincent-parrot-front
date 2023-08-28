import * as yup from "yup";

const carSchema = yup.object().shape({
    immat: yup.string().required("L'immatriculation est obligatoire"),
    brand: yup.string().required("Le nom du constructeur est obligatoire"),
    model: yup.string().required("Le nom du modèle est obligatoire"),
    year: yup.number().integer("L'année doit être un entier").required("L'année est obligatoire").max(2023, "L'année doit être inférieure à 2023").min(1960, "L'année doit être supérieure à 1960"),
    color: yup.string().required("La couleur est obligatoire"),
    price: yup.number().positive("Le prix ne peut pas être négatif").required("Le prix est obligatoire"),
    kilometers: yup.number().positive("Le kilométrage ne peut pas être négatif").required("Le kilométrage est obligatoire"),
    puissance: yup.number().integer("La puissance doit être un entier").positive("La puissance ne peut pas être négatif").required("La puissance est obligatoire"),
    motor: yup.string().required("La motorisation est obligatoire"),
    image: yup
        .mixed()
        .notRequired()
        .test("fileSize", "Fichier trop volumineux", (value) => {
            if (!value.length) return true;
            return value[0].size <= 2000000;
        }),
});

export { carSchema };
