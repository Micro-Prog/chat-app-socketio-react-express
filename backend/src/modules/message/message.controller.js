import { 
    getUsersForSidebarService,
    getMessagesForUserService,
    markMessageAsSeenService
 } from './message.service.js';


const getUsersForSidebarController = async (req, res) => {
    try {
        const userId = req.user._id;
        const { users, unseenMessages } = await getUsersForSidebarService(userId);


        res.status(200).json(
            {
                success: true,
                state: "ok",
                users: users,
                unseenMessages: unseenMessages
            }
    );

    } catch (error) { 
        res.status(500).json({ message: 'Error fetching users for sidebar', error: error.message });
    }
}

const getMessagesForUserController = async (req, res) => {
    try {
        const userId = req.user._id;
        const selectedUserId = req.params.userId;


        const messages = await getMessagesForUserService(userId, selectedUserId);

        res.status(200).json(
            {
                success: true,
                state: "ok",
                messages: messages
            }
    );


    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages for user', error: error.message });
    }


}

const markMessageAsSeenController = async (req, res) => {
    try {
        const messageId = req.params.messageId;

        await markMessageAsSeenService(messageId);

        res.status(200).json(
            {
                success: true,
                state: "ok",
                message: "Message marked as seen"
            }
    );


    } catch (error) {
        res.status(500).json({ message: 'Error marking message as seen', error: error.message });
    }
}

export {
    getUsersForSidebarController,
    getMessagesForUserController,
    markMessageAsSeenController
}