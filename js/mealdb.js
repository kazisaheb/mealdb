let input = document.getElementById('input')
let picked = document.getElementsByClassName('row')[0]
let row = document.getElementsByClassName('row')[1]
search = () => {
  if (input.value == '') {
    return
  }
  row.innerHTML = ''
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(res => res.json())
    .then(data => {
      data.meals.forEach(itm => {
        let itmDiv = document.createElement('div')
        itmDiv.classList.add('col')
        itmDiv.innerHTML = `
        <div class="card">
        <img src="${itm.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${itm.strMeal}</h5>
          <p class="card-text">${itm.strInstructions.slice(0, 150)}</p>
          <button class="order btn btn-primary">Order Now</button>
        </div>
      </div>
        `
        row.append(itmDiv)
      });
    })
  input.value = ''
}

document.addEventListener('click', function (event) {
  if (event.target.className == 'order btn btn-primary') {
    picked.append(event.target.parentNode.parentNode.parentNode)
    console.log('ccccccccccc');
  }
})