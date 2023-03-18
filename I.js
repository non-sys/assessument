'use strict';
const userNameInput = document.getElementById('user-name');
const IButton = document.getElementById('I');
const resultDivided = document.getElementById('result-area');

IButton.onclick=()=>{
    const userName = userNameInput.value;
    if (userName.length === 0) {
      // 名前が空の時は処理を終了する
      return;
    };
  
    // 診断結果表示エリアの作成
    resultDivided.innerText = '';
    const header = document.createElement('h2');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    let username_area=document.getElementById('username_area')
    
    const paragraph=document.createElement('h4');
     const result=userName
      paragraph.innerHTML=result;
      resultDivided.appendChild(paragraph);
  
    
     

   const paragraph2 = document.createElement('p');
     I(userName);
      
      

      
      resultDivided.appendChild(paragraph2);
   
      
    

    

    };
   
    userNameInput.onkeydown = event => {
        if (event.key === 'Enter') {
          assessmentButton.onclick();
        }
      };



let answers_area=document.getElementById('answers-area');


const answers=[
    {
        name:'アンティーク',
        link:'https://npo-clack.github.io/antiqueshop/index.html',
        explain:'よく行くお店のサイトを一から作った',
    },
    
    {
        name:'数字あてゲーム',
        link:'https://npo-clack.github.io/guessnumber/index.html',
        explain:'1〜20までの数字を予想してスコアを競うゲームです。表示されるヒントを頼りに正解の数字を予想していきます。より少ない回数で数字を当てると高得点になります。',
       },
       {
        name:'世界観光地マップ',
        link:'https://npo-clack.github.io/favorite-map/Ex.html',
        explain:'ボタンを押すとボタンの場所にある観光地のサイトに移動します！',
       },
       {
        name:'迷惑ゲーム',
        link:'https://npo-clack.github.io//maze/Game.html',
        explain:'棒倒し法アルゴリズムを使って生成した迷路を攻略するゲーム',
       },
       {
        name:'電卓',
        link:'https://npo-clack.github.io/calculator/index.html',
        explain:'電卓四則演算ができる',
       },
   
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string}userName ユーザの名前
 * @return{string}診断結果

 */
function I(userName){

    //全文字のコード番号を習得してそれを足し合わせる
    let sumOfCharCode=0;
    for(let i=0;i<userName.length;i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
  

    //result = result.replaceAll('{userName}', userName);

   

    let new_element=document.createElement('a')
    new_element.innerHTML=answers[index].name;
    new_element.href=answers[index].link;
    resultDivided.appendChild(new_element);
    

    let explanation=document.createElement('p')
    explanation.textContent=answers[index].explain;
    resultDivided.appendChild(explanation);
    


}


//テストコード

  