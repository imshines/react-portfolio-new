import React from 'react';
import BlogData from './BlogData';
import data from '../../blogData.json';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog(props) {

    const blog = data.map(datas => {
        return (
            <Link to={`/blog/${datas.id}`} key={datas.id}>
                <BlogData name={datas.heading} brief={datas.brief} tag={datas.tag} />
            </Link>
        )
    })

    return (
        <div className='blog-container'>
            {blog}
        </div>
    );
}

export default Blog;