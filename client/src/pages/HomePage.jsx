import { Canvas, Sidebar, DetailBanner, LinkButton } from "./"

const HomePage = () => {
    return ( 
        <section className="">
            <Canvas >
                <DetailBanner />
                <div className="spaced">
                    <LinkButton variant="ledger"/>
                    <LinkButton variant="accounts"/>
                    <LinkButton variant="details"/>
                </div>
            </Canvas>
            <Sidebar />
        </section>
     );
}
 
export default HomePage;