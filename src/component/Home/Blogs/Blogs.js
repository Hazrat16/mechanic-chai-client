import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'


const blogData = [
    {
        title : 'Check at least a mechanic in a year for your car engine',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Ali',
        authorImg : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
        date : '23 April 2019'
    },
    {
        title : 'Check at least a mechanic in a year for your water line',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'John',
        authorImg : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
        date : '23 April 2019'
    },
    {
        title : 'Check at least a mechanic in a year for your Electric Line',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Cudi',
        authorImg : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-brand text-uppercase">our blog</h5>
                    <h1 className='text-white'>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;