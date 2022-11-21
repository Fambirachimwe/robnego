import React from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getReservations } from './util/api';
import { Card, Table, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons'
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Reservations = () => {
    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['reservations'], queryFn: getReservations });

    let history = useHistory();
    // const navigate = useNavigate();


    console.log(query.data)

    const rows = query.data?.map((element) => (
        <tr key={element._id}>
            <td>{element._id}</td>
            <td>{element.phoneNumber}</td>
            <td>{element.seatingType}</td>
            <td>{element.date}</td>
            <td>{element.completed === true ? 'Completed' : 'Pending'}</td>
            <td>{<IconEye onClick onClick={() => history.push(`/reservations/${element._id}`)} />} </td>
        </tr>
    ));

    return (
        <div>
            <Card>
                <Text mt="lg" pb="xl" size="md">
                    Reservations
                </Text>
                <Table
                    mt="xl"
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PhoneNumber</th>
                            <th>Seating</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Card>

        </div>
    )
}

export default Reservations
