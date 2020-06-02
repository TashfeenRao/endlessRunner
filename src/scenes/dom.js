const dom = (() => {
  const clearInput = () => {
    const table = document.getElementById('scoreTable');
    table.innerHTML = '';
  };
  const displayScore = (data) => {
    const table = document.getElementById('scoreTable');
    const container = document.querySelector('.container');
    data.forEach((row) => {
      const tr = `
            <tr>
            <th>${row.user}</th>
            <th>${row.score}</th>
            <th>Age</th>
            <tr>
            `;
      table.insertAdjacentHTML('beforeend', tr);
    });
    clearInput();
  };
  return { displayScore };
})();
export default dom;
