const dom = (() => {
  const displayScore = (data) => {
    const table = document.createElement('table');
    const container = document.querySelector('.container');
    table.innerHTML = '';
    data.forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
            <tr>
            <th>${row.user}</th>
            <th>${row.score}</th>
            <th>Age</th>
          </tr>
            `;
     table.appendChild(tr);
    });
    container.appendChild(table);
  };
  return { displayScore };
})();
export default dom;
