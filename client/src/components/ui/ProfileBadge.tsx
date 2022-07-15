import React from 'react';

const ProfileBadge = () => {
    return (
        <div className={"flex justify-start items-center space-x-2"}>
            <div className={"w-10 h-10 bg-gray-600 rounded-full"}></div>
            <div className={"flex flex-col justify-start leading-5"}>
                <span className={"font-semibold text-sm text-gray-400"}>Organizer</span>
                <span className={"font-semibold text-slate-200 "}>John Doe</span>
            </div>
        </div>
    );
}

export default ProfileBadge;