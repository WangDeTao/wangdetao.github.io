# GIT

## git工作流

* master-一个生产环境完全对应。
* release- 一个专门上线用的分支（测试+生产...），上线窗口期，或提测的时候就开始下一轮开发。为了不阻塞下个迭代的日常开发，就不能占用 develop 分支。
* hotfix/xxx（临时），当出现线上紧急 bug，需要马上修复并上线时，不适合直接在 master 上直接操作，所以需要一个临时分支来处理
* develop-需要一个分支聚合日常开发的所有内容，保持最新的代码，以方便所有协作者同步代码。
* feature/xxx（临时），每个人的日常开发分支。
* bugfix/xxx（临时），在提测后的 Debug 阶段，使用 bugfix 分支来与 feature 分支进行区分。

## commitlint

commit message 包括Header，Body，Footer

```text
<type>(<scope>): <subject>

// 空一行
<body>
// 空一行
<footer>
```

如：feat(视图层)：新增地区选择器   fix：修复时间选择器偶尔无法选中

（1）typetype用于说明 commit 的类别，只允许使用下面7个标识。

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style：格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动
* perf: 提升性能

如果type为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

（2）scopescope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

（3）subjectsubject是 commit 目的的简短描述，不超过50个字符。

撤销以revert:开头

```text

npm i husky -save-dev

npm set-script prepare "husky install" 

npm run prepare

npx husky add .husky/pre-commit
// 删除undefined

npx husky add .husky/commit-msg
// undefined更改为npx --no-install commitlint --edit "$1" 

npm i @commitlint/cli @commitlint/config-conventional -D

echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
// 可能导致报错，非utf8字符不对。手动创建js文件，复制代码
```

## 生成CHANGELOG.md

```javascript

npm i -D standard-version

npm set-script release "standard-version" 
// package.json中script添加"release":"standard-version"

npm run release
```
