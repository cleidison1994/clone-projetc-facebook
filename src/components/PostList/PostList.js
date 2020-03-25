import React, { Component } from 'react';

import './style.css'
import Posts from '../Post/Post';

import itachi from '../../assets/itachi.jpg';
import kisame from '../../assets/kisame.jpg';
import naruto from '../../assets/naruto.jpg';


class PostList extends Component {
    state= {
        post:[
            {
                id: 1,
                author: {
                  name: 'Itach Uchiha',
                  avatar: itachi
                },
                date: '22 Mar 2020',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nisi, lobortis ultricies cursus sit amet, viverra efficitur massa. Phasellus dictum massa id eros molestie, non sagittis purus volutpat. Maecenas vehicula sem a accumsan interdum. Pellentesque malesuada diam sit amet mi feugiat interdum. Nam fermentum finibus egestas. Maecenas interdum facilisis dolor. Fusce tincidunt faucibus ligula nec ultrices.',
                comments: [
                  {
                    id: 2,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                      'Suspendisse auctor tellus ac justo rutrum, ac maximus orci mattis. Pellentesque in ex vel orci consectetur ullamcorper sed eget enim'
                  }
                ]
              },
              {
                id: 2,
                author: {
                  name: 'Naruto',
                  avatar: naruto
                },
                date: '04 Jun 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                  {
                    id: 1,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  },
                  {
                    id: 2,
                    author: {
                      name: 'Itach Uchicha',
                      avatar: itachi
                    },
                    date: '04 Jun 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  },
                  {
                    id: 3,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  }
                ]
              },
              {
                id: 3,
                author: {
                  name: 'Itach Uchiha',
                  avatar: itachi
                },
                date: '04 Jun 2019',
                content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
                comments: [
                  {
                    id: 2,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                      'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
                  }
                ]
              }
        ]
    };

    render() {
        const { post } = this.state;
        return(
           <div className="postlist">
               {post.map(post =>(
                   <Posts key={post.id} {...post}
                    postItem={post} 
                    comment={post}/>
               ))
            }
           </div>
        );
    }
}
export default PostList;
