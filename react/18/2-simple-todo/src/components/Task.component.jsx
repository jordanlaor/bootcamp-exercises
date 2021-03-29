export default ({ task, onClick }) => {
  const textDecoration = task.completed ? "line-through" : "none";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "50px" }}>
      <h3 style={{ textDecoration }}>{task.name}</h3>
      <div onClick={onClick}>{task.completed ? "👍" : "👎"}</div>
    </div>
  );
};
