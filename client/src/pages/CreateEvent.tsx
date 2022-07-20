const CreateEvent = () => {
    return (
        <main>
            <section className={"bg-gray-800 p-10 max-w-3xl mx-auto"}>

                {/* General Informations */}
                <div>
                    <h1 className={"text-3xl font-bold text-gray-300 font-rubik"}>Basic Info</h1>
                    <p className={"font-rubik text-gray-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>

                    {/* Event Title */}
                    <div className={"mt-6"}>
                        <input type={"text"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                               placeholder={"Event Title *"}/>
                    </div>
                    {/* Event Description */}
                    <div className={"mt-4"}>
                        <input type={"text"} className={"text-sm bg-gray-900 py-5 px-6 font-semibold w-full"}
                               placeholder={"Event Coordinator *"}/>
                    </div>
                    {/* Event Organizer */}
                    <div className={"mt-4"}>
                        <textarea className={"text-sm bg-gray-900 py-5 px-6 font-semibold w-full"}
                                  placeholder={"Event Description *"} rows={5}></textarea>
                    </div>

                    {/*  Event Type & Category  */}
                    <div className={"mt-4 flex justify-between items-center space-x-8"}>
                        <div className={"w-full font-semibold"}>
                            <select name={"Type"}
                                    className={"bg-gray-900 text-gray-400 py-5 px-6 shadow w-full text-sm font-semibold"}>
                                <option value={"Type"}>Type *</option>
                                <option value={"Academic"}>Academic</option>
                                <option value={"Casual"}>Casual</option>
                            </select>
                        </div>
                        <div className={"w-full"}>
                            <select name={"Category"}
                                    className={"bg-gray-900 text-gray-400 py-5 px-6 shadow w-full text-sm font-semibold"}>
                                <option value={"Type"}>Category *</option>
                                <option value={"career"}>Career</option>
                                <option value={"festival"}>Festival</option>
                            </select>
                        </div>

                    </div>
                </div>

                {/* Location */}
                <div className={"mt-12"}>
                    <h1 className={"text-3xl font-bold text-gray-300 font-rubik"}>Location</h1>
                    <p className={"font-rubik text-gray-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>
                    <div className={"mt-4 space-x-8 flex justify-between items-center"}>
                        <button
                            className={"bg-gray-700 font-bold text-sm py-3 px-8 rounded bg-sky-500 w-full"}>Venue
                        </button>
                        <button
                            className={"bg-gray-700 font-bold text-sm py-3 px-8 rounded w-full"}>Online
                            Event
                        </button>
                        <button
                            className={"bg-gray-700 font-bold text-sm py-3 px-8 rounded w-full"}>To
                            Be Announced
                        </button>
                    </div>

                    {/* Venue */}
                    <div className={"mt-8"}>
                        <label className={"font-rubik text-gray-400"}>Venue Location *</label>
                        <div className={"flex justify-between items-center space-x-3 mt-1"}>
                            <input type={"text"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                   placeholder={"City *"}/>
                            <input type={"text"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                   placeholder={"Postal *"}/>
                        </div>
                        <div className={"mt-4"}>
                            <input type={"text"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                   placeholder={"Street *"}/>

                        </div>

                    </div>
                </div>

                {/* Date and Time */}
                <div className={"mt-12"}>
                    <h1 className={"text-3xl font-bold text-gray-300 font-rubik"}>Date and Time</h1>
                    <p className={"font-rubik text-gray-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>
                    <div className={"mt-5"}>
                        <div className={"flex justify-between items-center space-x-10"}>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-gray-400"}>Start Date*</label>
                                <input type={"date"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                       placeholder={"Street *"}/>
                            </div>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-gray-400"}>Start Time*</label>
                                <input type={"time"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                       placeholder={"Street *"}/>
                            </div>
                        </div>
                        <div className={"flex justify-between items-center space-x-10 mt-4"}>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-gray-400"}>End Date*</label>
                                <input type={"date"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                       placeholder={"Street *"}/>
                            </div>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-gray-400"}>End Time*</label>
                                <input type={"time"} className={"text-sm bg-gray-900 py-4 px-6 font-semibold w-full"}
                                       placeholder={"Street *"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mt-10"}>
                    <button className={"bg-sky-500 font-semibold py-3 px-8 w-full rounded-md"}>Save and Create</button>
                </div>

            </section>
        </main>
    )
}


export default CreateEvent