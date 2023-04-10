import React from 'react';
import BlogCart from '../BlogCart/BlogCart';
import Cards from '../Cards/Cards';

const Main = ({readTimeHandler, time, bookmarkHandler, title}) => {
    return (
        <div className='text-center container'>
            <div className="row">
                <div className="col-md-8 col-12">
                    <Cards readTimeHandler={readTimeHandler} bookmarkHandler={bookmarkHandler}></Cards>
                </div>
                <div className="col-md-4 col-12">
                    <BlogCart title={title} time={time}></BlogCart>
                </div>
            </div>
        </div>
    );
};

export default Main;