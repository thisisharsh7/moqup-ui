import { Box, Stack, Typography, } from '@mui/material';
import detail from './detail.json';


const DetailList = () => {
    return (
        <Box display="flex" flexDirection="column">
            {
                detail.map((sdetail, index) => {
                    return (
                        <Stack key={index} display="grid" gridTemplateColumns="1fr 0.4fr" justifyContent="space-between" paddingBlock={3.5} gap={0.8} borderBottom='1px solid #A8A8A8'>
                            <Typography noWrap fontSize={20} fontWeight={700} variant="h2">{sdetail.title}</Typography>
                            <Typography noWrap sx={{
                                justifySelf: 'flex-end'
                            }} fontSize={18} fontWeight={500} variant="h4">Installation expected in <Typography variant="span" fontWeight={700}>{sdetail.installationExpected}</Typography></Typography>
                            <Typography noWrap fontSize={18} fontWeight={700} variant="h3">{sdetail.installer}</Typography>
                            <Typography noWrap variant="p" sx={{
                                justifySelf: 'flex-end'
                            }} fontSize={15} color='#A8A8A8' fontWeight={500} > Shared on {sdetail.date}</Typography>
                            <Typography fontSize={18} fontWeight={500} variant="h4">{sdetail.place}</Typography>
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