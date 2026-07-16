# DESIGN.md — mazemaze 設計系統

灰階 8px 像素風格，手機優先、深色模式唯一、繁體中文介面。視覺基礎是工業極簡、細邊框、終端語彙與輕量結構性切角，不使用陰影、漸層或電玩裝飾。

---

## 設計原則

- **灰階優先**：頁面底色、卡片層次與文字對比由固定灰階 token 控制。
- **8px 節奏**：主要間距使用 8／16／24／32／48px，4px 只作半格細節、邊線與像素標記。
- **深色唯一**：不提供淺色模式，保留 `color-scheme: dark`。
- **卡片即內容單位**：主要身份使用 `.identity-card`，隸屬分支才使用 `.sub-brand`。
- **像素感克制**：用終端字標、4px 品牌線、方形 logo 容器與階梯感 divider 建立識別，不加入裝飾性圖案。
- **品牌色局部使用**：既有 accent 只用於辨識邊線、角色標籤、logo 邊框與 hover／互動狀態。

---

## CSS Tokens

```css
--bg:              #050505;
--surface:         #121212;
--surface-strong:  #202020;
--border:          #3A3A3A;
--muted:           #8A8A8A;
--soft:            #C2C2C2;
--text:            #EDEDED;
--focus:           #FFFFFF;

--space-1:         8px;
--space-2:         16px;
--space-3:         24px;
--space-4:         32px;
--space-5:         48px;
--max-w:           480px;
--card-radius:     2px;
--t-fast:          160ms ease;
```

維護規則：

- 不為單一卡片修改全站灰階 token。
- 新品牌色只能放在 `.identity-card--{slug}` 或 `.sub-brand--{slug}` 變數。
- 圓角維持 4px 以下；不加入 `box-shadow`、`!important` 或 inline style。
- 根目錄 `style.css` 是唯一正式樣式入口，`assets/css/` 為舊檔，不納入本頁載入流程。

---

## 字體與品牌資產

| 用途 | 字體／資產 | 類別／說明 |
|------|------------|------------|
| 頁首字標 | `assets/mazemaze-logo.png` | supplied 白色 `>_mazemaze` 字標，原始 616×61；放在可存取的 `<h1>` 內 |
| 程式碼感標籤 | Space Mono 400／700 | `.identity-card__role`、`.identity-card__fact dt`、footer |
| 身份名稱 | Space Mono 700 | `.identity-card__name`、`.sub-brand__name` |
| 繁體中文內文 | Noto Sans TC 400／500／700 | 說明、facts、連結文字 |
| 瀏覽器 favicon | `favicon.jpg` | 512×512 黑底白色 M，置中並保留安全留白；HTML 路徑固定不變 |

Google Fonts 只載入 Space Mono 400/700 與 Noto Sans TC 400/500/700，使用 `display=swap`，不載入 Bebas Neue。

---

## 色彩系統

每張身份卡片保留既有 accent，並以 CSS 自訂屬性提供 fallback 與支援 `color-mix` 時的互動色。

| 卡片 | `--accent` | 用途 |
|------|-----------|------|
| NSR | `#d0021b` | 競速辨識線、標籤與互動狀態 |
| BEXT | `#00aeef` | 音樂辨識線、標籤與互動狀態 |
| 白河奏 | `#cccccc` | 小說辨識線、標籤與互動狀態 |
| CarrotWinClub | `#c9920a` | 競馬辨識線、標籤與互動狀態 |
| maze-coder | `#8f7aff` | AI 代理編程作品集辨識線與互動狀態 |

Sub-brand 保留 `#8b0000` 與 `#00bcd4` 左側辨識線；hover 時以白色作狀態回饋。

---

## 元件規格

### Profile Header

```text
.profile
├── h1.profile__name
│   └── img.profile__logo (assets/mazemaze-logo.png)
├── .profile__tagline
└── .profile__socials
```

字標不再使用頭像或重複的可見文字。`h1` 保留頁面主標題語意，圖片 `alt` 必須具體描述 mazemaze 字標與終端提示符。字標最大顯示寬度 320px，窄螢幕下依容器等比例縮放。

### `.identity-card`

```css
border: 1px solid var(--border);
border-left: 4px solid var(--accent);
border-radius: 2px;
background: var(--surface);
box-shadow: none;
hover: translateX(4px), border-left-color: var(--accent-hover);
```

內部維持既有 BEM 結構：64×64px logo、角色標籤、`<h2>` 名稱、一句說明、2 組 facts 與可換行 link-pill。`max-width` 固定 480px；≤375px 時 logo 容器縮為 56×56px，避免窄螢幕擠壓文字。

logo 容器使用 `surface-strong`、1px 邊框與 2px 圓角；`.identity-card__logo-wrap--rounded` 也維持低圓角，不使用圓形裁切。

### `.sub-brand`

sub-brand 只放在父 BEXT 卡片內，維持 40×40px logo、上邊框與 4px 左側分支色線。沒有外部連結；hover 只改變平移、背景與左側線條狀態。

### `.link-pill` 與 `.social-icon`

兩者維持細邊框、低圓角與 160ms 狀態轉換。預設使用 `--muted`／`--border`，hover 使用 `--text`／`--surface-strong` 與對應卡片 accent，`focus-visible` 使用 2px 白色 outline、4px offset。

### `.section-divider`

使用左右細線、短文字與 4×8px 白色像素標記。divider 僅為裝飾，HTML 必須保留 `aria-hidden="true"`。

---

## 動畫系統

`main.js` 維持零依賴 IIFE 與 `IntersectionObserver`。`.fade-in-up` 以 8px 短距離淡入，動畫約 280ms，hover／focus 狀態使用 160ms。

`prefers-reduced-motion: reduce` 時，頁面直接顯示內容並將動畫與轉場降為接近零，不影響可存取性。

---

## 響應式規格

| breakpoint | 變化 |
|------------|------|
| `< 375px` | 內距維持 16px、卡片 gap 8px、logo 容器 56×56px |
| `375px–519px` | 基準 8px 間距系統、logo 容器 64×64px |
| `>= 520px` | 最大寬度 480px、頁首上方留白 48px、水平內距 24px |

驗收時檢查 320px、390×844、480px 與 1440px：沒有水平捲動、文字或 logo 裁切、圖片變形與不可操作的 link-pill。

---

## Design Check

- 變更範圍：灰階 token、頁首字標、favicon、字體與卡片視覺層。
- 受影響元件：profile、section divider、identity card、sub-brand、link-pill、social icon。
- 桌面檢查：480px 內容寬度在 1440px 視窗置中。
- 手機檢查：320px 與 390×844 下長名稱可換行，沒有水平捲動。
- 色彩對比：主要文字使用 `#EDEDED`，focus 使用 `#FFFFFF`。
- 圖片辨識度：字標白色置中，favicon 為黑底白色 M 且保留安全留白。
- hover / animation：hover 160ms，淡入短距離，reduced motion 直接顯示。
