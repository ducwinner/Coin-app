import loading2 from "../../assets/img/loading2.gif";

function Loading() {
  return (
    <img
      style={{
        width: 100,
        objectFit: "contain",
        position: " absolute",
        marginTop: "40vh",
      }}
      src={loading2}
      alt="loanding..."
    />
  );
}

export default Loading;
