import { SubmitButton } from "./";


const Form = ({ handleSubmit, children }) => {
    
    return ( 
        <form onSubmit={e => handleSubmit(e)} className="flex flex-col w-full p-8 rounded-lg bg-shadow gap-y-4">
            { children }
            <SubmitButton />
        </form>
     );
}
 
export default Form;