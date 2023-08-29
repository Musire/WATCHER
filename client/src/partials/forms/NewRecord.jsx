import { Form, Heading, InputField, useForm, useApiData, useAuth, initialRecordData, createRecordData} from "./"

const NewRecord = () => {
    const { auth } = useAuth()
    const { data, error, fetchData } = useApiData(createRecordData)

    const onSubmit = async (formData) => {
        console.log('formData', {...formData, ["user"]: auth.id})
        await fetchData({...formData, ["user"]: auth.id})
    }

    const { handleInputChange, useHandleSubmit } = useForm(initialRecordData, onSubmit)

    return ( 
        <>
            <Heading />
            <Form handleSubmit={useHandleSubmit} error={error}>
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