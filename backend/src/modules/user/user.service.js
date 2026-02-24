import bcrypt from 'bcrypt';
import User from '../user/user.model.js';
import {uploadToCloudinary} from '../../config/cloudinary/cloudinary.js';



const updateProfileService = async (userId, { profilePic, bio, fullName }) => {
    let updatedUser;

    if (!profilePic) {
        updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true });
    } else {
        const upload = await uploadToCloudinary(profilePic, 'profile_pics');
        updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: upload.secure_url, bio, fullName },
            { new: true }
        );
    }

    return updatedUser;
}


export { updateProfileService }