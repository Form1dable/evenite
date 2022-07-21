import React from 'react';
import {useNavigate} from "react-router-dom"

import {motion} from "framer-motion";

import {AiOutlineCaretRight} from "react-icons/ai";

// Ui
import ProfileBadge from "../ui/ProfileBadge";
import CardMetrics from "../ui/CardMetrics";


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
            className={"w-full max-w-lg bg-zinc-800 rounded shadow-md cursor-pointer"}
            style={{minWidth: "350px"}}>
            {/* Image */}
            <div className={"w-full bg-zinc-600 h-48 cursor-pointer"}>
            </div>

            {/* Card content */}
            <div className={"py-4 px-6"}>
                {/* Time and Coordinator */}
                <div className={"flex justify-between items-center text-gray-400"}>
                    <p className={"font-bold"}>Soest</p>
                    <p className={"font-bold text-sm"}>July 22, 2022</p>
                </div>

                {/* Content */}
                <p className={"mt-4 text-2xl font-bold tracking-wide text-slate-200"}>BBQ Party - {title}</p>
                <p className={"text-sm mt-2 text-gray-500 text-justify"}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s
                </p>


                {/* Location */}
                <div className={"mt-8 flex justify-between items-end"}>
                    <ProfileBadge/>
                    <div className={"font-bold text-gray-400 text-sm"}>
                        <div>
                            <span>{city}, {postal}</span>
                        </div>
                        <div>
                            <span>{street}</span>
                        </div>
                    </div>
                </div>

                <div className={"my-5"}></div>
                <CardMetrics/>
            </div>
        </motion.div>
    );
};

export default EventCard;
