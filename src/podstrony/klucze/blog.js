import React from 'react';

function Blog(props){
    const post = [
        {id: 1, title: "Witaj świecie", content: "witamy uczących się reacta!"},
        {id: 2, title: "Pan Tadeusz", content: "Nie polecam"},
        {id: 3, title: "Konrad", content:"Walnięty na łeb"}
    ];

    const slideBar = (
        <ul>
            {post.map((blog) =>
                <li key='blog.id'>
                    {blog.title}
                </li>
            )}
        </ul>
    );

    const content = post.map((blog) =>
        <div key='blog.id'>
            <h3> {blog.title} </h3>
            <p> {blog.content} </p>
        </div>
    );

    return(
        <div>
            {slideBar}
            {content}
        </div>
    );
}

export default Blog;