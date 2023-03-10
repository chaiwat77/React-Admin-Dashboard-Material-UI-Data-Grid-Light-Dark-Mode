import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { palette } from "@mui/system";

const FAQ =()=> {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   
    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Learning Week 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1.HTML5
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Learning Week 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2.CSS
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Learning Week 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        3.Javascrip
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Learning Week 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4.Typescript
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>

    )
};

export default FAQ;