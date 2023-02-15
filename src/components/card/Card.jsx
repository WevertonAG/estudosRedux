import React, { useState, useEffect } from 'react';
import './Card.css';
import Api from '../../Api/Api';
import Avatar from '../avatar/Avatar';

const Card = () => {
  const [user, setUser] = useState({})
  const [users, setUsers] = useState();

  useEffect(() => {
    Api.get('wevertonag')
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => { console.log(err) })

  }, [])
  console.log(user)
  return (
    <div className='card'>
      <Avatar src={user.avatar_url} />
      <div className='infos'>
        <label>Nome: {user.name}</label>
        <label>Bio: {user.bio}</label>
        <label>Repositórios: {user.public_repos}</label>
        <label>Seguidores: {user.followers}</label>
        <label>Cidade: {user.location}</label>
      </div>
    </div>
  )

}

export default Card