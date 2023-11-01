import { Box, Container } from "@mui/material"
import TabGroup from "./components/TabGroup";
import Detail from "./components/Detail";
import { createContext, useState } from "react";


const tabs1 = [
  { label: 'projects' },
  { label: 'profile' },
  { label: 'activity', borderRight: '2px solid #A8A8A8' },
];


export const GlobalInfo = createContext();

const App = () => {
  const [pageTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  }


  return (
    <GlobalInfo.Provider value={{ pageTab, tabs1 }}>
      <Container maxWidth="lg">
        <Box sx={{ width: '100%', typography: 'body1', minHeight: '100dvh' }} py={4}>
          <TabGroup tabs={tabs1} activeTab={pageTab} handleChange={handleChange} />
          <Detail />
        </Box>
      </Container >
    </GlobalInfo.Provider>
  );
}

export default App