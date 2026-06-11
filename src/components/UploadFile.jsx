import { useField } from "formik"
import { Label } from "./ui/label";
import { MdOutlineFileUpload } from "react-icons/md";

const UploadFile = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <div className="flex flex-col">
                <Label
                    htmlFor={props.id || props.name}
                    className="flex items-center">
                    {label}
                </Label>
                <label htmlFor={props.id || props.name} className="flex flex-row gap-3 mt-2">


                    {field.value ? (
                        <img src={URL.createObjectURL(field.value)}
                            alt="Preview"
                            className="w-24 h-24 rounded-sm"></img>
                    ) : (
                        <div className=" text-gray-400 text-4xl w-24 h-24 border border-border bg-background justify-center items-center rounded-sm flex">
                            <MdOutlineFileUpload />
                        </div>
                    )}
                    <div className="flex flex-col gap-1">
                        <span>
                            {field.value ? field.value.name : 'Choose file'}
                        </span>
                        <span>
                            {field.value ? "Click to replace ? " : "Jpg or Png image"}
                        </span>
                    </div>


                </label>


                <input id={props.id || props.name}
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={(e) => {
                        helpers.setValue(e.target.files[0]);
                    }}
                    className="hidden" />
            </div>
        </>
    )
}
export default UploadFile;