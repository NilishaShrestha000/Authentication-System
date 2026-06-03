import { useField } from "formik"



const SelectBox = ({ children, label, ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                {children}
            </select>
        </>
    )
}
export default SelectBox;