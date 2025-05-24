import React,{useEffect, useState} from 'react'
export default function Aboutme() {
  const [posts, setPosts] = useState([])





  const loadPost = async () => {
    try{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setPosts(data)
    }catch (error) {
      console.log("failed to fetch posts:", error);
    }
  };


useEffect(() => {
  loadPost(); // <- you call the function YOU defined above
}, []); // <- only once when the component first appears on the screen




console.log("hello")

  return (
      <> 
      <h1>Posts:</h1>
      <ul>
        {posts.map((post,index)=>(
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
