import React, { useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import assets from "@/lib/assets/assets";

const ProfilePage = () => {
    
    const [selectedImg, setSelectedImg] = useState<File | null>(null);
    const navigate = useNavigate();
    const [name, setName] = useState("Martin Johnson");
    const [bio, setBio] = useState("Hi Everyone, I am Using QuickChat");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className="min-h-screen flex bg-cover bg-no-repeat
        items-center justify-center
        ">
            <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-textColor-tertiary 
            border-2 border-borderColor-quaternary flex items-center justify-between
            max-sm:flex-col-reverse rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1">
                    <h3 className="text-lg">sdsdsd</h3>
                    <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
                        <input
                            onChange={(e) => e.target.files && setSelectedImg(e.target.files[0])}
                            type="file" 
                            id="avatar" 
                            accept=".png, .jpg, .jpeg" 
                            hidden 
                        />
                        <img 
                            src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} 
                            alt=""
                            className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} 
                        />
                        upload profile image
                    </label>
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        required
                        placeholder="Your Name Here"
                        className="p-2 border border-borderColor-tertiary rounded-md focus:outline-none focus:ring-2 focus:ring-formColor-ringFocus"
                    />
                    <textarea  
                        placeholder="Add Bio Here" 
                        required
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                        className="p-2 border border-borderColor-tertiary rounded-md focus:outline-none focus:ring-formColor-ringFocus"
                        rows={4}
                    >
                    </textarea>

                    <button type="submit" className="bg-gradient-to-r bg-gradient-primary">Save</button>
                </form>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default ProfilePage;