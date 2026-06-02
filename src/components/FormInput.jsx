import { useField } from "formik";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const FormInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    return (
        <div className="relative">
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input
                {...props}
                {...field}
                type={isPassword ? (showPassword ? "text" : "password") : props.type}
            />

            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-8.5">
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</button>
            )
            }

            {meta.touched && meta.error ?
                (<div className="error text-sm text-red-400">{meta.error}</div>)
                : null}
        </div>
    )
}
export default FormInput;