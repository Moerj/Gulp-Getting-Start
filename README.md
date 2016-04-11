# Gulp + Webpack 前端自动化配置

<h3>有了这个，不用再每次写代码时重复地保存、刷新、看效果！！！</h3>

<b>本脚本工具可以为你做到：</b>
<p>1.代码效果时时展现在页面上</p>
<p>2.开启多浏览器联动，同时刷新，同时交互</p>
<p>3.保存修改自动编译sass、jade等模板</p>
<p>4.模块化、动态加载js模块</p>
<p>5.自动合并打包js，自动压缩js、css</p>

<br>

<h3>安装</h3>

<p>1.安装 nodejs</p>
http://nodejs.cn/

<p>2.打开控制台窗口</p>
（mac系统下npm安装全局包需要在前面加上sudo）

<br>

<p>3.选装 cnpm</p>
国内的镜像地址，速度更稳定。安装后以下的npm命令替换为cnpm

	npm install cnpm -g --registry=https://registry.npm.taobao.org

<p>4.安装 gulp</p>

	npm install gulp -g

<p>5.安装 浏览器自动刷新</p>

	npm install browser-sync -g

<p>6.下载package.json文件，安装其中已写好的依赖包</p>

	npm install --save-dev

	<span style="color:#c7254e">执行后项目会自动下载package中申明的依赖包，完成后略过以下步奏。</span>
	<br>
	若你选择自定义依赖包，则跳过这一步。从7开始自行生成package.json

<p>7.生成package.json</p>

	npm init （name、version、dscription必填，其他选填）


<p>8.将所需的模块用npm安装</p>


<br>
<h3>配置</h3>
拷贝gulpfile文件到项目根目录下

<h4>监听静态页面</h4>
	browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });

<h4>监听动态页面</h4>
	browserSync.init({
        proxy: "localhost:8080/xph/index.action"
    });

<br>
<h3>开始自动化</h3>
方法一：打开终端窗口
	用命令进入项目根目录(gulpfile所在目录)，输入gulp，回车

方法二：用webstorm运行gulp
	webstorm打开项目，右键gulpfile.js - Show Gulp Task
	在弹出的gulp操作窗双击default

<br>
<h3>Let's work together</h3>
http://moerj.com
