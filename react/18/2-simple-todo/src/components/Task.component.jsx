export default ({ task, onClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "50px" }}>
      <h3>{task.name}</h3>
      <div onClick={onClick}>{task.completed ? "👍" : "👎"}</div>
    </div>
  );
};
