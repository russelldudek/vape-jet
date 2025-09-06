const sliders = [
  { id: 'thc', output: 'thc-value' },
  { id: 'cbd', output: 'cbd-value' },
  { id: 'terps', output: 'terps-value' },
  { id: 'flavor', output: 'flavor-value' }
];

sliders.forEach(({ id, output }) => {
  const slider = document.getElementById(id);
  const display = document.getElementById(output);
  slider.addEventListener('input', () => {
    display.textContent = slider.value;
  });
});

document.getElementById('fill-btn').addEventListener('click', () => {
  const summary = sliders
    .map(({ id, output }) => `${output.replace('-value','')}: ${document.getElementById(id).value}%`)
    .join('\n');
  alert(`WeedBotz are on it!\n\n${summary}`);
});
