import { Tab, Tabs } from "@mui/material";




const PageTab = ({ tabs, activeTab, handleChange }) => {

    return (
        <Tabs value={activeTab} textColor="#fff" indicatorColor="#fff" onChange={handleChange} sx={{
            minHeight: '36px',
            height: '36px'
        }}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    sx={{
                        minHeight: '34px',
                        height: '34px',
                        flex: tab.val,
                        paddingInline: '32px',
                        borderLeft: '2px solid #A8A8A8',
                        borderRight: tab.borderRight,
                        borderBlock: '2px solid #A8A8A8',
                        backgroundColor: activeTab === index ? '#74E249 ' : '',
                    }}
                />
            ))}
        </Tabs>
    )
}

export default PageTab