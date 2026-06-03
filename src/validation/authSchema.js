import { MdRememberMe } from "react-icons/md";
import * as Yup from "yup";

export const LoginSchema = Yup.object({

    email: Yup.string()
        .email("Invalid email address")
        .required('Required'),


    password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(/[a-z]/, "Must contain at least 1 small letter.")
        .matches(/[A-Z]/, "Must contain at least 1 capital letter.")
        .matches(/[0-9]/, "Must contain at least 1 number.")
        .required("Required"),

    rememberMe: Yup.boolean()
        .oneOf([true, false], "Invalid vaue").notRequired(),

});

export const RegisterSchema = Yup.object({

    fullName: Yup.string()
        .min(6, "Must be at least 6 charecters")
        .matches(/^[A-Za-z\s]+$/, "Names cannot contain numbers or special charecters.")
        .required('Required'),

    email: Yup.string()
        .email('Enter valid email')
        .required('Required'),

    phone: Yup.string()
        .matches(/^9[0-9]{9}$/, "Numbers must start from 9 and have 10 digits.")
        .required("Required"),

    password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(/[a-z]/, "Must contain at least 1 small letter.")
        .matches(/[A-Z]/, "Must contain at least 1 capital letter.")
        .matches(/[0-9]/, "Must contain at least 1 number.")
        .required("Required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Passwords must match.")
        .required('Required'),

});

export const ForgotSchema = Yup.object({

    email: Yup.string()
        .email("Enter valid email")
        .required("Required")
});

export const ResetSchema = Yup.object({
    newPassword: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(/[a-z]/, "Must contain at least 1 small letter.")
        .matches(/[A-Z]/, "Must contain at least 1 capital letter.")
        .matches(/[0-9]/, "Must contain at least 1 number.")
        .required("Required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], "Confirm Password must match New Password.")
        .required('Required'),


})






// export default authSchema;