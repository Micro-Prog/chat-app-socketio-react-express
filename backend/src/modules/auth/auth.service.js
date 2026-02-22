import bcrypt from 'bcrypt';
import User from '../user/user.model.js';

const signUp = async ( { name, email, password, bio } ) => {

    try {

        if (!name || !email || !password || !bio) {
            return res.status(400).json({ message: 'Name, email, bio and password are required' });
        }

        const existingUser = await User.findOne( { email } );

        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword, bio });

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

const checkAuth = (req, res ) => {
    res.json({
        success: true,
        state: "ok",
        message: 'Authenticated',
        user: req.user
    })
}


export { signUp, login, checkAuth }