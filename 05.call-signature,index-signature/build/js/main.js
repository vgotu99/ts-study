"use strict";
const post = {
    id: 1,
    title: "post",
    getLikeNumber(like) {
        return like;
    },
};
post.getLikeNumber(1);
const post1 = {
    id: 1,
    title: "post1",
};
//key의 타입은 string / value의 타입은 string
post1["description"] = "description1";
//key의 타입은 string / value의 타입은 number
post1["pages"] = 300;
const userNames = ['John', 'Kim', 'Joe'];
// key의 타입은 number / value의 타입은 string
userNames[0] = 'Lee';
