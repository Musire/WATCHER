import { useApiData } from "../hooks"
import { Form, Heading, InputField } from "./"
import { useForm } from "../hooks"

const NewGoal = () => {

    const submitData = {
        method: 'POST',
        url: '/api/create/goal',
        baseurl: 'http://localhost:5273'
    }

    const initialValues = {
        category: '',
        area: '',
        amount: '',
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
            <Form handleSubmit={useHandleSubmit} error={error}>
                <span className="flex gap-x-[10%]">
                    <InputField input="category" handleChange={handleInputChange}/>
                    <InputField input="area" handleChange={handleInputChange}/>
                </span>
                <InputField size="full" input="amount" handleChange={handleInputChange}/>
            </Form>
        </>
     );
}
 
export default NewGoal;