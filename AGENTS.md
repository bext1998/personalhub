# AGENTS.md — AI Agent 操作指引

本文件說明 AI coding agent（Claude Code、Codex、Cursor 等）在此 repo 工作時應遵守的規則。此專案是零依賴靜態單頁網站，主要維護範圍是 `index.html`、`style.css`、`main.js` 與 `assets/`。

---

## 工作範圍判斷

| 任務類型 | 應修改的檔案 | 同步檢查 |
|----------|-------------|----------|
| 更新文案、外部連結、卡片順序 | `index.html` | `aria-label`、metadata 是否仍準確 |
| 調整顏色、間距、字體、hover、動畫樣式 | `style.css` | `DESIGN.md` 是否仍符合 |
| 修改動畫邏輯或新增互動 | `main.js` | `prefers-reduced-motion` 與 IIFE 是否保留 |
| 新增或替換圖片素材 | `assets/` + `index.html` | `alt`、`width`、`height`、相對路徑 |
| 新增身份卡片 | `index.html` + `style.css`（色彩變數） | `spec.md` 卡片清單、metadata、section divider |
| 新增 sub-brand | `index.html` + `style.css` | 父卡片位置、`.sub-brand--{slug}` 變數 |
| 更新 SEO / OG 資訊 | `index.html` 的 `<head>` | canonical / OG URL 不可改 |
| 更新專案規則或設計規格 | `AGENTS.md` / `spec.md` / `DESIGN.md` | 不得與實作現況矛盾 |

**絕對不要：**
- 新增建置工具、打包器、框架依賴。
- 新增 JavaScript 函式庫，保持零依賴。
- 修改 `LICENSE`。
- 建立未被要求的新檔案。
- 為了通過檢查而刪除既有內容或註解掉失敗流程。

---

## 修改 index.html 的規則

### 受保護核心區塊

- `AI 代理編程` section divider 與 `.identity-card--maze-coder` 是網站固定作品集內容，任何視覺改版、卡片排序或內容同步都必須保留。
- 修改 `index.html` 後，必須確認 `AI 代理編程`、`identity-card--maze-coder` 與 `https://github.com/bext1998/maze-coder` 仍存在。
- 只有使用者明確要求移除 maze-coder 作品集時才能刪除；不得因「維持現有內容」、簡化版面或重做設計而省略。

### 身份卡片

每張主要身份卡片必須符合下列結構：

```html
<article
  class="identity-card identity-card--{slug} fade-in-up"
  aria-label="{名稱} 身份卡"
>
  <div class="identity-card__inner">
    <div class="identity-card__logo-wrap">
      <img
        class="identity-card__logo"
        src="assets/{filename}"
        alt="{logo 描述}"
        width="64"
        height="64"
      >
    </div>
    <div class="identity-card__body">
      <div class="identity-card__header">
        <span class="identity-card__role">{類別}</span>
        <h2 class="identity-card__name">{名稱}</h2>
      </div>
      <p class="identity-card__desc">{一句說明}</p>
      <dl class="identity-card__facts">
        <div class="identity-card__fact">
          <dt>代表內容</dt>
          <dd>{內容類型}</dd>
        </div>
        <div class="identity-card__fact">
          <dt>平台目的</dt>
          <dd>{用途}</dd>
        </div>
      </dl>
      <div class="identity-card__links">
        <a class="link-pill" href="{url}" aria-label="前往 {目的地描述}">
          {icon}
          <span>{平台名稱}</span>
        </a>
      </div>
    </div>
  </div>
</article>
```

維護規則：
- `aria-label` 格式為 `{名稱} 身份卡`。
- class 必須包含 `identity-card identity-card--{slug} fade-in-up`。
- 卡片名稱使用 `<h2>`，不可降級為 `<h3>` 或其他標題。
- `.identity-card__role` 可省略，但只有在 section divider 已清楚說明脈絡時才省略。
- link-pill 的 `aria-label` 必須包含目的地描述，不可只寫平台名稱。
- 每張卡片標準使用 2 個 fact；若要增減 fact，先確認手機版不會造成資訊擁擠。

### Section Dividers

- 新類別群組必須有對應的 `.section-divider`。
- divider 文字保持簡短，建議 2 至 4 個繁體中文字。
- divider 是裝飾性分隔，不是導覽結構，必須加上 `aria-hidden="true"`。
- 只為真正的新群組新增 divider，不為單張卡片過度切分。

### Sub-brands

sub-brand 只用於隸屬於某張主要身份卡片的子品牌或分支企劃。

```html
<div class="sub-brand sub-brand--{slug} fade-in-up">
  <div class="sub-brand__logo-wrap">
    <img
      class="sub-brand__logo"
      src="assets/{filename}"
      alt="{logo 描述}"
      width="40"
      height="40"
    >
  </div>
  <div class="sub-brand__body">
    <span class="sub-brand__name">{名稱}</span>
    <span class="sub-brand__desc">{一句說明}</span>
  </div>
</div>
```

維護規則：
- 只放在隸屬的父 `.identity-card` 的 `</div>` 後、`</article>` 前。
- 每個 sub-brand 需要 `.sub-brand--{slug}` 修飾符和對應 CSS 變數。
- sub-brand 不放外部連結；若需要主要入口，應改成主要身份卡片或在父卡片補連結。

### 圖片

- 所有 `<img>` 必須有非空且具體的 `alt`。
- logo 圖片必須有明確的 `width` 和 `height` 屬性。
- assets 路徑使用相對路徑 `assets/filename`。
- 替換圖片時，不要只改檔案；同步確認裁切、背景、解析度與深色底是否仍可辨識。

### Metadata

- 新增主要身份、刪除主要身份、改變頁面定位時，檢查 `<title>`、`description`、`og:title`、`og:description`、`twitter:title`、`twitter:description`。
- canonical URL 與 OG URL 是部署路徑，除非部署路徑改變，不可修改。
- `favicon.jpg` 引用路徑不可改。
- Google Fonts URL 不可改，除非明確要求重新設計字體系統。

---

## 修改 style.css 的規則

### 色彩變數

新增主要卡片時，在既有 identity card 變數區塊旁加入：

```css
.identity-card--{slug} {
  --accent: {主色};
  --accent-hover: {淡化版};
  --accent-border: {暗化版，用於 logo 邊框};
}
```

若瀏覽器支援 `color-mix`，`--accent-hover` 和 `--accent-border` 會由 `@supports` 區塊自動覆寫；fallback 仍必須存在。

新增 sub-brand 時加入：

```css
.sub-brand--{slug} {
  --sub-accent: {左邊框色};
}
```

### 禁止事項

- 不修改 CSS token（`:root` 區塊的變數），除非明確要求重新設計全站配色。
- 不更動 `.fade-in-up` 動畫機制，除非任務明確是調整動畫。
- 不新增 `!important`。
- 不新增 inline style。
- 不把可重用元件樣式寫成單一內容項目的特殊選擇器，除非該項目有獨特視覺需求。

---

## 修改 main.js 的規則

- 保持 IIFE 結構：`(function () { ... }())`。
- 保持零依賴，不 import 任何函式庫。
- `prefers-reduced-motion` 檢查必須保留。
- 不新增全域變數。
- 若新增互動，優先使用既有 class 切換模式，避免把樣式直接寫進 JavaScript。

---

## 禁止觸碰的部分

- `<head>` 的 canonical URL 和 OG URL（部署路徑固定）。
- Google Fonts URL（字體組合已確定）。
- `favicon.jpg` 的引用路徑。

---

## 常見維護模板

### 新增身份卡片前置資料

```md
- slug:
- 名稱:
- 類別 role:
- 一句說明 desc:
- 代表內容:
- 平台目的:
- 外部連結:
- logo 檔案:
- logo alt:
- accent 色:
- 是否需要新 section divider:
- 是否需要更新 metadata:
```

### 新增 sub-brand 前置資料

```md
- 父身份卡片:
- slug:
- 名稱:
- 一句說明:
- logo 檔案:
- logo alt:
- sub accent 色:
```

### 文案或連結更新檢查

- [ ] 只改與需求直接相關的文字或 URL。
- [ ] link text 與 `aria-label` 都反映新目的地。
- [ ] 若內容定位改變，已同步檢查 metadata。
- [ ] README / spec 的卡片描述沒有變成過期資訊。

### 圖片更新檢查

- [ ] 圖片放在 `assets/`。
- [ ] `src` 使用 `assets/filename` 相對路徑。
- [ ] `alt` 非空且描述實際圖像或品牌。
- [ ] logo 有 `width` / `height`。
- [ ] 手機寬度下不會糊、裁切錯誤或和深色背景混在一起。

---

## Diff 自我檢查清單

提交前確認：
- [ ] 每一行改動都能直接對應使用者的需求。
- [ ] 沒有改動要求範圍外的相鄰程式碼。
- [ ] 新增的 HTML 結構與現有卡片一致。
- [ ] 新增的 CSS 類別名稱符合 BEM 命名慣例。
- [ ] 沒有引入 inline style、`!important`、新依賴或建置流程。
- [ ] 無障礙屬性（`aria-label`、`alt`）已正確填寫。
- [ ] 若更新主要內容，已檢查 metadata 是否仍準確。
- [ ] 若新增或替換圖片，已檢查圖片尺寸、路徑與深色背景辨識度。
