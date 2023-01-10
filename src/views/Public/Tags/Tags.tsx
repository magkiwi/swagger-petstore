import { useContext, Fragment } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Link, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { PetStoreContext } from 'contexts/PetStoreContext/PetStoreContext';
import { Operations } from 'views/Public/Operations/Operations';

export const Tabs = () => {

    const { tags, paths } = useContext(PetStoreContext);

    return (
        <Fragment>
            {tags.length > 0 &&
                <Grid container mt={4}>
                    {tags.map((tag)  => {
                        let tagName = tag.name
                        return (
                            <Grid item xs={12} key={tag.name}>
                                <Accordion sx={{ marginTop: 2, minHeight: '80px'}}>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Grid container>
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
                                    <AccordionDetails>
                                        {paths.filter((path: any) => path.tag.has(tagName)).map((path: any) => (
                                            <Operations 
                                                endpoint={path.endpoint}
                                                method={path.method}
                                                detail={path.detail}
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                    )})
                }
                </Grid>
            }
        </Fragment>
    );
}