import { body } from "express-validator";

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("Name is required")
            .isLength({ min: 3 })
            .withMessage("Name must have at least 3 characters"),
        body("email")
            .isEmail()
            .withMessage("Email is not valid")
            .isString()
            .withMessage("Email is required"),
        body("password")
            .isString()
            .withMessage("Password is required")
            .isLength({ min: 6 })
            .withMessage("Password must have at least 6 characters"),
        body("confirmPassword")
            .isString()
            .withMessage("Confirm password is required")
            .isLength({ min: 6 })
            .withMessage("Confirm password must have at least 6 characters")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("Passwords do not match");
                }
                return true
            })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isEmail()
            .withMessage("Email is not valid")
            .isString()
            .withMessage("Email is required"),
        body("password")
            .isString()
            .withMessage("Password is required")
            .isLength({ min: 6 })
            .withMessage("Password must have at least 6 characters"),
    ]
}

export default {userCreateValidation, loginValidation}