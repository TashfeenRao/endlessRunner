const dom = (() => {
  const table = document.getElementById('trScore');
  let num = 1;
  const clearInput = () => {
    table.innerHTML = '';
  };
  const renderScore = (row) => {
    const tr = `
    <tr>
    <th>${num}</th>
    <th>${row.user}</th>
    <th>${row.score}</th>
    <tr>
    `;
    table.insertAdjacentHTML('beforeend', tr);
    num = 1 + num;
  };
  const displayScore = (data) => {
    data.forEach(renderScore);
  };
  return { displayScore, clearInput };
})();
export default dom;
