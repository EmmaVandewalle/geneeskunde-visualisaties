export const Legenda = () => {
    return (
        <div
                className="w-80 grid grid-cols-2 gap-x-4 gap-y-2 text-sm bg-gray-100 dark:bg-zinc-700 p-3 rounded-lg border border-gray-300 dark:border-zinc-600 mb-8">
                <h3 className="col-span-2 text-base font-bold mb-2 text-gray-800 dark:text-gray-100">
                    Risico (%)
                </h3>

                {/* Header Row */}
                <div className="font-medium">&lt;50 jaar</div>
                <div className="font-medium">50-69 jaar</div>

                {/* First Risk Level */}
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-low"></span>
                    <span>&lt;2.5%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-low"></span>
                    <span>&lt;5%</span>
                </div>

                {/* Second Risk Level */}
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-medium"></span>
                    <span>2.5% tot &lt;7.5%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-medium"></span>
                    <span>5% tot &lt;10%</span>
                </div>

                {/* Third Risk Level */}
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-high"></span>
                    <span>&ge;7.5%</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 flex-shrink-0 bg-risk-high"></span>
                    <span>&ge;10%</span>
                </div>
            </div>
    );
};
