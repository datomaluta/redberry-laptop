import Actions from "../components/homeComponents/Actions";
import Images from "../components/homeComponents/Images";
import CenteredWrapper from "../layouts/CenteredWrapper";

const Home = () => {
  return (
    <CenteredWrapper>
      <Images />
      <Actions />
    </CenteredWrapper>
  );
};

export default Home;
