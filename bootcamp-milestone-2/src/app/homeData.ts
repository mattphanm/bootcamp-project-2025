import type { StaticImageData } from "next/image";


export interface Home {
    title: string;
    	date: string;
	description: string;
	image?: | StaticImageData;
	imageAlt?: string;
	slug: string;
  	video?: string;	
}

const homeContent: Home[] = [
	{ 
	  title: "Matcha", 
	  date: "Winter, 2024", 
	  description: "Here is my attempt to recreate the Matcha Einspänners I have tried at the cafes I have visited in Los Angeles! After several attempts over the year, I finally found my favorite ratio for a homemade Matcha Einspänner. Through many trial and errors and experimenting with different oatmilk brands and sweetening syrups, I found the perfect balance of sweetness and umaminess.", 
	  slug: "glog",
  	}
];

export default homeContent; 
