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
        upcomingEvents: {
            data: EventInterface[],
            success: boolean;
            error: boolean;
            loading: boolean;
            message: "",
        },
        allEvents: {
            data: EventInterface[],
            success: boolean;
            error: boolean;
            loading: boolean;
            message: "",
        },
        upcomingEventsList: {
            data: EventInterface[],
            success: boolean;
            error: boolean;
            loading: boolean;
            message: "",
        },
        exploreEventsList: {
            data: EventInterface[],
            success: boolean;
            error: boolean;
            loading: boolean;
            message: "",
        },
    }
}
