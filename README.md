# RAGFlow

RAGFlow 是一个基于 NestJS + 大语言模型（LLM）构建的 AI 知识库系统，旨在探索从“LLM聊天能力”到“可控知识增强系统（RAG）”的工程化实现路径。

## 项目架构

```
ragflow/
├── apps/
│   ├── web/              # 前端（React）
│   └── server/           # 后端（NestJS）
│
├── packages/
│   ├── shared/           # ⭐ 类型 / DTO / 常量
│   └── utils/            # 公共工具函数（可选）
│
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## 技术组成

代码管理：使用 monorepo 管理前后端，并抽离 shared 包实现 DTO 复用
脚手架： vite
前端JS库： React + Typescript + zustand + jotai
前端UI： shaden/UI + tailwindcss
