// Oblicz pole powierzchni i objętość kuli
// 1.Foemularz z r jako wartością
// 2.Dwa przyciski dla pola i objętości
// dwa pola input w których pojawią się wyniki obliczeń
// przeprowadź walidację r > 0
const oblicz = _=> {
  const r = f1.r.value;
  if (!r) return alert('Promień musi być podany');
  if (isNaN(+r)) return alert('Promień musi być liczbą');
  if (+r <= 0) return alert('Promień musi być większy od 0');
  f1.area.value = 4 * Math.PI * r * r;
  f1.volume.value = 4 / 3 * Math.PI * r ** 3;
}
document.getElementsByTagName('button')[0].addEventListener("click", oblicz);