(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{170:function(a,v,_){"use strict";_.r(v);var t=_(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("div",{staticClass:"content"},[_("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[a._v("Linux面试常见问题")]),a._v(" "),_("p",[a._v("64个Linux面试常见问题送给你")])]),a._v(" "),_("h2",{attrs:{id:"问题一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题一","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题一:")]),a._v(" "),_("p",[a._v("绝对路径用什么符号表示？当前目录、上层目录用什么表示？主目录用什么表示? 切换目录用什么命令？")]),a._v(" "),_("p",[a._v("答案:\n绝对路径： 如 "),_("code",[a._v("/etc/init.d")]),a._v("\n当前目录和上层目录： "),_("code",[a._v("./")]),a._v(" "),_("code",[a._v("../")]),a._v("\n主目录： "),_("code",[a._v("~/")]),a._v("\n切换目录： "),_("code",[a._v("cd")])]),a._v(" "),_("h2",{attrs:{id:"问题二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二:")]),a._v(" "),_("p",[a._v("怎么查看当前进程？怎么执行退出？怎么查看当前路径？\n答案:\n查看当前进程： ps\n执行退出： exit\n查看当前路径： pwd")]),a._v(" "),_("h2",{attrs:{id:"问题三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三:")]),a._v(" "),_("p",[a._v("怎么清屏？怎么退出当前命令？怎么执行睡眠？怎么查看当前用户 id？查看指定帮助用什么命令？\n答案:\n清屏： clear\n退出当前命令： ctrl+c 彻底退出\n执行睡眠 ： ctrl+z 挂起当前进程fg 恢复后台\n查看当前用户 id： ”id“：查看显示目前登陆账户的 uid 和 gid 及所属分组及用户名\n查看指定帮助： 如 man adduser 这个很全 而且有例子；")]),a._v(" "),_("p",[a._v("adduser --help 这个告诉你一些常用参数； info adduesr；")]),a._v(" "),_("h2",{attrs:{id:"问题四"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四:")]),a._v(" "),_("p",[a._v("Ls 命令执行什么功能？ 可以带哪些参数，有什么区别？\n答案:\nls 执行的功能： 列出指定目录中的目录，以及文件\n哪些参数以及区别： a 所有文件l 详细信息，包括大小字节数，可读可写可执行的权限等")]),a._v(" "),_("h2",{attrs:{id:"问题五"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题五","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题五:")]),a._v(" "),_("p",[a._v("建立软链接(快捷方式)，以及硬链接的命令。\n答案:\n软链接： ln -s slink source\n硬链接： ln link source")]),a._v(" "),_("h2",{attrs:{id:"问题六"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题六","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题六:")]),a._v(" "),_("p",[a._v("目录创建用什么命令？创建文件用什么命令？复制文件用什么命令？\n答案:\n创建目录： mkdir\n创建文件：典型的如 touch，vi 也可以创建文件，其实只要向一个不存在的文件输出，都会创建文件\n复制文件： cp")]),a._v(" "),_("h2",{attrs:{id:"问题七"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题七","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题七:")]),a._v(" "),_("p",[a._v("文件权限修改用什么命令？格式是怎么样的？\n文件权限修改： chmod\n格式如下：")]),a._v(" "),_("blockquote",[_("p",[a._v("$ chmod u+x file 给 file 的属主增加执行权限\n$ chmod 751 file 给 file 的属主分配读、写、执行(7)的权限，给 file 的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限\n$ chmod u=rwx,g=rx,o=x file 上例的另一种形式\n$ chmod =r file 为所有用户分配读权限\n$ chmod 444 file 同上例\n$ chmod a-wx,a+r file同上例\n$ chmod -R u+r directory 递归地给 directory 目录下所有文件和子目录的属主分配读的权限")])]),a._v(" "),_("h2",{attrs:{id:"问题八"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题八","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题八:")]),a._v(" "),_("p",[a._v("查看文件内容有哪些命令可以使用？\n答案:\nvi 文件名 #编辑方式查看，可修改\ncat 文件名 #显示全部文件内容\nmore 文件名 #分页显示文件内容\nless 文件名 #与 more 相似，更好的是可以往前翻页\ntail 文件名 #仅查看尾部，还可以指定行数\nhead 文件名 #仅查看头部,还可以指定行数")]),a._v(" "),_("h2",{attrs:{id:"问题九"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题九","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题九:")]),a._v(" "),_("p",[a._v("随意写文件命令？怎么向屏幕输出带空格的字符串，比如”hello world”?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("写文件命令：vi")]),a._v(" "),_("p",[a._v("向屏幕输出带空格的字符串:echo hello world")]),a._v(" "),_("h2",{attrs:{id:"问题十"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十:")]),a._v(" "),_("p",[a._v("终端是哪个文件夹下的哪个文件？黑洞文件是哪个文件夹下的哪个命令？\n答案:\n终端  /dev/tty")]),a._v(" "),_("p",[a._v("黑洞文件  /dev/null")]),a._v(" "),_("h2",{attrs:{id:"问题十一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十一","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十一:")]),a._v(" "),_("p",[a._v("移动文件用哪个命令？改名用哪个命令？\n答案:\nmv mv")]),a._v(" "),_("h2",{attrs:{id:"问题十二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十二","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十二:")]),a._v(" "),_("p",[a._v("复制文件用哪个命令？如果需要连同文件夹一块复制呢？如果需要有提示功能呢？\n答案:\ncp cp -r  ？？？？")]),a._v(" "),_("h2",{attrs:{id:"问题十三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十三","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十三:")]),a._v(" "),_("p",[a._v("删除文件用哪个命令？如果需要连目录及目录下文件一块删除呢？删除空文件夹用什么命令？\n答案:\nrm rm -r rmdir")]),a._v(" "),_("h2",{attrs:{id:"问题十四"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十四","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十四:")]),a._v(" "),_("p",[a._v("Linux 下命令有哪几种可使用的通配符？分别代表什么含义?\n答案:\n“？”可替代单个字符。")]),a._v(" "),_("p",[a._v("“*”可替代任意多个字符。")]),a._v(" "),_("p",[a._v("方括号“[charset]”可替代 charset 集中的任何单个字符，如[a-z]，[abABC]")]),a._v(" "),_("h2",{attrs:{id:"问题十五"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十五","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十五:")]),a._v(" "),_("p",[a._v("用什么命令对一个文件的内容进行统计？(行号、单词数、字节数)\n答案:")]),a._v(" "),_("p",[a._v("wc 命令 - c 统计字节数 - l 统计行数 - w 统计字数。")]),a._v(" "),_("h2",{attrs:{id:"问题十六"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十六","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十六:")]),a._v(" "),_("p",[a._v("Grep 命令有什么用？ 如何忽略大小写？ 如何查找不含该串的行?\n答案:\n是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹 配的行打印出来。")]),a._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[a._v("grep [string] filename \n\ngrep [^string] filename\n")])]),a._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[a._v("1")]),_("br"),_("span",{staticClass:"line-number"},[a._v("2")]),_("br"),_("span",{staticClass:"line-number"},[a._v("3")]),_("br")])]),_("h2",{attrs:{id:"问题十七"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十七","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十七:")]),a._v(" "),_("p",[a._v("Linux 中进程有哪几种状态？在 ps 显示出来的信息中，分别用什么符号表示的？\n答案:\n（1）、不可中断状态：进程处于睡眠状态，但是此刻进程是不可中断的。不可中断， 指进程不响应异步信号。\n（2）、暂停状态/跟踪状态：向进程发送一个 SIGSTOP 信号，它就会因响应该信号 而进入 TASK_STOPPED 状态;当进程正在被跟踪时，它处于 TASK_TRACED 这个特殊的状态。\n“正在被跟踪”指的是进程暂停下来，等待跟踪它的进程对它进行操作。")]),a._v(" "),_("p",[a._v("（3）、就绪状态：在 run_queue 队列里的状态")]),a._v(" "),_("p",[a._v("（4）、运行状态：在 run_queue 队列里的状态\n（5）、可中断睡眠状态：处于这个状态的进程因为等待某某事件的发生（比如等待 socket 连接、等待信号量），而被挂起\n（6）、zombie 状态（僵尸）：父亲没有通过 wait 系列的系统调用会顺便将子进程的尸体（task_struct）也释放掉\n（7）、退出状态")]),a._v(" "),_("blockquote",[_("p",[a._v("D 不可中断 Uninterruptible（usually IO）\nR 正在运行，或在队列中的进程\nS 处于休眠状态\nT 停止或被追踪\nZ 僵尸进程\nW 进入内存交换（从内核 2.6 开始无效）\nX 死掉的进程")])]),a._v(" "),_("h2",{attrs:{id:"问题十八"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十八","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十八:")]),a._v(" "),_("p",[a._v("怎么使一个命令在后台运行?\n答案:\n一般都是使用 & 在命令结尾来让程序自动运行。(命令后可以不追加空格)")]),a._v(" "),_("h2",{attrs:{id:"问题十九"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题十九","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题十九:")]),a._v(" "),_("p",[a._v("利用 ps 怎么显示所有的进程? 怎么利用 ps 查看指定进程的信息？\n答案:\nps -ef (system v 输出)")]),a._v(" "),_("p",[a._v("ps -aux bsd 格式输出")]),a._v(" "),_("p",[a._v("ps -ef | grep pid")]),a._v(" "),_("h2",{attrs:{id:"问题二十"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十:")]),a._v(" "),_("p",[a._v("哪个命令专门用来查看后台任务?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("job -l")]),a._v(" "),_("h2",{attrs:{id:"问题二十一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十一","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十一:")]),a._v(" "),_("p",[a._v("把后台任务调到前台执行使用什么命令?把停下的后台任务在后台执行起来用什么命令?\n答案:\n把后台任务调到前台执行 fg")]),a._v(" "),_("p",[a._v("把停下的后台任务在后台执行起来 bg")]),a._v(" "),_("h2",{attrs:{id:"问题二十二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十二","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十二:")]),a._v(" "),_("p",[a._v("终止进程用什么命令? 带什么参数?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("kill [-s <信息名称或编号>][程序] 或 kill [-l <信息编号>]")]),a._v(" "),_("p",[a._v("kill-9 pid")]),a._v(" "),_("h2",{attrs:{id:"问题二十三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十三","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十三:")]),a._v(" "),_("p",[a._v("怎么查看系统支持的所有信号？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("kill -l")]),a._v(" "),_("h2",{attrs:{id:"问题二十四"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十四","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十四:")]),a._v(" "),_("p",[a._v("搜索文件用什么命令? 格式是怎么样的?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("find <指定目录> <指定条件> <指定动作>")]),a._v(" "),_("p",[a._v("whereis 加参数与文件名")]),a._v(" "),_("p",[a._v("locate 只加文件名")]),a._v(" "),_("p",[a._v("find 直接搜索磁盘，较慢。")]),a._v(" "),_("p",[a._v('find / -name "string*"')]),a._v(" "),_("h2",{attrs:{id:"问题二十五"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十五","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十五:")]),a._v(" "),_("p",[a._v("查看当前谁在使用该主机用什么命令? 查找自己所在的终端信息用什么命令?\n答案:\n查找自己所在的终端信息：who am i")]),a._v(" "),_("p",[a._v("查看当前谁在使用该主机：who")]),a._v(" "),_("h2",{attrs:{id:"问题二十六"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十六","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十六:")]),a._v(" "),_("p",[a._v("使用什么命令查看用过的命令列表?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("history")]),a._v(" "),_("h2",{attrs:{id:"问题二十七"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十七","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十七:")]),a._v(" "),_("p",[a._v("使用什么命令查看磁盘使用空间？ 空闲空间呢?")]),a._v(" "),_("p",[a._v("答案：")]),a._v(" "),_("p",[a._v("df -hl\n文件系统 容量 已用 可用 已用% 挂载点\nFilesystem Size Used Avail Use% Mounted on /dev/hda2 45G 19G 24G 44% /\n/dev/hda1 494M 19M 450M 4% /boot")]),a._v(" "),_("h2",{attrs:{id:"问题二十八"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十八","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十八:")]),a._v(" "),_("p",[a._v("使用什么命令查看网络是否连通?\n答案:\nnetstat")]),a._v(" "),_("h2",{attrs:{id:"问题二十九"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题二十九","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题二十九:")]),a._v(" "),_("p",[a._v("使用什么命令查看 ip 地址及接口信息？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("ifconfig")]),a._v(" "),_("h2",{attrs:{id:"问题三十"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十:")]),a._v(" "),_("p",[a._v("查看各类环境变量用什么命令?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("查看所有 env\n查看某个，如 home： env $HOME")]),a._v(" "),_("h2",{attrs:{id:"问题三十一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十一","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十一:")]),a._v(" "),_("p",[a._v("通过什么命令指定命令提示符?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("blockquote",[_("p",[a._v("\\u：显示当前用户账号")]),a._v(" "),_("p",[a._v("\\h：显示当前主机名")]),a._v(" "),_("p",[a._v("\\W：只显示当前路径最后一个目录")]),a._v(" "),_("p",[a._v("\\w：显示当前绝对路径（当前用户目录会以~代替）")]),a._v(" "),_("p",[a._v("$PWD：显示当前全路径")]),a._v(" "),_("p",[a._v("$：显示命令行’$'或者’#'符号")]),a._v(" "),_("p",[a._v("#：下达的第几个命令")]),a._v(" "),_("p",[a._v('\\d：代表日期，格式为week day month date，例如："MonAug1"')]),a._v(" "),_("p",[a._v("\\t：显示时间为24小时格式，如：HH：MM：SS")]),a._v(" "),_("p",[a._v("\\T：显示时间为12小时格式")]),a._v(" "),_("p",[a._v("\\A：显示时间为24小时格式：HH：MM")]),a._v(" "),_("p",[a._v("\\v：BASH的版本信息 如export PS1=’[\\u@\\h\\w#]$‘")])]),a._v(" "),_("h2",{attrs:{id:"问题三十二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十二","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十二:")]),a._v(" "),_("p",[a._v("查找命令的可执行文件是去哪查找的? 怎么对其进行设置及添加?")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("whereis [-bfmsu][-B <目录>...][-M <目录>...][-S <目录>...][文件...]")]),a._v(" "),_("p",[a._v("补充说明：whereis 指令会在特定目录中查找符合条件的文件。这些文件的烈性应属于原始代码，二进制文件，或是帮助文件。")]),a._v(" "),_("blockquote",[_("p",[a._v("-b   只查找二进制文件。")]),a._v(" "),_("p",[a._v("-B<目录> 只在设置的目录下查找二进制文件。 -f 不显示文件名前的路径名称。\n-m   只查找说明文件。\n-M<目录> 只在设置的目录下查找说明文件。 -s 只查找原始代码文件。\n-S<目录> 只在设置的目录下查找原始代码文件。 -u 查找不包含指定类型的文件。\nwhich 指令会在 PATH 变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。\n-n 指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。\n-p 与-n 参数相同，但此处的包括了文件的路径。 -w 指定输出时栏位的宽度。\n-V   显示版本信息")])]),a._v(" "),_("h2",{attrs:{id:"问题三十三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十三","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十三:")]),a._v(" "),_("p",[a._v("通过什么命令查找执行命令?\n答案:\nwhich 只能查可执行文件")]),a._v(" "),_("p",[a._v("whereis 只能查二进制文件、说明文档，源文件等")]),a._v(" "),_("h2",{attrs:{id:"问题三十四"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十四","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十四:")]),a._v(" "),_("p",[a._v("怎么对命令进行取别名？\n答案:\nalias la='ls -a'")]),a._v(" "),_("h2",{attrs:{id:"问题三十五"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十五","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十五:")]),a._v(" "),_("p",[a._v("du 和 df 的定义，以及区别？\n答案:")]),a._v(" "),_("p",[a._v("du 显示目录或文件的大小")]),a._v(" "),_("p",[a._v("df 显示每个<文件>所在的文件系统的信息，默认是显示所有文件系统。\n（文件系统分配其中的一些磁盘块用来记录它自身的一些数据，如 i 节点，磁盘分布图，间接块，超级块等。这些数据对大多数用户级的程序来说是不可见的，通常称为 Meta Data。） du 命令是用户级的程序，它不考虑 Meta Data，而 df 命令则查看文件系统的磁盘分配图并考虑 Meta Data。\ndf 命令获得真正的文件系统数据，而 du 命令只查看文件系统的部分情况。")]),a._v(" "),_("h2",{attrs:{id:"问题三十六"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十六","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十六:")]),a._v(" "),_("p",[a._v("awk 详解。\n答案:")]),a._v(" "),_("blockquote",[_("p",[a._v("awk '{pattern + action}' {filenames}\n#cat /etc/passwd |awk -F ':' '{print $1\"\\t\"$7}' //-F 的意思是以':'分隔 root /bin/bash\ndaemon /bin/sh 搜索/etc/passwd 有 root 关键字的所有行")])]),a._v(" "),_("blockquote",[_("p",[a._v("#awk -F: '/root/' /etc/passwd root❌0:0:root:/root:/bin/bash")])]),a._v(" "),_("h2",{attrs:{id:"问题三十七"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十七","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十七:")]),a._v(" "),_("p",[a._v("当你需要给命令绑定一个宏或者按键的时候，应该怎么做呢？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("可以使用bind命令，bind可以很方便地在shell中实现宏或按键的绑定。")]),a._v(" "),_("p",[a._v("在进行按键绑定的时候，我们需要先获取到绑定按键对应的字符序列。")]),a._v(" "),_("p",[a._v("比如获取F12的字符序列获取方法如下：先按下Ctrl+V,然后按下F12 .我们就可以得到F12的字符序列 ^[[24~。")]),a._v(" "),_("p",[a._v("接着使用bind进行绑定。")]),a._v(" "),_("p",[a._v('[root@localhost ~]# bind ‘”\\e[24~":"date"\'')]),a._v(" "),_("p",[a._v("注意：相同的按键在不同的终端或终端模拟器下可能会产生不同的字符序列。")]),a._v(" "),_("p",[a._v("【附】也可以使用showkey -a命令查看按键对应的字符序列。")]),a._v(" "),_("h2",{attrs:{id:"问题三十八"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十八","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十八:")]),a._v(" "),_("p",[a._v("如果一个linux新手想要知道当前系统支持的所有命令的列表，他需要怎么做？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("使用命令compgen ­-c，可以打印出所有支持的命令列表。")]),a._v(" "),_("blockquote",[_("p",[a._v("[root@localhost ~]$ compgen -c")]),a._v(" "),_("p",[a._v("l.")]),a._v(" "),_("p",[a._v("ll")]),a._v(" "),_("p",[a._v("ls")]),a._v(" "),_("p",[a._v("which")]),a._v(" "),_("p",[a._v("if")]),a._v(" "),_("p",[a._v("then")]),a._v(" "),_("p",[a._v("else")]),a._v(" "),_("p",[a._v("elif")]),a._v(" "),_("p",[a._v("fi")]),a._v(" "),_("p",[a._v("case")]),a._v(" "),_("p",[a._v("esac")]),a._v(" "),_("p",[a._v("for")]),a._v(" "),_("p",[a._v("select")]),a._v(" "),_("p",[a._v("while")]),a._v(" "),_("p",[a._v("until")]),a._v(" "),_("p",[a._v("do")]),a._v(" "),_("p",[a._v("done")]),a._v(" "),_("p",[a._v("…")])]),a._v(" "),_("h2",{attrs:{id:"问题三十九"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题三十九","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题三十九:")]),a._v(" "),_("p",[a._v("如果你的助手想要打印出当前的目录栈，你会建议他怎么做？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("使用Linux 命令dirs可以将当前的目录栈打印出来。")]),a._v(" "),_("blockquote",[_("p",[a._v("[root@localhost ~]# dirs")])]),a._v(" "),_("blockquote",[_("p",[a._v("/usr/share/X11")])]),a._v(" "),_("p",[a._v("【附】：目录栈通过pushd popd 来操作。")]),a._v(" "),_("h2",{attrs:{id:"问题四十"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十:")]),a._v(" "),_("p",[a._v("你的系统目前有许多正在运行的任务，在不重启机器的条件下，有什么方法可以把所有正在运行的进程移除呢？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("使用linux命令 ’disown -r ’可以将所有正在运行的进程移除。")]),a._v(" "),_("h2",{attrs:{id:"问题四十一"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十一","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十一:")]),a._v(" "),_("p",[a._v("bash shell 中的hash 命令有什么作用？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("linux命令’hash’管理着一个内置的哈希表，记录了已执行过的命令的完整路径, 用该命令可以打印出你所使用过的命令以及执行的次数。")]),a._v(" "),_("blockquote",[_("p",[a._v("[root@localhost ~]# hash")]),a._v(" "),_("p",[a._v("hits command")]),a._v(" "),_("p",[a._v("2 /bin/ls")]),a._v(" "),_("p",[a._v("2 /bin/su")])]),a._v(" "),_("h2",{attrs:{id:"问题四十二"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十二","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十二:")]),a._v(" "),_("p",[a._v("哪一个bash内置命令能够进行数学运算。")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("bash shell 的内置命令let 可以进行整型数的数学运算。")]),a._v(" "),_("blockquote",[_("p",[a._v("#! /bin/bash\n…\n…\nlet c=a+b\n…\n…")])]),a._v(" "),_("h2",{attrs:{id:"问题四十三"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十三","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十三:")]),a._v(" "),_("p",[a._v("怎样一页一页地查看一个大文件的内容呢？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("通过管道将命令”cat file_name.txt” 和 ’more’ 连接在一起可以实现这个需要.")]),a._v(" "),_("p",[a._v("[root@localhost ~]# cat file_name.txt | more")]),a._v(" "),_("h2",{attrs:{id:"问题四十四"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十四","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十四:")]),a._v(" "),_("p",[a._v("数据字典属于哪一个用户的？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("数据字典是属于’SYS’用户的，用户‘SYS’ 和 ’SYSEM’是由系统默认自动创建的")]),a._v(" "),_("h2",{attrs:{id:"问题四十五"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十五","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十五:")]),a._v(" "),_("p",[a._v("怎样查看一个linux命令的概要与用法？假设你在/bin目录中偶然看到一个你从没见过的的命令，怎样才能知道它的作用和用法呢？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("使用命令whatis 可以先出显示出这个命令的用法简要，比如，你可以使用whatis zcat 去查看‘zcat’的介绍以及使用简要。")]),a._v(" "),_("blockquote",[_("p",[a._v("[root@localhost ~]# whatis zcat")]),a._v(" "),_("p",[a._v("zcat [gzip] (1) – compress or expand files")])]),a._v(" "),_("h2",{attrs:{id:"问题四十六"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题四十六","aria-hidden":"true"}},[a._v("#")]),a._v(" 问题四十六:")]),a._v(" "),_("p",[a._v("使用哪一个命令可以查看自己文件系统的磁盘空间配额呢？")]),a._v(" "),_("p",[a._v("答案:")]),a._v(" "),_("p",[a._v("使用命令repquota 能够显示出一个文件系统的配额信息")]),a._v(" "),_("p",[a._v("【附】只有root用户才能够查看其它用户的配额。")])])}],!1,null,null,null);r.options.__file="Linux面试题.md";v.default=r.exports}}]);