import { Link } from "gatsby";
import * as React from "react";
import MainLayout from "../components/MainLayout";

// markup
const IndexPage = () => {
  const posts = [];
  return (
    <MainLayout pageTitle="">
      <section id="short-introduction" className="short-introduction">
        <div className="short-introduction-header">
          <h1>Hy!</h1>
        </div>
        <div className="short-introduction-body">
          <p>I'm ganda, a software engineer based in Palu, Indonesia 🇮🇩.</p>
          <p>
            My blogs are about my journey as a software engineer, projects,
            hobbies, and topics that I find interesting.
          </p>
          <p>
            <Link to="/about">More info...</Link>
          </p>
        </div>
      </section>
      <section id="latest-post" className="section">
        <div id="recent-post" className="section-header">
          <h2 className="page-title">Recent Post</h2>
          <Link to="/blog">all post</Link>
        </div>
        <div className="section-body">
          {posts.length > 1 ? (
            posts.map((post) => {
              <article>
                <header>{post}</header>
              </article>;
            })
          ) : (
            <p>There is no posts yet</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default IndexPage;
