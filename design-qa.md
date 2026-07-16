# Design QA — 個人網站灰階 8px 像素風改版

## Evidence

- Visual source of truth: `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\mazemaze-design-system-draft.jpg`
- Local preview: `http://127.0.0.1:4174/`
- Implementation screenshots:
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\personalhub-320px.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\qa-top-390.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\qa-mid-390.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\qa-bottom-390.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\personalhub-480px.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\personalhub-1440px.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\qa-maze-coder-390.png`
  - `C:\Users\tiger\.codex\visualizations\2026\07\16\019f6a6f-40fa-7bd3-ad32-0a665e477848\qa-maze-coder-1440.png`
- Viewports: 320×844、390×844、480×900、1440×900。
- States reviewed: default、正常捲動後的進場動畫、hover CSS 狀態、focus-visible CSS 狀態、reduced-motion 降級路徑。

## Full-view comparison

- 灰階基底、細邊框、低圓角、Space Mono 終端語彙與 4px 品牌辨識線均符合規範板方向。
- 首頁以完整白色 `>_mazemaze` 字標取代頭像，比例與留白穩定；五張身份卡、兩個 sub-brand、兩個 section divider 與所有原有資訊層級均保留。
- 320px 至 1440px 實際 render 均無水平捲動、文字裁切、按鈕溢出或 logo 變形。桌面維持 480px 置中單欄。
- 全頁單次截圖曾因 IntersectionObserver 未觸發離屏元素而出現空白；改用正常捲動後分段截圖複查，7/7 `.fade-in-up` 元素均成為可見，確認不是版面缺漏。

## Focused-region comparison

- Profile：字標、tagline、40×40 社群入口與像素 divider 符合定案語彙。
- Identity cards：64×64 logo、角色標籤、標題、facts 與 32px link-pill 維持一致節奏；窄螢幕 logo 降為 56×56。
- Sub-brands：40×40 logo、4px 分支線及緊湊資訊密度清楚，未搶過主卡片層級。
- AI 代理編程：`maze-coder` 卡片位於專屬 divider 與 footer 之間，紫色識別線維持小面積使用，GitHub 入口正確。
- Favicon：512×512 黑底白色 M，方形構圖與安全留白適合縮小，不使用過寬 `>_m` lockup。

## Accessibility and interaction

- 7 張圖片皆完成載入且具有自然尺寸；console error/warning 為 0。
- `#EDEDED`／`#121212` 對比 16.00:1，`#C2C2C2`／`#121212` 為 10.52:1，`#8A8A8A`／`#050505` 為 5.90:1，達正文 WCAG AA 目標。
- 互動 transition 為 160ms；卡片 hover 平移 4px，link-pill 與社群入口具背景、邊框、文字回饋。
- 所有連結共用 2px 白色 `:focus-visible` outline 與 4px offset；Browser 鍵盤事件未能把焦點從頁面 chrome 移入內容，因此以可聚焦的原生 `<a>` 結構與實際載入 CSS 規則驗證。
- `main.js` 保留 IntersectionObserver；`prefers-reduced-motion: reduce` 時直接加入 `.is-visible`，CSS 同時將動畫與轉場降至 0.01ms。

## Findings and comparison history

- P0: none.
- P1: none.
- P2: none.
- P3: 品牌 accent 仍保留紅、藍、銀、琥珀的小面積辨識線，屬規格明確要求，不影響灰階主視覺。
- Iteration 1: Luna 完成實作與多尺寸 render；主 session 發現 full-page 截圖的離屏動畫拼接假象。
- Iteration 2: 主 session 以 390×844 正常捲動分段重拍，確認全部卡片與 sub-brand 正常顯示，無需回修。
- Iteration 3: 從未合併側分支恢復 `AI 代理編程`／`maze-coder` 核心作品集；390px 與 1440px 重拍均確認卡片可見、footer 位於其後、無水平溢位且 console 無錯誤。
- Iteration 4: maze-coder 代表內容更新為目前 22 個且持續增加；390px DOM render 確認完整文案、無水平溢位且 console 無錯誤。更新後截圖擷取兩次逾時，因此沿用 Iteration 3 的版面截圖，文案狀態以實際 DOM 驗證為準。

final result: passed
