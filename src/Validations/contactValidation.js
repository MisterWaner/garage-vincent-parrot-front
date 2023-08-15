import * as yup from "yup";

const contactSchema = yup.object().shape({
    name: yup.string().trim().required("Votre nom de famille est obligatoire"),
    firstname: yup.string().trim().required("Votre prénom est obligatoire"),
    email: yup.string().email().trim().required("Votre email est obligatoire"),
    phone: yup
        .string()
        .trim()
        .required("Votre numéro de téléphone est obligatoire"),
    message: yup.string().required("Votre message est obligatoire"),
});

export { contactSchema };
