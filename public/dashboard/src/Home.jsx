import React from 'react'
import { AppShell, Navbar, Header, Table } from '@mantine/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { NavLink, Flex } from '@mantine/core';
import Orders from './Orders';
import Suggestions from './Suggestions';
import Feedback from './Feedback';
import Reservations from './Reservations';
import { Card, Image, Text } from '@mantine/core';
import MyHome from './MyHome';
import ReservationDetailPage from './ReservationDetailPage';
// import { IconHome2, IconBasket, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons';


const Home = () => {



    return (

        <AppShell
            padding="md"
            navbar={

                <Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}
                    <NavLink label="Home" component="a" href="/home" />
                    <NavLink label="Orders" component="a" href="/orders" />
                    <NavLink label="Reservarions" component="a" href="/reservations" />
                    <NavLink label="Food Suggestions" component="a" href="/suggestions" />
                    <NavLink label="Feedback" component="a" href="/feedback" />

                </Navbar>}
            header={<Header height={60} p="xs">{/* Header content */}</Header>}
            styles={(theme) => ({

                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >

            <Router>

                <Switch>
                    <Route exact path="/home">
                        <MyHome />
                    </Route>
                    <Route exact path="/orders">
                        <Orders />
                    </Route>
                    <Route exact path="/reservations">
                        <Reservations />
                    </Route>
                    <Route exact path="/suggestions">
                        <Suggestions />
                    </Route>
                    <Route exact path="/feedback">
                        <Feedback />
                    </Route>
                    <Route exact path="/reservations/:id" >
                        <ReservationDetailPage />
                    </Route>

                </Switch>

            </Router>
            {/* Your application here */}

            {/* cards here */}






        </AppShell>)
};


export default Home
