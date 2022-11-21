import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getReservationById } from './util/api';
import axios from 'axios';
import { Card, Text } from '@mantine/core';

const ReservationDetailPage = () => {
    const { id } = useParams();
    // const _myId = id;
    // const query = useQuery({ queryKey: ['reservations', id], queryFn: getReservationById });

    const query = useQuery({
        queryKey: ['reservations', id], queryFn: async () => {
            const response = await axios.get('https://robnego-production.up.railway.app/reservation/' + id)

            // const data = await getReservationById(id)
            return response
        }
    })

    console.log(query.data.data)
    const { _id, date, completed, phoneNumber, seatingType, numberOfPersons } = query.data.data;


    return (
        <div>
            <Text mt="lg" pb="xl" size="lg">
                Reservation:
            </Text>
            <Card>
                <Text mt="lg" pb="xl" size="md">
                    ID: {_id}
                </Text>
                <Text mt="lg" pb="xl" size="md">
                    date: {date}
                </Text>
                <Text mt="lg" pb="xl" size="md">
                    Number or people: {numberOfPersons}
                </Text>

                <Text mt="lg" pb="xl" size="md">
                    phoneNumber {phoneNumber}
                </Text>

                <Text mt="lg" pb="xl" size="md">
                    Seating {seatingType}
                </Text>

                <Text mt="lg" pb="xl" size="md">
                    Filled {completed ? 'Completed' : "Pending"}
                </Text>

            </Card>
        </div>
    )
}

export default ReservationDetailPage
