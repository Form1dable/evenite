import React from 'react';
import {useNavigate} from "react-router-dom"

import {motion} from "framer-motion";

import {AiOutlineCaretRight} from "react-icons/ai";


interface Props {
    event: EventInterface
}


const EventCard: React.FC<Props> = (props) => {

    const navigate = useNavigate()

    const {
        id,
        user_id,
        title,
        description,
        image,
        price,
        start_date,
        end_date,
        state,
        city,
        street,
        postal,
        slug
    } = props.event;

    return (
        <motion.div
            onClick={() => navigate(`${id}`)}
            whileHover={{
                scale: 1.02,
                transition: {duration: 0.3}
            }}
            className={"w-full max-w-lg bg-gray-800 rounded shadow-md"}
            style={{minWidth: "350px"}}>
            {/* Image */}
            <div className={"w-full bg-slate-600 h-48 cursor-pointer"}>
            </div>

            {/* Card content */}
            <div className={"py-4 px-6"}>
                {/* Time and Coordinator */}
                <div className={"flex justify-between items-center"} style={{fontSize: "0.85rem"}}>
                    <p className={"font-bold"}>{user_id}</p>
                    <p className={"font-bold"}>{start_date}</p>
                </div>

                {/* Content */}
                <p className={"mt-1 text-xl font-semibold tracking-wide"}>{title}</p>
                <p style={{fontSize: "0.85rem"}} className={"font-semibold mt-1"}>{description}</p>

                {/* Location */}
                <div className={"mt-6 flex justify-between items-end"}>
                    <div style={{fontSize: "0.85rem"}} className={"font-semibold text-slate-300"}>
                        <div>
                            <span>{city}, {postal}</span>
                        </div>
                        <div>
                            <span>{street}</span>
                        </div>
                    </div>

                    {/*<div onClick={() => navigate(`${id}`)}*/}
                    {/*     className={"items-center text-gray-300 font-semibold flex bg-slate-800 py-2 px-3 rounded scale-90 hover:scale-100 transition-all cursor-pointer hover:bg-sky-500 hover:text-white"}>*/}
                    {/*        <span className={"mr-2"}>*/}
                    {/*            Attend</span> <span*/}
                    {/*    className={""}><AiOutlineCaretRight/></span>*/}
                    {/*</div>*/}
                    <div className={""}>
                        <span className={"text-lg font-bold text-sky-300 mr-2"}>80</span>
                        <span className={"text-sm font-semibold text-gray-500"}>Participants</span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;
