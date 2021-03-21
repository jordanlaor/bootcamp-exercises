export default function Btn(props) {
  return (
    <button onClick={props.handleBtnClick} value={props.value}>
      {props.btnText}
    </button>
  );
}
