import React, {useState, useEffect} from "react"

// Redux
import {useSelector, useDispatch} from "react-redux";
import {AppDispatch} from "../app/store";
import {createEvent} from "../features/event/eventSlice";

const CreateEvent = () => {
    const dispatch = useDispatch<AppDispatch>()


    // TODO: Handle form validation
    const [formData, setFormData] = useState({
        title: "",
        organizer: "",
        description: "",
        type: "",
        category: "",
        state: "",
        city: "",
        postal: "",
        street: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: ""
    })


    const handleClick = () => {
        const {
            title,
            organizer,
            description,
            type,
            category,
            state,
            city,
            postal,
            street,
            start_time,
            end_time,
            start_date,
            end_date
        } = formData

        const data: EventInterface = {
            title,
            organizer,
            description,
            type,
            category,
            state,
            city,
            postal,
            street,
            start_date: `${start_date} ${start_time}`,
            end_date: `${end_date} ${end_time}`
        }

        dispatch(createEvent(data))

        // TODO: Handle successful and failure notification
        // TODO: Redirect to the event

    }

    return (
        <main>
            <section className={"max-w-3xl mx-auto"}>
                <h1 className={"font-rubik text-center font-bold text-3xl my-10 text-sky-300"}>Create an Event</h1>

                {/* General Informations */}
                <div className={"bg-zinc-800 p-10"}>
                    <h1 className={"text-3xl font-bold text-zinc-300 font-rubik"}>Basic Info</h1>
                    <p className={"font-rubik text-zinc-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>

                    {/* Event Title */}
                    <div className={"mt-8"}>
                        <input type={"text"} className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full"}
                               placeholder={"Event Title *"}
                               required
                               value={formData.title}
                               onChange={(e) => setFormData({...formData, title: e.target.value})}
                        />
                    </div>
                    {/* Event Description */}
                    <div className={"mt-4"}>
                        <input type={"text"} className={"text-sm bg-zinc-900 py-5 px-6 font-semibold w-full"}
                               placeholder={"Event Organizer *"}
                               required
                               value={formData.organizer}
                               onChange={e => setFormData({...formData, organizer: e.target.value})}
                        />
                    </div>
                    {/* Event Organizer */}
                    <div className={"mt-4"}>
                        <textarea className={"text-sm bg-zinc-900 py-5 px-6 font-semibold w-full"}
                                  placeholder={"Event Description *"} rows={5}
                                  required
                                  value={formData.description}
                                  onChange={e => setFormData({...formData, description: e.target.value})}
                        ></textarea>
                    </div>

                    {/*  Event Type & Category  */}
                    <div className={"mt-4 flex justify-between items-center space-x-8"}>
                        <div className={"w-full font-semibold"}>
                            <select name={"Type"}
                                    className={"bg-zinc-900 text-zinc-400 py-5 px-6 shadow w-full text-sm font-semibold"}
                                    value={formData.type}
                                    onChange={e => setFormData({...formData, type: e.target.value})}
                            >
                                <option value={"Type"}>Type *</option>
                                <option value={"CON"}>Conference</option>
                                <option value={"FAI"}>Fair</option>
                                <option value={"FES"}>Festival</option>
                                <option value={"PAR"}>Party</option>
                                <option value={"SEM"}>Seminar</option>
                                <option value={"COM"}>Competition</option>
                                <option value={"OTH"}>Other</option>
                            </select>
                        </div>
                        <div className={"w-full"}>
                            <select name={"Category"}
                                    value={formData.category}
                                    onChange={e => setFormData({...formData, category: e.target.value})}
                                    className={"bg-zinc-900 text-zinc-400 py-5 px-6 shadow w-full text-sm font-semibold"}>
                                <option value={"Type"}>Category *</option>
                                <option value={"EDU"}>Education</option>
                                <option value={"CAR"}>Career</option>
                                <option value={"CUL"}>Culture</option>
                                <option value={"WOR"}>Workshop</option>
                                <option value={"COM"}>Community</option>
                                <option value={"OTH"}>Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className={"bg-zinc-800 p-10 mt-12"}>
                    <h1 className={"text-3xl font-bold text-zinc-300 font-rubik"}>Location</h1>
                    <p className={"font-rubik text-zinc-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>
                    <div className={"mt-8 space-x-8 flex justify-between items-center "}>
                        <button
                            className={"bg-sky-600 font-bold text-sm py-3 px-8 rounded w-full"}>Venue
                        </button>
                        <button
                            className={"bg-zinc-900 font-bold text-sm py-3 px-8 rounded w-full"}>Online
                            Event
                        </button>
                        <button
                            className={"bg-zinc-900 font-bold text-sm py-3 px-8 rounded w-full"}>To
                            Be Announced
                        </button>
                    </div>

                    {/* Venue */}
                    <div className={"mt-8"}>
                        <label className={"font-rubik text-zinc-400"}>Venue Location *</label>
                        <div className={"flex justify-between items-center space-x-3 mt-1"}>
                            <input type={"text"}
                                   className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full"}
                                   required
                                   value={formData.state}
                                   onChange={(e) => setFormData({...formData, state: e.target.value})}
                                   placeholder={"State *"}/>
                            <input type={"text"}
                                   className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full basis-2/3"}
                                   required
                                   value={formData.city}
                                   onChange={(e) => setFormData({...formData, city: e.target.value})}
                                   placeholder={"City *"}/>
                        </div>
                        <div className={"mt-4 flex justify-between items-center space-x-3"}>
                            <input type={"text"}
                                   className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full"}
                                   required
                                   value={formData.street}
                                   onChange={(e) => setFormData({...formData, street: e.target.value})}
                                   placeholder={"Street *"}/>
                            <input type={"text"}
                                   className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full basis-1/4"}
                                   required
                                   value={formData.postal}
                                   onChange={(e) => setFormData({...formData, postal: e.target.value})}
                                   placeholder={"Postal *"}/>

                        </div>

                    </div>
                </div>

                {/* Date and Time */}
                <div className={"bg-zinc-800 p-10 mt-12"}>
                    <h1 className={"text-3xl font-bold text-zinc-300 font-rubik"}>Date and Time</h1>
                    <p className={"font-rubik text-zinc-400"}>Give your event an unique name and tell them
                        why they
                        should come.</p>
                    <div className={"mt-5"}>
                        <div className={"flex justify-between items-center space-x-10"}>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-zinc-400"}>Start Date*</label>
                                <input type={"date"}
                                       className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full text-zinc-600"}
                                       value={formData.start_date}
                                       onChange={(e) => setFormData({...formData, start_date: e.target.value})}/>
                            </div>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-zinc-400"}>Start Time*</label>
                                <input type={"time"}
                                       className={"text-sm bg-zinc-900 py-4 px-6 font-medium w-full text-zinc-600"}
                                       value={formData.start_time}
                                       onChange={(e) => setFormData({...formData, start_time: e.target.value})}/>
                            </div>
                        </div>
                        <div className={"flex justify-between items-center space-x-10 mt-4"}>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-zinc-400"}>End Date*</label>
                                <input type={"date"}
                                       className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full text-zinc-600"}
                                       value={formData.end_date}
                                       onChange={(e) => setFormData({...formData, end_date: e.target.value})}/>
                            </div>
                            <div className={"w-full"}>
                                <label className={"font-rubik text-zinc-400"}>End Time*</label>
                                <input type={"time"}
                                       className={"text-sm bg-zinc-900 py-4 px-6 font-semibold w-full text-zinc-600"}
                                       value={formData.end_time}
                                       onChange={(e) => setFormData({...formData, end_time: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mt-10"}>
                    <button className={"bg-sky-600 font-bold text-xl py-3 px-8 w-full rounded-md"}
                            onClick={handleClick}>Save and Create
                    </button>
                </div>

            </section>
        </main>
    )
}


export default CreateEvent