import { Box, Container } from "@mui/material"
import Detail from "./components/Detail";
import PageTabs from "./components/PageTabs";

const App = () => {

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%', typography: 'body1', minHeight: '100dvh' }} py={4}>
        <PageTabs />
        <Detail />
      </Box>
    </Container>
  );
}

export default App