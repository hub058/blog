(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{177:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("文件链接")]),s._v(" "),e("p",[s._v("ln 文件链接命令")])]),s._v(" "),e("h2",{attrs:{id:"_1、ln"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、ln","aria-hidden":"true"}},[s._v("#")]),s._v(" 1、ln")]),s._v(" "),e("blockquote",[e("p",[s._v("NAME\n​       ln - make links between files")]),s._v(" "),e("p",[s._v("​\t# 在文件之间创建连接")]),s._v(" "),e("p",[s._v("SYNOPSIS\n​       ln [OPTION]...  TARGET LINK_NAME")]),s._v(" "),e("p",[s._v("​\t#ln 选项(可选) 目标对象 连接名称")])]),s._v(" "),e("p",[s._v("1.硬链接")]),s._v(" "),e("blockquote",[e("p",[s._v("ln 源文件 链接文件")]),s._v(" "),e("p",[s._v("硬链接文件的特点是跟源文件同步更新(跟拷贝不一样)")])]),s._v(" "),e("p",[s._v("2.软连接")]),s._v(" "),e("blockquote",[e("p",[s._v("ln -s 源文件 链接文件")]),s._v(" "),e("p",[s._v("类似Windows中的快捷方式")])]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("权限管理")]),s._v(" "),e("p",[s._v("Linux系统中的权限管理")])]),s._v(" "),e("h2",{attrs:{id:"_2、chmod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、chmod","aria-hidden":"true"}},[s._v("#")]),s._v(" 2、chmod")]),s._v(" "),e("blockquote",[e("p",[s._v("chmod")]),s._v(" "),e("p",[s._v("修改文件权限")]),s._v(" "),e("p",[s._v("用法")]),s._v(" "),e("p",[s._v("Usage: chmod [OPTION]... MODE[,MODE]... FILE...")]),s._v(" "),e("p",[s._v("chmod 选项(可选) 权限 文件")]),s._v(" "),e("p",[s._v("Each MODE is of the form "),e("code",[s._v("ugoa -+= rwx")])])]),s._v(" "),e("p",[s._v("[ugoa]")]),s._v(" "),e("blockquote",[e("p",[s._v("用户类型")]),s._v(" "),e("p",[s._v("u: user 当前登录的用户")]),s._v(" "),e("p",[s._v("g: group 当前用户所在的组")]),s._v(" "),e("p",[s._v("o: others 其他用户")]),s._v(" "),e("p",[s._v("a: all 所有用户")])]),s._v(" "),e("p",[s._v("[-+=]")]),s._v(" "),e("blockquote",[e("p",[s._v("权限操作")]),s._v(" "),e("p",[s._v("-: 撤销权限")]),s._v(" "),e("p",[s._v("+: 增加权限")]),s._v(" "),e("p",[s._v("=: 直接授予权限")])]),s._v(" "),e("p",[s._v("[rwx]")]),s._v(" "),e("blockquote",[e("p",[s._v("权限类型")]),s._v(" "),e("p",[s._v("r: read 可读的权限")]),s._v(" "),e("p",[s._v("w: write 写的(创建，修改，删除)权限")]),s._v(" "),e("p",[s._v("x: execute 执行的权限")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[zed@localhost Desktop]$ ll\ntotal 4\n-rw-rw-r--. 1 zed zed 6 Jan 15 22:12 aaa\n\n# -rw-rw-r--\n# 第一位 -表示是一个文件，d表示目录,l表示软链接文件\n# 后9位 rw-rw-r--.\n# 每三位一分\n# 前三位:rw-（当前用户的权限）\trw-:可读可写(有读的权限，有写的权限，没有执行的权限)\n# 中间三位:rw-（同组的其他用户的权限）\n# 后三位:r--（其他用户的权限）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("文件和目录的权限区别：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("权限")]),s._v(" "),e("th",[s._v("对文件来说")]),s._v(" "),e("th",[s._v("对目录来说")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("r:读的权限")]),s._v(" "),e("td",[s._v("可以查看文件内容")]),s._v(" "),e("td",[s._v("可以查看目录内容")])]),s._v(" "),e("tr",[e("td",[s._v("w:写的权限")]),s._v(" "),e("td",[s._v("可以修改文件内容")]),s._v(" "),e("td",[s._v("可以在目录内创建删除文件")])]),s._v(" "),e("tr",[e("td",[s._v("x:执行的权限")]),s._v(" "),e("td",[s._v("运行文件")]),s._v(" "),e("td",[s._v("可以打开目录")])])])]),s._v(" "),e("p",[s._v("修改权限的语法1：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# chmod [ugoa][+-=][rwx] 文件\n[zed@localhost ~]$ chmod u+w mysql/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("修改权限的语法2：")]),s._v(" "),e("blockquote",[e("p",[s._v("chmod 777 文件")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 后9位 rw-rw-r--  664\n# 每三位一分\n# 前三位:rw- 6=4+2+0\n# 中间三位:rw- 6=4+2+0\n# 后三位:r-- 4=4+0+0\n# rwx 4+2+1=7 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[zed@localhost ~]$ ll\ntotal 36\ndrwxr-xr-x. 2 zed zed 4096 Jan 15 22:12 Desktop\n# 权限 755\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_3、chown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、chown","aria-hidden":"true"}},[s._v("#")]),s._v(" 3、chown")]),s._v(" "),e("blockquote",[e("p",[s._v("chown")]),s._v(" "),e("p",[s._v("改变文件所有者")]),s._v(" "),e("p",[s._v("语法：chown 用户名 文件名")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost zed]# ll\ndrw-r--r--. 2 root zed 4096 Jan 15 22:22 mysql\n[root@localhost zed]# chown zed mysql/\n[root@localhost zed]# ll\ndrw-r--r--. 2 zed zed 4096 Jan 15 22:22 mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_4、chgrp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、chgrp","aria-hidden":"true"}},[s._v("#")]),s._v(" 4、chgrp")]),s._v(" "),e("blockquote",[e("p",[s._v("chgrp 组名 文件名")]),s._v(" "),e("p",[s._v("改变文件所属的组")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost zed]# ll\ndrw-r--r--. 2 zed zed 4096 Jan 15 22:22 mysql\n[root@localhost zed]# chgrp root mysql/\n[root@localhost zed]# ll\ndrw-r--r--. 2 zed root 4096 Jan 15 22:22 mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_5、which"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、which","aria-hidden":"true"}},[s._v("#")]),s._v(" 5、which")]),s._v(" "),e("blockquote",[e("p",[s._v("which 命令名称")]),s._v(" "),e("p",[s._v("显示当前命令所在的目录")]),s._v(" "),e("p",[s._v("which ls")]),s._v(" "),e("p",[s._v("which chmod")]),s._v(" "),e("p",[s._v("...")])]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("文件搜索")]),s._v(" "),e("p",[s._v("文件搜索命令")])]),s._v(" "),e("h2",{attrs:{id:"_6、find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、find","aria-hidden":"true"}},[s._v("#")]),s._v(" 6、find")]),s._v(" "),e("blockquote",[e("p",[s._v("查找文件或目录")]),s._v(" "),e("p",[s._v("NAME\n​       find - search for files in a directory hierarchy")]),s._v(" "),e("p",[s._v("​\t在目录机器子目录中查找文件")]),s._v(" "),e("p",[s._v("SYNOPSIS\n​       find [可选的选项] 路径 表达式")]),s._v(" "),e("p",[s._v("​\t在哪些路径下 按什么方式[表达式] 查找文件(按文件大小，所有者，修改时间...)")])]),s._v(" "),e("p",[s._v("语法:find 查找的路径 查找的关键词(表达式)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[zed@localhost ~]$ ll Desktop/\ntotal 202396\n-rw-r--r--. 1 zed zed 194996919 Sep 29  2017 hadoop-2.7.0.zip\n-rw-r--r--. 1 zed zed       158 Jan 15 23:45 hosts\n-rw-r--r--. 1 zed zed  12220593 Jul  2  2018 memcached.wmv\n-rw-r--r--. 1 zed zed      9113 Jan  2 18:48 mvnw\n-rw-r--r--. 1 zed zed       251 Jan 15 23:46 my.cnf\n-rw-r--r--. 1 zed zed      1946 Jan  2 19:22 pom.xml\n-rw-r--r--. 1 zed zed      1796 Jan 15 23:45 profile\n[zed@localhost ~]$ find Desktop/ -size +1c\nDesktop/\nDesktop/memcached.wmv\nDesktop/mvnw\nDesktop/hosts\nDesktop/my.cnf\nDesktop/pom.xml\nDesktop/hadoop-2.7.0.zip\nDesktop/profile\n[zed@localhost ~]$ find Desktop/ -size -200c  # 查找Desktop目录下 小于200byte的文件\nDesktop/hosts\n[zed@localhost ~]$ find Desktop/ -size +1M # 查找Desktop目录下 大于1M的文件\nDesktop/memcached.wmv\nDesktop/hadoop-2.7.0.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" -size n[cwbkMG]\n              File uses n units of space.  The following suffixes can be used:\n\n              ‘b’    for 512-byte blocks (this is the default if no suffix is used)\n\n              ‘c’    for bytes\n\n              ‘w’    for two-byte words\n\n              ‘k’    for Kilobytes (units of 1024 bytes)\n\n              ‘M’    for Megabytes (units of 1048576 bytes)\n\n              ‘G’    for Gigabytes (units of 1073741824 bytes)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("blockquote",[e("p",[s._v("[zed@localhost ~]$ find Desktop/ -size +1M -a -size -200M")]),s._v(" "),e("p",[s._v("查找大于1M同时小于200M的文件")])]),s._v(" "),e("h2",{attrs:{id:"_7、locate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、locate","aria-hidden":"true"}},[s._v("#")]),s._v(" 7、locate")]),s._v(" "),e("blockquote",[e("p",[s._v("全局的模糊查找文件或目录")]),s._v(" "),e("p",[s._v("前提:")]),s._v(" "),e("p",[s._v("updatedb（更新全局索引的，建立整个系统目录文件的数据库,需要root权限执行这个命令）")]),s._v(" "),e("p",[s._v("locate 关键字")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[zed@localhost ~]$ locate hadoop\n/home/zed/Desktop/hadoop-2.7.0.zip\n[zed@localhost ~]$ \n# 如果系统中存在文件，但是没有查找到 ，需要更新一些索引的数据库\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_8、grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、grep","aria-hidden":"true"}},[s._v("#")]),s._v(" 8、grep")]),s._v(" "),e("blockquote",[e("p",[s._v("grep 关键字 搜索的文件")]),s._v(" "),e("p",[s._v("从要搜索的文件中查找关键词，返回关键词所在的行")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[zed@localhost Desktop]$ cat file \nhi hello linux\nhello\nguonianhao\nhao\n[zed@localhost Desktop]$ grep hao file\nguonianhao\nhao\n[zed@localhost Desktop]$ grep hello file\nhi hello linux\nhello\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("帮助命令")]),s._v(" "),e("p",[s._v("系统帮助命令")])]),s._v(" "),e("h2",{attrs:{id:"_9、man"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、man","aria-hidden":"true"}},[s._v("#")]),s._v(" 9、man")]),s._v(" "),e("blockquote",[e("p",[s._v("man [命令名字或者配置文件]")]),s._v(" "),e("p",[s._v("作用：获取帮助信息")]),s._v(" "),e("p",[s._v("help 命令名")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("man ls # 获取ls命令的帮助信息\nman services # 获取services配置文件的帮助信息\ninfo ls # 获取帮助信息\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}],!1,null,null,null);t.options.__file="07-Linux常用命令.md";a.default=t.exports}}]);