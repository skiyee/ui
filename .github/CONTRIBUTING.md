# 贡献指南

非常感谢您对 skiyee/ui 的兴趣并愿意为其做出贡献！我们欢迎所有形式的贡献，无论是报告错误、提交功能请求还是直接贡献代码。

在开始之前，请花几分钟时间阅读本指南。

## 目录

- [报告错误](#报告错误)
- [功能请求](#功能请求)
- [提交合并请求](#提交合并请求)
- [行为准则](#行为准则)

## 报告错误 (Bug Reports)

如果您在项目中发现了错误，请通过创建 [Issue](https://github.com/skiyee/ui/issues) 来报告它。

在提交 Issue 之前，请先搜索现有 Issue，确保您的问题尚未被报告。

一个好的错误报告应该包含以下信息：

- **清晰的标题**: 简明扼要地描述问题。
- **复现步骤**: 提供详细的步骤，以便我们能够重现该错误。
- **预期行为**: 描述在没有错误的情况下，应用应该如何表现。
- **实际行为**: 描述实际发生了什么，包括任何错误消息。
- **环境信息**: 提供您的操作系统、浏览器、`skiyee/ui` 版本等相关信息。
- **截图或录屏**: 如果可能，请附上截图或录屏来直观地展示问题。

## 功能请求 (Feature Requests)

我们欢迎任何关于新功能或改进的建议。如果您有一个想法，请通过创建 [Issue](https://github.com/skiyee/ui/issues) 来分享它。

一个好的功能请求应该包含：

- **问题描述**: 清晰地描述您想要解决的问题或希望通过新功能达成的目标。
- **方案描述**: 详细描述您建议的功能应该如何工作。
- **备选方案**: 如果您考虑过其他方案，也请一并说明。

## 提交合并请求 (Pull Requests)

我们非常欢迎您通过提交合并请求 (Pull Request) 来直接贡献代码。

### 开发流程

#### 1. Fork & Clone

将主仓库 Fork 到您自己的账户下，然后将您的 Fork 克隆到本地：

```bash
git clone https://github.com/<your-username>/ui.git
cd ui
```

#### 2. 设置上游仓库

```bash
git remote add upstream https://github.com/skiyee/ui.git
```

#### 3.安装依赖

本项目使用 `pnpm` 作为包管理器。

```bash
pnpm install
```

#### 4.创建分支

从 `main` 分支创建一个新的特性分支：

```bash
# 新功能
git checkout -b feat/your-awesome-feature

# 修复错误
git checkout -b fix/a-nasty-bug
```

#### 5.开始开发

运行开发服务器，您可以在此进行实时预览和调试。

```bash
# 运行示例网站
pnpm dev
```

#### 6.编码规范

请确保您的代码遵循项目现有的编码风格，并通过 ESLint 检查。

项目配置了 `eslint` 来保证代码质量和风格一致。

#### 7.提交代码

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。提交信息应遵循以下格式：

```
type(scope): subject
```

- **type**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 等。
- **scope**: 本次提交影响的范围 (例如: `button`, `input`, `docs` 等)。
- **subject**: 简短的提交描述。

示例: 

```
feat(button): add new ghost variant
fix(input): correct validation logic on blur
```

#### 8.提交 Pull Request

- 将您的分支推送到您的 Fork：`git push origin feat/your-awesome-feature`
- 在 `skiyee/ui` 仓库页面，创建一个新的 Pull Request。
- 在 PR 描述中清晰地说明您的改动，并关联相关的 Issue。

## 行为准则 (Code of Conduct)

为了营造一个开放和友好的环境，我们要求所有贡献者和社区成员相互尊重，相互理解，互帮互助，健壮社区！

---

再次感谢您的贡献！
