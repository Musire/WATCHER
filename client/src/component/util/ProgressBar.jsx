const ProgressBar = () => {
    return ( 
        <div className="spaced gap-x-4 w-full">
            <div className="bg-silver w-4/5 h-4 rounded-full">
                <div className="bg-gradient-to-b from-lightgreen from-50% to-darkgreen to-99% h-full rounded-full w-[67%]"></div>
            </div>
            <h4 className="text-xl">67 %</h4>
        </div>
     );
}
 
export default ProgressBar;