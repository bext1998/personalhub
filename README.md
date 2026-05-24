# mazemaze | 個人入口網站

Personal profile hub for `mazemaze`.

靜態單頁網站，由 `index.html`、`style.css`、`main.js` 三個檔案組成。呈現個人身份、創作名義與 AI 代理編程作品。

## 檔案結構

```
personalhub/
├── index.html          # 頁面內容、結構、外部連結
├── style.css           # 所有視覺樣式
├── main.js             # 進場動畫邏輯（IntersectionObserver）
├── favicon.jpg         # 網站 icon
└── assets/
    ├── mazemaze-avatar.jpg
    ├── nsr-logo.png
    ├── bext2023logo.png
    ├── silent-insanity.png
    ├── azure-rhythm.png
    ├── shirakawa-kanade.png
    └── carrotwinclub.jpg
```

## 頁面結構（index.html）

```
.hub
├── .profile                     # 頭像、名稱、tagline、社群圖示
├── .section-divider "創作身份"
├── .identity-card--nsr          # NSR 百鬼運動競速（競速頻道）
├── .identity-card--bext         # BEXT（音樂名義）
│   ├── .sub-brand--silent       #   └ Silent Insanity（哥德金屬分支）
│   └── .sub-brand--azure        #   └ Azure Rhythm（電子搖滾分支）
├── .identity-card--kanade       # 白河奏 Shirakawa Kanade（小說名義）
├── .identity-card--carrot       # CarrotWinClub 日本競馬觀測誌
├── .section-divider "AI 代理編程"
├── .identity-card--maze-coder   # maze-coder（AI coding agent 技能包）
└── .hub-footer
```

## 各身份卡片一覽

| 卡片 | 類別 | 外部連結 | 左邊框色 |
|------|------|----------|----------|
| NSR 百鬼運動競速 | 競速頻道 | YouTube | `#d0021b` |
| BEXT | 音樂名義 | YouTube、X | `#00aeef` |
| 白河奏 Shirakawa Kanade | 小說名義 | KadoKado | `#cccccc` |
| CarrotWinClub | 競馬觀測 | Threads | `#c9920a` |
| maze-coder | AI 代理編程 | GitHub | `#8f7aff` |

maze-coder 使用 inline SVG 作為 logo（無對應圖片素材）。

## 維護指引

**更新文案、連結、卡片順序** → 修改 `index.html`。

**更換顏色、間距、動畫、響應式** → 修改 `style.css`。

**新增身份卡片** → 見 `spec.md` 的新增流程與 `DESIGN.md` 的卡片規格。

**新增互動行為** → 先確認能否用 CSS 完成；需要 JS 狀態或事件時再放進 `main.js`。

**更新圖片** → 放入 `assets/`，在 `index.html` 提供對應 `alt` 文字。

修改頁面內容時，同步確認 `<head>` 的 title、description、OG 標籤是否需要更新。

## 本地預覽

無建置步驟，直接用瀏覽器開啟 `index.html` 或透過靜態伺服器：

```bash
npx serve .
# 或
python -m http.server 8080
```

部署目標：GitHub Pages（`https://bext1998.github.io/personalhub/`）
