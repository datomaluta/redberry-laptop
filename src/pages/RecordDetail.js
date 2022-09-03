import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Record from "../components/recordDetailComponents/Record";
import BackButton from "../UI/BackButton";
import TestRecord from "../components/recordDetailComponents/TestRecord";
import LoadingSpinner from "../UI/LoadingSpinner";
import useFetchData from "../hooks/use-fetchData";
import ErrorText from "../UI/ErrrorText";

const RecordDetail = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  const params = useParams();
  const id = params.id;

  const {
    error,
    isLoading,
    fetchData: fetchLaptopDetail,
    data: detailInfo,
  } = useFetchData();

  useEffect(() => {
    fetchLaptopDetail(
      `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=1430dbe763b0852044c745ac14a4d9ec`
    );
  }, [fetchLaptopDetail, id]);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorText errorText={error} />}
      <BackButton onClick={goBackHandler} />
      {detailInfo && !error && <Record detailInfo={detailInfo} />}
    </Fragment>
  );
};

export default RecordDetail;
