function CourseCard(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      <h2>{props.name}</h2>

      <p>
        <strong>Course Code:</strong> {props.code}
      </p>

      <p>
        <strong>Credits:</strong> {props.credits}
      </p>

      <p>
        <strong>Grade:</strong> {props.grade}
      </p>
    </div>
  );
}

export default CourseCard;