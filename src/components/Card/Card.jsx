import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = ({card, readTimeHandler, bookmarkHandler}) => {
    return (
        <div className='card mb-5'>
            <img className='poster' src={card.coverImg} alt="" />
            <div className='d-flex justify-content-between align-items-center p-3'>
                <div className='d-flex gap-3 align-items-center'>
                    <img className='author-img rounded-circle' src={card.authorImg} alt="" />
                    <div>
                        <h3>{card.authorName}</h3>
                        <p className='text-start'>{card.publishDate}</p>
                    </div>
                </div>
                <p>
                    0{card.readTime} min read 
                    <a href='#title' onClick={() => bookmarkHandler(card.blogTitle)} className='bookmark-btn'>
                        <FontAwesomeIcon icon={faBookmark} className='ps-3' />
                    </a>
                </p>
            </div>
            <h2 className='text-start pb-3 ps-3'>{card.blogTitle}</h2>
            <h5 className='text-start pb-3 ps-3'>#Beginners #Programming</h5>
            <a onClick={() => readTimeHandler(card.readTime)} className='text-start pb-3 ps-3' href="#blog-cart">Mark as read</a>
        </div>
    );
};

export default Card;