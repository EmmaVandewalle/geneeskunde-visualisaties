import React, {useMemo, useState} from "react";
import {cholesterolLevels, systolicBloodPressureLevels} from "@/app/cardiovasculairrisico/constants";
import {Table} from "@/app/cardiovasculairrisico/components/Table";

type TableView = 'non-smoking' | 'both' | 'smoking';

interface GenderTableProps {
    gender: string,
    data: {
        'non-smoking': Record<string, Record<string, number[]>>,
        'smoking': Record<string, Record<string, number[]>>,
    }
}

export const GenderTable = ({ gender, data }: GenderTableProps) => {
    const allAgeGroups = Object.keys(data['non-smoking']);
    const ageGroupOptions = ['', ...allAgeGroups];

    const [tableView, setTableView] = useState<TableView>('both');
    const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('');
    const [selectedBloodPressure, setSelectedBloodPressure] = useState<string>('');
    const [selectedCholesterol, setSelectedCholesterol] = useState<number>(-1);

    const filteredData = useMemo(() => {
        if (selectedAgeGroup.length === 0) {
            return {
                'non-smoking': data['non-smoking'],
                'smoking': data['smoking']
            };
        }
        return {
            'non-smoking': {[selectedAgeGroup]: data['non-smoking'][selectedAgeGroup] || {}},
            'smoking': {[selectedAgeGroup]: data['smoking'][selectedAgeGroup] || {}}
        };
    }, [selectedAgeGroup, data]);

    return (
        <div className="mx-auto p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-800">
                Visualisatie voor {gender}
            </h1>

            <div className="flex flex-col items-center space-y-4 mb-6">
                {/* Smoking Status Toggle */}
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    {[
                        {id: 'non-smoking', label: 'Alleen niet-rokers', rounded: 'rounded-l-lg'},
                        {id: 'both', label: 'Beide', border: 'border-l border-r border-gray-300 dark:border-zinc-600'},
                        {id: 'smoking', label: 'Alleen rokers', rounded: 'rounded-r-lg'}
                    ].map(({id, label, rounded = '', border = ''}) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setTableView(id as TableView)}
                            className={`px-4 py-2 text-sm font-medium ${rounded} ${border} ${
                                tableView === id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-900 hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Age Group Selector */}
                <div className="w-full max-w-xs">
                    <label htmlFor="ageGroup"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Leeftijdsgroep
                    </label>
                    <select
                        id="ageGroup"
                        value={selectedAgeGroup}
                        onChange={(e) => setSelectedAgeGroup(e.target.value)}
                        className="w-full rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        {ageGroupOptions.map((ageGroup) => (
                            <option key={ageGroup} value={ageGroup}>
                                {ageGroup.length !== 0 ? `${ageGroup} jaar` : ''}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Blood Pressure Selector */}
                <div className="w-full max-w-xs">
                    <label htmlFor="bloodPressure"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bloeddruk
                    </label>
                    <select
                        id="bloodPressure"
                        value={selectedBloodPressure}
                        onChange={(e) => setSelectedBloodPressure(e.target.value)}
                        className="w-full rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value=""></option>
                        {systolicBloodPressureLevels.map((bp) => (
                            <option key={bp} value={bp}>
                                {bp} mmHg
                            </option>
                        ))}
                    </select>
                </div>

                {/** Cholesterol Selector */}
                <div className="w-full max-w-xs">
                    <label htmlFor="cholesterol"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Cholesterol
                    </label>
                    <select
                        id="cholesterol"
                        value={selectedCholesterol}
                        onChange={(e) => setSelectedCholesterol(Number(e.target.value))}
                        className="w-full rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value={-1}></option>
                        {cholesterolLevels.map((cholesterol, index) => (
                            <option key={cholesterol} value={index}>
                                {cholesterol} mg/dL
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                <div className="w-full">
                    <Table
                        title={"Niet-rokers"}
                        data={filteredData['non-smoking']}
                        inactive={tableView === 'smoking'}
                        activeBloodPressure={selectedBloodPressure}
                        activeCholesterol={selectedCholesterol}
                    />
                </div>
                <div className="w-full">
                    <Table
                        title={"Rokers"}
                        data={filteredData['smoking']}
                        inactive={tableView === 'non-smoking'}
                        activeBloodPressure={selectedBloodPressure}
                        activeCholesterol={selectedCholesterol}
                    />
                </div>
            </div>
        </div>
    );
}
