
import Api from "@/Api/api"
import { Formik, Form } from "formik";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";

const PostServices = () => {
    const uploadService = async (value) => {
        try {
            const res = await Api.post("/api/services",
                {
                    title: value.title,
                    shortDescription: value.shortDescription,
                    description: value.description,
                    image: value.image,
                    price: value.price,
                    currency: value.currency,
                    tags: value.tags
                });
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                    shortDescription: "",
                    description: "",
                    image: "",
                    price: "",
                    currency: "",
                    tags: ""
                }}
                onSubmit={uploadService}>
                <Form className="border p-5 rounded flex flex-col gap-3">
                    <FormInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Enter Title..." />
                    <FormInput
                        label="Short Description"
                        name="shortDescription"
                        type="text"
                        placeholder="Enter Short Description..." />
                    <FormInput
                        label="Descripttion"
                        name="description"
                        type="text"
                        placeholder="Enter Title..." />
                    <FormInput
                        label="Image"
                        name="image"
                        type="img"
                        placeholder="Enter Title..." />
                    <FormInput
                        label="Price"
                        name="price"
                        type="number"
                        placeholder="Enter Course Price..." />
                    <FormInput
                        label="Currency"
                        name="currency"
                        type="text"
                        placeholder="Enter Currency..." />
                    <FormInput
                        label="Tags"
                        name="tags"
                        type="text"
                        placeholder="Enter Tags..." />

                    <Button>Submit</Button>
                </Form>
            </Formik>

        </>

    )

}

export default PostServices;
