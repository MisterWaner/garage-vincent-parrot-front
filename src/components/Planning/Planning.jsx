import { useState, useEffect } from "react";
import Axios from "../../api/axios";

//Component to display the planning in the footer
const Planning = () => {
    const [plannings, setPlannings] = useState([]);

    useEffect(() => {
        const getPlanningsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/plannings");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }
                const data = res.data;

                const indexJours = {
                    Lundi: 1,
                    Mardi: 2,
                    Mercredi: 3,
                    Jeudi: 4,
                    Vendredi: 5,
                    Samedi: 6,
                    Dimanche: 7,
                    Fériés: 8,
                };

                data.sort((a, b) => indexJours[a.day] - indexJours[b.day]);

                setPlannings(data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getPlanningsDataFromBack();
    }, []);

    return (
        <div className="bg-white/50 p-4 rounded-md border border-black-02">
            <table className="w-full">
                <caption className="font-bold text-black-02">
                    Nos horaires d&apos;ouverture
                </caption>
                <thead>
                    <tr className="border-b-2 border-black-02 border-spacing-2 w-full">
                        <th className="w-1/3">Jours</th>
                        <th className="w-1/3">Matin</th>
                        <th className="w-1/3">Après-midi</th>
                    </tr>
                </thead>
                <tbody className="text-black-02 text-center">
                    {plannings.map((data) => (
                        <tr key={data.id} className="w-full">
                            <td className="w-1/3">
                                {data.day.charAt(0).toUpperCase() +
                                    data.day.slice(1)}
                            </td>
                            <td className="w-1/3">
                                <span>{data.morningOpeningHour + " / "}</span>
                                <span>{data.morningClosingHour}</span>
                            </td>
                            <td className="w-1/3">
                                <span>{data.afternoonOpeningHour + " / "}</span>
                                <span>{data.afternoonClosingHour}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Planning;
