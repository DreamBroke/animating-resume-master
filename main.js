let resume = `# 杨金鑫-2年工作经验-Web开发工程师

18664364894 | yjx3427603@outlook.com | 深圳<br>
广西大学(211) | 2017届 | 2年工作经验 | Web开发工程师<br>
Github: https://github.com/DreamBroke | Blog: https://blog.csdn.net/a3427603

## 专业技能
- 前端
    - HTML5, CSS3 & JavaScript, NodeJS, Vue, JQuery, Bootstrap, ESLint
    - WebRTC
- 后端
    - Java, JFinal, Scala
    - MySql, DataSource, Druid
- 其他
    - 需求分析, UML图绘制, 设计模式
    - AWS, SonarQube代码质量检测平台搭建

## 工作经历

### 深圳华声医疗技术股份有限公司

2017/6 - 2019/3

- 职位：软件开发工程师
- 主要技术：\`后端\`、\`前端\`、\`需求分析\`
- 工作内容：负责了多个功能从需求细节设计、数据库设计到前后端实现，如：通知推送、在线升级，功能授权，视频直播；参与了前端页面由freemarker重构为vue的工作；参与了后端的重构，重新建立起了全新的API、Service、Model、DAO、BO各层级；进行过多种技术的预研并分享给其他成员，如：AWS的StroageGateway，Kurento，druid，SonarQube，JFinal源码分析；依赖预研得出的结果进行相应功能的开发。

### 深圳创新设计研究院有限公司

2016/8 - 2016/10

- 职位：前端开发（实习）
- 主要技术：\`scala\`、\`play framework\`、\`Bootstrap\`
- 工作内容：使用scala语言 + play框架，对公司官网进行开发。

## 项目经验

### 教学直播

- 关键词：\`WebRTC\`、\`Kurento\`、\`WebSocket\`、\`分布式系统\`
- 描述：此项目由个人独立开发，使用Kurento作为媒体服务器，页面与后端服务器间通过WebSocket协议传输基础内容。直播端通过webRTC协议与媒体服务器建立视频管道连接后进行视频推送，再由媒体服务器与观看端通过同样的方式建立视频管道连接后进行视频推送。

### 数据库自动更新模块

- 关键词：\`后端\`、\`Maven\`、\`JFinal\`、\`数据库映射\`
- 背景：我们存在各个环境下都存在相应的数据库，如Local（本地开发）、Debug（局域网）、Test（测试服务器）、Prop（生产服务器）。由于项目中的Model是会与数据库表格绑定，如果结构不一致就会报错，无法运行。因此以往更新数据库结构时，都需要人为手动连接测试服务器或生产服务器，运行SQL文件以更新数据库，因此存在较大的风险问题。
- 实现：该功能由我单独负责，因为项目架构变动，经历过多次更新，这里描述我最后一次更新后的情景。大致为编写了一个Java类，执行时会先访问数据库查询当前数据库版本，然后读取resource中的配置文件，找到对应版本，如果后续存在新的版本的话，则依次运行相应版本下的sql文件，并将数据库版本更新至那个版本。后续还有与Model自动生成项目的联动和矛盾，继续写下去就太多了，在此暂且略过，有兴趣可以当面详谈。
`;

let code_ready = `/*
 * 嗨，我是杨金鑫。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`;

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`;

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information p {
  line-height: 24px;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}
#jobs > .experience {
  margin-bottom: 6px;
}

#jobs > .experience, #education {
  position: relative;
}
#jobs p, #education p {
  position: absolute;
  right: 0px;
}
#jobs p {
  top: 6px;
}
#education p {
  top: 40px;
}

/*
 *  大功告成，正如右边所示，这就是我的简历啦
 *  点击下方的“下载PDF简历”按钮还可以直接下载我的简历的PDF文件哦
 *  以上，期待与您在面试中相见
 */
`;

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    adjustResume().then(() => {
      showDownloadButton();
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '我眼花了！慢一点~'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="education"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#skills').append($('h2:contains("技能")'), $('ul').first())
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume;
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}