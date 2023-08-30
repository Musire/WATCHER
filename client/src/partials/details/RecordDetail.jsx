import { useCurrent } from "./"

const RecordDetail = () => {
    const { current } = useCurrent()

    return ( 
        <div className="">
            {current ? current : null}
        </div>
     );
}
 
export default RecordDetail;