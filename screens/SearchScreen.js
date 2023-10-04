import { useState } from "react";
import { Center, Heading, VStack } from "native-base";
import LoadingSpinner from "../components/Loading";
import SearchBox from "../components/Form/SearchBox";
import MovieContainer from "../components/Containers/MovieContainer";
import { useGetSearch } from "../hook/useGetSearch";

const SearchScreen = ({ navigation }) => {
  const [mediaType, setMediaType] = useState("multi");
  const [query, setQuery] = useState("");

  const { handleSearch, isloading, records } = useGetSearch({
    mediaType,
    query,
  });
  const handleSelectChange = (mediaType) => {
    setMediaType(mediaType);
  };

  const handleChangeInput = (input) => {
    setQuery(input);
  };

  if (isloading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack space={3} alignSelf="center">
      <SearchBox
        query={query}
        onSelectChange={handleSelectChange}
        onChangeInput={handleChangeInput}
        onSubmit={handleSearch}
        selectedOption={mediaType}
      />
      {records ? (
        <MovieContainer records={records} navigation={navigation} />
      ) : (
        <Center px={4} py={40}>
          <Heading size="md">Please initiate a search</Heading>
        </Center>
      )}
    </VStack>
  );
};

export default SearchScreen;
