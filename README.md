# zjooc-script

自动挂机刷[zjooc](https://www.zjooc.cn/)的[油猴](https://www.tampermonkey.net/)脚本, 目前支持视频学习(自动静音+4倍速)和文档学习

部分代码来源于[ColdThunder11/ZJOOCAutoPlay](https://github.com/ColdThunder11/ZJOOCAutoPlay)

## 如何使用

1. 下载并安装[油猴](https://www.tampermonkey.net/)浏览器扩展
2. 点击打开上方文件列表中的[`zjooc.js`](zjooc.js)并复制其中的文本
3. 在浏览器的扩展中打开油猴的管理面板
4. 点击右上角的加号
5. 将复制的脚本内容粘贴进去并保存
6. 打开zjooc你要刷的课(脚本会自动启动)

**Tips**

在播放界面遇到刷过的课需要跳过时可以点击第一个需要刷的课然后刷新界面, 否则不会自动检测(视频)

## 可配置项

```javascript
// 设置, 根据自己的网络状况调整
const config = {
  // 首次学习开始之前的延迟(等待html加载)
  start: 1000,
  // 点击链接跳转到下一学习后等待加载的时长
  next: 1000,
  // 跳转后开始前的等待时长
  before: 1000
}
```

## PS

练手作, 本来想让脚本支持多开的同时刷的, 结果发现比较麻烦...

遇到问题可以在(issue)[https://github.com/4o4E/zjooc-script/issues]发