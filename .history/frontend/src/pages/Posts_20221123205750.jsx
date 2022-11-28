import React, { useEffect, useRef, useState, useContext } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButtons from "../components/UI/buttons/MyButtons";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import getPagination from "../utils/getCountPage";
import api from "api";
import { AuthContext } from "utils/context";


export default function Posts() {
      const [posts, setPostsList] = useState([])
      const [filter, setFilter] = useState({sort: '', query: '', author: ''})
      const [modal, setModal] =useState(false)
      const [totalPages, setTotalPages] = useState(0)
      const {isAuth, setisAuth} = useContext(AuthContext)
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
        const title = newPost.title
        const body = newPost.body
        api.createPost({title, body})
        setPostsList([...posts, newPost])
        setModal(false)
      }
      
      function removePost(id) {
          api.removePost(id)
          setPostsList(posts.filter(p => p.id !== id))
      }
    
    
    
      function changePage (page) {
        setPage(page)
      }

      const Paginaion = () =>{
        if (sortedSelectPosts.length) {
          return (
            <div className="page__wrapper">
            {
            arr.map(p =>
              <span key={p} className={page === p ? 'page page__current' : 'page'} onClick={() => changePage(p)}>
                  {p}
              </span>
              )}
              </div>
          )
        }
      }
      const getUser = (data) => {
        setFilter
      }

      return (
        <div className="App">
          {isAuth.isUser && <MyButtons onClick={() => setModal(true)}>Добавить</MyButtons>}
          <MyButtons onClick={getUser}>Посмотреть пользователя</MyButtons>   
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>
          <PostFilter 
              filter={filter} 
              setFilter={setFilter} 
          />
          {isPostsLoading &&
            <div className="spinner-border" role="status" style={{display: 'flex', justifyContent: 'center'}}> </div>}
          
          {<PostList posts={sortedSelectPosts} remove={removePost} getUser={getUser}/>}
              <div ref={lastElem} style={{height:20, background:'red'}}/>
          <Paginaion />
        </div>
      );
    }