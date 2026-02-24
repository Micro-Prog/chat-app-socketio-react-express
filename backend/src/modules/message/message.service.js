import mongoose from 'mongoose';
import Message from './message.model.js';
import User from '../user/user.model.js';



const getUsersForSidebarService = async (userId) => {

    try {
        const filteredUsers = await User.find({_id: {$ne: userId}}).select("-password");

        const unseenMessages = {}
        const promises = filteredUsers.map(async (user) => {
            const messages = await Message.find({senderId: user._id, receiverId: userId, seen: false})

            if (messages.length > 0) {
                unseenMessages[user._id] = messages.length
            }
        })

        await Promise.all(promises)

        return { users: filteredUsers, unseenMessages }






    } catch (error) {
        throw new Error('Error fetching users for sidebar: ' + error.message);

    }

}


const getMessagesForUserService = async (userId, selectedUserId) => {

    try {
        const selectedId = mongoose.Types.ObjectId.isValid(selectedUserId)
            ? new mongoose.Types.ObjectId(selectedUserId)
            : null;
        if (!selectedId) {
            return [];
        }

        const messages = await Message.find({
            $or: [
                { senderId: userId, receiverId: selectedId },
                { senderId: selectedId, receiverId: userId }
            ]
        }).sort({ createdAt: 1 });

        await Message.updateMany(
            { senderId: selectedId, receiverId: userId },
            { seen: true }
        );

        return messages

    } catch (error) {
        throw new Error('Error fetching messages for user: ' + error.message);

    }

}

const markMessageAsSeenService = async (messageId) => {

    try {
        await Message.findByIdAndUpdate(messageId, {seen: true}) 

        return 


    } catch (error) {
        throw new Error('Error marking message as seen: ' + error.message);
    }
}


export {
    getUsersForSidebarService,
    getMessagesForUserService,
    markMessageAsSeenService
}