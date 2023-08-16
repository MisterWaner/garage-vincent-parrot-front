import * as yup from "yup";

const reviewSchema = yup.object().shape({
    name: yup.string().min(3, "Votre nom doit contenir au moins 3 caractères").trim().required("Votre nom de famille est obligatoire"),
    firstname: yup.string().min(3, "Votre prénom doit contenir au moins 3 caractères").trim().required("Votre prénom est obligatoire"),
    email: yup.string().email("Votre email n'est pas valide").trim().required("Votre email est obligatoire"),
    message: yup.string().required("Votre message est obligatoire"),
});

export { reviewSchema };
