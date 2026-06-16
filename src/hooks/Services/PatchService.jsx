import { useNavigate } from "react-router-dom";
import useServices from "./useServices"

const ManageService = () => {
    const navigate = useNavigate();
    const { data } = useServices();
    return (
        <div className="border border-gray-500 rounded-2xl px-6 py-5 flex flex-col gap-5">
            <div className="text-center text-xl lg:text-2xl font-semibold text-orange-400">Manage Services</div>

            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-grat-500 tracking-wide">
                        <th>Title</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Tags</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {data?.map((service) => (
                            <tr key={service.id}>
                                <td>{service.title}</td>
                                <td>{service.price}
                                    {service.currency}</td>
                                <td>{service.isActive ? "Active" : "Inactive"}</td>
                                <td>{service.tags?.map(tags => (
                                    <div key={tags}>
                                        {tags}
                                    </div>
                                ))}</td>
                                <td className="py-3 px-2">
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/admin/services/${service.id}/patch`)}
                                        className="border rounded bg-gray-400/30 hover:bg-gary-400 hover:scale-[1.05] duration-200 items-center justify-center flex px-2 py-1 ">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </>

                </tbody>
            </table >
        </div>
    )
}
export default ManageService;