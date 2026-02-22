import { signUp, login } from './auth.service.js';
import { generateToken } from '../../utils/utils.js';

// Controller for user registration
const signUpController = async (req, res) => {
        const { name, email, password, bio } = req.body;

    try {




        const user = await signUp({ name, email, password, bio });

        const token = generateToken(user._id);


        res.status(201).json({
            success: true,
            state: "ok",
            message: 'User registered successfully',
            user: { id: user._id, name: user.name, email: user.email, bio: user.bio },
            token
        })
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }



}

// Controller for user login
const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await login({ email, password });

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            state: "ok",
            message: 'User logged in successfully',
            user: { id: user._id, name: user.name, email: user.email, bio: user.bio },
            token
        })

    } catch (error) {
        res.status(500).json( { message: error.message } )
}
}



export { signUpController, loginController }