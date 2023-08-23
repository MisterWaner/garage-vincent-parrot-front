import { planning } from "../TestDatas/PlanningData.js";

const Planning = () => {
    return (
        <div className="bg-white/50 p-4 rounded-md">
            <table className="w-full">
                <caption className="font-bold text-black-02">
                    Nos horaires d&apos;ouverture
                </caption>
                <thead>
                    <tr className="border-b-2 border-black-02 border-spacing-2">
                        <th>Jours</th>
                        <th>Matin</th>
                        <th>Après-midi</th>
                    </tr>
                </thead>
                <tbody className="text-black-02 text-center">
                    {planning.map((day, index) => (
                        <tr key={index}>
                            <td>
                                {day.day.charAt(0).toUpperCase() +
                                    day.day.slice(1)}
                            </td>
                            <td>
                                <span>{day.openingMorning + "  "}</span>
                                <span>{day.closingMorning}</span>
                            </td>
                            <td>
                                <span>{day.openingAfternoon + "  "}</span>
                                <span>{day.closingAfternoon}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Planning;
