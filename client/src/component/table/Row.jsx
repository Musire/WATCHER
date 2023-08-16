const Row = ({ subtitle, amount}) => {
    return ( 
        <span className="flex items-center self-end w-3/4 p-4 gap-x-8 hover:bg-shadow ">
            <div className="w-10 h-10 rounded-full bg-silver"></div>
            <p className="w-1/2 text-lg capitalize">{ subtitle }</p>
            <p className="text-lg">{ amount }</p>
        </span>
     );
}
 
export default Row;