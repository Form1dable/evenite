export {};

declare global {
    interface EventInterface {
        id: number;
        user_id: string;
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

    interface EventStateInterface {
        data: {
            event?: EventInerface;
        };
        loading: boolean;
        success: boolean;
        error: boolean;
        message: string;
    }

    interface EventsStateInterface {
        data: {
            allEvents: EventInterface[],
            upcommingEventsList: EventInterface[],
            allUpcommingsEvents: EventInterface[],
            exploreEventsList: EventInterface[]
        };
        allEventsStatus: "loading" | "error" | "success" | "idle";
        upcommingEventsListStatus: "loading" | "error" | "success" | "idle";
        allUpcommingEventsStatus: "loading" | "error" | "success" | "idle";
        exploreEventsListStatus: "loading" | "error" | "success" | "idle";
        error: string;
    }
}
