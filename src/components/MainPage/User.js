import React from 'react';
import { UserContainer } from '../styledComponents';

const User = (props) => {
  return (
    <UserContainer>
      <img src={props.avatar_url} />
      <div>
        <p>{props.name ? props.name : 'Incognito'}</p>
        <a href={props.html_url} target='blank'>{props.login}</a>
        {props.bio ? <p>{props.bio}</p> : <p>there could be his bio... But it's ampty ;)</p>}
        {props.location ? <p>{props.location}</p> : <p>From no one knows :)</p>}
      </div>
    </UserContainer>
  )
}
export default User;