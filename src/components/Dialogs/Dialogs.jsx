import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const dialogs = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Artem'},
];
const messages = [
    {id: 1, message: 'Hello my friend'},
    {id: 2, message: 'Dear friend'},
    {id: 3, message: 'Good night my love'},
    {id: 4, message: 'We are only friend'},
];
const Message = (props) => {//компонента для одного сообщения в диалоге
    return(
        <div className={style.message}>
            {props.message}
        </div>
    );
}

const DialogItem = (props) => {//компонента одного диалога
    let path = '/dialogs/' + props.id;
    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

let messageElements = messages.map( m => (<Message message={m.message} id={m.id}/>));
let dialogElements = dialogs.map( d => (<DialogItem id={d.id} name={d.name}/>));

const Dialogs = (props) => {//компонента диалогов и сообщений
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;