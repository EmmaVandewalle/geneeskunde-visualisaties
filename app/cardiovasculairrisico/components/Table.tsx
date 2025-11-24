import React from "react";
import { cholesterolLevels } from "@/app/cardiovasculairrisico/constants";

interface TableRowProps {
    bloodPressure: string;
    ageGroup: string;
    values: number[];
    activeBloodPressure?: boolean;
    cholesterol?: number;
}

export const TableRow = ({bloodPressure, ageGroup, values, activeBloodPressure = true, cholesterol = -1}: TableRowProps) => {
    return (
        <tr className={!activeBloodPressure ? 'opacity-50 grayscale' : ''}>
            <td className="p-2 border-r border-b border-gray-300 dark:border-zinc-600 font-medium w-1/5 text-centers">
                {bloodPressure}
            </td>
            {values.map((value, index) => {
                let bgColor = '';
                console.log(cholesterol !== -1 && cholesterol !== index, index, cholesterol);
                if (parseInt(ageGroup.split("-")[0]) >= 50) {
                    if (value < 5) bgColor = 'bg-risk-low';
                    else if (value < 10) bgColor = 'bg-risk-medium';
                    else bgColor = 'bg-risk-high';
                } else {
                    if (value < 2.5) bgColor = 'bg-risk-low';
                    else if (value < 7.5) bgColor = 'bg-risk-medium';
                    else bgColor = 'bg-risk-high';
                }

                return (
                    <td
                        key={index}
                        className={`${bgColor} p-2 border-r border-b border-gray-300 dark:border-zinc-600 w-1/5 text-center ${cholesterol !== -1 && cholesterol !== index ? 'opacity-50 grayscale' : ''}`}
                        style={{ color: bgColor ? 'black' : 'inherit'}}
                    >
                        {value}
                    </td>
                );
            })}
        </tr>
    );
};


interface TableProps {
    title: string;
    data: Record<string, Record<string, number[]>>;
    inactive?: boolean;
    activeBloodPressure?: string;
    activeCholesterol?: number;
}

export const Table = ({ title, data, inactive = false, activeBloodPressure = '', activeCholesterol = -1 }: TableProps) => {
    console.log(activeCholesterol);
    return (
        <div className={`flex-1 transition-opacity duration-200 ${inactive ? 'opacity-50 grayscale' : ''}`}>
            <h4 className="text-center font-bold bg-gray-200 dark:bg-zinc-700 p-2 rounded-t-lg">
                {title}
            </h4>
            <div className="border border-gray-300 dark:border-zinc-600 rounded-b-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                    <tr className="bg-gray-100 dark:bg-zinc-800 text-xs font-semibold">
                        <th className="p-2 border-r border-b border-gray-300 dark:border-zinc-600 text-left w-1/5 text-center">
                            Bloeddruk (mm Hg)
                        </th>
                        {cholesterolLevels.map((level) => (
                            <th
                                key={`ns-${level}`}
                                className="p-2 border-r border-b border-gray-300 dark:border-zinc-600"
                            >
                                <div className="flex flex-col">
                                    <span>{level}</span>
                                    <span className="text-xs font-normal">mg/dL</span>
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="text-xs">
                    {Object.entries(data).map(([ageGroup, bpData]) => (
                        <React.Fragment key={`data-${ageGroup}`}>
                            <tr>
                                <td colSpan={cholesterolLevels.length + 1} className="h-4"/>
                            </tr>
                            <tr>
                                <td
                                    colSpan={cholesterolLevels.length + 1}
                                    className="p-2 bg-gray-100 dark:bg-zinc-800 font-semibold w-1/5 text-center"
                                >
                                    {ageGroup} jaar
                                </td>
                            </tr>
                            {Object.entries(bpData as Record<string, number[]>).map(([bp, values]) => (
                                <TableRow
                                    key={`${ageGroup}-${bp}`}
                                    bloodPressure={bp}
                                    ageGroup={ageGroup}
                                    values={values}
                                    activeBloodPressure={activeBloodPressure ? bp === activeBloodPressure : true}
                                    cholesterol={activeCholesterol}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
