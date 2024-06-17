#!/usr/bin/env node
import {program} from 'commander'
import {copy } from 'fs-extra'
import {join} from 'path'
program.version('1.0.0')//版本
program
    .command('create <name>')//命令匹配
    .description('创建项目模板')
    .option('-p, --path [path]', '文件创建地址(相对地址)，没有则在当前命令执行文件夹下创建')//选项
    .action((name, option) => {//name，以及解析出来的option
      console.log(111)
        let dName = process.cwd();//获取项目在磁盘中的位置
        const targetPath = join(dName, `src/components/test.vue`); // 组件库下的文件路径
        const createPath = join(
          dName,
          option.path,
          name,
        ); // demo 项目下的文件路径
        copy(targetPath, createPath);//将前者文件复制到后者位置
    });
program.parse(process.argv)//命令解析