# DESIGN.md — 設計系統

工業極簡風格，深色模式唯一，繁體中文介面。

---

## 設計原則

- **極簡工業**：黑底、細邊框、左側彩色 accent bar、低圓角。
- **深色模式唯一**：不提供淺色模式，`color-scheme: dark`。
- **文字密度優先**：資訊直接呈現，不用裝飾性圖示取代必要文字。
- **hover 僅平移**：卡片 hover 效果使用 `translateX(4px)`，不用陰影或縮放。
- **卡片即內容單位**：主要身份用 `.identity-card`，隸屬分支才用 `.sub-brand`。
- **局部變化優先**：新增品牌色或 logo 變體時，優先使用卡片變數，不改全站 token。

---

## CSS Tokens

```css
/* 背景 */
--bg:             #0d0d0d   /* 頁面底色 */
--surface:        #1d1d1d   /* 卡片背景 */
--surface-strong: #242424   /* logo wrap 背景 */

/* 文字 */
--text:   #f5f5f5   /* 主要文字 */
--soft:   #d3d3d3   /* 次要說明文字 */
--muted:  #a7a7a7   /* 標籤、fact、圖示 */

/* 邊框 */
--border: #3a3a3a   /* 預設邊框色 */

/* 尺寸 */
--max-w:       480px   /* 頁面最大寬度 */
--px:          1rem    /* 水平內距（sm: 1.5rem） */
--card-radius: 4px
--t-fast:      160ms ease
```

Token 維護規則：
- 不為單一卡片修改 `:root` token。
- 不新增新的主題系統或 light mode，除非明確重新設計。
- 若新內容只需要品牌色，使用 `.identity-card--{slug}` 或 `.sub-brand--{slug}` 自訂屬性。

---

## 字體系統

| 用途 | 字體 | 類別/屬性 |
|------|------|-----------|
| 卡片名稱（大標） | Bebas Neue | `.identity-card__name`、`.sub-brand__name` |
| 程式碼感標籤 | Space Mono | `.profile__name`、`.identity-card__role`、`.identity-card__fact dt` |
| 內文 | Noto Sans TC | 其餘所有文字 |

字體來源：Google Fonts，三組一次載入（`display=swap`）。

維護規則：
- 不新增字體，除非明確重新設計字體系統。
- 中文內容以可讀性優先，不為了視覺風格犧牲行高與換行。
- 卡片內標題不可使用 hero 級字級。

---

## 色彩系統

每張身份卡片用 CSS 自訂屬性覆寫 accent 色。

| 卡片 | `--accent` | 色調描述 |
|------|-----------|----------|
| NSR | `#d0021b` | 競速紅 |
| BEXT | `#00aeef` | 天空藍 |
| 白河奏 | `#cccccc` | 銀白 |
| CarrotWinClub | `#c9920a` | 琥珀橙 |

`--accent-hover`（hover 時的邊框色）與 `--accent-border`（logo wrap 邊框色）：
- 瀏覽器支援 `color-mix` 時，由 `@supports` 自動計算。
- 不支援時，使用 CSS 中手動定義的 fallback 值。

新增 accent 色檢查：
- [ ] 與既有四張卡片可明顯區分。
- [ ] 在深色背景上有足夠辨識度。
- [ ] 不讓整頁變成單一色系。
- [ ] fallback 的 `--accent-hover` 與 `--accent-border` 都已填寫。
- [ ] logo 邊框色不壓過 logo 本身。

---

## 元件規格

### .identity-card

```css
border-left: 3px solid var(--accent);
border-radius: 4px;
background: var(--surface);
hover: translateX(4px);
```

內部結構：

```text
.identity-card__inner (flex, gap: 1rem, padding: 1rem)
├── .identity-card__logo-wrap (64x64px, background: --surface-strong)
│   └── <img> 或 <svg>
└── .identity-card__body (flex column, gap: 0.45rem)
    ├── .identity-card__header
    │   ├── .identity-card__role  (Space Mono 0.68rem, uppercase, accent-hover 色)
    │   └── .identity-card__name  (Bebas Neue 1.35rem)
    ├── .identity-card__desc      (0.875rem, --soft 色)
    ├── .identity-card__facts     (grid, 每行 4.75rem label + 內容)
    └── .identity-card__links     (flex wrap, gap: 0.5rem)
```

Logo wrap 變體：
- 預設：近直角 2px。
- `.identity-card__logo-wrap--rounded`：50% 圓形，適合圓形頭像或圓形品牌圖。

卡片新增 checklist：
- [ ] 名稱長度在手機版可自然換行。
- [ ] desc 是一句話，不寫成段落。
- [ ] facts 以 2 組為標準。
- [ ] link-pill 數量不讓卡片底部過度擁擠。
- [ ] hover 平移不造成水平捲動。

### .sub-brand

附屬在父 `.identity-card` 底部，邊框色由 `--sub-accent` 控制：

```css
border-top: 1px solid var(--border);
border-left: 2px solid var(--sub-accent);
background: #141414;
padding: 0.65rem 1rem 0.65rem 1.25rem;
hover: translateX(3px);
```

Logo：40x40px，樣式同 identity-card logo wrap，但不使用 accent-border。

sub-brand checklist：
- [ ] 確認它是父身份的分支，而不是獨立入口。
- [ ] 名稱與說明各一行可讀。
- [ ] `--sub-accent` 與父卡片 accent 可共存。
- [ ] 不新增外部連結；需要連結時優先放在父卡片。

### .link-pill

```css
border: 1px solid var(--border);
border-radius: 2px;
min-height: 2.25rem;
padding: 0.3rem 0.65rem;
font-size: 0.8rem;
color: var(--muted);
hover: color var(--text), border-color #555;
```

內含 SVG icon（15x15px）+ 文字。

link-pill checklist：
- [ ] 文字使用平台名或短目的地名。
- [ ] `aria-label` 說明前往哪個目的地。
- [ ] 多個 link-pill 可換行，不壓縮文字。
- [ ] 新平台 icon 不引入外部套件。

### .section-divider

```css
display: flex + align-items: center;
::before / ::after: flex: 1, height: 1px, background: var(--border);
span: Space Mono 0.75rem, letter-spacing: 0.1em, color: var(--muted);
```

divider checklist：
- [ ] 文字 2 至 4 個繁體中文字。
- [ ] 裝飾用途加上 `aria-hidden="true"`。
- [ ] 不把 divider 當成頁面導覽。
- [ ] 只在內容類別真的改變時新增。

### .social-icon（profile 區）

```css
40x40px, border: 1px solid var(--border), border-radius: 4px;
color: var(--muted), hover: color var(--text), border-color #555;
```

social icon checklist：
- [ ] icon 尺寸保持一致。
- [ ] `aria-label` 描述平台與帳號或目的地。
- [ ] 新增平台時，不破壞 40x40px 觸控目標。

---

## 動畫系統

`main.js` 使用 `IntersectionObserver`，元素進入 viewport 後加上 `.is-visible`。

```css
/* JS 載入前：可見（防閃） */
.fade-in-up { opacity: 1; transform: none; }

/* JS 載入後：隱藏等待觸發 */
.js .fade-in-up { opacity: 0; transform: translateY(8px); }

/* 觸發 */
.js .fade-in-up.is-visible {
  animation: fadeInUp 0.28s ease forwards;
}
```

`fadeInUp` keyframe：`translateY(16px) opacity:0` 到 `translateY(0) opacity:1`。

`:nth-child(2~8)` 有 0.02s 遞增 delay，製造錯開進場感。

`prefers-reduced-motion` 時：直接加 `.is-visible`，跳過動畫。

動畫維護 checklist：
- [ ] 不新增縮放、旋轉或陰影動畫。
- [ ] reduced motion 路徑仍能直接顯示內容。
- [ ] 新增會進場的元素時，加上 `.fade-in-up`。
- [ ] 不讓動畫控制內容是否可存取。

---

## 響應式規格

| breakpoint | 變化 |
|------------|------|
| `< 375px` | `--px: 0.75rem`、card inner padding 縮小、logo wrap 縮為 52x52px |
| `375px-519px` | 基準值（`--px: 1rem`） |
| `>= 520px` | `--px: 1.5rem`、hub padding-top: 3.5rem、card gap: 1rem |

最大寬度固定 480px，兩側留白由 `margin-inline: auto` 處理。

響應式驗收 checklist：
- [ ] 320px 寬度下沒有水平捲動。
- [ ] 卡片 logo 不被文字擠壓變形。
- [ ] 長中文、英文品牌名與 URL 按鈕可換行。
- [ ] facts label 欄寬仍可讀。
- [ ] footer 不貼近最後一張卡片。

---

## 設計檢查模板

用於新增卡片、調整視覺或替換圖片後的人工檢查：

```md
## Design Check

- 變更範圍:
- 受影響元件:
- 桌面檢查:
- 手機檢查:
- 色彩對比:
- 圖片辨識度:
- hover / animation:
- 與既有設計不一致之處:
- 是否需要更新 DESIGN.md:
```

---

## 常見漂移與處理

| 漂移 | 處理方式 |
|------|----------|
| 卡片越做越像大型 landing page | 回到 480px 單欄入口頁，保持卡片密度 |
| 新增品牌色後頁面變成單色系 | 重新選 accent，避免與既有色調過近 |
| 想用陰影、漸層、玻璃擬態增加質感 | 不採用；此站以細邊框、深色、accent bar 表現 |
| 想新增大量 icon 裝飾 | 只保留平台與必要辨識 icon |
| 長文案塞進 desc | 改寫為一句話，細節放 facts 或外部平台 |
