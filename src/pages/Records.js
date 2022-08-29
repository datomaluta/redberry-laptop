import { Fragment } from "react";
import RecordsList from "../components/recordsComponents/RecordsList";
import BackButton from "../UI/BackButton";
const Records = () => {
  return (
    <Fragment>
      <BackButton />
      <RecordsList />
    </Fragment>
  );
};

export default Records;
