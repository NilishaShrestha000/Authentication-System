import Api from "@/Api/api"
import { useNavigate } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
const DeleteQuerry = ({ id }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await Api.delete(`/api/contact/${id}`)
            toast("Deleted Sucessfully")
            navigate("/admin/queries")
        }
        catch (err) {
            toast.error(err.response?.data?.message)
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={handleDelete}
                className="border rounded-md flex items-center gap-2 px-2 py-1 text-md bg-gray-400 hover:bg-red-400 hover:scale-[1.05] duration-300"
            >
                <MdDelete /> Delete

            </button>
            <ToastContainer />
        </>
    )
}
export default DeleteQuerry;