import { useEffect, useState } from "react";
import { getRecord } from "../services/ApiService";

export const useGetRecord = (mediaType, id) => {
  const [record, setRecord] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecord(mediaType, id)
      .then((response) => {
        setRecord(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error ${error}`, `Oops, an error occurred! ${error}`);
      });
  }, []);

  return {
    record,
    isLoading,
  };
};
