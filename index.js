const arr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""); // 映射表

function base64Encode(str) {
  let binary = "";
  let ret = "";
  // 
  for (let [index] of Object.entries(str)) {
    const point = str.charCodeAt(index);
    binary += point.toString(2).padStart(8, "0"); // 先转换成二进制，不够则补位
  }

  let restString = "";
  let restNumber = binary.length % 6;

  if (restNumber) {
    restString = binary.substring(binary.length - restNumber).padEnd(6, "0");
  }

  binary = binary.substring(0, binary.length - restNumber);

  while (binary.length) {
    ret += arr[parseInt(binary.slice(0, 6), 2)]; // 每6位二进制转十进制得到索引值，去映射表里查找
    binary = binary.substring(6);  
  }

  if(restString){
    ret += arr[parseInt(restString, 2)];
    ret += ''.padEnd(restNumber,'=')  // 用 "=" 补位
  }

  return ret
}

console.log(base64Encode(`<?xml version="1.0" encoding="UTF-8"?>
<fw-creation video-width="1080" video-height="1920" version="1">
    <fw-scene>
        <fw-scene-layer type="raw">
            <fw-video duration="29960000" org-duration="29960000" background-color="" video-volume="1" capture-in="0" capture-out="29960000" trim-in="0" trim-out="29960000" scale-x="3.2" scale-y="3.2" translation-x="0" translation-y="0" rotation="0" module-scale-x="1" module-scale-y="1" module-translation-x="0" module-translation-y="0">
                <source src="https://cdn1-staging.fireworktv.com/medias/2021/7/5/1625490352-xjtwzbio/original/54dff7ab-7971-4baa-8b05-0e200d8571e8.mp4" width="864" height="480" aspect-ratio="16:9" m3u8-url="https://firework-meishe-data-staging.s3-us-west-2.amazonaws.com/editor/2021/07/05/video/99da58ebdb0644ff86d7e88c90240d57/99da58ebdb0644ff86d7e88c90240d57.m3u8" id="ZgpEXv"/>
            </fw-video>
        </fw-scene-layer>
    </fw-scene>
    <fw-scene>
        <fw-scene-layer type="raw">
            <fw-image motion-on="true" duration="3000000" org-duration="3000000" background-color="#ffff2424" video-volume="1" capture-in="0" capture-out="3000000" trim-in="0" trim-out="3000000" scale-x="1" scale-y="1" translation-x="0" translation-y="0" rotation="0" module-scale-x="1" module-scale-y="1" module-translation-x="0" module-translation-y="0">
                <source src=""/>
            </fw-image>
        </fw-scene-layer>
    </fw-scene>
</fw-creation>`));
