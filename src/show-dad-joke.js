import React from 'react';

export const ShowDadJoke = (props) => {
  return (
    <section>
      <div className="joke">
        {props.joke}
      </div>
    </section>
  )
}