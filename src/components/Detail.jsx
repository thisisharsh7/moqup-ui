import { Box } from "@mui/material"
import DetailList from "./DetailList";
import TabGroup from "./TabGroup";
import { tabs2 } from "./TabList";
import { useState } from "react";






const Detail = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    }

    return (
        <Box pb={3} pt={1} >
            <TabGroup tabs={tabs2} activeTab={activeTab} handleChange={handleChange} />
            <DetailList cnt={tabs2[activeTab].cnt} />
        </Box >
    )
}

export default Detail