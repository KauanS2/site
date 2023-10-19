const ul = document.querySelector('ul')
function fetchData() {
    fetch("https://api.github.com/users/KauanS2/repos").then(async res => {
        if (!res.ok) {
            throw new Error("Erro ao carregar")
          
        }
        let data = await res.json();

        data.map(res => {
            let list = document.createElement('li');
            list.innerHTML = `
                <h2>${res.name}</h2>
            `

            ul.appendChild(list)
        })
  }).catch(err => console.log(err))


}
console.log('oi')
fetchData();