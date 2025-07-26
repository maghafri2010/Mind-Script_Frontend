import { createUser, findUserByEmail } from "../models/userModel.js";

export const register = async(req, res) => {
    const {username, firstName, lastName, email, password} = req.body;

    const userExists = await findUserByEmail(email);

    if (userExists) return res.status(400).json({message: "User already exists"});

    const userID = await createUser({username, firstName, lastName, email, password});
    res.status(201).json({message: "User created :", userID})
};