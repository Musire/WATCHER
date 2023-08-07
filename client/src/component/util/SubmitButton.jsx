const SubmitButton = ({formID, handleClick}) => {
    return ( 
        <button form={formID} onClick={() => handleClick()} className="bg-gradient-to-b from-lightgreen to-darkgreen to-90% w-full text-3xl rounded-lg py-3 text-white ">Submit</button>
     );
}
 
export default SubmitButton;