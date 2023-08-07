import { Heading, SubmitButton, Form, InputField } from "./"

const NewAccount = () => {
    return ( 
        <>
            <Heading />
            <Form >
                <InputField size="full" input="account" />
                <span className="flex gap-x-[10%]">
                    <InputField input="starting amount" />
                    <InputField input="currency" />
                </span>
            </Form>
            <SubmitButton />
        </>
     );
}
 
export default NewAccount;