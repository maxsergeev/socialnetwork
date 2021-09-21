import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {//компонента одного диалога
    let path = '/dialogs/' + props.id;
    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {//компонента для одного сообщения в диалоге
    return(
        <div className={style.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {//компонента диалогов и сообщений
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem id='1' name='Max'/>
                <DialogItem id='2' name='Nastya'/>
                <DialogItem id='3' name='Vitek'/>
                <DialogItem id='4' name='Artem'/>
                <DialogItem id='5' name='Roma'/>
            </div>
            <div className={style.messages}>
                <Message message='Hello my friend' id='1'/>
                <Message message='My pretty boy' id='2'/>
                <Message message='Son, where u going???' id='5'/>
            </div>
        </div>
    );
}

export default Dialogs;