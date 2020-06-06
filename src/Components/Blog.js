import React from 'react'
import './Blog.css'


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="blog-post">
                    <h2 className="blog-post-heading">
                        All about lorem ipsum and its history
                </h2>
                    <p className="blog-post-content">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                </div>
                <hr style={{marginTop: 20}}/>
            </div>
        );
    }
}


function Blog() {
    return (
        <div className="blog-container">
            <h1>Will Start Writing Soon...</h1>
        </div>
    )
}

export default Blog