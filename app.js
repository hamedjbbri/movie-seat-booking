const selectTag = document.querySelector('#movie-price');
const screen = document.querySelector('.screen');
const total = document.querySelector('#total');
const allSeats = document.querySelectorAll('.screen .seat');
const data = localStorage.getItem('myData').split(',').map(item => Number(item))


function firstFn() {
  const nss = localStorage.getItem('numberOfSelectedSeat');
  const total = localStorage.getItem('total');
  let arr = localStorage.getItem('myData');


  document.querySelector('#total').innerText = total
  document.querySelector('#ticket').innerText = nss
  const LSindexes = arr.split(',').map(item => Number(item))


  LSindexes.forEach(i => {
    allSeats[i].classList.add('selected')
  })
}

firstFn()
screen.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat')) {
    const index = Array.from(allSeats).indexOf(e.target);
    data.push(index);
    localStorage.setItem('myData', data);
    e.target.classList.toggle('selected');
    render()
  }
})

selectTag.addEventListener('change', () => {
  render()
})

const render = () => {
  const numberOfSelectedSeat = showSelected()
  document.querySelector('#ticket').innerText = numberOfSelectedSeat;
  total.innerText = numberOfSelectedSeat * selectTag.value;
  localStorage.setItem('total', total.innerText);
  localStorage.setItem('numberOfSelectedSeat', numberOfSelectedSeat);
}

function showSelected() {
  const seatLength = document.querySelectorAll('.screen .seat.selected').length;
  return seatLength;
}