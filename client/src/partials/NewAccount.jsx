import { useRef } from "react"
import { useExternalForm } from "../hooks"
import { SubmitButton, Form, Heading, InputField } from "./"
import { useForm } from "../hooks"

const NewAccount = () => {
    const formID = 'newAccount'
    const formRef = useRef(null)
    const handleExternalForm = useExternalForm(formRef)

    const onSubmit = (data) => {
        console.log(data);
    };

    const initialValues = {
        account: '',
        amount: '',
        currency: '',
      };

    const { handleInputChange, handleSubmit } = useForm(initialValues, onSubmit)

    return ( 
        <>
            <Heading />
            <Form formID={formID} formRef={formRef} handleSubmit={handleSubmit}>
                <InputField size="full" input="account" handleChange={handleInputChange}/>
                <span className="flex gap-x-[10%]">
                    <InputField input="amount" handleChange={handleInputChange}/>
                    <InputField input="currency" handleChange={handleInputChange}/>
                </span>
            </Form>
            <SubmitButton formID={formID} handleClick={handleExternalForm}/>
        </>
     );
}
 
export default NewAccount;