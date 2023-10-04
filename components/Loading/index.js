import { Center, HStack, Heading, Spinner } from "native-base";

const LoadingSpinner = () => {
  return (
    <Center my="auto">
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading...
        </Heading>
      </HStack>
    </Center>
  );
};

export default LoadingSpinner;
