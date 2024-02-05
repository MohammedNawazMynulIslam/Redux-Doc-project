import React, { useState } from 'react'
import {useDispatch, useSelector} from  "react-redux";
import { postUpdated } from './postsSlice';
import { useHistory } from 'react-router-dom';


export const EditPostForm = ({match}) => {
    const {postId} = match.params
    const post = useSelector(state=> state.posts.find(post=> post.id === postId))

    const [title,setTitle] = useState('')
    const[content,setContent] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e=>setTitle(e.target.value)
    const onContentChanged= e=> setContent(e.target.value)

    const onSavePostClicked=()=>{
        if(title&&content){
            dispatch(postUpdated({
                id:postId,title,content
            }))
            history.push(`/posts/${postId}`)
        }
    }




  return (
    <section>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type='text' id='postTitle' value={title} name="postTitle" placeholder="What's on your mind" onChange={onTitleChanged}/>

            <label htmlFor="postContent">Post Content:</label>
            <input type='text' id='postContent' value={content} name="postContent" onChange={onContentChanged}/>

        </form>
        <button type='button' onClick={onSavePostClicked}>Save post</button>
    </section>
  )
}
