export default function ResultsList(props) {
  const { results } = props;
  return (
    <ul>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </ul>
  );
}
