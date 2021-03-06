export {};

declare global {
    interface EventInterface {
        id?: number;
        user_id?: string;
        title: string;
        description: string;
        organizer: string;
        image?: string;
        type: string;
        category: string;
        start_date: string;
        end_date: string;
        state: string;
        city: string;
        street: string;
        postal: string;
        slug?: string;
    }

    interface EventStateInterface {
        event: {
            data?: EventInterface,
            loading: boolean;
            error: boolean;
            success: boolean;
            message: string;
        },
        createEvent: {
            loading: boolean;
            error: boolean;
            success: boolean;
            message: string;
        },
        updateEvent: {
            loading: boolean;
            error: boolean;
            success: boolean;
            message: string;
        },
        formBuilder: "create" | "update" | "";
        active: boolean;
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

    interface AuthStateInterface {
        user: {
            id: number | null;
            username: string;
            email: string;
        }
        token: {
            access: string;
            refresh: string;
            loading: boolean;
            success: boolean;
            authenticated: boolean;
            error: boolean;
            message: string;
        }
        register: {
            loading: boolean;
            success: boolean;
            error: boolean;
            message: string;
        }

    }
}
