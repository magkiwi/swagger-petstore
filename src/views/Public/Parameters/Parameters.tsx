import React from 'react';
import { Grid, Typography } from '@mui/material';
import { OperationType } from 'contexts/PetStoreContext/PetStoreContext.types';

type Props = Pick<OperationType, 'parameters'>

export const Parameters: React.FC<Props> = (parameters) => {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>parameters</Typography>
            </Grid>
        </Grid>
    )

}