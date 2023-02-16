import { View, Text } from 'react-native';
import React from 'react';
import { Box, Button, Flex, Input } from 'native-base';

export default function DetailsScreen({ navigation }) {
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center" h={'100%'} w={'100%'}>
            <Flex gap={10} flexDir={'column'}>
                <Text>Details</Text>
                <Input variant="rounded" placeholder="name" />
                <Button
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Go Home</Text>
                </Button>
            </Flex>
        </Box>
    );
}