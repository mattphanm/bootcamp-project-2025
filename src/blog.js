var blogs = [
    { title: "Matcha",
        date: "Winter, 2024",
        description: "Here is my attempt to recreate the Matcha Einspänners I have tried at the cafes I have visited in Los Angeles! After several attempts over the year, I finally found my favorite ratio for a homemade Matcha Einspänner. Through many trial and errors and experimenting with different oatmilk brands and sweetening syrups, I found the perfect balance of sweetness and umaminess.",
        image: "../images/matcha.jpg",
        imageAlt: "A",
        slug: "post-a" },
    { title: "cow",
        date: "Oct 1, 2025",
        description: "Intro...",
        image: "./images/a.png",
        imageAlt: "A",
        slug: "post-a" },
];
function blogsRender() {
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer)
        return console.warn("none");
    blogs.forEach(function (blog) {
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        var div = document.createElement("div");
        div.className = "blog-box";
        var title = document.createElement("h2");
        title.textContent = blog.title;
        var date = document.createElement("time");
        date.textContent = blog.date;
        var description = document.createElement("p");
        description.textContent = blog.description;
        div.append(image, title, date, description);
        if (blogContainer) {
            blogContainer.append(div);
        }
    });
}
blogsRender();
