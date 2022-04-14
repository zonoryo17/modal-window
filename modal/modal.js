// 'use strict'

// {
//   // Modalの変数宣言
//   const openBtn = document.getElementById('open-btn');
//   const closeBtn = document.getElementById('close-btn');
//   const modal = document.getElementById('modal');


//   // Modal の表示/非表示を切り替える処理(関数)
//   function changeModal(showModal) {
//     if (showModal) {
//       modal.classList.add('show-modal')
//     } else {
//       modal.classList.remove('show-modal')
//     };
//   }

//   // クリックしたらModalを表示する処理
//   openBtn.addEventListener('click', function () { changeModal(true)})

//   // クリックしたらModalを削除する処理
//   closeBtn.addEventListener('click', function () { changeModal(false)})

// }

// ※toggleでの書き換え, mask部分での画面切り替え
'use strict'
{
  // Modalの変数宣言
  const modal = document.getElementById('modal');
  const toggleModal = document.querySelectorAll('button');

  toggleModal.forEach(content => {
    content.addEventListener('click', () => {
      modal.classList.toggle('show-modal');
    });
  });
  
  }



// ※ドットインストールのJSモーダル講座を参考にしたコード
'use strict'
{
  // Modalの変数宣言
  const openBtn = document.getElementById('open-btn');
  const closeBtn = document.getElementById('close-btn');
  const modal = document.getElementById('modal');


openBtn.addEventListener('click',  () => { 
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click',  () => { 
  modal.classList.remove('show-modal');
});

}