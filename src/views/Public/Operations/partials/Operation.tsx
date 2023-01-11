import React from 'react';
import { Grid, Typography } from '@mui/material';
import { OperationType } from 'contexts/PetStoreContext/PetStoreContext.types';
import { Parameters } from 'views/Public/Parameters/Parameters';
import { Responses } from 'views/Public/Response/Response';


export const Operation: React.FC<OperationType> = ({...detail}) => {

    return (
        <Grid container>
            <Grid item xs={12}>
                {detail.description && <Typography>{detail.description}</Typography>}
            </Grid>
            <Grid item xs={12}>
                <Parameters parameters={detail.parameters}/>
            </Grid>
            <Grid item xs={12}>
                <Responses responses={detail.responses}/>
            </Grid>
        </Grid>
    )

}