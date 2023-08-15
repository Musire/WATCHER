import { useApiData } from "../hooks"
import { Form, Heading, InputField } from "./"
import { useForm } from "../hooks"

const NewAccount = () => {

    const submitData = {
        method: 'POST',
        url: '/api/create/account',
        baseurl: 'http://localhost:5273'
    }

    const initialValues = {
        account: '',
        amount: '',
        currency: '',
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
                <InputField size="full" input="account" handleChange={handleInputChange}/>
                <span className="flex gap-x-[10%]">
                    <InputField input="amount" handleChange={handleInputChange}/>
                    <InputField input="currency" handleChange={handleInputChange}/>
                </span>
            </Form>
        </>
     );
}
 
export default NewAccount;