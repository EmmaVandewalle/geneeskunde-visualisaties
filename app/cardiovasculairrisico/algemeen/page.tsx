"use client";

import React from "react";

import manData from '@/public/man-data.json';
import womanData from '@/public/woman-data.json';
import {Table} from "@/app/cardiovasculairrisico/components/Table";
import {Legenda} from "@/app/cardiovasculairrisico/components/Legenda";

export default function CommonPage() {
    return (
        <div className="mx-auto p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-800">
                Cardiovasculair Risico
            </h1>

            <p className="text-zinc-700 dark:text-zinc-300 mb-8 max-w-4xl leading-relaxed">
                Cardiovasculair risico is het verhoogde risico op hart- en vaatziekten.
                Het risico om dit te ontwikkelen kan stijgen bij bijvoorbeeld roken, hoge bloeddruk, diabetes, ongezond eten, te weinig beweging, etc.
                Het berekenen van het risico zegt iets over jouw kans om binnen 10 jaar een ziekte van hart- of bloedvaten te ontwikkelen.
            </p>

            {/** Legenda */}
            <Legenda/>

            {/* MAIN TABLE CONTAINER (Vrouwen en Mannen) */}
            <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">

                {/** Vrouwen */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 dark:border-zinc-600 pb-2 text-gray-800 dark:text-gray-100">
                        Vrouwen
                    </h3>

                    <div className="flex gap-8 w-full max-w-4xl">
                        {/* Non-Smoking Table */}
                        <Table title={"Niet rokers"} data={womanData['non-smoking']}/>

                        {/* Smoking Table */}
                        <Table title={"Rokers"} data={womanData['smoking']}/>
                    </div>
                </div>

                {/** Spacer */}
                <div className="my-6 mx-auto"></div>

                {/** Mannen */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-4 border-b-2 border-gray-300 dark:border-zinc-600 pb-2 text-gray-800 dark:text-gray-100">
                        Mannen
                    </h3>
                    <div className="flex gap-8 w-full max-w-4xl">
                        {/* Non-Smoking Table */}
                        <Table title={"Niet rokers"} data={manData['non-smoking']}/>

                        {/* Smoking Table */}
                        <Table title={"Rokers"} data={manData['smoking']}/>
                    </div>
                </div>
            </div>

            {/* Bronvermelding */}
            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-right">
                Bron: SCORE2 risk prediction algorithms: newmodels to estimate 10-year risk of cardiovascular disease in
                European, European Heart Journal 2021
            </p>
        </div>
    );
}
