import * as yup from "yup";

const contactSchema = yup.object().shape({
    lastname: yup.string().trim().required("Votre nom de famille est obligatoire"),
    firstname: yup.string().trim().required("Votre prénom est obligatoire"),
    email: yup.string().email("Votre email n'est pas valide").trim().required("Votre email est obligatoire"),
    phone: yup
        .string()
        .length(10, "Votre numéro de téléphone doit contenir 10 chiffres")
        .trim()
        .required("Votre numéro de téléphone est obligatoire"),
    message: yup.string().required("Votre message est obligatoire"),
});

export { contactSchema };
