import React from 'react';

export const Imessage = () => {

  const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <section>
      <div className="imessage">
        <p>iMessage<br />
        Today {time}</p>
      </div>
    </section>
  )
}