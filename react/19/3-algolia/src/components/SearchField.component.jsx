export default function SearchField(props) {
  const { value, onChange } = props;
  return <input type="text" name="search" id="search" value={value} onChange={onChange} />;
}
