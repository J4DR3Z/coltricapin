import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Acordeon = ({ titulo, descripcion }) => {
    const [openPanel, setOpenPanel] = useState(null);

    const togglePanel = (panelNumber) => {
        setOpenPanel(openPanel === panelNumber ? null : panelNumber);
    };

    return (
        <div style={{ flex: 1 }}>
            <Accordion expanded={openPanel === titulo} onChange={() => togglePanel(titulo)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${titulo}a-content`}
                    id={`panel${titulo}a-header`}
                >
                    <Typography>{titulo}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {descripcion}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Acordeon;