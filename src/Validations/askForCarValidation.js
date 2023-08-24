import * as yup from "yup";

const askForCarSchema = yup.object().shape({
    ref: yup.string().required("Veuillez saisir la référence"),
    name: yup.string().required("Veuillez saisir votre nom"),
    email: yup
        .string()
        .email("Veuillez saisir un email valide")
        .required("Veuillez saisir un email"),
    phone: yup.string().required("Veuillez saisir un numéro de téléphone"),
    message: yup.string().required("Veuillez saisir un message"),
});

export { askForCarSchema };