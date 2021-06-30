import React, { useContext, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';
import Title from '../components/Title/Title';
import BlogCard from '../components/BlogCard/BlogCard';
import { heroData, aboutData, projectsData, contactData, footerData, blogsData } from '../mock/data';


function BlogPage() {
  const { blogs } = useContext(PortfolioContext)
  console.log('test:')
  console.log(blogs)
return(
  <>
       <section id="projects">
        <Container>
          <div className="project-wrapper" style={{ 'margin-top' : '5rem'}}>
            <Title title="Taylor's Blog" />
            {blogs.map((data)=>{
              const { title, info, info2, url, repo, img, id } = data;
              return (
                <BlogCard blog={data} />
              );
            })}
          </div>
        </Container>
      </section>
  </>
)
}

export default BlogPage;
