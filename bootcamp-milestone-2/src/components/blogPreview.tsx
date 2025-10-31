import React from 'react';
import style from './blogPreview.module.css';
import Image from 'next/image';
import { Blog } from "@/static/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.blogBox}> 
    
	
			{props.image && ( 
				<Image className={style.blogImage} src={props.image} alt={props.imageAlt} width={500} height={500} /> 
			)} 
			{props.video && ( 
				<video className={style.blogVideo} width={500} height={500} controls> <source src={props.video} type="video/mp4" /> </video> 
			)}
			<div className={style.blogContainer}>		 	
				<b> <h3 className={style.blogTitle}> {props.title} </h3> </b>		
				<i> <p className={style.blogDate}> {props.date} </p> </i>
				<p className={style.blogDescription}> {props.description} </p>
				<p className={style.slugged}> 
					<Link href={props.slug}> Read More... </Link>
				</p>
      			</div>
    </div>
  );
}
