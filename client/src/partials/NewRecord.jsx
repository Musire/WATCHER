import { useApiData } from "../hooks"
import { Form, Heading, InputField } from "./"
import { useForm } from "../hooks"
import { useEffect } from "react"

const NewRecord = () => {

    const submitData = {
        method: 'POST',
        url: '/api/create/record',
        baseurl: 'http://localhost:5273'
    }

    const initialValues = {
        date: '',
        account: '',
        type: '',
        amount: '',
        category: '',
        area: '',
        user: '64da703566eec4e5572af1de'
      };

    const { data, error, fetchData } = useApiData(submitData)

    const onSubmit = async (formData) => {
        await fetchData(formData)
    }

    const { handleInputChange, useHandleSubmit } = useForm(initialValues, onSubmit)

    return ( 
        <>
            <Heading />
            <Form handleSubmit={useHandleSubmit}>
                <span className="flex gap-x-[10%]">
                    <InputField input="date" handleChange={handleInputChange}/>
                    <InputField input="account" handleChange={handleInputChange}/>
                </span>
                <span className="flex gap-x-[10%]">
                    <InputField input="type" handleChange={handleInputChange}/>
                    <InputField input="amount" handleChange={handleInputChange}/>
                </span>
                <span className="flex gap-x-[10%]">
                    <InputField input="category" handleChange={handleInputChange}/>
                    <InputField input="area" handleChange={handleInputChange}/>
                </span>
            </Form>
        </>
     );
}
 
export default NewRecord;