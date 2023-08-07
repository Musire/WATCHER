const InputField = ({ input, size }) => {
    const width = size === "full" ? "w-[100%]" : "w-[45%]"

    return (
        <span className={`flex flex-col gap-y-2 ${width}`}>
            <label htmlFor="input" className="text-lg capitalize">{input}</label>
            <input type="text" id="input" className="bg-shadow border-2 border-silver rounded-full py-2 px-4 text-xl"/>
        </span>
     );
}
 
export default InputField;