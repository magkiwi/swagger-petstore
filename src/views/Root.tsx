import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { routes } from 'config';
import { Tabs } from './Public/Tags/Tags';
import { Info } from './Public/Info/Info';

export const Root = () => {

    return (
        <Container>
            <Info/>
            <Routes>
                <Route path={routes.home} element={<Tabs/>}/>
                <Route path="*" element={<Navigate to={routes.home}/>} />
            </Routes>
        </Container>
    )
}