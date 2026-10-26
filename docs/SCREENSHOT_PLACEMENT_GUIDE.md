# Assignment 2 提交材料与截图放置指南（中文）

## 你最终需要提交什么

1. **一份 Project Report（Word）**：`report/Assignment_2_Project_Report_FINAL_DRAFT.docx`。请完成 GitHub/README/commit 占位符，插入真实运行截图，并删除封面上的 `DRAFT CHECK` 提醒后再提交。
2. **一个公共 GitHub 仓库链接**：仓库内容应包含网页源码、README、测试、架构图、故事板、操作指南和报告草稿。报告第一面和文末都要填写实际链接及最终测试的 commit hash。
3. **README**：位于仓库根目录；它包含项目状态、技术栈、运行方法、开发记录、AI 使用说明和测试方法。
4. **开发证据**：至少保留有意义的 commit、测试结果和你在浏览器中检查过的交互截图。作业要求不以 commit 数量评估质量，不要伪造提交历史。

作业说明允许将能够放入仓库的材料放在 GitHub，因此发布仓库后通常不需要另交 ZIP。这里的 ZIP 主要用于把完整项目传到自己的电脑/GitHub。

## Word 报告里的截图具体放哪

Word 文件已经包含 **Figure 1（系统架构图）和 Figures 2–4（三个故事板）**。不要删除它们。再把你在浏览器中实际运行 ExplainCheck 时截取的五张截图插入标记位置，作为 Figures 5–9。

| Word 里的标记 | 插入哪张真实截图 | 你之前发来的截图顺序 |
|---|---|---|
| `INSERT SCREENSHOT 1 HERE` / Figure 5 | EC-03 初始界面：显示工单、`Account` 推荐和 61 分，尚未展开解释 | 第 1 张 |
| `INSERT SCREENSHOT 2 HERE` / Figure 6 | EC-03 展开解释：显示关键词线索和 known limitation | 第 2 张 |
| `INSERT SCREENSHOT 3 HERE` / Figure 7 | 用户选择 `Billing` 并提交，显示与 AI `Account` 推荐及参考答案的比较 | 第 3 张 |
| `INSERT SCREENSHOT 4 HERE` / Figure 8 | `Feedback recorded` 成功提示，说明反馈只保存在本地 | 第 4 张 |
| `INSERT SCREENSHOT 5 HERE` / Figure 9 | `Session summary`，表格有 EC-03 记录，包含 CSV 导出按钮 | 第 5 张 |

**插入方法：** 在 Word 中找到相应黄色标记行；将光标放到该标记行，插入对应图片，调整到正文宽度约 15–16 cm（保持纵横比），删除标记文字，但保留下面的单句图注。截图可以横跨正文宽度。不要将解释性长段落放入图中；每个图注仅保留一整句。

Figures 1–4 的架构图和故事板是图示素材；Figures 5–9 是真实运行截图。两者用途不同，建议都保留。故事板展示三个交互情境，运行截图证明 EC-03 的一次实际浏览器交互流程。

## 完成本地检查

1. 在 VS Code 打开包含 `package.json` 的项目根目录。
2. 启动网页：`py -m http.server 8000 --directory app`。若 `py` 不可用则用 `python -m http.server 8000 --directory app`。浏览器访问 `http://localhost:8000`。
3. 用 EC-01 检查正确建议流程；用 EC-03 或 EC-04 检查不同意 AI 的流程；展开解释、提交判断、保存反馈、查看 Session summary 并下载 CSV。
4. 安装 Node.js 18+ 后运行 `npm test`。打包时 5 个自动化测试通过；你修改后需要重新运行，并确保提交的是最终测试过的版本。
5. 阅读 About，确保模拟 AI、规则分数不是概率、反馈不训练模型、记录只存本地这些限制清楚可见。

## 发布到 GitHub

1. 在 GitHub 创建一个**空的公共仓库**，例如 `explaincheck-original`。不要初始化第二份 README。
2. 在项目根目录运行：

```bash
git init
git add .
git commit -m "Build original ExplainCheck interaction prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/explaincheck-original.git
git push -u origin main
git rev-parse HEAD
```

把仓库 URL、`README.md` 的网址和 `git rev-parse HEAD` 输出的最终 commit hash 填入 Word。修改后再提交任何内容，都应重新运行测试并用新的最终 commit hash。

## 最终检查清单

- [ ] 本地网页可启动，核心交互在浏览器中实际检查过。
- [ ] `npm test` 通过（5 项测试）。
- [ ] README 顶部包含正文词数；README 说明项目状态、技术栈、运行方法、开发记录和 AI 使用。
- [ ] Word 首页包含总词数；摘要不超过 300 词，主报告不超过 1,100 词，合计不超过 1,400 词。
- [ ] Word 中 Figure 1 架构图、Figures 2–4 故事板和 Figures 5–9 真实截图均在位；各图注不超过一句话。
- [ ] 替换所有 `[ADD ...]` 占位符并删除 DRAFT CHECK 提醒。
- [ ] 报告对模拟规则引擎、分数含义、本地数据、未开展用户研究等限制描述准确。
- [ ] GitHub README 与代码可访问；报告写入实际 repo URL、README URL 和最终 commit hash。
- [ ] 不包含个人数据、密码或 API key。
