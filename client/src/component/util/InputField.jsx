const InputField = ({ input, handleChange, size }) => {
    const width = size === "full" ? "w-[100%]" : "w-[45%]"

    return (
        <span className={`flex flex-col gap-y-2 ${width}`}>
            <label htmlFor="input" className="text-lg capitalize">{input}</label>
            <input type="text" id="input" name={input} onChange={(e) => handleChange(e)} className="px-4 py-2 text-xl border-2 rounded-full bg-shadow border-silver"/>
        </span>
     );
}
 
export default InputField;