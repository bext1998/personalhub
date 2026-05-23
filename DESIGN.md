# DESIGN.md — 設計系統

工業極簡風格，深色模式唯一，繁體中文介面。

---

## 設計原則

- **極簡工業**：黑底、細邊框、左側彩色 accent bar、無圓角裝飾
- **深色模式唯一**：不提供淺色模式，`color-scheme: dark`
- **文字密度優先**：資訊直接呈現，不用圖示裝飾取代文字
- **hover 僅平移**：卡片 hover 效果是 `translateX(4px)`，不用陰影或縮放

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

---

## 字體系統

| 用途 | 字體 | 類別/屬性 |
|------|------|-----------|
| 卡片名稱（大標） | Bebas Neue | `.identity-card__name`、`.sub-brand__name` |
| 程式碼感標籤 | Space Mono | `.profile__name`、`.identity-card__role`、`.identity-card__fact dt` |
| 內文 | Noto Sans TC | 其餘所有文字 |

字體來源：Google Fonts，三組一次載入（`display=swap`）。

---

## 色彩系統

每張身份卡片用 CSS 自訂屬性覆寫 accent 色。

| 卡片 | `--accent` | 色調描述 |
|------|-----------|---------|
| NSR | `#d0021b` | 競速紅 |
| BEXT | `#00aeef` | 天空藍 |
| 白河奏 | `#cccccc` | 銀白 |
| CarrotWinClub | `#c9920a` | 琥珀橙 |
| maze-coder | `#8f7aff` | 電紫 |

`--accent-hover`（hover 時的邊框色）與 `--accent-border`（logo wrap 邊框色）：
- 瀏覽器支援 `color-mix` → 由 `@supports` 自動計算
- 不支援 → 使用 CSS 中手動定義的 fallback 值

新增卡片時，選一個與既有 accent 不衝突的色調，並手動設定三個變數。

---

## 元件規格

### .identity-card

```
border-left: 3px solid var(--accent)   ← accent bar
border-radius: 4px
background: var(--surface)
hover: translateX(4px)
```

內部結構（左右排列）：
```
.identity-card__inner (flex, gap: 1rem, padding: 1rem)
├── .identity-card__logo-wrap (64×64px, background: --surface-strong)
│   └── <img> 或 <svg>
└── .identity-card__body (flex column, gap: 0.45rem)
    ├── .identity-card__header
    │   ├── .identity-card__role  (Space Mono 0.68rem, uppercase, accent-hover 色)
    │   └── .identity-card__name  (Bebas Neue 1.35rem)
    ├── .identity-card__desc      (0.875rem, --soft 色)
    ├── .identity-card__facts     (grid, 每行 4.75rem label + 內容)
    └── .identity-card__links     (flex wrap, gap: 0.5rem)
```

**Logo wrap 變體：**
- 預設：直角 2px
- `.identity-card__logo-wrap--rounded`：50% 圓形（CarrotWinClub 使用）

### .sub-brand

附屬在父 `.identity-card` 底部，邊框色由 `--sub-accent` 控制：

```
border-top: 1px solid var(--border)
border-left: 2px solid var(--sub-accent)
background: #141414
padding: 0.65rem 1rem 0.65rem 1.25rem
hover: translateX(3px)
```

Logo：40×40px，樣式同 identity-card logo wrap（但無 accent-border）。

### .link-pill

```
border: 1px solid var(--border)
border-radius: 2px
min-height: 2.25rem
padding: 0.3rem 0.65rem
font-size: 0.8rem
color: var(--muted)
hover → color: var(--text), border-color: #555
```

內含 SVG icon（15×15px）+ 文字。

### .section-divider

```
display: flex + align-items: center
::before / ::after → flex: 1, height: 1px, background: var(--border)
span → Space Mono 0.75rem, letter-spacing: 0.1em, color: var(--muted)
```

### .social-icon（profile 區）

```
40×40px, border: 1px solid var(--border), border-radius: 4px
color: var(--muted), hover → color: var(--text), border-color: #555
```

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

`fadeInUp` keyframe：`translateY(16px) opacity:0` → `translateY(0) opacity:1`。

`:nth-child(2~8)` 有 0.02s 遞增 delay，製造錯開進場感。

`prefers-reduced-motion` 時：直接加 `.is-visible`，跳過動畫。

---

## 響應式規格

| breakpoint | 變化 |
|------------|------|
| `< 375px` | `--px: 0.75rem`、card inner padding 縮小、logo wrap 縮為 52×52px |
| `375px–519px` | 基準值（`--px: 1rem`） |
| `≥ 520px` | `--px: 1.5rem`、hub padding-top: 3.5rem、card gap: 1rem |

最大寬度固定 480px，兩側留白由 `margin-inline: auto` 處理。
