import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogBar from './blog_bar';
import BlogCard from './blog_card';
//import blogs from './../blogs';
import { fetchPosts } from './actions';
import { isFirstRender } from './../../../common/utils/data';
//import './_blog.scss';

class BlogPage extends Component {
  static initialAction(fetchFrom) {
    return fetchPosts(fetchFrom, { start: 0, end: 6 });
  }

  componentDidMount() {
    if (isFirstRender(this.props.posts)) {
      this.props.dispatch(BlogPage.initialAction('client'));
    }
  }

  render() {
    const { search, posts } = this.props;
    return (
      <section className="Blog-container">
        <h1 className="Blog-header">
          <strong className="Blog-headerTitle">LET’S LEARN ABOUT THE WORLD OF PROGRAMMING</strong>
        </h1>
        <BlogBar />
        {search && <h2>Buscar por: "{search}"</h2>}
        <main className="Blog-list">
          {posts.map(elem => <BlogCard {...elem} />)}
        </main>
      </section>
    );
  }
}

export default connect(({ blog }) => ({
  posts: blog.posts,
  search: blog.search
}), null)(BlogPage);
