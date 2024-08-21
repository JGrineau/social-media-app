import Post from "./Post";
import { useState } from "react";
import uuid from "react-uuid";

function Posts() {
const [posts, setPosts] = useState(
  [
    {
      id: uuid(),
    title: "What is this",
    likes: 3,
    dislikes: 0
  },
  {
    id: uuid(),
    title: "This is what",
    likes: 2,
    dislikes: 1
  },
  {
    id: uuid(),
    title: "What is that",
    likes: 1,
    dislikes: 2
  }
]
);

// Sum up the total number of likes and dislikes
let totalLikes = 0;
let totalDislikes = 0;
posts.forEach((post) => {
  totalLikes += post.likes;
  totalDislikes += post.dislikes;
})

const handleAddPostClick = () => {
  const updatedPosts = [...posts];
  updatedPosts.push(
    {
      id: uuid(),
      title: "New Post",
      likes: 0,
      dislikes: 0
  }
);
  setPosts(updatedPosts);
  
}


const handlePostLike = (id) => {
  // console.log("Function is called!!", id);
  const updatedPosts = [...posts];
  console.log(updatedPosts);
  updatedPosts.forEach((post) => {
    if (post.id === id) {
      post.likes += 1;
    }
  })
  setPosts(updatedPosts);
}

//update the number of dislikes
const handlePostDislike = (id) => {
  const updatedPosts = [...posts];
  updatedPosts.forEach((post) => {
    if (post.id ===id){
      post.dislikes += 1;
    }
    })
    setPosts(updatedPosts);
}



  return (
    <main>
      <h2>List of Posts:</h2>
      {posts.map((post, index) => {
        return (
        <Post 
        key={index}
        id={post.id} 
        title = {post.title} 
        likes = {post.likes}
        dislikes={post.dislikes}
        onPostLike={handlePostLike}
        onPostDislike={handlePostDislike}
        
        />
         ) 
        })}

      <button onClick={handleAddPostClick}>Add Post</button>

      <div>
        Total Likes: {totalLikes} | 
        Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}
export default Posts;
