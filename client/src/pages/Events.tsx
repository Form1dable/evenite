import React, {useEffect} from "react"
import {RootState, AppDispatch} from "../app/store"

// Redux
import {useDispatch, useSelector} from "react-redux";
import {
    getExploreEventsList,
    getUpcommingEvenstList
} from "../features/events/eventsSlice";

import EventSectionHeader from "../components/events/EventSectionHeader";
import EventCard from "../components/events/EventCard";
import AnimatedPage from "../components/animation/AnimatedPage";


const Events: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const upcommingEventsList = useSelector<RootState, EventInterface[]>(state => state.events.data.upcommingEventsList)
    const exploreEventsList = useSelector<RootState, EventInterface[]>(state => state.events.data.exploreEventsList)


    useEffect(() => {
        dispatch(getUpcommingEvenstList(3))
        dispatch(getExploreEventsList(3))
    }, []);


    return (
        <AnimatedPage>
            <main>
                <section>
                    {/* Discover */}
                    <EventSectionHeader title={"Upcomming Events"} subtitle={"Discover"}/>

                    <article>
                        <article className={"flex space-x-6 mt-6"}>
                            {/*  Event Cards  */}
                            {upcommingEventsList.map(event => (
                                <EventCard key={event.id} event={event}/>
                            ))}
                        </article>
                    </article>
                </section>

                <section className={"mt-16"}>
                    {/* Explore */}
                    <EventSectionHeader title={"Events"} subtitle={"Explore"}/>

                    <article>
                        <article className={"flex space-x-6 mt-6"}>
                            {/*  Event Cards  */}
                            {exploreEventsList.map(event => (
                                <EventCard key={event.id} event={event}/>
                            ))}
                        </article>
                    </article>
                </section>

            </main>
        </AnimatedPage>
    )
}

export default Events