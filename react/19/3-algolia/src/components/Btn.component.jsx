export default function Btn(props) {
  const { onClick, value } = props;
  return <button onClick={onClick}>{value}</button>;
}
