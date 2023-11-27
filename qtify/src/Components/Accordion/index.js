import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './acc.css'

export default () => {
    return   (
    <div>
        <h1 className='acc-header'>FAQs</h1>
        <div style={{display:'flex',justifyContent:'center',height:'200px'}}>
           <div style={{width:'70%',height:'60%'}}>
                <Accordion  >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                
                    >
                    <Typography>Is Qtify free to use?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                       Yes! It is 100% free, and has 0% ads!
                    </Typography>
                    </AccordionDetails>
               </Accordion>
                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Can I download and listen to songs offline?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Sorry, you cannot download the songs offline.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
           </div>
        </div>
    </div>
    )
}