import FadeLoader from "react-spinners/FadeLoader";

export const Loader = () => {
    const override = {
        margin: "50vh auto",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      };
  return (
    <FadeLoader
      color={"#EF7F1A"}
      loading={true}
      cssOverride={override}
      size={80}
      aria-label="Loading Spinner"
    />
  );
};
