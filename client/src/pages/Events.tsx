import React, {useEffect} from "react"
import {RootState, AppDispatch} from "../app/store"

// Redux
import {useDispatch, useSelector} from "react-redux";
import {getEvents, reset} from "../features/events/eventSlice";

import EventSectionHeader from "../components/events/EventSectionHeader";
import SpotlightEventCard from "../components/events/SpotlightEventCard";

import banner from "../asset/img/bg-hero.jpg"


const Events: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector<RootState, EventInterface[]>(state => state.events.data)


    useEffect(() => {
        dispatch(getEvents())
    }, []);

    useEffect(() => {
        console.log(data)
    });


    return (
        <main>
            <section>
                {/* Discover */}
                <EventSectionHeader title={"Upcomming Events"} subtitle={"Discover"}/>

                <article className={"flex space-x-6 mt-6"}>
                    {/*  Event Cards  */}
                    {data.map(event => (
                        <SpotlightEventCard key={event.id} event={event}/>
                    ))}
                </article>
            </section>

            <section className={"mt-16"}>
                {/* Explore */}
                <EventSectionHeader title={"All nearby events"} subtitle={"Explore"}/>

                <article>
                    {/*  Event Cards  */}
                </article>
            </section>

        </main>
    )
}

export default Events