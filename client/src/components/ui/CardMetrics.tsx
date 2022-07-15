import React from 'react';

const CardMetrics = () => {
    return (
        <div className={"flex justify-between items-center py-2 border-t border-gray-600"}>

            {/* Metric Left */}
            <div>
                <span className={"text-lg font-bold text-sky-300 mr-2"}>80</span>
                <span className={"text-sm font-semibold text-gray-500"}>Participants</span>
            </div>

            {/* Metric Right */}
            <div className={"flex justify-between items-center space-x-4"}>
                <div>
                    <span className={"text-lg font-bold text-sky-300 mr-2"}>63</span>
                    <span className={"text-sm font-semibold text-gray-500"}>Likes</span>
                </div>

                <div>
                    <span className={"text-lg font-bold text-sky-300 mr-2"}>21</span>
                    <span className={"text-sm font-semibold text-gray-500"}>Follows</span>
                </div>
            </div>
        </div>
    );
}

export default CardMetrics;