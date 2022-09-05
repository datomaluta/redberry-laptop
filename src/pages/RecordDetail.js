import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Record from "../components/recordDetailComponents/Record";
import BackButton from "../UI/BackButton";
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
      `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=77119e36462a2d1f648025aba27ae9d5`
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
