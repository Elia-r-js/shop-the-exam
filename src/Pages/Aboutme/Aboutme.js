import React,{useEffect, useState} from 'react'
import Button from '../../components/Buttons/Button'
import "./Aboutme.css"
export default function Aboutme() {
  const [posts, setPosts] = useState([])
  const [pageCounts, setpageCounts] = useState(0)






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


useEffect(() => {
  setpageCounts(calculatePageCount()); // <- you call the function YOU defined above
}, [posts]);


const calculatePageCount=()=>{
  if(posts.length% 3>0){
    return parseInt(posts.length/ 3+1);
  } else
  return parseInt(posts.length / 3);
}

console.log(pageCounts,"pagecounts" )

  return (
      <> 
      <h1>Posts:</h1>
      <ul>
        {posts.slice(0,3).map((post,index)=>(
          <li key={index}>{post.title}</li>
        ))}
      </ul>
      <div className='pagination'>
        <ul>
          <li>
         <Button title={1} width={"50px"} height={"50px"} backgroundColor={"#2563eb"} borderRadius={"100%"} listStyle={"none"} display={"flex"} />
        </li>
                <li>
         <Button title={2} width={"50px"} height={"50px"} backgroundColor={"#2563eb"} borderRadius={"100%"} listStyle={"none"} display={"flex"}/>
        </li>
                <li>
         <Button title={3} width={"50px"} height={"50px"} backgroundColor={"#2563eb"} borderRadius={"100%"} listStyle={"none"} display={"flex"}/>
        </li>
                <li>
         <Button title={4} width={"50px"} height={"50px"} backgroundColor={"#2563eb"} borderRadius={"100%"} listStyle={"none"} display={"flex"}/>
        </li>
        </ul>
      </div>
    </>
  );
}