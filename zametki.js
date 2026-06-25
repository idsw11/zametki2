// // █████ █   █ █████  ███  ████  █   █    
// //   █   █   █ █     █   █ █   █  █ █     
// //   █   █████ ████  █   █ ████    █      
// //   █   █   █ █     █   █ █  █    █      
// //   █   █   █ █████  ███  █   █   █   

//   const arrayStrings =  ['a','b', 'c']
// console.log (array)
// console.log (arrayStrings)




const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value) 


const notes = ['Записать  блок про  массивы и рассказать теорию объектов']

function render () {
      listElement.insertAdjacentHTML('beforeend', `
                    <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span> ${notes[0]} </span>
                            <span>
                                <span class="btn btn-small btn-success">&check;</span>
                                <span class="btn btn-small btn-danger">&times;</span>
                            </span>
                        </li>
                    </ul>` )
}


render() 
     


createBtn.onclick = function () {
    // listElement.innerHTML = 
             listElement.insertAdjacentHTML('beforeend', `
                    <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span> ${inputElement.value} </span>
                            <span>
                                <span class="btn btn-small btn-success">&check;</span>
                                <span class="btn btn-small btn-danger">&times;</span>
                            </span>
                        </li>
                    </ul>` )
}


listElement.onclick = function (event) {
    // 1. Проверяем, что кликнули именно по кнопке с крестиком
    if (event.target.classList.contains('btn-danger') || event.target.innerText === '×') {
        
        // 2. Находим целую строчку <li>, в которой лежит этот крестик
        const listItem = event.target.closest('.list-group-item')
        
        // 3. Удаляем этот <li> со страницы!
        listItem.remove()
    }
}
