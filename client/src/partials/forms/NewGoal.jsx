import { useApiData, useForm, Form, Heading, InputField, useAuth, createGoalData, initialGoalData } from "./"

const NewGoal = () => {
    const { auth } = useAuth()
    const { data, isLoading, error, fetchData } = useApiData(createGoalData)

    const onSubmit = async (formData) => {
        await fetchData({...formData, ["user"]: auth.id})
    }

    const { handleInputChange, useHandleSubmit } = useForm(initialGoalData, onSubmit)
    
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