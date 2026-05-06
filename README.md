# personalhub

Personal profile hub for `mazemaze`.

這個專案目前是一個靜態首頁，主要由 `index.html`、`style.css`、`main.js` 三個檔案組成。首頁已重寫成個人入口頁與身份卡片列表，README 僅描述目前實際存在的結構。

## 檔案結構

- `index.html`：放置頁面內容、語意結構、外部連結與圖片引用。
- `style.css`：放置視覺樣式、版面配置、響應式規則與動畫樣式。
- `main.js`：放置頁面互動，目前負責進場動畫的顯示時機。
- `assets/`：放置 avatar、品牌 logo 與其他首頁圖片素材。
- `favicon.jpg`：網站 icon。

## `index.html` 內容

`index.html` 是目前主要的內容維護位置，包含：

- `<head>`：頁面標題、描述、canonical URL、Open Graph metadata、favicon、Google Fonts 與 CSS 引用。
- `.hub`：首頁主要容器。
- `.profile`：個人頭像、名稱、簡介文字與社群 icon 連結。
- `.section-divider`：身份卡片列表前的分隔標籤。
- `.identity-card`：每個主要身份、品牌或作品入口的卡片，包含 logo、名稱、描述與外部連結。
- `.sub-brand`：隸屬在主要身份卡片下的子品牌或延伸項目。
- `.hub-footer`：頁尾版權文字。
- `<script src="main.js">`：載入首頁互動。

若要更新首頁文案、社群連結、卡片順序、品牌項目或圖片路徑，優先修改 `index.html`。如果更新可分享資訊，也要同步檢查 `<head>` 裡的 title、description、Open Graph URL 與圖片。

## `style.css` 樣式

`style.css` 管理目前首頁所有視覺表現，包含：

- CSS tokens：背景色、文字色、邊框色、字體、最大寬度、圓角與轉場時間。
- Reset 與基礎元素樣式：盒模型、body、圖片、連結、focus 狀態。
- Layout：`.hub` 的 mobile-first 最大寬度、間距與垂直排列。
- Profile header：頭像、名稱、簡介與社群 icon 的樣式。
- Section divider：分隔線與標籤樣式。
- Identity cards：主要身份卡片、logo、描述、連結區與 hover 效果。
- Link pills：卡片內外部連結按鈕樣式。
- Sub-brands：子品牌列的排版、logo 與 hover 效果。
- Footer：頁尾分隔線與版權文字。
- Animation：`.fade-in-up`、`.is-visible` 與 `fadeInUp` keyframes。
- Responsive rules：小螢幕與較寬螢幕的間距、卡片與字級調整。

若只調整顏色、間距、字體、卡片外觀、動畫或響應式版面，應優先修改 `style.css`。

## `main.js` 互動

`main.js` 目前只負責進場動畫：

- 找出所有 `.fade-in-up` 元素。
- 若使用者偏好減少動態效果，直接加上 `.is-visible`，避免播放動畫。
- 其他情況下使用 `IntersectionObserver` 監看元素進入畫面。
- 元素進入畫面後加上 `.is-visible`，觸發 CSS 中的 `fadeInUp` 動畫，並停止監看該元素。

若要新增互動，應先確認是否能用 CSS 完成；需要瀏覽器狀態、捲動觀察、點擊行為或動態 class 切換時，再放進 `main.js`。

## 維護注意事項

- 維護時請以目前的 profile、identity card、sub-brand 與 footer 結構為準。
- 新增一張主要卡片時，建議沿用 `.identity-card` 的結構與 `--accent` 色彩變數。
- 新增子項目時，建議放在相關 `.identity-card` 裡並沿用 `.sub-brand` 結構。
- 新增圖片素材時，放在 `assets/`，並在 `index.html` 中提供合理的 `alt` 文字。
