import React from  'react';

import './style.css';
import Poster from '../../assets/itachi.jpg';
import Comments from '../Comments/Coments';
import Reaction from '../Reaction/Reaction';



function Post( { postItem, comment }) {
    var comentarios = comment.comments;

    return(
        <div className="post">
            <div className="post-header">
                <img className="avatar" src={postItem.author.avatar} alt="sem imagem"/>
               <div className="user-info">
                <span className="name-user">{postItem.author.name}</span>
                    <span>{postItem.date}</span>
               </div>
            </div>
              <p className="post-content">{postItem.content}</p>              
                {comentarios.map(c => (
                    <Comments key={c.id} newComments={c}/>
                ))}
                <Reaction/>
        </div>
    );
}
export default Post;