import React, { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import ChatComponent from "./components/chatcomponent/ChatComponent";
import RightSideBar from "./components/rightsidebar/RightSideBar";
import type { User } from "@/lib/types/user/user";


const HomePage = () => {

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    
    
    return (
        <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
            <div className={`backdrop-blur-xl border-2 border-borderColor-main rounded-2xl
                            overflow-hidden h-[100%] grid grid-cols-1 relative 
                            ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}
                            `}
            >
                <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <ChatComponent selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </div>
        </div>
    )
}

export default HomePage;