const Row = ({ subtitle, amount}) => {
    return ( 
        <span className="flex gap-x-8 items-center self-end w-3/4">
            <div className="bg-silver w-10 h-10 rounded-full"></div>
            <p className="capitalize text-lg w-1/2">{ subtitle }</p>
            <p className="text-lg">{ amount }</p>
        </span>
     );
}
 
export default Row;