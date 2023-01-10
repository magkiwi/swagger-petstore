import React from 'react';
import { Accordion, AccordionSummary, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_MAP, OPACITY_COLOR_MAP } from 'shared/helpers/helper';
import { common } from '@mui/material/colors';


interface Props {
    endpoint: string;
    method: string;
    detail: {
        summary: string;
    };
  }

  const StyledAccordian = styled(Accordion)<{
    method: string;
  }>(({ method }) => ({
    backgroundColor: OPACITY_COLOR_MAP[method as keyof typeof COLOR_MAP],
    border: `1px solid ${COLOR_MAP[method as keyof typeof COLOR_MAP]}`,
    marginTop: 8,
  }));
  
  const StyledBox = styled(Box)<{
    method: string;
  }>(({ method }) => ({
    backgroundColor: COLOR_MAP[method as keyof typeof COLOR_MAP],
    color: common.white,
    minWidth: '80px',
    padding: 4,
    textAlign: 'center',
    borderRadius: '4px',
    marginRight: 8,
  }));

export const Operations: React.FC<Props> = ({ endpoint, method, detail }) => {
    console.log(detail)

    return (
        <StyledAccordian method={method}>
            <AccordionSummary>
                <StyledBox method={method}>
                    <Typography variant='h3'>{method}</Typography>
                </StyledBox>
                <Typography variant='h3' fontSize='16px'>{endpoint}</Typography>
                { detail.summary && <Typography mx={5}>{detail.summary}</Typography>}
            </AccordionSummary>
        </StyledAccordian>
    )

}