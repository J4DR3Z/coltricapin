import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Acordeon = () => {
    const [openPanel, setOpenPanel] = useState(null);

    const togglePanel = (panelNumber) => {
        setOpenPanel(openPanel === panelNumber ? null : panelNumber);
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <Accordion expanded={openPanel === 1} onChange={() => togglePanel(1)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Panel 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Contenido del panel 1
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div style={{ flex: 1 }}>
                <Accordion expanded={openPanel === 2} onChange={() => togglePanel(2)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Panel 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Contenido del panel 2
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div style={{ flex: 1 }}>
                <Accordion expanded={openPanel === 3} onChange={() => togglePanel(3)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-co ntent"
                        id="panel3a-header"
                    >
                        <Typography>Panel 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Contenido del panel 3
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default Acordeon;
