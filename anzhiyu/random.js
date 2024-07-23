var posts=["2024/07/21/hello-world/","2024/07/23/esp32、esp8266接入小爱同学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };