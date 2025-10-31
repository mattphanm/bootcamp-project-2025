
import certificate from "../../Images/certificate.png";
import type { StaticImageData } from "next/image";
import matcha from "../../Images/matcha.JPG";

export interface Blog {
    title: string;
    	date: string;
	description: string;
	image?: | StaticImageData;
	imageAlt?: string;
	slug: string;
  	video?: string;	
}

const blogs: Blog[] = [
	{ 
	  title: "Matcha", 
	  date: "Winter, 2024", 
	  description: "Here is my attempt to recreate the Matcha Einspänners I have tried at the cafes I have visited in Los Angeles! After several attempts over the year, I finally found my favorite ratio for a homemade Matcha Einspänner. Through many trial and errors and experimenting with different oatmilk brands and sweetening syrups, I found the perfect balance of sweetness and umaminess.", 
	  image: matcha, 
 	  imageAlt: "matcha", 
 	  slug: "/matchaslug"},
	{ 
	  title: "Intra-Day Trading Futures", 
          date: "January 23, 2025", 
          description: "My most valuable asset and passion of mines for the past 3 years have been Intraday Trading. A love and hate relationship. Through years of practice, patience, and discipline, I have progressed to the point where I am now...",
          image: certificate,
          imageAlt: "cert", 
          slug: "/certificateslug",
	} 
	/* 
	  title: "Golf",
	  date: "Summer, 2025",
	  description: "Here is a video of me trying out golfing over Summer. I have been going to the golf range with my friends, practicing my swings. I have not been consistent with this though. Playing golf with my friends at the nearest range, to me, is a good break away and a good bonding time...",
	  video: "../../Images/golf.mp4",
	  slug: "post-b",
	*/
	
 
];

export default blogs; 
