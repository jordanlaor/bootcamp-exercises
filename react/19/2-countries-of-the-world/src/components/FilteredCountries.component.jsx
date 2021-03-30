export default function FilteredCountries(props) {
  const { countries } = props;
  return (
    <ul>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </ul>
  );
}
