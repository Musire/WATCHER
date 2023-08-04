const Table = ({title, children}) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <h5 className="text-xl mb-2">{ title }</h5>
            {children}
        </div>
     );
}
 
export default Table;