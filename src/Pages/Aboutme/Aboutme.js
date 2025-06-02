import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Buttons/Button';
import "./Aboutme.css";

export default function Aboutme() {
  const [posts, setPosts] = useState([]);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loadPost = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    loadPost(); // <- you call the function YOU defined above
  }, []); // <- only once when the component first appears on the screen

  useEffect(() => {
    setPageCounts(calculatePageCount()); // <- you call the function YOU defined above
  }, [posts]);


    const handleClickOnPages = useCallback((pageNumber) => {
      setActivePageNumber(pageNumber)
    })


  const calculatePageCount = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  };


  return (
    <>
      <h1>Posts:</h1>
      <ul>
        {posts.slice(3 * (activePageNumber - 1), 3 * activePageNumber ).map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
      <div className='pagination'>
        <ul>
          {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? 'active' : ''} key={index}>
              <Button
                handleClick={() => setActivePageNumber(index + 1)}
                title={index + 1}
                width={"25px"}
                height={"25px"}
                color={activePageNumber === index + 1 ? "white" : "#333"}
                border={"1px solid #ccc"}
                borderRadius={"3px"}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
