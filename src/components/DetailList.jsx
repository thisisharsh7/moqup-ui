import { Box, Stack, Typography, } from '@mui/material';
import detail from './detail.json';


const DetailList = ({ cnt }) => {
    return (
        <Box display="flex" flexDirection="column">
            {
                detail.slice(0, cnt).map((sdetail, index) => {
                    return (
                        <Stack key={index} display="grid" gridTemplateColumns={{sm:"1fr 0.5fr", base: "1fr 0.1fr"}} alignItems="center" justifyContent="space-between" paddingBlock={3.5} gap={0.5} justifyItems={{sm:"initial" , xs: "center"}} borderBottom='1px solid #A8A8A8'>
                            <Typography noWrap gridColumn={{sm: 'span 1' , xs: 'span 2'}} sx={{
                                fontSize: {
                                    lg: 28,
                                    md: 24,
                                    sm: 20,
                                    xs: 16
                                }
                            }} fontWeight={700} variant="h2">{sdetail.title}</Typography>
                            <Typography noWrap gridColumn={{sm: 'span 1' , xs: 'span 2'}} sx={{
                                justifySelf: {sm:'flex-end'},
                                fontSize: {
                                    lg: 23,
                                    md: 20,
                                    sm: 16,
                                    xs: 13
                                }
                            }} fontWeight={500} variant="h4" >Installation expected in <Typography variant="span" fontWeight={700}>{sdetail.installationExpected}</Typography></Typography>
                            <Typography noWrap fontWeight={700} variant="h3" gridColumn={{sm: 'span 1' , xs: 'span 2'}}  sx={{
                                fontSize: {
                                    lg: 24,
                                    md: 20,
                                    sm: 16,
                                    xs: 14
                                }
                            }}>{sdetail.installer}</Typography>
                            <Typography noWrap variant="p" sx={{
                                justifySelf: {sm:'flex-end'},
                                fontSize: {
                                    lg: 20,
                                    md: 18,
                                    sm: 14,
                                    xs: 12
                                }
                            }} color='#A8A8A8' fontWeight={500} gridColumn={{sm: 'span 1' , xs: 'span 2'}}  > Shared on {sdetail.date}</Typography>
                            <Typography fontWeight={500} variant="h4" sx={{
                                fontSize: {
                                    lg: 23,
                                    md: 20,
                                    sm: 16,
                                    xs: 12
                                }
                            }}>{sdetail.place}</Typography>
                            <Box sx={{ justifySelf: 'flex-end' }} >
                                <select
                                    id="demo-select-small"
                                    label="Select"
                                >
                                    <option value={10}>Select</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </select>
                            </Box>
                        </Stack>
                    )
                })
            }
        </Box>
    )
}

export default DetailList