# zjooc-script

自动挂机刷[zjooc](https://www.zjooc.cn/)的[油猴](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)脚本, 目前支持视频学习(自动静音+4倍速)和文档学习

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