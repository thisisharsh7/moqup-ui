import { Box, Typography } from "@mui/material"
import DetailList from "./DetailList";
import TabGroup from "./TabGroup";
import { useContext, useState } from "react";
import { GlobalInfo } from "../App";



const tabs2 = [
    { label: 'all ', val: 1, cnt: 4 },
    { label: 'matched ', val: 1, cnt: 3 },
    { label: 'submitted ', val: 1, cnt:  6},
    { label: 'closed ', val: 1, cnt: 7 },
    { label: 'rejected ', val: 1, cnt: 17 }
];


const Detail = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { pageTab, tabs1 } = useContext(GlobalInfo);
    console.log(pageTab)

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    }

    return (
        <Box py={4} >
            <Typography variant="h1" fontSize={{ base: "10px", sm: 35 }} fontWeight={700} pb={1}><Typography variant="span" color="#74E249 " >7</Typography> {tabs1[pageTab].label} shared with you!</Typography>
            <TabGroup tabs={tabs2} activeTab={activeTab} handleChange={handleChange} />
            <DetailList />
        </Box >
    )
}

export default Detail