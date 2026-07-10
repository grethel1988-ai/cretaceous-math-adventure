# ANTIGRAVITY.md

## 專案基本資訊
- **專案名稱**：白堊紀冒險營 (Cretaceous Math Adventure)
- **開發語言與框架**：HTML5, Vanilla CSS, Vanilla JavaScript (無外部前端框架或程式庫)
- **專案路徑**：`d:\國小數學能力指標-低年級-白堊紀冒險營`
- **GitHub 儲存庫**：`https://github.com/grethel1988-ai/cretaceous-math-adventure.git`

## 專案核心架構
- **`index.html`**：主要網頁結構，包含遊戲入口畫面、冒險夥伴選擇、遊戲進行面板（HUD、HP、題目區域）與過關冒險證書。
- **`style.css`**：專案樣式表，採用原始叢林風格（溫暖樹葉綠、琥珀金、羊皮紙質感、毛玻璃效果與響應式版面規劃）。
- **`app.js`**：遊戲核心邏輯，包含狀態機管理、Web Audio API 即時音效合成、Canvas 粒子煙火動畫以及過關證書列印邏輯。
- **`questions.js`**：題庫資料庫，收錄 70 道國小一至二年級數學能力指標選擇題（共 14 個指標，每指標 5 題），並進行 progressive sampling (抽樣 50 題：第一階段 17 題、第二階段 17 題、第三階段 16 題)。

## 開發規範
1. **無外部相依性**：所有音效與動畫皆為原生 Web API (AudioContext / Canvas) 生成，不載入額外 JS 檔。
2. **檔案更新與 Git**：
   - 「開工」與「收工」應遵循 `antigravity-workflow`。
   - 收工前應仔細檢查 `git status` 與 `diff`，絕不隨意使用 `git add .`。
   - 只 commit 與當前任務直接相關的檔案。
