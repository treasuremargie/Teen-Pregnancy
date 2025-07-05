function addPost() {
  const postText = document.getElementById('newPost').value.trim();
  if (postText) {
    const postContainer = document.getElementById('blog-posts');
    const post = document.createElement('p');
    post.textContent = postText;
    post.classList.add('border', 'p-2', 'my-1', 'rounded');
    postContainer.appendChild(post);
    document.getElementById('newPost').value = '';
  } else {
    alert('Please write something to post.');
  }
}