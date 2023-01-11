import React, { Fragment } from 'react';
import { Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TextField } from '@mui/material';
import { OperationType } from 'contexts/PetStoreContext/PetStoreContext.types';
import { common } from '@mui/material/colors';
import JSONPretty from 'react-json-pretty';

type Props = Pick<OperationType, 'parameters'>

export const Parameters: React.FC<Props> = ({ parameters }) => {

    return (
        <Fragment>
            <Box sx={{ backgroundColor: common.white, padding: 1, marginTop: 1}}>
                <Typography variant='h3'>Parameters</Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {parameters.map((par) => {
                            let value = (par.hasOwnProperty('items') && par.items.hasOwnProperty('enum')) ? par.items.enum.join(", ") : par.name 
                            return(
                            <TableRow key={par.name}>
                                <TableCell sx={{ border: 'none', display: 'inline'}}>
                                    <Typography variant='h3'>{par.name}
                                        <Typography component="span" sx={ theme => ({ color: theme.palette.error.main })}>
                                            <strong>
                                                {par.required && <sup>* required</sup>}
                                            </strong>
                                        </Typography>
                                    </Typography>
                                    <Box>
                                        <Typography variant='h6'>
                                           <strong><code>{par.type} {par.format && (par.format)}</code></strong>
                                        </Typography>
                                        <Typography variant='body2'>
                                            {par.in}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ border: 'none' }}>
                                    <Typography>
                                        {par.description}
                                    </Typography>
                                
                                    {par.in !== 'body' ? 
                                        <TextField
                                            disabled
                                            placeholder={value}
                                        />
                                        : 
                                        <Box sx={{ color: common.white, backgroundColor: common.black}}>
                                            <JSONPretty data={par.schema}></JSONPretty>
                                        </Box>
                                    }
                                </TableCell>

                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )

}