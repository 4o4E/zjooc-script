// ==UserScript==
// @name         zjooc
// @namespace    https://github.com/4o4E/zjooc-script
// @version      1.0.0
// @description  zjooc 自动刷题
// @author       404E
// @match        *://www.zjooc.cn/ucenter/student/course/study/*/plan/detail/*
// @grant        none
// @supportURL   https://github.com/4o4E/zjooc-script/issues
// ==/UserScript==

(function () {
  'use strict';

  // 设置, 根据自己的网络状况调整
  const config = {
    // 首次学习开始之前的延迟(等待html加载)
    start: 3000,
    // 点击链接跳转到下一学习后等待加载的时长
    next: 1500,
    // 跳转后开始前的等待时长
    before: 1000
  }

  function getCurrent() {
    return $(".fr .el-tabs__nav-scroll .el-tabs__nav .is-active span > span").text();
  }

  // 前往下一个学习
  function next() {
    // 当前播放列表
    let next = $(".fr .el-tabs__nav-scroll .el-tabs__nav").find(".is-active + .el-tabs__item.is-top").first();
    if (next.length != 0) {
      console.log("[zjooc] > 跳转至下一项: " + next.find("span > span").text());
      next.click();
      return;
    }

    // 当前节
    next = $(".base-asider .el-submenu.is-active ul > li + li").first();
    if (next.length != 0) {
      console.log("[zjooc] > 跳转至下一节: " + next.text());
      next.click();
      return;
    }

    // 下一章
    next = $(".base-asider .el-submenu.is-active + li").find("ul > li").first();
    if (next.length != 0) {
      console.log("[zjooc] > 跳转至下一章: " + next.text());
      next.click();
      return;
    }
    alert("已完成所有学习");
    return;
  }

  // 尝试完成文档类型的学习
  function tryDoc() {
    console.log("[zjooc] > 开始文档学习: " + getCurrent());
    // 点击完成学习按钮
    $(".el-main .el-button")[0].click();
    // 等待跳转
    setTimeout(() => {
      // 学习完成
      console.log("[zjooc] > 文档学习完成: " + getCurrent());
      next();
      setTimeout(start, config.before);
    }, config.next);
  }

  // 视频设置点击
  function configVideo() {
    // 静音
    $("video")[0].parentElement.children[2].children[18].click();
    // 4倍速
    $("video")[0].parentElement.children[8].children[0].click();
    // 开始播放
    $("video")[0].parentElement.children[2].children[0].click();
  }

  // 尝试完成视频学习
  function tryVideo() {
    console.log("[zjooc] > 开始视频学习: " + getCurrent());
    configVideo();
    // let b = false;
    // 循环检测是否结束
    let id = setInterval(() => {
      let arr = $("video")[0].parentElement.children[2].children[7].innerHTML.split(' / ');
      // 若视频未开始播放则修复
      if (arr[0] === "00:00") configVideo();
      if (arr[0] === arr[1] && arr[0] != "00:00") {
        // 播放完成
        console.log("[zjooc] > 视频播放完成: " + getCurrent());
        // 取消定时器
        clearInterval(id);
        // 下一个
        next();
        setTimeout(start, config.before);
        return;
      }
    }, 250);
  }

  // 检测学习类型并开始学习
  function start() {
    if ($(".fr .el-tabs__nav-scroll .el-tabs__nav .is-active span > i")[0].classList.contains("complete")) next();
    if ($("video").length != 0) tryVideo();
    else tryDoc();
  }

  console.log("[zjooc] > 等待加载中...");
  setTimeout(() => {
    start();
  }, config.start);
})();
