GO 现代C语言

C语言 Node 并发并不太好，性能也不好，不太稳定
GO 多核计算

JS + GO 是很多大厂的标配

package 包 模块化方案
    函数 是代码行的集合 组织代码的方式
    多个函数， 由一个文件组成，完成一个大的功能，就叫一个package
    package main
    func main() {

    }

[875. 爱吃香蕉的珂珂](https://leetcode-cn.com/problems/koko-eating-bananas/)

## 原题分析
    N堆香蕉 piles[3,6,7,11]
    H = 8 小时会来  输出4
    K 根/小时

    拆分成多个函数