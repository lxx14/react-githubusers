import React from 'react';
import { Container } from '../styledComponents';

const Task = () => {
  return (
    <Container mainContainer>
      <p>
      <br/>
        Вывести список из 10 самых популярных GitHub пользователей в вашем городе.<br/> GitHub name пользователя - это ссылка на его профиль в GitHub (открывать в новой вкладке). <br/>В случае если GitHub API возвращает ошибку (например, превышен лимит запросов) - показывать пользователю уведомление. <br/><br/>Требования к реализации <br/>-	React.js <br/>-	Redux <br/>-	Styled-components
      </p>
    </Container>
  )
}

export default Task;