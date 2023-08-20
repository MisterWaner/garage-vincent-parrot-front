import * as yup from "yup";

const createCarSchema = yup.object().shape({
    name: yup.string().required("Le nom est obligatoire"),
    brand: yup.string().required("Le nom du constructeur est obligatoire"),
    model: yup.string().required("Le nom du modèle est obligatoire"),
    year: yup.number().required("L'année est obligatoire").max(2023, "L'année est invalide").min(1960, "L'année est invalide"),
    color: yup.string().required("La couleur est obligatoire"),
    price: yup.number().required("Le prix est obligatoire").positive("Le prix doit être positif"),
    image: yup
        .mixed()
        .notRequired()
        .test("fileSize", "Fichier trop volumineux", (value) => {
            if (!value.length) return true;
            return value[0].size <= 2000000;
        }),
});

export { createCarSchema };
