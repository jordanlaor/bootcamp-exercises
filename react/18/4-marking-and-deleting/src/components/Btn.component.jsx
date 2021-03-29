export default ({ value, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {value}
    </button>
  );
};
