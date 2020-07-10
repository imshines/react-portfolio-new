import React from 'react';
import BlogData from './BlogData';
import data from '../../blogData';
import './Blog.css';

function Blog() {

    const blog = data.map(datas => {
        return <BlogData key={datas.id} name={datas.name} description={datas.description} />
    })

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* {blog} */}
            Will write soon...
        </div>
    );
}

export default Blog;