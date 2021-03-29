import { React, useState } from "react";
import Link from "./Link.component.jsx";

export default ({ text, length }) => {
  const [isExpanded, expand] = useState(false);

  const renderText = () => {
    const linkText = isExpanded ? "Show less" : "Show more";

    if (text.length > length) {
      return (
        <p>
          {(isExpanded && text) || `${text.substring(0, length)}...`}
          <Link text={linkText} onClick={() => expand(!isExpanded)} />
        </p>
      );
    }
    return <p>{text}</p>;
  };
  return <div>{renderText()}</div>;
};
