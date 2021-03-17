const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={props.isChecked} />
      {props.children}
    </div>
  );
};

Checkbox.defaultProps = {
  isChecked: false,
};

export default Checkbox;
