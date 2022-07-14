import React from 'react';
import {AiOutlineCaretRight} from "react-icons/ai";

interface EventProp {
    id: number;
    coordinator: string;
    title: string;
    description: string;
    image: string;
    price: number;
    start_date: string;
    end_date: string;
    state: string;
    city: string;
    street: string;
    postal: string;
    slug: string;
}

interface Props {
    event: EventProp
}


const SpotlightEventCard: React.FC<Props> = (props) => {

    const {
        id,
        coordinator,
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
        <div
            className={"w-full max-w-lg bg-slate-700 rounded shadow-md hover:scale-105 hover:ease transition-all duration-300 cursor-pointer"}>
            {/* Image */}
            <div className={"w-full bg-slate-600 h-48"}>
            </div>

            {/* Card content */}
            <div className={"py-4 px-6"}>
                {/* Time and Coordinator */}
                <div className={"flex justify-between items-center"} style={{fontSize: "0.85rem"}}>
                    <p className={"font-bold"}>{coordinator}</p>
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

                    <div
                        className={"items-center font-semibold flex bg-slate-800 py-2 px-3 rounded scale-90 hover:scale-100 transition-all cursor-pointer"}>
                        <span className={"mr-2 text-slate-300"}>View Event</span> <span
                        className={"text-slate-400"}><AiOutlineCaretRight/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotlightEventCard;
