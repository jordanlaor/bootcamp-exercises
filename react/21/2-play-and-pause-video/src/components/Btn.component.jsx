export default function Btn(props) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}
