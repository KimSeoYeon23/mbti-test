import { results, mbtis } from "./data.js";

// url의 쿼리 스트링 값을 갖고옴
const mbti = new URLSearchParams(location.search).get('mbti');

const result = results[mbtis[mbti]];
const titleEl = document.querySelector('.page-title');
const characterEl = document.querySelector('.character');
const boxEl = document.querySelectorAll('.box');
const jobEls = document.querySelectorAll('.job');
const lectureEl = document.querySelector('.lecture');
const lectureImgEl = document.querySelector('.lecture img');

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEl.forEach((boxEl, index) => boxEl.innerHTML = result.results[index]);
jobEls.forEach((jobEl, index) => jobEl.innerHTML = result.jobs[index]);
lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;