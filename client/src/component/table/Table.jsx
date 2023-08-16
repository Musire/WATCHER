const Table = ({title, children}) => {
    return ( 
        <div className="flex flex-col mb-32">
            <h5 className="mb-2 text-xl">{ title }</h5>
            {children}
        </div>
     );
}
 
export default Table;