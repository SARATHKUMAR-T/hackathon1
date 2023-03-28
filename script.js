var d1=document.createElement('div');
d1.className='container';
d1.style.textAlign='center';

var row=document.createElement('div');
row.className='row';
row.classList.add('r1');



var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','input');
input.setAttribute('placeholder','Enter brand name');


var button=document.createElement('button');
button.setAttribute('id','button');
button.classList.add('btn','btn-primary','n1')
button.addEventListener('click',getdata);
button.innerHTML='click here';

var d2=document.createElement('div');
d1.append(input,button);
document.body.append(d1);
d1.append(row);

async function getdata(){
    
     var brand=document.getElementById('input').value;
    console.log(brand);
     let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
    var res=await fetch(url);
    var res1=await res.json();
    console.log(res1)
    for (var i=0;i<res1.length;i++){
    try{
    row.innerHTML+=`
    <div class="col-md-4 col-sm-12">
    <div class="card bg-light mb-3 text-center b1" style="width: 20rem;">
    <img src="${res1[i].image_link}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${res1[i].brand}</h5>
      <p class="card-text">Product Name:${res1[i].name}<br>Price${res1[i].price}<br>Product link:${res1[i].product_link}</p>
      <p class="card-text">Product description:${res1[i].description}</p>
    </div>
    </div>
  </div>`
    }
    catch (error) {
        console.log(error);
    }
   
    }

}
