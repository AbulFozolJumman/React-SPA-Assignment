import React from 'react';
import './BlogCart.css'

const BlogCart = ({time, title}) => {
    return (
        <div id='blog-cart'>
            <div className="time">
                <h2>Spent time on read: <span id='previous-time'>{time}</span> min</h2>
            </div>
            <div className='blogs p-3'>
                <h2 className='py-3' id='title'>Bookmarked blogs: {title.length}</h2>
                {
                    title.map(t => <h3 className='blog p-2 mb-3 bg-white text-start'>{t}</h3>)
                }
            </div>
        </div>
    );
};

export default BlogCart;