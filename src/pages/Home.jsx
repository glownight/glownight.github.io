import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const posts = [
        {
            id: 1,
            title: '世界读书日',
            desc: '世界读书',
            img: 'https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1'
        },
        {
            id: 2,
            title: '世界读书日2',
            desc: '世界读书',
            img: 'https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1'
        },
        {
            id: 3,
            title: '世界读书日3',
            desc: '世界读书',
            img: 'https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1'
        }
    ]
    return (
        <div className='home'>
            <div className="posts">
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>阅读更多</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
