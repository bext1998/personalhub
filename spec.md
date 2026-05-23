# spec.md — personalhub 功能規格

## 目的

`personalhub` 是 mazemaze 的個人入口頁，集中展示所有公開身份、創作名義與作品連結。訪客看到一張一張的身份卡片，點擊連結前往各平台。

**這個網站不做的事：**
- 沒有後端、沒有資料庫、沒有登入
- 不追蹤分析、不顯示動態內容
- 不需要建置流程（純靜態）

---

## 頁面區塊規格

### Profile Header

| 欄位 | 目前值 | 備註 |
|------|--------|------|
| 頭像 | `assets/mazemaze-avatar.jpg` | 96×96px，圓形裁切 |
| 名稱 | mazemaze | `<h1>`，Space Mono 字體 |
| Tagline | 專門製造AI工業垃圾，本人的興趣多到數不完，是個廢物加不可回收垃圾。 | 可自由更新 |
| 社群連結 | GitHub (`bext1998`)、Threads (`@bext1998`) | 圖示按鈕，40×40px |

### Section Dividers

目前有兩個：
1. `創作身份` — 位於 profile 與第一張身份卡片之間
2. `AI 代理編程` — 位於 CarrotWinClub 卡片與 maze-coder 卡片之間

新增卡片群組時應同步新增對應的 section divider。

### Identity Cards

每張卡片結構固定：

```
.identity-card
└── .identity-card__inner
    ├── .identity-card__logo-wrap
    │   └── <img> 或 <svg>（logo）
    └── .identity-card__body
        ├── .identity-card__header
        │   ├── .identity-card__role（可選，小標籤）
        │   └── .identity-card__name（<h2>，必填）
        ├── .identity-card__desc（一行說明）
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

#### BEXT
- role: 音樂名義
- desc: 作曲、編曲與音樂分支企劃的主要創作名義。
- facts: 代表內容／原創曲、風格實驗；平台目的／發布音樂作品與創作近況
- links: YouTube `https://www.youtube.com/@bextukhc`、X `https://x.com/bext1998`
- accent: `#00aeef`（藍）
- sub-brands: Silent Insanity、Azure Rhythm

#### 白河奏 Shirakawa Kanade
- role: 小說名義
- desc: 用於小說、文字作品與連載平台活動的創作身份。
- facts: 代表內容／小說、角色敘事；平台目的／整理文字作品與作者頁面
- links: KadoKado `https://www.kadokado.com.tw/user/278577`
- accent: `#cccccc`（銀白）

#### CarrotWinClub 日本競馬觀測誌
- role: 競馬觀測
- desc: 日本競馬資訊、賽事觀察與短評分析的專門身份。
- facts: 代表內容／日本競馬觀測、賽事分析；平台目的／發布即時短評與觀察筆記
- links: Threads `https://www.threads.com/@carrotwinclub564`
- accent: `#c9920a`（琥珀）
- logo: 圓形裁切（`.identity-card__logo-wrap--rounded`）

#### maze-coder
- role: （無，由 section divider 說明脈絡）
- desc: 可攜式 Harness Engineering 技能包，讓 Claude Code、Codex、Cursor、opencode 共用同一套工程規範。
- facts: 代表內容／11 個 AI coding agent 工作流技能；平台目的／跨工具維持一致、可重複的工程流程
- links: GitHub `https://github.com/bext1998/maze-coder`
- accent: `#8f7aff`（紫）
- logo: inline SVG（無圖片素材）

### Sub-brands

附屬在 BEXT 卡片下方：

| 名稱 | 說明 | accent |
|------|------|--------|
| Silent Insanity | 哥德暗黑金屬風格音樂分支 | `#8b0000` |
| Azure Rhythm | 電子搖滾風格音樂分支 | `#00bcd4` |

### Footer

`© mazemaze`，無年份（免去每年更新）。

---

## 新增身份卡片的流程

1. 在 `style.css` 新增 `.identity-card--{slug}` 色彩變數（`--accent`、`--accent-hover`、`--accent-border`）
2. 在 `index.html` 複製最近鄰的 `<article>` 結構，填入內容
3. 若屬於新的類別群組，在卡片前新增 `.section-divider`
4. 若有圖片素材，放入 `assets/`
5. 確認 `aria-label` 描述準確

---

## 頁面 metadata（`<head>`）

| 屬性 | 目前值 |
|------|--------|
| `<title>` | mazemaze \| 我的個人入口網站 |
| `description` | mazemaze 的個人入口頁，整理 AI 創作、音樂、小說、日本競馬觀測與各身份連結。 |
| canonical URL | `https://bext1998.github.io/personalhub/` |
| OG image | `assets/mazemaze-avatar.jpg` |
| 字體 | Space Mono 400/700、Bebas Neue、Noto Sans TC 400/500（Google Fonts） |

新增主要類別時，更新 `description` 以反映新內容。
