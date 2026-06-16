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

export const ContactUs = Yup.object({
    name: Yup.string()
        .min(2, "name must be longer than or equal to 2 characters")
        .required("Required"),

    email: Yup.string()
        .email("Enter valid Email Address")
        .required("Required"),

    phone: Yup.string()
        .matches(/^[0-9]{7,15}$/, "Phone must be 7-15 digits with no letters or special characters")
        .required("Required"),

    subject: Yup.string()
        .min(3, "Subject must be longer than or equal to 3 charecters")
        .required("Required"),

    message: Yup.string()
        .min(10, "Messgae must be longer than or equal to 10 charecters")
        .required("Required")
})






// export default authSchema;