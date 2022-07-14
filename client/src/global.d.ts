export {};

declare global {
    interface EventInterface {
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
}
