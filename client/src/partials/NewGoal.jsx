import { useRef } from "react"
import { useExternalForm } from "../hooks"
import { SubmitButton, Form, Heading, InputField } from "./"
import { useForm } from "../hooks"

const NewGoal = () => {
    const formID = 'newGoal'
    const formRef = useRef(null)
    const handleExternalForm = useExternalForm(formRef)

    const onSubmit = (data) => {
        console.log(data);
    };

    const initialValues = {
        category: '',
        area: '',
        amount: '',
      };

    const { handleInputChange, handleSubmit } = useForm(initialValues, onSubmit)

    return ( 
        <>
            <Heading />
            <Form formID={formID} formRef={formRef} handleSubmit={handleSubmit}>
                <span className="flex gap-x-[10%]">
                    <InputField input="category" handleChange={handleInputChange}/>
                    <InputField input="area" handleChange={handleInputChange}/>
                </span>
                <InputField size="full" input="amount" handleChange={handleInputChange}/>
            </Form>
            <SubmitButton formID={formID} handleClick={handleExternalForm}/>
        </>
     );
}
 
export default NewGoal;