# Gulp前端自动化配置

<br>

<h3>安装</h3>

安装 nodejs

	http://nodejs.cn/

打开控制台窗口（mac系统下npm安装全局包需要在前面加上sudo）

选装 cnpm
国内的镜像地址，速度更稳定。安装后以下的npm命令替换为cnpm

	npm install cnpm -g --registry=https://registry.npm.taobao.org

安装 gulp

	npm install gulp -g

安装 浏览器自动刷新

	npm install browser-sync -g
	
生成package.json

	npm init （name、version、dscription必填，其他选填）


项目安装 gulp

	npm install gulp --save-dev

项目安装 sass编译

	npm install gulp-sass --save-dev

项目安装 jade编译
	
	npm install gulp-jade --save-dev

项目安装 浏览器自动刷新

	npm install browser-sync --save-dev


<br>
<h3>配置</h3>

拷贝gulpfile文件到项目根目录下


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
