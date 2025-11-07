function adjustTableColumns() {
  const tables = document.querySelectorAll("table");

  tables.forEach(table => {
    const ths = table.querySelectorAll("thead th");
    const rows = table.querySelectorAll("tbody tr");
    if (ths.length === 0) return;

    const cols = ths.length;
    const containerWidth = table.clientWidth;
    const minWidth = 100;
    const maxWidth = 300;

    // 1️⃣ 测量每列内容宽度
    const colContentWidths = Array(cols).fill(0);
    ths.forEach((th, i) => { colContentWidths[i] = th.scrollWidth; });
    rows.forEach(tr => {
      tr.querySelectorAll("td").forEach((td, i) => {
        colContentWidths[i] = Math.max(colContentWidths[i], td.scrollWidth);
      });
    });

    const totalContentWidth = colContentWidths.reduce((a,b)=>a+b,0);
    let finalWidths = [];

    if (totalContentWidth <= containerWidth) {
      // 总宽 < 容器 → 平均分列宽
      const avgWidth = containerWidth / cols;
      finalWidths = Array(cols).fill(avgWidth);
    } else {
      // 总宽 > 容器 → 按内容自适应 + min/max
      finalWidths = colContentWidths.map(w => Math.min(Math.max(w, minWidth), maxWidth));
    }

    // 2️⃣ 设置列宽
    ths.forEach((th, i) => { th.style.width = finalWidths[i] + "px"; });
    rows.forEach(tr => {
      tr.querySelectorAll("td").forEach((td, i) => { td.style.width = finalWidths[i] + "px"; });
    });
  });
}

// 页面加载和窗口调整
window.addEventListener("load", adjustTableColumns);
window.addEventListener("resize", adjustTableColumns);

// 监听主题切换
const bodyObserver = new MutationObserver(() => {
  adjustTableColumns();
});
bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
