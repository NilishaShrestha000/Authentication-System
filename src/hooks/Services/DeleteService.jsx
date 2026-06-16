import Api from "@/Api/api";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DeleteService = ({ id }) => {

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await Api.delete(`/api/services/${id}`);
            navigate("/services");
        }
        catch (err) {
            console.log(err.response?.data);
        }
    }

    return (
        <>

            <button
                type="button"
                onClick={handleDelete}
                className="border border-red-400 rounded-md bg-red-400/30 hover:bg-red-400 hover:scale-[1.05] duration-300 font-semibold items-center justify-center flex ">
                <MdDelete />
            </button>

        </>
    )
}

export default DeleteService;