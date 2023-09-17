import * as yup from "yup";

const contactSchema = yup.object().shape({
    lastname: yup.string().trim().required("Votre nom de famille est obligatoire"),
    firstname: yup.string().trim().required("Votre prénom est obligatoire"),
    email: yup.string().email("Votre email n'est pas valide").trim().required("Votre email est obligatoire"),
    phone: yup
    .string()
    .required("Votre numéro de téléphone est obligatoire")
        .matches(/^(0[1-9]-\d{2}-\d{2}-\d{2}-\d{2}|[1-9]-\d{2}-\d{2}-\d{2}-\d{2})$/, "Votre numéro de téléphone est invalide")
        .trim(),
    message: yup.string().required("Votre message est obligatoire"),
});

export { contactSchema };
