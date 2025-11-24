import {Stethoscope, TriangleAlert} from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] w-full">
            <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl shadow-lg">
                <h1 className="text-3xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-6 pb-2 border-b-2 border-blue-200 dark:border-blue-800">
                    <Stethoscope className="inline mr-2"/> Medische Visualisaties voor Professionals
                </h1>

                <div
                    className="p-5 mb-8 border-4 border-red-600 dark:border-red-700 bg-red-50 dark:bg-red-900/20 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-center text-red-700 dark:text-red-400 mb-4">
                        <TriangleAlert className="inline mr-2"/> BELANGRIJKE WAARSCHUWING VOOR HET PUBLIEK
                    </h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        Deze site is een <span className="font-bold">visualisatie hulpmiddel</span> en is <span
                        className="font-bold">uitsluitend</span> bedoeld ter
                        ondersteuning van <span
                        className="font-bold">gecertificeerde medische professionals (artsen)</span>.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li className="font-semibold text-red-800 dark:text-red-300">De getoonde visualisaties
                            zijn <span className="font-bold">GEEN DIAGNOSE</span> en vormen geen vervanging voor een
                            medisch consult.
                        </li>
                        <li className="font-semibold text-red-800 dark:text-red-300"><span className="font-bold">ONJUISTE INTERPRETATIE</span> door
                            niet-professionals kan leiden tot ernstige gezondheidsrisico&#39;s.
                        </li>
                        <li className="text-lg mt-2 pt-2 border-t border-red-200 dark:border-red-800">Raadpleeg voor een
                            diagnose, behandeling of medisch advies <span className="font-bold">ALTIJD</span> een
                            gekwalificeerde arts.
                        </li>
                    </ul>
                </div>

                <div
                    className="p-5 border-l-4 border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Doel van de
                        Visualisaties</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Dit platform biedt gedetailleerde, technische visualisaties om professionals te ondersteunen
                        bij:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 dark:text-gray-300">
                        <li>Ondersteuning van patiënteneducatie (wanneer gebruikt door een arts).</li>
                        <li>Makkelijkere visualisaties van complexe concepten binnen geneeskunde.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
