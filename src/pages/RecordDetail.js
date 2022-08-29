import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Record from "../components/recordDetailComponents/Record";
import BackButton from "../UI/BackButton";

const RecordDetail = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <Fragment>
      <BackButton onClick={goBackHandler} />
      <Record />
    </Fragment>
  );
};

export default RecordDetail;
