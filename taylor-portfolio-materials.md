# Taylor 作品集素材準備

## 任務成功條件

- 已找到 Taylor 的正式 logo 與候選視覺素材。
- 已整理能說明軟體定位、功能、技術架構與作品集亮點的文件來源。
- 已準備日後新增「AI 代理編程作品集」內容時可直接使用的卡片資料草案。
- 靜態 showcase 網站尚未建立，所有 showcase 連結先標為待補。

## 素材狀態

| 類型 | 建議使用 | 目前位置 | 備註 |
|---|---|---|---|
| 正式 app icon | 是 | `assets/taylor-appicon.png` | 已由 `D:\AgentCoding\Taylor\build\appicon.png` 複製而來，1024x1024 PNG |
| Windows ICO | 視需求 | `D:\AgentCoding\Taylor\build\windows\icon.ico` | 適合 release 或 app metadata，不適合直接放網頁 |
| Logo 預覽圖 | 視需求 | `D:\AgentCoding\Taylor\outputs\logos\taylor-app-icon\final\taylor-terminal-gate-preview.png` | 展示 420/256/128/64/48/32/16px 的可讀性 |
| Logo 探索 contact sheet | 內部參考 | `D:\AgentCoding\Taylor\outputs\logos\taylor-app-icon\contact-sheet.png` | 不建議公開當正式品牌圖 |
| 介面截圖候選 | 待人工確認 | `D:\AgentCoding\Taylor\outputs\wails-task-modal-smoke-fixed.png` | smoke test 截圖，可作後續 showcase 視覺素材候選 |

## 相關文件來源

| 文件 | 用途 | 重點 |
|---|---|---|
| `D:\AgentCoding\Taylor\README.md` | 專案總覽 | 產品定位、Phase 1 狀態、技術架構、資料位置與便攜版 |
| `D:\AgentCoding\Taylor\PROJECT_BRIEF.md` | 一句話與核心問題 | Taylor 是管理、排程與監控 Codex 等 AI coding agent 任務的 Windows 桌面 supervisor |
| `D:\AgentCoding\Taylor\docs\spec.md` | 主規格 | goals、non-goals、使用情境、功能規格、狀態機、驗收標準 |
| `D:\AgentCoding\Taylor\DESIGN.md` | 視覺語言 | 工業極簡深色、無陰影、無漸層、桌面高資訊密度 UI |
| `D:\AgentCoding\Taylor\docs\CODEX_CAPABILITY_REPORT.md` | 技術驗證 | `codex exec --json`、approval、pause/resume、`codex app-server` JSON-RPC spike |
| `D:\AgentCoding\Taylor\docs\adr\0001-codex-executor-integration.md` | 架構決策 | Phase 1A 用 `codex exec`，Phase 1B 用 `codex app-server`，官方 SDK sidecar 排除 |
| `D:\AgentCoding\Taylor\outputs\logos\taylor-app-icon\data\handoff.md` | Logo 設計交接 | 選定 T Terminal Gate，保留深色底、白色 T、藍色 command cursor |
| `D:\AgentCoding\Taylor\outputs\logos\taylor-app-icon\final\README.md` | 最終 icon 說明 | 確認正式 icon 輸出檔與生產風險 |

## 作品集定位草案

### 一句話

Taylor 是一個 Windows 桌面 AI coding agent 任務控制台，用看板介面集中管理 Codex 任務的排程、執行、log 串流、approval 與 pause/resume 流程。

### 短版描述

為了解決同時監督多個 Codex 任務時的認知負擔，Taylor 把任務建立、佇列派發、狀態追蹤、approval 處理與 log 監看集中在單一桌面介面中。它採用 Wails + Go + React + SQLite，後端負責任務生命週期與 Codex subprocess / app-server 控制，前端專注呈現高資訊密度的工業極簡看板。

### 建議作品集分類

- 類別：AI 代理編程工具
- 作品型態：Windows 桌面應用程式
- 角色定位：個人開發 / 產品設計 / 架構設計 / 實作驗證
- 公開狀態：私有閉源，展示內容需避免放出敏感實作細節或私有資料
- Showcase 連結：待補
- GitHub / Release 連結：待確認是否公開展示

## 功能亮點

- 看板式任務佇列：排程中、執行中、等待確認、已暫停、完成、失敗等狀態由後端狀態機控制。
- 多任務並行控制：Queue Manager 依最大並行數自動派發 Codex 任務。
- 即時 log / event streaming：透過 WebSocket 將 stdout、stderr 與 event log 推送到前端。
- Approval flow：YOLO 模式使用 `codex exec --json`，Cautious / Notify 模式改用 `codex app-server` JSON-RPC。
- Pause / Resume：以 `turn/interrupt` 與 `thread/resume` 實作「中斷後在同一 thread 接續」的桌面監督流程。
- SQLite + append-only log files：任務資料持久化，log 以檔案系統保存。
- 可搬移資料位置與便攜版打包：支援自訂資料目錄，也可打包固定版 WebView2 runtime。

## 技術標籤

- Wails v2
- Go 1.22+
- React 18
- TypeScript 5
- SQLite 3
- WebSocket streaming
- Codex CLI
- Codex app-server JSON-RPC
- Windows desktop / WebView2

## 後續新增卡片草案

```md
## 新增身份卡片：Taylor

- slug: taylor
- 類別 role: AI 代理編程工具
- 一句說明 desc: Windows 桌面 AI coding agent 任務控制台，集中管理 Codex 任務的排程、執行、log 與 approval flow。
- 代表內容: AI coding agent 任務看板、Codex executor 整合
- 平台目的: 展示個人 AI 代理編程工具與桌面應用架構實作
- 外部連結: 待補（靜態 showcase 網站尚未建立）
- logo 檔案: assets/taylor-appicon.png
- logo alt: Taylor app icon，深色圓角方形底上的白色 T 與藍色 command cursor
- accent 色: #5b8dee
- 所屬 section: 待定，建議新增「工具作品」或「AI工具」
- 是否需要新增 section divider: 是
- 是否需要更新 metadata: 是，若加入首頁主內容，description 應補上 AI 工具 / 編程代理作品
```

## 待補與風險

- Showcase URL 尚未建立，不能填入正式連結。
- Taylor 是私有閉源專案，對外展示前需確認可公開範圍。
- Logo handoff 文件提醒仍需 trademark / common-shape screening；若要公開發布，應先做基本商標與相似圖形檢查。
- 介面截圖目前只有 smoke test 圖，正式作品集頁最好重新截取乾淨、無敏感資訊的 dashboard / task detail 畫面。
