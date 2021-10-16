export const updataUi=(responseData)=>{
  const scoreTag= document.querySelector('#scoretag');
  const agreement= document.querySelector('#agreement');
  const subjectivity=document.querySelector('#subjectivity');
  const confidence=document.querySelector('#confidence');
  const irony =document.querySelector('#irony');
  const results=document.querySelector('#results');
  results.style.display='table';
  agreement.innerHTML=responseData.agreement;
  subjectivity.innerHTML=responseData.subjectivity;
  irony.innerHTML=responseData.irony;
  confidence.innerHTML=responseData.confidence;
  scoreTag.innerHTML=responseData.score_tag;
}

