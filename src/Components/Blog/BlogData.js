import React from 'react';

function BlogData(props) {
    return (
        <div className="blog-container">
            <h2 className="blog-post-heading" >{props.name}</h2>
            <div style={chipStyle}>{props.tag}</div>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.brief }}>
            </div>
            <span>see more...</span>
            <hr style={{ marginTop: 20 }} />
        </div>
    )
}

const chipStyle = { padding: 2, borderRadius: 5, float: 'right', transform: 'translateY(-25px)', background: 'white', color: 'black', display: 'inline-block' }

export default BlogData