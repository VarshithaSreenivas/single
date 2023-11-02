/ Simulated data and functions
let userLastActivityTime = Date.now(); // Simulated user's last activity time
let posts = [
  { id: 1, content: 'Post 1' },
  { id: 2, content: 'Post 2' },
  { id: 3, content: 'Post 3' }
];

// Simulated functions that return promises
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      userLastActivityTime = Date.now(); // Simulating update of user's last activity time
      resolve(userLastActivityTime);
    }, 1000); // Simulating a 1-second delay
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve('Post created');
    }, 500); // Simulating a 0.5-second delay
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.pop(); // Deleting the last post
      resolve('Post deleted');
    }, 500); // Simulating a 0.5-second delay
  });
}

// Function to log posts and last activity time
function logPostsAndLastActivityTime() {
  console.log('All Posts:', posts);
  console.log('Last Activity Time:', new Date(userLastActivityTime).toLocaleString());
}

// Usage of Promise.all
createPost({ id: 4, content: 'Post 4' })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    logPostsAndLastActivityTime();
    return deletePost();
  })
  .then(() => {
    console.log('Remaining Posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });