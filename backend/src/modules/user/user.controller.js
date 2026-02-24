import { generateToken } from '../../utils/utils.js';
import { updateProfileService } from './user.service.js';


const checkAuth = (req, res) => {
    res.json({
        success: true,
        message: 'Authenticated',
        user: req.user
    });
}

const updateProfileController = async (req, res) => {
    try {
        const updatedUser = await updateProfileService(req.user._id, req.body);

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { checkAuth, updateProfileController }