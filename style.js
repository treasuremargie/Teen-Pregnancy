// Store blog stories in browser memory
let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// Function to display stories
function displayBlogs() {
  const container = document.getElementById("blog-posts");
  container.innerHTML = "";

  blogPosts.forEach((post) => {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("blog-story");
    storyDiv.innerHTML = `
      <p>"${post.story}"</p>
      <small>- ${post.name || "Anonymous"}</small>
      <hr />
    `;
    container.appendChild(storyDiv);
  });
}

// Handle story form submission
document.getElementById("blog-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const story = document.getElementById("story").value.trim();
  const  = document.getElementById("story").value.trim();
  const name = document.getElementById("name").value.trim();

  if (story === "") {
    alert("Please write your story.");
    return;
  }

  blogPosts.push({ story, name });
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

  document.getElementById("story").value = "";
  document.getElementById("name").value = "";
  displayBlogs();
  alert("Thank you for sharing your story!");
});

// Load blog stories on page load
window.onload = function () {
  displayBlogs();
};