import React, { Component, useEffect } from 'react';
import Post from '../layout/Post';
import $ from 'jquery';

class Blog extends Component {

    render() {

        let posts = $.ajax({
            type:"GET",
            url:"/blog/posts",
        })

        return <div className="Blog">
            <div className="head" style={{ margin:'0 15%' }}>
                <span><h1>Blog</h1></span>
                <p>Read up here on my experiences as a growing software developer in college. You can email me <a href="/contact" style={{ color:'#21e6c1',textDecoration:'underline' }}>here</a> or at <a href="mailto:roche.trey@gmail.com" style={{ color:'#21e6c1',textDecoration:'underline' }}>roche.trey@gmail.com</a> with any questions or feedback.</p>
            </div>
            <div className="posts" style={{ margin:'0 5%' }}>
                posts.map(post => (
                    <Post />
                ));
            </div>
        </div>
    }
}

export default Blog;