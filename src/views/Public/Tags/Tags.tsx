import { useContext, Fragment } from 'react';
import { Accordion, AccordionSummary, Link, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { PetStoreContext } from 'contexts/PetStoreContext/PetStoreContext';

export const Tabs = () => {

    const { tags } = useContext(PetStoreContext);

    return (
        <Fragment>
            {tags.length > 0 &&
                <Grid container mt={4}>
                    {tags.map( (tag)  => (
                        <Grid item xs={12} id={tag.name}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Grid container xs={12}>
                                        <Grid item xs={10} sx={{ display: 'flex', gap: 2, alignItems: 'center'}}>
                                            <Typography variant='h2'> {tag.name}</Typography>
                                            <Typography variant='body2'> {tag.description}</Typography>
                                        </Grid>
                                        {tag?.externalDocs && 
                                            <Grid item xs={2}>
                                                <Link target="_blank" href={tag?.externalDocs?.url}>{tag.externalDocs.description}</Link>
                                            </Grid>
                                        }
                 

                                    </Grid>

                                </AccordionSummary>
                            </Accordion>
                        </Grid>
                    ))
                }
                </Grid>
            }
        </Fragment>
    );
}