import { useState } from 'react';
import { actorList } from './data.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < actorList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasNext) {
      setIndex(index - 1);
    } else {
      setIndex(1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let actor = actorList[index];
  return (
    <>
    <h1>John Leo Medina</h1>
     <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{actor.name} </i>
        by {actor.director}
      </h2>
      <h3>
        ({index + 1} of {actorList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{actor.description}</p>}
      <img
        src={actor.url}
        alt={actor.alt}
      />
    </>
  );
}
