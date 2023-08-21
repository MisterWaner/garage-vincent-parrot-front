import * as yup from "yup";

const employeeSchema = yup.object().shape({
    lastname: yup.string().required("Le nom est obligatoire"),
    firstname: yup.string().required("Le prénom est obligatoire"),
    email: yup.string().trim().email("L'email n'est pas valide").required("L'email est obligatoire"),
    service: yup.string().required("Le nom du service est obligatoire"),
})

export { employeeSchema };