import React, { useEffect, useRef, useState } from "react";
import getPostList from "../api/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButtons from "../components/UI/buttons/MyButtons";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import getPagination from "../utils/getCountPage";
import { addToBd, deletePost } from "../api/PostService";
import api from "api";
import Paginator from "components/UI/Paginator/Paginator";


export default function Posts() {
      const [posts, setPostsList] = useState([])
      const [filter, setFilter] = useState({sort: '', query: ''})
      const [modal, setModal] =useState(false)
      const [totalPages, setTotalPages] = useState(0)
      const [limit, setLimit] = useState(10)
      const [page, setPage] = useState(1)
      const sortedSelectPosts = usePosts(posts, filter.sort, filter.query)
      let arr = getPagination(totalPages)
      const lastElem = useRef()
      const observer = useRef()

      const [fetchPost, isPostsLoading] = useFetching(async (limit, page) => {
        api.getPostList(limit, page)
        .then(res => {
          setPostsList([...posts, ...res])
          setTotalPages(Math.ceil(res.length/limit))
        })
      })


      useEffect(() => { 
      if (isPostsLoading) return;
      if (observer.current) observer.current.disconnect()
      function callback(entries, observer) {
        if (entries[0].isIntersecting && page < totalPages) {
          console.log(page)
          setPage(page+1)
          
        }
      }
      observer.current = new IntersectionObserver(callback)
      observer.current.observe(lastElem.current)
      }, [isPostsLoading])
  

      useEffect(()=> {
        fetchPost(limit, page)
      }, [page])

      
      function createPost(newPost) {
        addToBd(newPost)
        setPostsList([...posts, newPost])
        setModal(false)
      }
      
      function removePost(id) {
          deletePost(id)
          setPostsList(posts.filter(p => p.id !== id))
      }
    
    
    
      function changePage (page) {
        setPage(page)
      }


      return (
        <div className="App">
          <MyButtons onClick={() => setModal(true)}>Добавить</MyButtons>  
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>
          <PostFilter 
              filter={filter} 
              setFilter={setFilter} 
          />
          {isPostsLoading &&
          <div className="spinner-border" role="status" style={{display: 'flex', justifyContent: 'center'}}> </div>}
          
          {<PostList posts={sortedSelectPosts} remove={removePost}/>}
          <div ref={lastElem} style={{height:20, background:'red'}}/>
          <Paginator sortedSelectPosts, arr, page, changePage} />
        </div>
      );
    }