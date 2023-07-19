import express from 'express'
import { login, register } from '../controllers/authController.js'
import { body, validationResult } from "express-validator";
const router = express.Router()

router.post('/register', [body("email", "Enter a Valid Email").isEmail(),
body("username", "Enter a Valid username").isLength({ min: 3 }),
body("password", "Password atleast 5 Charecters").isLength({ min: 5 }),
], register);

router.post('/login', login)
export default router