import './styles/style.scss';
//reference solve the generator runtime error!
//https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj
import 'regenerator-runtime/runtime';
import {updataUi} from './js/update_ui.js'
import {isURL} from './js/checkurl.js'
const input= document.querySelector('#input');
const btn= document.querySelector('#btn');
/*
1-post url input by the user to the server
2-fetch the response from the server
3- update the UI accordingly
*/
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
/*
update UI depending on the results from the postData async function
*/

// add event listener to the btn and call the postData function with the url provided by the users
btn.addEventListener('click',()=>{

  const articleUrl=input.value;
  if(!isURL(articleUrl)){
    alert('please enter a valid url of the article you want to analyze');
    return;
  }
  const obj={articleUrl};
  postData('http://localhost:8081/sendurl',obj);
});
