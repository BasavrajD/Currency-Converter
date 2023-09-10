
const populate = async (value, base)=>{
    let myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ojyRk4ofYnDdFrkfbhM02kOEgPP2y6JRwXkDR4kb&base_currency="+base;
    let response = await fetch(url);
    let rJson = await response.json();

    document.querySelector(".output").style.display = "block";

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){


    const value = parseInt(document.querySelector("input[name = 'quantity']").value);
    const base = document.querySelector("select").value;
    populate(value, base);
});


