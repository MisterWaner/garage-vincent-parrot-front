import * as yup from "yup";

const passwordSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
        .required("Le mot de passe est obligatoire"),
    confirmation: yup
        .string()
        .oneOf(
            [yup.ref("password"), null],
            "Le mot de passe et la confirmation doivent être identiques"
        )
        .required("Vous devez confirmer votre mot de passe"),
});

export { passwordSchema };