import React from "react"
import CardMetrics from "../components/ui/CardMetrics";

const Profile: React.FC = () => {
    return (
        <main>

            {/* Card */}
            <section
                className={"bg-gray-800 max-w-4xl mx-auto p-6 shadow rounded-md flex justify-between space-x-10 font-rubik"}>
                {/* Image */}
                <div className={"w-48 h-48 bg-gray-600 rounded-full"} style={{minWidth: "195px"}}></div>
                {/* Profile Content */}
                <div className={"w-full"}>
                    <div>
                        <div className={"flex justify-between items-center"}>
                            <h1 className={"font-bold font-rubik font-medium text-4xl text-sky-300"}>John Doe</h1>
                            <button
                                className={"bg-gray-700 py-2 px-7 text-sm font-medium tracking-widest text-gray-200"}>Edit
                            </button>
                        </div>
                        <p className={"font-medium text-lg text-gray-500"}>@johndoe1212</p>
                    </div>

                    <div className={"mt-4"}>
                        <h1 className={"font-normal text-gray-300 "}>Business Administration with
                            Informatics</h1>
                        <p className={"font-bold text-gray-500"}>Soest</p>
                    </div>

                    <div className={"mt-8"}></div>

                    {/* Card Metric */}

                    <div className={"flex justify-between items-end py-2 border-t border-gray-600"}>

                        {/* Metric Left */}
                        <div className={"space-y-2"}>
                            <div>
                                <span className={"text-lg font-bold text-sky-300 mr-2"}>80</span>
                                <span className={"text-sm font-semibold text-gray-500"}>Events Participated</span>
                            </div>
                            <div>
                                <span className={"text-lg font-bold text-sky-300 mr-2"}>3</span>
                                <span className={"text-sm font-semibold text-gray-500"}>Events Created</span>
                            </div>
                        </div>

                        {/* Metric Right */}
                        <div className={"space-y-2"}>
                            <div>
                                <span className={"text-lg font-bold text-sky-300 mr-2"}>63</span>
                                <span className={"text-sm font-semibold text-gray-500"}>Likes</span>
                            </div>

                            <div>
                                <span className={"text-lg font-bold text-sky-300 mr-2"}>21</span>
                                <span className={"text-sm font-semibold text-gray-500"}>Followed</span>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </main>
    )
}

export default Profile