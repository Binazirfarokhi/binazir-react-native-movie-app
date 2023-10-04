
import React, { useState } from "react";
import { VStack } from "native-base";
import LoadingSpinner from "../components/Loading";
import SelectType from "../components/Form/SelectType";
import MovieContainer from "../components/Containers/MovieContainer";
import { useGetListType } from "../hook/useGetListType";
import { options } from "../constants";

const HomeScreen = ({ navigation }) => {
  const [listType, setListType] = useState("popular");
  const { isLoading, records } = useGetListType("movie", listType);

  const handleSelectChange = (listType) => {
    setListType(listType);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack space={3} alignSelf="center">
      <SelectType options={options} onSelectChange={handleSelectChange} selectedOption={listType} />
      <MovieContainer records={records} navigation={navigation} mediaType="movie" />
    </VStack>
  );
};

export default HomeScreen;
