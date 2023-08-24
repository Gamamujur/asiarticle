import LoadingScreen from "../components/LoadingScreen";

const Wrapper = (WrappedComponent) => {
  return function Wrapperfunction(props) {
    return (
      <>
        <LoadingScreen />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Wrapper;
