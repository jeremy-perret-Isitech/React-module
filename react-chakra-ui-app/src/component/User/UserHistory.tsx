import { useContext } from "react";
import { UserContext } from "./UserAccount";
import { Box, Text, List, ListItem, Flex, useColorModeValue, Container } from "@chakra-ui/react";

const UserHistory = () => {
    const user = useContext(UserContext);
    console.log(user);

    return (
        <Container mt={10}>
            <Flex flexDirection="row" gap={5}>
            
            <Box padding={5} border='1px' borderColor="black">
                <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    User Details
                </Text>
                <List spacing={2}>
                    <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                            UID :
                        </Text>{' '}
                        UIF
                    </ListItem>
                    <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                            Email :
                        </Text>{' '}
                        FR
                    </ListItem>
                    <ListItem>
                        <Text as={'span'} fontWeight={'bold'}>
                            Creation Date :
                        </Text>{' '}
                        FR
                    </ListItem>
                </List>
            </Box>
            </Flex>
        </Container>
    );
}

export default UserHistory;