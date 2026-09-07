# AGENTS.md

株式会社ぐらでの公開ホームページ（Next.js / GitHub Pages）の作業ルールです。
ローカルパスは `products/Grad_inc/homepage`。GitHub の実体は `Gurade-Inc/Gurade-Inc.github.io`。
起動手順は [README.md](README.md) を正本にする。

## 常時制約

- 公開リポ。秘密情報・会社非公開 Plugin・顧客データを置かない。
- `.github/workflows/nextjs.yml` は `push` の `main` と `workflow_dispatch` で Pages へデプロイする。PR open/sync では起動しない。
- エージェントから main へマージしない。`workflow_dispatch` も起動しない。

## Agent Plugins

共通開発 Plugin の利用設定は [docs/agent-plugins.md](docs/agent-plugins.md)。
会社 Plugin は必須依存にしない。固有 Skill が無いので空の `agent-plugins/` は置かない。
