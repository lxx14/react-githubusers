import React from 'react';

const User = (props) => {
  return (
    <div>
      <img src={props.avatar_url} />
      <p>{props.name}</p>
      <a href={props.html_url} target='blank'>{props.login}</a>
      {props.bio ? <p>{props.bio}</p> : <p>there could be his bio... But it's ampty ;)</p>}
      {props.location ? <p>{props.location}</p> : <p>From no one knows :)</p>}
    </div>
  )
}
export default User;