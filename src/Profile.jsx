import React from 'react';


const Profile = () => {
    return (
      <div className='profile'>
        <div className='profile_left'>
          <div><img alt='Avatar' src='https://i.ibb.co/tY7rKzC/QZ6A5608.jpg'></img></div>
          <div>описание под аватаром</div>
        </div>

        <div className='profile_right'>
          <div>ИМЯ, ФАМИЛИЯ и/или НИК</div>
          <div>Дата рождения</div>
          <div>город</div>
          <div>семейное положение</div>
          <div>образование</div>
          <div>список увлечений (группы?)</div>
        </div>
      </div>
    )
  }

  export default Profile;