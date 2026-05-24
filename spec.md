# spec.md — personalhub 功能規格

## 目的

`personalhub` 是 mazemaze 的個人入口頁，集中展示公開身份、創作名義與作品連結。訪客看到一張一張的身份卡片，點擊連結前往各平台。

**這個網站不做的事：**
- 沒有後端、沒有資料庫、沒有登入。
- 不追蹤分析、不顯示動態內容。
- 不需要建置流程，維持純靜態。
- 不把內容拆成外部資料檔或引入框架。

---

## 頁面區塊規格

### Profile Header

| 欄位 | 目前值 | 備註 |
|------|--------|------|
| 頭像 | `assets/mazemaze-avatar.jpg` | 96x96px，圓形裁切 |
| 名稱 | mazemaze | `<h1>`，Space Mono 字體 |
| Tagline | 專門製造AI工業垃圾，本人的興趣多到數不完，是個廢物加不可回收垃圾。 | 可自由更新 |
| 社群連結 | GitHub (`bext1998`)、Threads (`@bext1998`) | 圖示按鈕，40x40px |

### Section Dividers

目前有一個：

1. `創作身份` — 位於 profile 與第一張身份卡片之間。

新增卡片群組時應同步新增對應的 section divider。若只是補充既有創作身份，沿用現有 divider。

### Identity Cards

每張卡片結構固定：

```text
.identity-card
└── .identity-card__inner
    ├── .identity-card__logo-wrap
    │   └── <img> 或 <svg>（logo）
    └── .identity-card__body
        ├── .identity-card__header
        │   ├── .identity-card__role（可選，小標籤）
        │   └── .identity-card__name（<h2>，必填）
        ├── .identity-card__desc（一句說明）
        ├── .identity-card__facts（<dl>，2 個 fact 為標準）
        └── .identity-card__links（link-pill 按鈕群）
```

**現有卡片（依頁面順序）：**

#### NSR 百鬼運動競速

- role: 競速頻道
- desc: 以賽車模擬、競速遊戲與體育向企劃為主的影像入口。
- facts: 代表內容／模擬賽車、競速體育；平台目的／集中發布競速相關影片
- links: YouTube `https://www.youtube.com/@NSR3954`
- accent: `#d0021b`（紅）
- logo: `assets/nsr-logo.png`

#### BEXT

- role: 音樂名義
- desc: 作曲、編曲與音樂分支企劃的主要創作名義。
- facts: 代表內容／原創曲、風格實驗；平台目的／發布音樂作品與創作近況
- links: YouTube `https://www.youtube.com/@bextukhc`、X `https://x.com/bext1998`
- accent: `#00aeef`（藍）
- logo: `assets/bext2023logo.png`
- sub-brands: Silent Insanity、Azure Rhythm

#### 白河奏 Shirakawa Kanade

- role: 小說名義
- desc: 用於小說、文字作品與連載平台活動的創作身份。
- facts: 代表內容／小說、角色敘事；平台目的／整理文字作品與作者頁面
- links: KadoKado `https://www.kadokado.com.tw/user/278577`
- accent: `#cccccc`（銀白）
- logo: `assets/shirakawa-kanade.png`

#### CarrotWinClub 日本競馬觀測誌

- role: 競馬觀測
- desc: 日本競馬資訊、賽事觀察與短評分析的專門身份。
- facts: 代表內容／日本競馬觀測、賽事分析；平台目的／發布即時短評與觀察筆記
- links: Threads `https://www.threads.com/@carrotwinclub564`
- accent: `#c9920a`（琥珀）
- logo: `assets/carrotwinclub.jpg`
- logo 裁切: 圓形裁切（`.identity-card__logo-wrap--rounded`）

### Sub-brands

附屬在 BEXT 卡片下方：

| 名稱 | 說明 | logo | accent |
|------|------|------|--------|
| Silent Insanity | 哥德暗黑金屬風格音樂分支 | `assets/silent-insanity.png` | `#8b0000` |
| Azure Rhythm | 電子搖滾風格音樂分支 | `assets/azure-rhythm.png` | `#00bcd4` |

### Footer

`© mazemaze`，無年份，避免每年例行更新。

---

## 新增身份卡片流程

1. 收集卡片資料：slug、名稱、role、desc、2 個 facts、links、logo、accent 色。
2. 判斷是否屬於現有 `創作身份` 群組；若不是，新增 section divider。
3. 將 logo 放入 `assets/`，確認檔名穩定、可讀、無空白。
4. 在 `style.css` 新增 `.identity-card--{slug}` 色彩變數。
5. 在 `index.html` 複製最近鄰的 `<article>` 結構，填入內容。
6. 若新增主要內容類型，更新 `<head>` description / OG / Twitter description。
7. 檢查 `aria-label`、`alt`、`width`、`height`、外部連結。
8. 手動預覽手機與桌面寬度。

### 新增身份卡片資料模板

```md
## 新增身份卡片：{名稱}

- slug:
- 類別 role:
- 一句說明 desc:
- 代表內容:
- 平台目的:
- 外部連結:
- logo 檔案:
- logo alt:
- accent 色:
- 所屬 section:
- 是否需要新增 section divider:
- 是否需要更新 metadata:
```

---

## 新增 sub-brand 流程

1. 確認 sub-brand 隸屬於既有主要身份卡片。
2. 將 logo 放入 `assets/`。
3. 在父 `.identity-card` 的內層 `</div>` 後、`</article>` 前新增 `.sub-brand`。
4. 在 `style.css` 新增 `.sub-brand--{slug}` 的 `--sub-accent`。
5. 檢查 logo 的 `alt`、`width`、`height` 與手機版可讀性。

### 新增 sub-brand 資料模板

```md
## 新增 sub-brand：{名稱}

- 父身份卡片:
- slug:
- 一句說明:
- logo 檔案:
- logo alt:
- sub accent 色:
```

---

## 頁面 metadata（`<head>`）

| 屬性 | 目前值 |
|------|--------|
| `<title>` | mazemaze \| 我的個人入口網站 |
| `description` | mazemaze 的個人入口頁，整理 AI 創作、音樂、小說、日本競馬觀測與各身份連結。 |
| canonical URL | `https://bext1998.github.io/personalhub/` |
| OG image | `https://bext1998.github.io/personalhub/assets/mazemaze-avatar.jpg` |
| Twitter card | `summary` |
| 字體 | Space Mono 400/700、Bebas Neue、Noto Sans TC 400/500（Google Fonts） |

新增主要類別、刪除主要類別或改變頁面定位時，更新 `description`、`og:description`、`twitter:description` 以反映新內容。canonical URL、OG URL 與部署路徑綁定，不因文案調整而修改。

---

<!-- HARDENED -->

## Contract（介面契約）

### 內容維護輸入

維護者新增或修改主要身份卡片時，至少提供：
- 名稱、slug、類別 role、一句說明、2 個 facts、外部連結。
- logo 檔案或明確說明使用 inline SVG。
- accent 色。
- 是否屬於既有 section。

若輸入不足，agent 不應自行發明品牌定位、連結或圖片；應只修改已提供且可從現有檔案推斷的部分，並標明缺漏。

### 輸出承諾

成功修改後，應維持：
- `index.html` 的卡片語意結構完整。
- `style.css` 中對應 slug 的色彩變數存在。
- 圖片路徑與實際 `assets/` 檔案一致。
- metadata 在主要內容變動後仍準確。

### 失敗行為

若找不到圖片、slug 衝突、外部連結不明或 section 歸屬不明，應停止該項新增並回報缺漏；不得用 placeholder URL、空白圖片或臨時文字假裝完成。

## Invariants（系統不變式）

- [FROZEN] 專案維持純靜態，無後端、資料庫、登入、建置流程。
- [FROZEN] 主要入口檔案是根目錄 `index.html`、`style.css`、`main.js`。
- [FROZEN] 樣式入口是根目錄 `style.css`，不得改成打包或多檔 import 流程，除非另有明確重構需求。
- 每張主要身份卡片必須有唯一 `.identity-card--{slug}`。
- 每張主要身份卡片必須有 `aria-label`。
- 每個 logo `<img>` 必須有非空 `alt`、`width`、`height`。
- `main.js` 必須保留 IIFE 與 `prefers-reduced-motion` 行為。
- canonical URL 與 OG URL 必須指向 GitHub Pages 部署路徑。

## Edge Cases（邊界情況）

- 新增卡片但沒有 logo：優先要求補 logo；若明確指定 inline SVG，需維持可存取名稱或裝飾性標記。
- 新增卡片但沒有適合 section：新增 2 至 4 字繁中 section divider。
- 新增外部連結但平台沒有既有 icon：可使用文字 link-pill，不能引入 icon 套件。
- 長卡片名稱在手機版換行時，不得壓縮 logo 或讓 link-pill 溢出。
- 圖片背景太暗或太亮時，應調整圖片素材或既有容器樣式，避免改全站 token。
- 使用者只要求文案更新時，不同步做設計重整。

## Acceptance Criteria（驗收標準）

| ID | 驗收項目 | 測量方式 | 通過門檻 | 可自動化 |
|----|----------|----------|----------|----------|
| AC-01 | HTML 結構完整 | 檢查 `index.html` | 每張卡片都有固定 BEM 結構 | 部分 |
| AC-02 | 無障礙屬性完整 | 搜尋 `aria-label`、`alt`、`width`、`height` | 卡片與圖片屬性不缺漏 | 部分 |
| AC-03 | 樣式變數完整 | 檢查 `style.css` | 新 slug 有 accent 或 sub-accent | 是 |
| AC-04 | metadata 準確 | 對照頁面內容與 `<head>` | 主要內容類型已反映在描述中 | 手動 |
| AC-05 | 手機版可讀 | 以窄螢幕預覽 | 文字、logo、link-pill 不重疊 | 手動 |
| AC-06 | 動畫可降級 | 檢查 `main.js` 與 CSS | reduced motion 不播放進場動畫 | 部分 |

## Test Plan（測試計畫）

- [FROZEN] TP-01：直接開啟 `index.html`，確認頁面不依賴 build step。
- [FROZEN] TP-02：以手機寬度檢查卡片名稱、facts、link-pill 是否換行正常。
- [FROZEN] TP-03：檢查所有 `<img>` 都有 `alt`、`width`、`height`。
- [FROZEN] TP-04：檢查新增 slug 在 HTML 與 CSS 中一致。
- [FROZEN] TP-05：開啟 reduced motion 設定或檢查程式路徑，確認元素會直接顯示。

禁止的測試行為：
- 不為測試引入套件或建置工具。
- 不以跳過動畫、移除內容或刪除卡片作為測試通過手段。

## [FROZEN] 決策

- 純靜態架構：變更時需同步更新 `README.md`、`AGENTS.md`、本 spec。
- 零依賴：變更時需明確說明為何 CSS / 原生 JS 不足。
- 根目錄 `style.css` 作為樣式來源：變更時需同步調整 README 與本 spec。
- 深色單一視覺方向：變更時需同步更新 `DESIGN.md`。

## Drift Risk Analysis（飄移風險）

| 風險 | 可能錯誤詮釋 | 緩解措施 |
|------|--------------|----------|
| 文件提到新增卡片流程 | agent 可能順手新增未要求的卡片 | 每次修改只處理使用者明確要求 |
| `assets/css/` 舊檔若存在 | agent 可能誤以為樣式入口已拆分 | 以 `index.html` 實際 stylesheet 為準 |
| metadata 檢查 | agent 可能改 canonical / OG URL | 明確標示部署 URL 不可因文案調整而改 |
| sub-brand 結構 | agent 可能放到父卡片外 | 規定只能放在父卡片內層結尾後、`</article>` 前 |
| 設計調整 | agent 可能修改全站 token | 除非明確要求重新設計，優先局部調整 |

## Open Questions

| 問題 | 狀態 | 備註 |
|------|------|------|
| 是否保留 `assets/css/` 舊拆分檔案 | 待確認 | 目前以根目錄 `style.css` 為實際來源 |
| 新增非創作身份時的 section 命名規則 | 待確認 | 目前僅規定 2 至 4 字繁中短標籤 |
| 未來是否需要把卡片內容資料化 | 已確認：目前不需要 | 維持零依賴與單頁 HTML |
