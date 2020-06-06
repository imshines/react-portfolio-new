import React from 'react'
import './Blog.css'
import data from '../../blogData';


class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <div className="blog-post">
                    <h2 className="blog-post-heading">
                        {this.props.blogHeading}
                    </h2>
                    <p className="blog-post-content">
                        {this.props.blogContent}
                    </p>
                </div>
                <hr style={{ marginTop: 20 }} />
            </div>
        );
    }
}


function Blog() {

    const blog = data.map(
        (datas) => {
           return <BlogPost key={datas.id} blogHeading = {datas.name} blogContent = {datas.description} />
        }
    )

    return (
        <div className="blog-container">
            <h1>This is just a placeholder, will start writing blog soon</h1>
            {blog}
        </div>
    )
}

export default Blog