import './component/navbar-header.js';
import './component/update-header.js';
import './component/live-report.js';
import './component/selengkapnya.js';


const main = () =>{
    const baseUrl = 'http://apicovid19indonesia-v2.vercel.app/api/indonesia';

   const getData = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(result => {
        const coronaRerportElement = document.querySelector('live-report');
        coronaRerportElement.coronaItem = result;
    })
    .catch(error => showMessage());
   };
   const showMessage = (message = 'Periksa koneksi internet...')=>{
alert(message);
   };
   getData();
};

export default main;