import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Heading, VStack, Text, Image, Center, Box } from "native-base";
import LoadingSpinner from "../components/Loading";
import { useGetRecord } from "../hook/useGetRecord";

const MovieDetail = ({ route }) => {
  const { id, mediaType } = route.params;
  const { record, isLoading } = useGetRecord(mediaType, id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!record) {
    return null;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${
    record?.backdrop_path || record?.poster_path || ""
  }`;


  const title =
  mediaType === "tv" ? record.name : record.title;
  const releaseDate =
    mediaType === "tv"
      ? record.first_air_date
      : record.release_date;

  return (
    <ScrollView style={styles.container}>
      <VStack>
        <Center style={styles.centerContainer}>
          <Heading style={styles.heading} size="lg">
            {title}
          </Heading>
        </Center>
        <Center>
          {posterUrl && (
            <Image alt={title} source={{ uri: posterUrl }} size="2xl" />
          )}
        </Center>
        <Box margin={7}>
          <Text style={styles.overview}>{record.overview}</Text>
          <Text style={styles.details}>
            Popularity: {record.popularity || "-"} | Release Date: {releaseDate || "-"}
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerContainer: {
    height: 120,
    width: "100%",
    overflow: "hidden",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  overview: {
    marginTop: 20,
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default MovieDetail;