import React from 'react';
import { UserContainer, Link, Image } from '../styledComponents';

const User = (props) => {
  return (
    <UserContainer>
      <Image src={props.avatar_url} />
      <div>
      <UserContainer nameContainer>
        <p>{props.name ? props.name : 'Incognito'}</p>
        <Link href={props.html_url} target='blank'>{props.login}</Link>
        </ UserContainer>
        {props.bio ? <h3>{props.bio}</h3> : <h3>there could be his bio... But it's ampty ;)</h3>}
        {props.location ? <p><i className="fas fa-map-marker-alt"></i> {props.location}</p> : <p><i className="fas fa-map-marker-alt"></i> From no one knows :)</p>}
      </div>
    </ UserContainer>
  )
}
export default User;