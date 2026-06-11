import { useField } from "formik"
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Tags = ({ label, ...props }) => {

    const [field] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input className="mt-2"{...props} {...field} />
        </>
    )
}
export default Tags;