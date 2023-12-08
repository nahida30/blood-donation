import { useEffect, useState } from "react";

const BlogWrite = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('https://blood-donation-server-pi.vercel.app/blog')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])

    return (
        <div className='py-20'>
            {blogs.map(blog => <div key={blog._id} className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium mb-4"> 
    {blog.blogName}
  </div>
  <div className="collapse-content"> 
    <p>{blog.details}</p>
  </div>
</div>)}
        </div>
    );
};

export default BlogWrite;