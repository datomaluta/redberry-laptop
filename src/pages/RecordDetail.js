import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Record from "../components/recordDetailComponents/Record";
import BackButton from "../UI/BackButton";
import TestRecord from "../components/recordDetailComponents/TestRecord";

const RecordDetail = () => {
  const [detailInfo, setDetailInfo] = useState();
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  const params = useParams();
  const id = params.id;
  // console.log(id);

  useEffect(() => {
    const fetchLaptopDetail = async () => {
      const response = await fetch(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=1c40792d27465fbe7c55aeb3cead277e`
      );
      const data = await response.json();
      // console.log(data);
      setDetailInfo(data.data);
    };
    fetchLaptopDetail();
  }, []);

  return (
    <Fragment>
      <BackButton onClick={goBackHandler} />
      {detailInfo && <Record detailInfo={detailInfo} />}
      {/* {detailInfo && <TestRecord detailInfo={detailInfo} />} */}
    </Fragment>
  );
};

export default RecordDetail;
