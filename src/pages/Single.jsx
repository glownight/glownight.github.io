import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1" alt="" />
            </div>
            <div className="user">
                <img src="https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1" alt="" />
            </div>
            <div className="info">
                <span>许</span>
                <p>posted 2day ago</p>
            </div>
            <div className="edit">
                <Link to={`/write?edit=2`}>
                    <img src="https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1" alt="edit" />
                </Link>
                <img src="https://th.bing.com/th?id=ODL.c450411e622cd78966ba1f3764209060&w=174&h=84&c=10&rs=1&qlt=99&o=6&dpr=2&pid=13.1" alt="delete" />
                <h1>a title</h1>
                <p>some writes</p>
            </div>
            {/* <div className="menu">m</div> */}
            <Menu />
        </div>
    )
}

export default Single
