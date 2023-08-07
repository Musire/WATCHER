import { SubmitButton, Heading, Form, InputField } from "./"

const NewGoal = () => {
    return ( 
        <>
            <Heading />
            <Form >
                <span className="flex gap-x-[10%]">
                    <InputField input="catergory" />
                    <InputField input="area" />
                </span>
                <InputField size="full" input="Amount" />
            </Form>
            <SubmitButton />
        </>
     );
}
 
export default NewGoal;