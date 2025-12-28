let subs : number | string = '1M'

let apirequestStatus : 'pending' | 'success' | 'error' = 'pending'
apirequestStatus = "success"

let airlineSeat : 'aisle' | 'window' | 'middle' = 'middle'
airlineSeat = 'middle'



const orders = ["12", "14", "34", "46"]
let curroders : string | undefined;

for(let order of orders) {
    if(order === "34" ) {
        curroders = order
        break
    }
    // curroders = "11";
}
// curroders = 46
console.log(curroders);
