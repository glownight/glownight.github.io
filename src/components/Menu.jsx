import React from 'react'

const Menu = () => {

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
        <div className='menu'>
            <h1>other posts you may like</h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={posts.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>阅读更多</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
