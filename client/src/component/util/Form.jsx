

const Form = ({ handleSubmit, formID, formRef, children }) => {
    
    return ( 
        <form id={formID} ref={formRef} onSubmit={e => handleSubmit(e)} className="p-8 bg-shadow w-full rounded-lg flex flex-col gap-y-4">
            { children }
        </form>
     );
}
 
export default Form;