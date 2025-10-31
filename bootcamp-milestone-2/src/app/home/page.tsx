import HomePreview from '@/components/homePreview';
import Link from "next/link";
import Navbar from "@/components/navbar";
import homeContent from "../homeData";  

import style from "../components//navbar.module.css";

export default function Home() {
  return (
  <>   
      {homeContent.map((home,i) =>
          <HomePreview
	  key={home.slug + "-" + i}
          slug={home.slug}
          title={home.title}
          description={home.description}
          image={home.image}
          date={home.date}
          text={home.text}
      	  />
      )}
  </>
  );

}

