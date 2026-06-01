import { useField } from "formik";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input
                {...props}
                {...field} />

            {meta.touched && meta.error ?
                (<div className="error text-sm text-red-400">{meta.error}</div>)
                : null}
        </>
    )
}
export default FormInput;