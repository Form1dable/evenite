import React, {useEffect} from "react"
import {RootState, AppDispatch} from "../app/store"

// Redux
import {useDispatch, useSelector} from "react-redux";
import {getUpcomingEventsList, getExploreEventsList} from "../features/events/eventsSlice";

import EventSectionHeader from "../components/events/EventSectionHeader";
import EventCard from "../components/events/EventCard";
import AnimatedPage from "../components/animation/AnimatedPage";
import ApiResponseError from "../components/ui/ApiResponseError";
import Spinner from "../components/ui/Spinner";


const Events: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const {
        upcomingEventsList,
        exploreEventsList
    } = useSelector<RootState, EventsStateInterface>(state => state.events)


    useEffect(() => {
        dispatch(getUpcomingEventsList(3))
        dispatch(getExploreEventsList(3))
    }, []);

    useEffect(() => {
        console.log(exploreEventsList, "Explore")
        console.log(upcomingEventsList, "Upcoming")
    })

    return (
        <AnimatedPage>
            <main>
                <section>
                    {/* Discover */}
                    <EventSectionHeader title={"Upcomming Events"} subtitle={"Discover"}/>

                    {upcomingEventsList.error ? <ApiResponseError/> : (
                        <article>
                            {upcomingEventsList.loading ? <Spinner/> : (
                                <article className={"flex space-x-6 mt-6"}>
                                    {/*/!*  Event Cards  *!/*/}
                                    {upcomingEventsList.data.map(event => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </article>
                            )}
                        </article>
                    )}
                </section>

                <section className={"mt-16"}>
                    {/* Explore */}
                    <EventSectionHeader title={"Events"} subtitle={"Explore"}/>

                    {exploreEventsList.error ? <ApiResponseError/> : (
                        <article>
                            {exploreEventsList.loading ? <Spinner/> : (
                                <article className={"flex space-x-6 mt-6"}>
                                    {/*  Event Cards  */}
                                    {exploreEventsList.data.map(event => (
                                        <EventCard key={event.id} event={event}/>
                                    ))}
                                </article>
                            )}
                        </article>
                    )}
                </section>

            </main>
        </AnimatedPage>
    )
}

export default Events