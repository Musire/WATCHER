import { useRef } from "react"
import { useExternalForm } from "../hooks"
import { SubmitButton, Form, Heading, InputField } from "./"

const NewRecord = () => {
    const formID = 'newRecord'
    const formRef = useRef(null)
    const handleExternalForm = useExternalForm(formRef)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('new record submitted');
    };

    return ( 
        <>
            <Heading />
            <Form formID={formID} formRef={formRef} handleSubmit={handleSubmit}>
                <span className="flex gap-x-[10%]">
                    <InputField input="date" />
                    <InputField input="account" />
                </span>
                <span className="flex gap-x-[10%]">
                    <InputField input="type" />
                    <InputField input="amount" />
                </span>
                <span className="flex gap-x-[10%]">
                    <InputField input="category" />
                    <InputField input="area" />
                </span>
            </Form>
            <SubmitButton formID={formID} handleClick={handleExternalForm}/>
        </>
     );
}
 
export default NewRecord;