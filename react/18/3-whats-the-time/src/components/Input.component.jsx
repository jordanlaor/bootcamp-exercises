export default ({ value, unit, onChange }) => {
  return (
    <div>
      <label htmlFor={unit}>{unit}</label>
      <input type="text" name={unit} id={unit} value={value} onChange={onChange} />
    </div>
  );
};
