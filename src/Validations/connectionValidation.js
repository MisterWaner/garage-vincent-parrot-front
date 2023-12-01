import * as yup from "yup";

const connectionSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email invalide")
        .trim()
        .required("Email obligatoire"),
    password: yup
        .string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/, {
            message: "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial",
        })
        .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
        .max(20, "Votre mot de passe doit contenir 20 caractères maximum")
        .trim()
        .required("Mot de passe obligatoire"),
});

export { connectionSchema };
