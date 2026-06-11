
import Api from "@/Api/api"
import { Formik, Form, FieldArray } from "formik";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/Checkbox";
import Tags from "@/components/Tags";
import UploadFile from "@/components/UploadFile";
import { Label } from "@/components/ui/label";

const PostServices = () => {
    const uploadService = async (value) => {
        try {
            const formData = new FormData();
            formData.append("title", value.title);
            formData.append("shortDescription", value.shortDescription);
            formData.append("description", value.description);
            formData.append("icon", value.icon);
            formData.append("image", value.image);
            formData.append("price", Number(value.price));
            formData.append("currency", value.currency);
            formData.append("isActive", true);
            formData.append("order", value.order);
            value.tags.map(t => t.skills).forEach(tag => formData.append("tags[]", tag));

            const res = await Api.post("/api/services", formData);
            console.log(res.data);
        }
        catch (err) {
            console.log(err.response?.data);
        }
    }

    return (
        <>
            <div className="w-full max-w-2xl mx-auto px-4 py-6">

                <Formik
                    initialValues={{
                        title: "",
                        shortDescription: "",
                        description: "",
                        icon: "",
                        image: "",
                        price: "",
                        currency: "",
                        isActive: "true",
                        order: "",
                        tags: [{ skills: '' }]
                    }}
                    onSubmit={uploadService}>

                    <Form className="border border-gray-500 rounded-2xl px-6 py-5 flex flex-col gap-5">
                        <div className="text-center text-xl lg:text-2xl font-semibold text-orange-400">Upload Services</div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormInput
                                label="Title"
                                name="title"
                                type="text"
                                placeholder="e.g: Web Development"
                            />
                            <FormInput
                                label="Icon"
                                name="icon"
                                type="text"
                                placeholder="e.g: code, global"
                            />
                        </div>


                        <FormInput
                            label="Short Description"
                            name="shortDescription"
                            type="text"
                            placeholder="One line summary of the service"
                            className="mt-2" />


                        <div className="mt-5">
                            <FormInput
                                label="Description"
                                name="description"
                                type="text"
                                placeholder="Enter Title..."
                                className="mt-2" />
                        </div>

                        <div className="border-b m-5"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <UploadFile
                                label="Image"
                                name="image"
                            />

                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <FormInput
                                        label="Price"
                                        name="price"
                                        type="number"
                                        placeholder="500"
                                    />
                                    <FormInput
                                        label="Currency"
                                        name="currency"
                                        type="text"
                                        placeholder="e.g: NPR,USD"
                                    />
                                </div>

                                <FieldArray name="tags">
                                    {({ push, remove, form }) => {
                                        const { values } = form;
                                        return (
                                            <>
                                                <div className="flex flex-col gap-2">
                                                    <Label>Tags</Label>

                                                    {values.tags.map((tag, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <Tags
                                                                name={`tags.${index}.skills`}
                                                                type="text"
                                                                placeholder="e.g: react"
                                                            />
                                                            {
                                                                values.tags.length > 1 &&
                                                                (
                                                                    <Button type="button" onClick={() => remove(index)} >Remove</Button>
                                                                )
                                                            }

                                                        </div>
                                                    ))}
                                                    < Button type="button" className="w-fit" onClick={() => push({ skills: '' })}>Add</Button>
                                                </div>
                                            </>

                                        )
                                    }}
                                </FieldArray>
                            </div>

                        </div>

                        <div className="border border-b m-5"></div>

                        <Checkbox
                            label="Active"
                            name="isActive"
                            type="checkbox">
                            Is this service Active?
                        </Checkbox>


                        <Button>Submit</Button>

                    </Form>
                </Formik >
            </div>
        </>

    )

}

export default PostServices;
