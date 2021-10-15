import './styles/style.scss';
//reference solve the generator runtime error!
//https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj
import 'regenerator-runtime/runtime';

const input= document.querySelector('#input');
const btn= document.querySelector('#btn');
const scoreTag= document.querySelector('#scoretag');
const agreement= document.querySelector('#agreement');
const subjectivity=document.querySelector('#subjectivity');
const confidence=document.querySelector('#confidence');
const irony =document.querySelector('#irony');
const results=document.querySelector('#results');
const postData=async(url,obj)=>{

  try{
  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },      
    body: JSON.stringify(obj), 
  });

  const responseData=await response.json();
   updataUi(responseData);
  }
  catch(error){
    console.log(error);
  }
}
const updataUi=(responseData)=>{
  results.style.display='table';
  agreement.innerHTML=responseData.agreement;
  subjectivity.innerHTML=responseData.subjectivity;
  irony.innerHTML=responseData.irony;
  confidence.innerHTML=responseData.confidence;
  scoreTag.innerHTML=responseData.score_tag;
}

btn.addEventListener('click',()=>{
  const articleUrl=input.value;
  const obj={articleUrl};
  postData('http://localhost:8081/sendurl',obj);
});