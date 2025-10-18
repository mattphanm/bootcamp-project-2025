var blogs = [
    {
        title: "Matcha",
        date: "Winter, 2024",
        description: "Here is my attempt to recreate the Matcha Einspänners I have tried at the cafes I have visited in Los Angeles! After several attempts over the year, I finally found my favorite ratio for a homemade Matcha Einspänner. Through many trial and errors and experimenting with different oatmilk brands and sweetening syrups, I found the perfect balance of sweetness and umaminess.",
        image: "../images/matcha.jpg",
        imageAlt: "matcha",
        slug: "matcha"
    },
    {
        title: "Intra-Day Trading Futures",
        date: "January 23, 2025",
        description: "My most valuable asset and passion of mines for the past 3 years have been Intraday Trading. A love and hate relationship. Through years of practice, patience, and discipline, I have progressed to the point where I am now...",
        image: "./images/certificate.png",
        imageAlt: "cert",
        slug: "post-a"
    },
    {
        title: "Golf",
        date: "Summer, 2025",
        description: "Here is a video of me trying out golfing over Summer. I have been going to the golf range with my friends, practicing my swings. I have not been consistent with this though. Playing golf with my friends at the nearest range, to me, is a good break away and a good bonding time...",
        video: "../images/golf.mp4",
        slug: "post-a",
    }
];
function blogsRender() {
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer)
        return;
    blogs.forEach(function (blog, index) {
        var media;
        if (blog.video) {
            var video = document.createElement("video");
            video.src = blog.video;
            video.controls = true;
            video.className = "blog-video";
            media = video;
        }
        else if (blog.image) {
            var image = document.createElement("img");
            image.src = blog.image;
            image.alt = blog.imageAlt;
            image.className = "blog-image";
            media = image;
        }
        var div = document.createElement("div");
        div.className = "blog-box";
        if (index % 2 === 1) {
            div.classList.add("reverse");
        }
        var title = document.createElement("a");
        title.textContent = blog.title;
        title.className = "blog-title";
        title.href = "../public/blogs/matcha.html";
        var date = document.createElement("time");
        date.textContent = blog.date;
        date.className = "blog-date";
        var description = document.createElement("p");
        description.textContent = blog.description;
        description.className = "blog-description";
        var contentdiv = document.createElement("div");
        contentdiv.className = "blog-content";
        div.append(media, contentdiv);
        if (blogContainer) {
            blogContainer.append(div);
            contentdiv.append(title, date, description);
        }
    });
}
blogsRender();
