var posts=["2022/07/21/DHCP服务/","2023/10/10/04741 计算机网络原理(自考)/","2023/10/10/Centos7 编译安装Nginx/","2022/07/21/Debian10的网络配置/","2022/07/21/Centos 基本命令/","2023/10/10/Docker安装部署/","2023/10/10/Keepalived+Nginx双机热备实验/","2022/07/21/NFS配置/","2023/11/01/Prometheus配置basic_auth/","2023/11/02/Prometheus黑盒监控/","2023/10/10/Nginx主配置文件中文注释/","2022/07/21/Samba服务配置/","2023/02/12/Shebang/","2022/07/21/Squid代理服务/","2023/02/12/Shell内置命令、外置命令/","2016/03/30/hello-world/","2023/11/01/jumpserver设置sftp默认路径/","2023/11/20/三、信息系统治理(主要考选择题)/","2023/10/20/kubernetes最新版部署/","2023/02/12/什么是shell脚本/","2023/02/12/执行shell脚本的方式/","2023/11/17/二、信息技术发展/","2023/11/16/一、信息化发展/","2023/02/12/脚本语言/","2023/02/12/环境变量的设置/","2023/11/10/阿里云ECS实现内网服务器访问外网/","2022/07/21/磁盘管理/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://djy.oldit.cn/svg%2Fhexo-logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临！","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp","descr":"分享设计与科技生活","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc3959f82.webp","color":"vip","tag":"生活"},{"name":"Lenous","link":"https://blog.leonus.cn/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c9890a.jpeg","descr":"进一寸有进一寸的欢喜。","siteshot":"https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c98fae.jpg","tag":"技术"},{"name":"风记星辰","link":"https://www.thyuu.com","avatar":"https://img02.anheyu.com/adminuploads/1/2023/07/04/64a3710cd824a.webp","descr":"简述热爱你来过的每一份温度","siteshot":"https://img02.anheyu.com/adminuploads/1/2023/07/04/64a371403e548.webp","tag":"技术"},{"name":"Black Flies","link":"https://www.yyyzyyyz.cn/","avatar":"https://img02.anheyu.com/adminuploads/1/2023/07/14/64b0b00b33d75.webp","descr":"When nothing goes right,just go left.","siteshot":"https://img02.anheyu.com/adminuploads/1/2023/07/09/64aa91e87d4c6.webp","tag":"技术"},{"name":"张时贰","link":"https://zhsher.cn/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/11/12/636ef2c1632a5.webp","descr":"环转码，爱敲代码的小张！","siteshot":"https://img02.anheyu.com/adminuploads/1/2023/02/03/63dc8d606e61a.webp","tag":"技术"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://djy.oldit.cn/link/%E5%B0%8F%E5%AD%99%E5%90%8C%E5%AD%A6.webp","descr":"路虽远行则将至，事虽难做则必成！","siteshot":"https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0d149b0b3.webp","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff42df52e.webp","descr":"Welcome to Fomalhaut🥝のTiny Home","recommend":true},{"name":"Fern","link":"http://www.hi-hufei.com","avatar":"https://img02.anheyu.com/adminuploads/1/2022/10/28/635b485bc4273.webp","descr":"一个正在重塑知识的技术人","recommend":true},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://img02.anheyu.com/adminuploads/1/2022/11/23/637e13d8c4ae4.webp","descr":"寒蝉黎明之时，便是重生之日","recommend":true},{"name":"绯鞠的博客","link":"https://loli.fj.cn","avatar":"https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa5660046ca.png","descr":"一只爱折腾的绯鞠","recommend":false},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://djy.oldit.cn/link/%E5%B0%8F%E5%AD%99%E5%90%8C%E5%AD%A6.webp","descr":"路虽远行则将至，事虽难做则必成！","recommend":false},{"name":"福福不服","link":"https://ffbf.top","avatar":"https://ffbf.top/upload/logo3.jpeg","descr":"不服就是不服","recommend":false},{"name":"xiaoger","link":"https://xiaoger.top","avatar":"https://djy.oldit.cn/link/xiaoger.webp","descr":"个人学习和分享壁纸的博客","recommend":false},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","recommend":false},{"name":"Mycpen","link":"https://blog.cpen.top/","avatar":"https://blog.cpen.top/img/avatar.jpg","descr":"这是一个有趣的博客","recommend":false},{"name":"Ethan.Tzy ","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","recommend":false},{"name":"极客郎","avatar":"https://ximfem.asia/img/jkl1.png","link":"https://ximfem.asia/","descr":"将科技玩到极致！","recommend":false},{"name":"Sunday","link":"https://blog.wyun521.top/","avatar":"https://djy.oldit.cn/link/7.webp","descr":"代码改变世界","recommend":false},{"name":"Haoyu的博客","link":"https://g-haoyu.top/","avatar":"https://g-haoyu.top/img/avatar.png","descr":"恭喜，你发现了宝藏","recommend":false},{"name":"李程ic","link":"https://www.licic.net/","avatar":"https://admin.licic.net/favicon.png","descr":"中华人民共和国万岁！","recommend":false},{"name":"小飞博客","link":"https://www.xffjs.com","avatar":"https://static.xffjs.com/xffjs/static/front/images/logo.png","descr":"生活明朗,万物可爱,人间值得,未来可期。","recommend":false},{"name":"Pupper","link":"https://pupper.cn","avatar":"https://img.pupper.cn/img/202307151348675.png","descr":"记录学习、生活中的点点滴滴~","recommend":false},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","recommend":false},{"name":"前端日记","link":"https://xzmblog.onrender.com/","avatar":"https://i.miji.bid/2023/08/09/eb59257ffc307103e5907a09eb10cefb.md.webp","descr":"前端切图仔一枚","recommend":false},{"name":"lvbibir's Blog","link":"https://www.lvbibir.cn","avatar":"https://www.lvbibir.cn/img/avatar.gif","descr":"life is a fucking movie","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };