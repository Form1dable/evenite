const Footer: React.FC = () => {
    return (
        <footer className="mb-12 mt-10 bg-gray-900 w-10/12 max-w-7xl mx-auto">
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-sky-300 font-bold text-3xl"}>Evenite</h1>
                <ul className={"flex space-x-5 font-semibold text-slate-500"}>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
            </div>

            <hr className="my-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5"/>

            <span className="block text-sm font-semibold text-gray-500 sm:text-center dark:text-gray-400">© 2022 <span
                className="hover:underline">form1dable</span>. All Rights Reserved.
    </span>
        </footer>
    )
}

export default Footer