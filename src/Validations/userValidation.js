import * as yup from "yup";

const userSchema = yup.object().shape({
    lastname: yup.string().required("Le nom est obligatoire"),
    firstname: yup.string().required("Le prénom est obligatoire"),
    services: yup.string().required("Le nom du service est obligatoire"),
    role: yup.string().required("Le rôle est obligatoire"),
});

export { userSchema };
