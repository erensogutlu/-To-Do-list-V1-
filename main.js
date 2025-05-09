/* https://github.com/erensogutlu */

 let inputTitle = document.querySelector('#inputTitle')
 let clearBtn = document.querySelector('#clearBtn')
 let saveBtn = document.querySelector('#saveBtn')
 let listUl = document.querySelector('#listUl')
 let btn = document.querySelector('#btn')

 let lists = []
 console.log(lists)

   // localStorage görevleri al ve listele
 window.addEventListener('load', () => {
    let saveList = JSON.parse(localStorage.getItem("gorev"))
    if (saveList) {
        lists = saveList
        ekranList()
    }
  })
  
  // ekranda listele
 function ekranList() {
    listUl.innerHTML = ""
    lists.forEach(gorev => {
    let li = document.createElement('li')
    li.textContent = gorev
    listUl.appendChild(li)
    })
  }
  
  // ekleme 
 btn.addEventListener('click', function() {
    let prmt = prompt('Yeni Görev Ekle')
    if(prmt == "") {
     alert('Lütfen Boş Bırakmayın')
    }else {
     inputTitle.innerHTML = prmt
     lists.push(prmt)
     ekranList()
    }
  })

  // kaydetme
 saveBtn.addEventListener('click', () => {
    localStorage.setItem("gorev", JSON.stringify(lists))
    console.log('kaydettim')
  })

  // silme
  clearBtn.addEventListener('click', () => {
    localStorage.removeItem("gorev")
    lists = []
    inputTitle.innerHTML = localStorage.getItem('gorev')
    ekranList()
    console.log('sildim')
  })
   
  // listUl.addEventListener('click', function() {
  //   if (listUl.style.textDecoration === 'line-through') { 
  //     listUl.style.textDecoration = 'none';
  //   } else {
  //     listUl.style.textDecoration = 'line-through';
  //   }
  //   console.log('çizdim')
  //  })
