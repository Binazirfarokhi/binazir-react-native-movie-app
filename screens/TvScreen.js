import { useState } from "react";

import { VStack, Text } from "native-base";
import SelectType from "../components/Form/SelectType";
import MovieContainer from "../components/Containers/MovieContainer";
import LoadingSpinner from "../components/Loading";
import { tv_options } from "../constants";
import { useGetListType } from "../hook/useGetListType";

const TvScreen = ({ navigation }) => {
  const [listType, setListType] = useState("airing_today");

  const { isloading, records } = useGetListType("tv", listType);

  if (isloading) {
    return <LoadingSpinner />;
  }

  const handleSelectChange = (listType) => {
    setListType(listType);
  };

  return (
    <VStack space={3} alignSelf="center">
      <SelectType
        options={tv_options}
        onSelectChange={handleSelectChange}
        selectedOption={listType}
      />
      <MovieContainer
        records={records}
        navigation={navigation}
        mediaType="tv"
      />
    </VStack>
  );
};

export default TvScreen;
