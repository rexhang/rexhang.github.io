# rexhang.github.io

# 拉取代码步骤

    1、$ git init

## 2、配置ssh

    $ ssh-keygen -t rsa -C "你的邮箱名"

    $ git config --global user.name "your_username"  /*设置用户名*/

    $ git config --global user.email "your_useremail"  /*设置邮箱*/

    $ ssh -T git@github.com /*测试是否成功设置*/

## 3、拉取代码

    $ git pull git@github.com:rexhang/rexhang.github.io.git

## 4、常用命令

    1:$ git status => 查看当前更改内容，通常在要在commit之前用于确认：

    2:$ git add xxx.html => 添加新文件 $ git add . => 添加所有

    3:$ git rm xxx.html => 删除新文件

    4:$ git commit xxx.html -m "注释写这" => 提交文件，添加注释到本地

    5:$ git push git@github.com:rexhang/rexhang.github.io.git  => 将本地代码推送到服务端

    6:$ git pull git@github.com:rexhang/rexhang.github.io.git => 拉取服务端最新代码到本地


<font face="微软雅黑" color="#ff7300" size=26>[我的博客](https://rexhang.com/blog "title text")</font>
