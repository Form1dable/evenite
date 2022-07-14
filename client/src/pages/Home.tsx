import React from "react";
import AnimatedPage from "../components/animation/AnimatedPage";
import {Link} from "react-router-dom"

const Home: React.FC = () => {
    return (
        <AnimatedPage>
            <main className={"mt-28"}>
                <section>
                    <div className={"max-w-2xl"}>
                        <h3 className={"text-2xl text-gray-400 font-medium uppercase"}>The fun starts here</h3>
                        <h1 className={"font-bold text-7xl uppercase letter text-sky-300 mb-5"}>Discover Events</h1>
                        <p className={"mt-3 text-gray-400 text-justify"}>lorem Ipsum is simply dummy text of the
                            printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen
                            book. It has survived not only five centuries, but also the leap into electronic
                            typesetting.</p>
                        <Link to="/events">
                            <button className={"bg-sky-500 py-3 px-8 rounded-lg mt-5 font-semibold"}>
                                Explore
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    )
}

export default Home