import React from "react";
import classes from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";
import { UrlObject } from "url";

type namePropsType = {
    name: string
    id: number
    avatar: string
  }

export default function DialogItem(props: namePropsType) {
let path = "user/" + props.id;

  return (
    <div>
      <div className={classes.user}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
}
