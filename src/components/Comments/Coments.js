import React from 'react';

import Comentador from '../../assets/kisame.jpg'
import './style.css'

function Comments({ newComments }) {
    return(
        <div className="post-comments">
            <div className="divider"/>
            <div className="coment">
                <img src={newComments.author.avatar} alt=""/>
                <p>
                    <span>{newComments.author.name}</span>
                     {newComments.content}
                </p>
            </div>
        </div>
    );
}
export default Comments;