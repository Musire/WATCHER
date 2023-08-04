import { Heading, Table, Row } from "."

const LedgerHome = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default LedgerHome;