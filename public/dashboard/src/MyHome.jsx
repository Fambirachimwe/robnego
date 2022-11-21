import { Table } from '@mantine/core'
import { Card, Flex, Text } from '@mantine/core'
import React from 'react'

const MyHome = () => {

    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
        </tr>
    ));
    return (
        <div>
            <Flex>

                <Card
                    shadow="sm"
                    p="xl"
                    m="sm"

                >
                    <Card.Section>

                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        Orders
                    </Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                    </Text>
                </Card>

                <Card
                    shadow="sm"
                    p="xl"
                    m="sm"

                >
                    <Card.Section>

                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        Reservation
</Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
</Text>
                </Card>

                <Card
                    shadow="sm"
                    p="xl"
                    m="sm"

                >
                    <Card.Section>

                    </Card.Section>

                    <Text weight={500} size="lg" mt="md">
                        Feedback
</Text>

                    <Text mt="xs" color="dimmed" size="sm">
                        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
</Text>
                </Card>

            </Flex>


            <Card mt="xl">
                <Text weight={500} size="md" mt="md">
                    Reservations
                    </Text>
                <Table

                >
                    <thead>
                        <tr>
                            <th>Element position</th>
                            <th>Element name</th>
                            <th>Symbol</th>
                            <th>Atomic mass</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>

            </Card>


        </div>
    )
}

export default MyHome
