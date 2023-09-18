import * as yup from "yup";

const reviewSchema = yup.object().shape({
    lastname: yup.string().min(3, "Votre nom doit contenir au moins 3 caractères").trim().required("Votre nom de famille est obligatoire"),
    firstname: yup.string().min(3, "Votre prénom doit contenir au moins 3 caractères").trim().required("Votre prénom est obligatoire"),
    rating: yup.number().min(0, "Votre note doit être comprise entre 0 et 5").max(5, "Votre note doit être comprise entre 0 et 5").required("Votre note est obligatoire"),
    title: yup.string().min(3, "Votre titre doit contenir au moins 3 caractères").required("Votre titre est obligatoire"),
    email: yup.string().email("Votre email n'est pas valide").trim().required("Votre email est obligatoire"),
    comment: yup.string().required("Votre message est obligatoire"),
});

export { reviewSchema };
