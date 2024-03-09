import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";

const DelegateVote = ({ to, handleDelegate }) => {
    const [delegateAddress, setDelegateAddress] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setDelegateAddress(event.target.value);
        setError("");
    };

    const handleClick = () => {
        if (!delegateAddress) {
            setError("Please enter a delegate's address.");
            return;
        }
        handleDelegate(delegateAddress)
            .then(() => {
               
                setDelegateAddress("");
            })
            .catch((error) => {
                
                setError(error.message || "An error occurred.");
            });
    };

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Delegate's Address
                            </Text>
                            <TextField.Input
                                placeholder="Enter Delegate's Address"
                                value={delegateAddress}
                                onChange={handleChange}
                            />
                        </label>
                        <Button onClick={handleClick}>Delegate vote</Button>
                        {error && (
                            <Text as="div" size="1" color="red">
                                {error}
                            </Text>
                        )}
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

export default DelegateVote;