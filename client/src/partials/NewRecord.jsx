import { useRef } from "react"
import { useExternalForm } from "../hooks"
import { SubmitButton, Form, Heading, InputField } from "./"
import { useForm } from "../hooks"

const NewRecord = () => {
    const formID = 'newRecord'
    const formRef = useRef(null)
    const handleExternalForm = useExternalForm(formRef)

    const onSubmit = (data) => {
        console.log(data);
    };

    const initialValues = {
        date: '',
        account: '',
        type: '',
        amount: '',
        category: '',
        area: '',
      };

    const { handleInputChange, handleSubmit } = useForm(initialValues, onSubmit)

    return ( 
        <>
            <Heading />
            <Form formID={formID} formRef={formRef} handleSubmit={handleSubmit}>
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
            <SubmitButton formID={formID} handleClick={handleExternalForm}/>
        </>
     );
}
 
export default NewRecord;