import * as yup from "yup";

const employeeSchema = yup.object().shape({
    lastname: yup.string().required("Le nom est obligatoire"),
    firstname: yup.string().required("Le prénom est obligatoire"),
    services: yup.string().required("Le nom du service est obligatoire"),
})

export { employeeSchema };