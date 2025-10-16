var blogs = [
    { title: "Post A",
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
        div.className = "blog-container";
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
