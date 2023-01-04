import { useContext } from 'react';
import { Badge, Grid, Typography } from '@mui/material';
import { PetStoreContext } from 'contexts';

export const Info = () => {

    const { info } = useContext(PetStoreContext);

    return (
        <Grid container>
            <Typography variant="h1">{info.title}</Typography>
            <Badge badgeContent={info.version}/>
        </Grid>
    );
}