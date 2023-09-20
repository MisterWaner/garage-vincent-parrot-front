import * as yup from 'yup';

const planningSchema = yup.object().shape({
    day: yup.string().required("Le jour est obligatoire"),
    morningOpeningHour: yup.string().required("L'heure d'ouverture est obligatoire"),
    morningClosingHour: yup.string().required("L'heure de fermeture est obligatoire"),
    afternoonOpeningHour: yup.string().required("L'heure d'ouverture est obligatoire"),
    afternoonClosingHour: yup.string().required("L'heure de fermeture est obligatoire"),
});

export { planningSchema };