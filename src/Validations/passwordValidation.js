import * as yup from "yup";

const passwordSchema = yup.object().shape({
    password: yup
        .string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/, {
            message: "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial",
        })
        .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
        .max(20, "Votre mot de passe doit contenir 20 caractères maximum")
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