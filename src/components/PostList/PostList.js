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
                content: 'Integer dignissim erat at vulputate semper. Praesent eget nulla vitae felis auctor efficitur non ac diam. Donec elit augue, tempus ac libero in, lobortis pellentesque neque. Aliquam quis vestibulum mi, vitae tincidunt nisi.',
                comments: [
                  {
                    id: 1,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:'Sed consequat elit non bibendum finibus. Vestibulum semper, nisl sed sodales eleifend, nisl elit blandit mauris, id vulputate quam odio eget purus'
                  },
                  {
                    id: 2,
                    author: {
                      name: 'Itach Uchicha',
                      avatar: itachi
                    },
                    date: '04 Jun 2019',
                    content:
                    'Curabitur eleifend sapien ac tempus fringilla. Sed porta ullamcorper lectus. Ut nec ligula id orci volutpat faucibus. Vestibulum blandit tincidunt odio, eu finibus felis tempor sit amet. Nullam laoreet nisi nec ante hendrerit semper. Aliquam ultrices neque risus, id sodales diam condimentum sed.'
                  },
                  {
                    id: 3,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                    'Nullam posuere facilisis purus et ornare. Quisque quis augue ullamcorper, sagittis nisl eu, sodales augue. Praesent at malesuada urna, rutrum posuere tellus. Maecenas non malesuada justo. Curabitur vitae cursus urna. Donec varius, quam sit amet pellentesque facilisis, libero est rhoncus tortor, at porttitor enim ante eget lectus. Curabitur gravida mattis sapien. Nam luctus odio vel arcu interdum tincidunt. Aliquam scelerisque purus velit, ac tincidunt nulla aliquet id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tellus tellus, rutrum id ultrices sed, gravida in mi. Vestibulum risus eros, lobortis non mi sed, pulvinar posuere dui. Mauris et justo leo. Donec mi sapien, porta sit amet auctor at, consectetur a arcu'
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
                content: 'Sed at metus at arcu consequat molestie.',
                comments: [
                  {
                    id: 2,
                    author: {
                      name: 'Kisame hoshikage',
                      avatar: kisame
                    },
                    date: '04 Jun 2019',
                    content:
                    'Mauris egestas at tortor et mattis. Fusce elit orci, tempus id enim ac, bibendum dapibus nulla. Quisque eu est volutpat, tristique leo ac, dictum ex.'
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
