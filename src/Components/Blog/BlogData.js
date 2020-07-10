import React from 'react';

function BlogData(props) {
    return (
        <div key={props.id} className="blog-container">
            <h2 className="blog-post-heading">{props.name}</h2>
            <p className="blog-post-content">{props.description}</p>
            <hr style={{marginTop: 20}}/>
        </div>
    )
}

export default BlogData