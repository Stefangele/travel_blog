function createCard(travelLocation) {
  const output = `
    <div class="card">
        <table>
            <tr>
                <img src="${travelLocation.flag}">
            </tr>
            <tr>
                <th>Country:</th>
                <td>${travelLocation.country}</td>
            </tr>
            <tr>
                <th>City/Place:</th>
                <td>${travelLocation.city}</td>
            </tr>
        </table>
    </div>`;
  return output;
}

function fillList(travelLocationArray) {
  let country_list = document.getElementById("country_list");
  country_list.innerHTML = "";
  for (let i = 0; i < travelLocationArray.length; i++) {
    const output = createCard(travelLocationArray[i]);

    console.log(output);
    country_list.innerHTML += output;
  }
}
