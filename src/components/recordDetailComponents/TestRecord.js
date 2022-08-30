const TestRecord = (props) => {
  console.log(props);

  const {
    detailInfo: { user },
    detailInfo: { laptop },
  } = props;

  console.log(user);
  console.log(laptop);

  return <h1>{props.detailInfo ? props.detailInfo.user.name : ""}</h1>;
};

export default TestRecord;
