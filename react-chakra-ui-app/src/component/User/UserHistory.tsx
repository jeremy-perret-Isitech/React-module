import { useContext } from "react";
import { UserContext } from "./UserAccount";
import { Box, Text, List, ListItem, Flex, Container, useColorModeValue } from "@chakra-ui/react";

const UserHistory = () => {
    const user = useContext(UserContext);
    return (
        <Container mt={10} maxW={"container.xl"}>
            <Flex flexDirection="row" gap={5} flexWrap={"wrap"} alignItems={"center"}>
                {
                    user.map((userAction: any) => (
                        <Box padding={5} border='1px' borderColor="black">
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color='yellow.500'
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                User Action
                            </Text>
                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Action :
                                    </Text>{' '}
                                    {userAction.userHistoryEvent.action}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Action Date :
                                    </Text>{' '}
                                    {userAction.userHistoryEvent.date.toDateString()}
                                </ListItem>
                            </List>
                        </Box>
                    ))
                }

            </Flex>
        </Container>
    );
}

export default UserHistory;