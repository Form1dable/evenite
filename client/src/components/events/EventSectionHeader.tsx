import {AiOutlineCaretRight} from "react-icons/ai";

type EventSectionHeaderProps = {
    title: string;
    subtitle: string
}

const EventSectionHeader: React.FC<EventSectionHeaderProps> = ({title, subtitle}) => {
    return (
        <article className={"flex justify-between items-end"}>
            <div>
                <h2 className={"font-semibold uppercase text-slate-400 text"}>{subtitle}</h2>
                <h1 className={"font-rubik font-bold uppercase text-3xl text-sky-300"}>{title}</h1>
            </div>
            <div
                className={"items-center font-semibold flex bg-slate-800 py-2 px-3 rounded scale-90 hover:bg-sky-500 hover:text-white transition-all cursor-pointer"}>
                <span className={"mr-2 text-slate-300"}>View All</span> <span
                className={"text-slate-400"}><AiOutlineCaretRight/></span>
            </div>
        </article>
    )
}

export default EventSectionHeader