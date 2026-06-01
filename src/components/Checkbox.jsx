import { useField } from "formik"

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className="checkbox-input">
                <input type="checkbox" {...props} {...field} />
                {children}
            </label>
            {
                meta.touched && meta.error ?
                    (<div className="error">{meta.error}</div>)
                    : null
            }
        </>
    )
}
export default Checkbox;