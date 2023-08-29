import { useEffect } from "react"
import { Form, Heading, InputField, useForm, useApiData, useAuth, initialAccountData, createAccountData } from "./"

const NewAccount = () => {
    const { auth } = useAuth()
    const { data, error, fetchData } = useApiData(createAccountData)

    const onSubmit = async (formData) => {
        await fetchData({...formData, ["user"]: auth.id})
    }

    const { handleInputChange, useHandleSubmit } = useForm(initialAccountData, onSubmit)

    useEffect(() => {
        console.log(data)   
    }, [data])

    return ( 
        <>
            <Heading />
            <Form handleSubmit={useHandleSubmit} error={error}>
                <InputField size="full" input="account" handleChange={handleInputChange}/>
                <span className="flex gap-x-[10%]">
                    <InputField input="startingAmount" handleChange={handleInputChange}/>
                    <InputField input="currency" handleChange={handleInputChange}/>
                </span>
            </Form>
        </>
     );
}
 
export default NewAccount;