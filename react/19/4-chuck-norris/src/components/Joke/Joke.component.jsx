import { React, useState, useEffect } from "react";
import ChuckApi from "../../api/Chuck.api";

export default function Joke(props) {
  let [joke, setJoke] = useState("");
  useEffect(() => getAJoke(), [props.category]);

  const getAJoke = async () => {
    const requestSpecification = props.category
      ? {
          params: { category: props.category },
        }
      : null;
    const jokeFetched = (await ChuckApi.get(`random`, requestSpecification)).data.value;
    setJoke(jokeFetched);
  };
  return <div className="joke">{joke}</div>;
}
