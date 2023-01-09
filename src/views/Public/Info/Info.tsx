import { useContext } from 'react';
import ReactMarkdown from 'react-markdown'
import { Badge, Grid, Typography, Link } from '@mui/material';
import { PetStoreContext } from 'contexts';

export const Info = () => {

    const { info } = useContext(PetStoreContext);

    if (!info) {
        return null
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Badge badgeContent={info.version} color="primary">
                    <Typography variant="h1">{info.title}</Typography>
                </Badge>
            </Grid>
            <Grid item xs={12}>
                <ReactMarkdown>{info.description}</ReactMarkdown>
            </Grid>
            <Grid item xs={12}>
                <Link target="_blank" href={info?.termsOfServices}>Terms of Services</Link>
                <Link target="_blank" href={info?.contact.email}>Contact the developer</Link>
                <Link target="_blank" href={info?.license.url}>{info?.license.name}</Link>
            </Grid>
        </Grid>
    );
}