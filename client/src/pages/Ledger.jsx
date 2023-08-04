import { Canvas, Sidebar, Heading, Table, Row } from "./"

const Ledger = () => {
    return ( 
        <>
            <Canvas>
                <Sidebar />
                <Heading />
                <Table title="07/25/2023">
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                </Table>
                <Table title="07/25/2023">
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                    <Row subtitle="electricity" amount="232.00" />
                </Table>
            </Canvas>
        </>
     );
}
 
export default Ledger;