import BlogPreview from '@/components/blogPreview';
import Link from "next/link";
import Navbar from "@/components/navbar";
import blogs from "../blogData";  

import style from "../components//navbar.module.css";

export default function Home() {
  return (
  <>   
      {blogs.map((blog,i) => 
          <BlogPreview
	   key={blog.slug + "-" + i}
          slug={blog.slug}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}    
	  date={blog.date}
          text={blog.text}
      	  />
      )}
  </>
  );

}

