// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function fetchPerson() {
  'use strict';
  let h1 = document.createElement("h1");
  h1.textContent="INTERNAL COMPANY DIRECTORY";
  let divCustomer = document.querySelector(".customers")
  document.body.insertBefore(h1, divCustomer)


  // Your Code Goes Here
  for (let i=0; i<12;i++){
    fetch(`https://randomuser.me/api`)
      .then( function(response){
        return response.json()
      })
      .then(function(json){
        let people=json.results[0];
        const image=people.picture.large
        const name=people.name.first+" "+people.name.last
        const email=people.email
        const addressStreet=people.location.street
        const addressCity=people.location.city+" "+people.location.state+" "+people.location.postcode
        const phone=people.phone
        console.log(people);
        const html=`
          <div class="character">
            <img src=${image} class="image" height="300" width="300">
            <div class="name">${name}</div>
            <div class="email">${email}</div>
            <div class="street">${addressStreet}</div>
            <div class="city">${addressCity}</div>
            <div class="phone">${phone}</div>
          </div>
        `
        document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
        // console.log(addressCity);
        // const email=json.results[0]
      })
    }


})();
