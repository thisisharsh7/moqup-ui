import { Tab, Tabs } from "@mui/material";




const PageTab = ({ tabs, activeTab, handleChange }) => {


    return (
        <Tabs variant="scrollable" value={activeTab} textColor="inherit" indicatorColor="#fff" onChange={handleChange} sx={{
            minHeight: '36px',
            height: '36px',
        }}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    sx={{
                        minHeight: '34px',
                        height: '34px',
                        flex: tab.val,
                        paddingInline:{
                            xs: 0.5,
                            sm: 2.5,
                            md: 4.5
                            
                            
                        },
                        borderLeft: '2px solid #A8A8A8',
                        borderRight: tab.borderRight,
                        borderBlock: '2px solid #A8A8A8',
                        backgroundColor: activeTab === index ? '#74E249 ' : '',
                        fontSize: {
                            md: 16,
                            sm: 12,
                            xs: 10
                        }
                    }}
                />
            ))}
        </Tabs>
    )
}

export default PageTab