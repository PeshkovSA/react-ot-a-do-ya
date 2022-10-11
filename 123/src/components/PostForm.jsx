import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({tittle: '', body: ''})


    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

    create(newPost)
    setPost({tittle: '', body: ''})
}

return (
    <form>
        <MyInput
            value={post.tittle}
            onChange={event => setPost({...post, tittle: event.target.value})}
            type='text'
            placeholder='Название поста'
        />
        <MyInput
            value={post.body}
            onChange={event => setPost({...post, body: event.target.value})}
            type='text'
            placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>создать пост</MyButton>
    </form>
);
}
;

export default PostForm;