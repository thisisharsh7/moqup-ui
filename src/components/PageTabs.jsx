import { useState } from "react";
import TabGroup from "./TabGroup";
import { tabs1 } from "./TabList";
import { Box, Typography } from "@mui/material";



const PageTabs = () => {
    const [pageTab, setActiveTab] = useState(0);
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    }

    return (
        <Box display="flex" flexDirection="column"  gap={3.5}>
            <TabGroup tabs={tabs1} activeTab={pageTab} handleChange={handleChange} />
            <Typography variant="h1" sx={{
                fontSize: {
                    md: 40,
                    sm: 30,
                    xs: 20
                }
            }} fontWeight={700} ><Typography variant="span" color="#74E249 " >7</Typography> {tabs1[pageTab].label} shared with you!</Typography>
        </Box>

    )
}

export default PageTabs