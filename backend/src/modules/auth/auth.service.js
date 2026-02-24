import bcrypt from 'bcrypt';
import User from '../user/user.model.js';
import {uploadToCloudinary} from '../../config/cloudinary/cloudinary.js';


const signUp = async ( { fullName, name, email, password, bio } ) => {
    const displayName = fullName || name;

    try {

        if (!displayName || !email || !password || !bio) {
            throw new Error('Full name (or name), email, bio and password are required');
        }

        const existingUser = await User.findOne( { email } );

        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ fullName: displayName, email, password: hashedPassword, bio });

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}

const login = async ( { email, password } ) => {

    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    try {
        const user = await User.findOne( { email } );

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        return user;


    } catch (error) {
        throw new Error(error.message);
    }

}


export { signUp, login }