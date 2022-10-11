import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()

    const handleClick = () => {
        router(`/posts/${props.post.id}`);
    };

    return (
            <div className='post'>
                <div className='post__content'>
                    <strong> {props.post.id} {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                    <div className='post__btns'>
                        <MyButton onClick={handleClick}>
                            Добавить
                        </MyButton>
                        <MyButton onClick={()=> props.remove(props.post)} >
                            Удалить
                        </MyButton>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;