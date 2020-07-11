import React from 'react';
import data from '../../blogData.json';
import BlogConnect from './BlogConnect'

function BlogDetails(props) {
    const current = props.match.params.id - 1
    return (
        <div className="blog-container">
            <h1 className="blog-post-heading" >{data[current].heading}</h1>
            <p className="blog-post-content" dangerouslySetInnerHTML={{ __html: data[current].description }}></p>
            <BlogConnect />
        </div>
    );
}

export default BlogDetails;