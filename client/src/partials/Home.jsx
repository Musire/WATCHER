import { DetailBanner, LinkButton } from "./";
import { withAuth } from "../HOC";

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

const AuthorizedComponent = withAuth(Home)

export default AuthorizedComponent;