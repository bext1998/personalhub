# AGENTS.md — AI Agent 操作指引

本文件說明 AI coding agent（Claude Code、Codex、Cursor 等）在此 repo 工作時應遵守的規則。

---

## 工作範圍判斷

| 任務類型 | 應修改的檔案 |
|----------|-------------|
| 更新文案、連結、卡片順序 | `index.html` |
| 調整顏色、間距、字體、動畫 | `style.css` |
| 修改動畫邏輯或新增互動 | `main.js` |
| 新增圖片素材 | `assets/` |
| 新增身份卡片 | `index.html` + `style.css`（色彩變數） |
| 更新 SEO / OG 資訊 | `index.html` 的 `<head>` |

**絕對不要：**
- 新增建置工具、打包器、框架依賴
- 新增 JavaScript 函式庫（保持零依賴）
- 修改 `LICENSE`
- 建立未被要求的新檔案

---

## 修改 index.html 的規則

### 身份卡片
- 每張卡片必須有 `aria-label`，格式：`{名稱} 身份卡`
- 每張卡片必須有 `class="identity-card identity-card--{slug} fade-in-up"`
- `<h2>` 是卡片名稱，不可降級為 `<h3>` 或其他標題
- `.identity-card__role` 是可選的小標籤（若 section divider 已說明脈絡則可省略）
- link-pill 的 `aria-label` 必須包含目的地描述，不可只寫平台名稱

### Section Dividers
- 新類別群組必須有對應的 section divider
- divider 文字保持簡短（2–4 字），使用繁體中文
- 加上 `aria-hidden="true"`（裝飾用，非導航結構）

### Sub-brands
- 只放在隸屬的父 `.identity-card` 的 `</div>` 後、`</article>` 前
- 每個 sub-brand 需要 `.sub-brand--{slug}` 修飾符和對應 CSS 變數

### 圖片
- 所有 `<img>` 必須有非空的 `alt`
- logo 圖片加上明確的 `width` 和 `height` 屬性
- assets 路徑使用相對路徑 `assets/filename`

---

## 修改 style.css 的規則

### 色彩變數
新增卡片時，在對應的區塊加入三個變數：
```css
.identity-card--{slug} {
  --accent: {主色};
  --accent-hover: {淡化版};
  --accent-border: {暗化版，用於 logo 邊框};
}
```
（若瀏覽器支援 `color-mix`，`--accent-hover` 和 `--accent-border` 會被 `@supports` 區塊自動覆寫）

### 新增 sub-brand
```css
.sub-brand--{slug} {
  --sub-accent: {左邊框色};
}
```

### 禁止事項
- 不修改 CSS token（`:root` 區塊的變數），除非明確要求重新設計全站配色
- 不更動 `.fade-in-up` 動畫機制
- 不新增 `!important`

---

## 修改 main.js 的規則

- 保持 IIFE 結構（`(function () { ... }())`）
- 保持零依賴（不 import 任何函式庫）
- `prefers-reduced-motion` 檢查必須保留
- 不新增全域變數

---

## 禁止觸碰的部分

- `<head>` 的 canonical URL 和 OG URL（部署路徑固定）
- Google Fonts URL（字體組合已確定）
- `favicon.jpg` 的引用路徑

---

## Diff 自我檢查清單

提交前確認：
- [ ] 每一行改動都能直接對應使用者的需求
- [ ] 沒有改動要求範圍外的相鄰程式碼
- [ ] 新增的 HTML 結構與現有卡片一致
- [ ] 新增的 CSS 類別名稱符合 BEM 命名慣例
- [ ] 沒有引入 inline style
- [ ] 無障礙屬性（aria-label、alt）已正確填寫
