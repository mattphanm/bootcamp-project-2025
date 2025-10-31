import Image from "next/image";
import style from '../../components/blogPreview.module.css';


export default function Matcha(){
	return (
		<div> 
			<h1 className={style.blogTitle}> - Matcha Blog - </h1>
			<p style={{ textAlign: "center" }}> 
				Here is my attempt to recreate the Matcha Einspänners I have tried at the cafes I have visited in Los Angeles! 
				<br />
                        	After several attempts over the year, I finally found my favorite ratio for a homemade Matcha Einspänner. Through 
                        	many trial and errors and experimenting with different oatmilk brands and sweetening syrups, I found the perfect balance of sweetnes 				     and umaminess.
			</p>
		</div>
	);
}
