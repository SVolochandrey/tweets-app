import { InfinitySpin } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

const Loader = (page) => {
  if (page) {
    return (
      <LoaderBox>
        <InfinitySpin width="400" color="#573657" />
      </LoaderBox>
    );
  }
  return <InfinitySpin width="400" color="#573657" />;
};

export default Loader;
