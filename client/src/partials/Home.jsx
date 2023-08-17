import { DetailBanner, LinkButton } from "./";

const Home = () => {
    return ( 
        <>
            <DetailBanner />
            <div className="spaced">
                <LinkButton variant="ledger"/>
                <LinkButton variant="accounts"/>
                <LinkButton variant="goals"/>
            </div>
        </>
     );
}
 
export default Home;