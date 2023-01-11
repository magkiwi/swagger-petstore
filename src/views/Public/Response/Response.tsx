import React, { Fragment } from 'react';
import { Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import { OperationType } from 'contexts/PetStoreContext/PetStoreContext.types';
import { common } from '@mui/material/colors';
import JSONPretty from 'react-json-pretty';

type Props = Pick<OperationType, 'responses'>

export const Responses: React.FC<Props> = ({ responses }) => {
    return (
        <Fragment>
            <Box sx={{ backgroundColor: common.white, padding: 1, marginTop: 1}}>
                <Typography variant='h3'>Parameters</Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>CODE</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(responses).map(entry => {
                        const [ key, value] = entry
                        return (
                            <TableRow key={`${key}-${value}`}>
                                <TableCell sx={{ border: 'none' }}>{key}</TableCell>
                                <TableCell sx={{ border: 'none' }}>
                                    {value.description}
                                    {value.schema && 
                                        <Box sx={{ color: common.white, backgroundColor: common.black}}>
                                            <JSONPretty data={value.schema}></JSONPretty>
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