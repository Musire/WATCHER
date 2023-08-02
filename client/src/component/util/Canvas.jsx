const Canvas = ({ children }) => {
    return ( 
        <section className="min-h-screen bg-midnight w-screen px-8 pt-8 flex flex-col gap-y-10">
            {children}
        </section>
     );
}
 
export default Canvas;