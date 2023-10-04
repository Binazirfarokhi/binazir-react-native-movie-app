import { useEffect, useState } from "react";
import { getRecords } from "../services/ApiService";

export const useGetListType = (type, listType) => {
  const [records, setRecords] = useState();
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecords(type, listType)
      .then((response) => {
        setRecords(response);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Error", `Oops, an error occurred! ${error}`);
      });
  }, [listType]);

  return {
    records,
    isloading,
  };
};
