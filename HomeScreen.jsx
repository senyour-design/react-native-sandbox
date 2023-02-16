import { View, Text } from 'react-native';
import React from 'react';
import { Box, Button, Flex, Input } from 'native-base';

export default function HomeScreen({ navigation }) {
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center" h={'100%'} w={'100%'}>
            <Flex gap={10} flexDir={'column'}>
                <Text>HomeScreen</Text>
                <Input variant="rounded" placeholder="name" />
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text>Go Details</Text>
                </Button>
            </Flex>
        </Box>
    );
}