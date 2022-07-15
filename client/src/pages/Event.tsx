import React, {useState, useEffect} from "react"

import {useParams, useNavigate} from "react-router-dom";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../features/event/eventSlice";
import {AppDispatch, RootState} from "../app/store";

import {AiOutlineArrowLeft} from "react-icons/ai"

// Components
import Spinner from "../components/ui/Spinner";
import CardMetrics from "../components/ui/CardMetrics";
import ProfileBadge from "../components/ui/ProfileBadge";

const Event: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {eventId} = useParams()

    const {loading, success, error, data, message} = useSelector<RootState, EventStateInterface>(state => state.event)

    const {id, user_id, title, description, price, start_date, end_date} = data.event

    useEffect(() => {
        dispatch(getEvent(Number(eventId)))

    }, [])

    useEffect(() => {
    })

    return (
        <main className={""}>
            {/* Whole Card*/}
            <section
                className={"w-full mx-auto max-w-6xl"} style={{minWidth: "600px"}}>
                <div onClick={() => navigate(-1)}
                     className={"text-2xl my-5 text-gray-500 hover:text-gray-300 cursor-pointer "}>
                    <AiOutlineArrowLeft/>
                </div>

                {/* Card Upper */}
                <article className={"flex justify-between bg-gray-800"}>
                    {/*Image*/}
                    <div className={"bg-gray-400 w-full basis-3/5"}></div>

                    {/*Content*/}
                    <div className={"basis-2/5 p-6 flex flex-col justify-between space-y-12"}
                         style={{minWidth: "370px"}}>
                        <div>
                            {/* Top info */}
                            <div className={"flex justify-between items-center"}>
                                <p className={"font-bold text-gray-500"}>Soest</p>
                                <p className={"font-bold text-sm text-gray-500"}>July 22, 2022</p>
                            </div>
                            {/* Title */}
                            <h1 className={"mt-5 text-3xl font-bold text-sky-300"}>Festival at Soest during Weekend</h1>

                            {/* Description */}
                            <p className={"text-sm mt-4 font-semibold text-justify text-gray-500"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        <div className={"space-y-5"}>
                            <div className={"flex justify-between items-center"}>
                                <ProfileBadge/>
                                <button
                                    className={"text-sm font-semibold py-2 px-4 bg-gray-700 text-gray-50 rounded-md shadow-gray-900 hover:bg-sky-500 transition-all"}>Join
                                    now
                                </button>
                            </div>


                            <CardMetrics/>
                        </div>
                    </div>
                </article>


                <article className={"flex justify-between mt-10 space-x-5"}>
                    {/*Instruction*/}
                    <div className={"basis-3/5 p-10 bg-gray-800"}>
                        <h1 className={"text-3xl font-bold text-sky-300 mb-3 text-center"}>Instructions</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only
                            five
                            centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                            Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker
                            including
                            versions of Lorem Ipsum.
                        </p>
                    </div>

                    {/*Location*/}
                    <div className={"basis-2/5 bg-gray-800 p-8 text-center"}>
                        <h1 className={"text-3xl font-bold text-sky-300 mb-3"}>Location</h1>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Event
