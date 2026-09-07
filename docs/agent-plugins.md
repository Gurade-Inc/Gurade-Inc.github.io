# Agent Plugins 利用設定（homepage / Gurade-Inc.github.io）

VoiceFeed R0（`docs/agent-plugins.md`）の形を踏襲する。このリポは共通開発だけを使い、空の `agent-plugins/` は置かない。

ローカル名は `products/Grad_inc/homepage`。GitHub の実体は公開リポ `Gurade-Inc/Gurade-Inc.github.io`。

## 分類規則

1. **共通開発だけ必要なリポ** — `gurade.development` の vendored snapshot と利用設定だけを置く。空の `agent-plugins/` を作らない。
2. **固有手順があるリポ** — そのリポの `agent-plugins/<name>/` に固有 Skill だけを置く。共通手順は vendored 側を参照する。
3. **顧客固有（R2）** — 顧客 repo の `agent-plugins/` に閉じる。会社 Plugin を必須依存にしない。このリポは R2 対象外。
4. **第三者 Skill** — 配布元・版・ライセンス・改変差分を確認するまで Plugin に入れない。現行 native 入口は残してよい。

## このリポでの分け方

| 区分 | ID | 置き場 | 内容 |
|---|---|---|---|
| 共通開発 | `gurade.development`（manifest `gurade-development`） | `vendor/agent-plugins/development` | commit, pr, issue, handoff, rehydrate, review-pr |
| このリポ固有 Plugin | （置かない） | — | 固有開発 Skill が無い。空の `agent-plugins/` を作らない |
| 会社非公開 | （置かない） | `workspace/plugins` のまま | 公開リポのため必須依存にしない |
| 第三者 | 未収録 | — | 追跡済みの第三者 Skill は無い |

常時制約は `AGENTS.md` と既存 `README.md` に残す。Skill へ移さない。物理移動はしない。

標準ファイルは `plugin.json` と `skills/` のみ。`mcp.json` は不要なため未作成。独自フィールドを manifest に足していない。利用設定と lock は標準外の `gurade.agent-project*.json`。

## 確認

`python3 tools/agent-setup/check.py` をこのリポのルートで実行する。親 workspace パスを埋め込まない。

## 更新

lock の更新は利用設定の変更とは別操作。snapshot を差し替えたら digest を取り直し、PR 差分にする。
`main` / `latest` を lock に書かない。
