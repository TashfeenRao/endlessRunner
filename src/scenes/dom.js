const dom = (() => {
  const table = document.getElementById('trScore');
  const clearInput = () => {
    table.innerHTML = '';
  };
  const renderScore = (row) => {
    const tr = `
    <tr>
    <th>${row.user}</th>
    <th>${row.score}</th>
    <tr>
    `;
    table.insertAdjacentHTML('beforeend', tr);
  };
  const displayScore = (data) => {
    data.forEach(renderScore);
  };
  return { displayScore, clearInput };
})();
export default dom;
