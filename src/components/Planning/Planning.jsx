import { planning } from "../TestDatas/PlanningData.js";

const Planning = () => {
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
                    {planning.map((data, index) => (
                        <tr key={index} className="w-full">
                            <td className="w-1/3">
                                {data.day.charAt(0).toUpperCase() +
                                    data.day.slice(1)}
                            </td>
                            <td className="w-1/3">
                                <span>{data.openingMorning + "  "}</span>
                                <span>{data.closingMorning}</span>
                            </td>
                            <td className="w-1/3">
                                <span>{data.openingAfternoon + "  "}</span>
                                <span>{data.closingAfternoon}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Planning;
