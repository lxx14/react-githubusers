import React from 'react';
import { UserContainer, Link, Image, Icon } from '../styledComponents';

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
        <UserContainer nameContainer mailContainer>
          {props.location ? <p> <Icon className="fas fa-map-marker-alt"></Icon> {props.location}</p> : <p><Icon className="fas fa-map-marker-alt"></Icon> From no one knows :) </p>}
          {props.email?<p><Icon className="fas fa-envelope"></Icon> {props.location} </p> : <p><Icon className="fas fa-envelope"></Icon> Mail not specified</p>}
        </ UserContainer>
      </div>
    </ UserContainer>
  )
}
export default User;