import { MonitorDatabase } from "../backend/monitoring.js"



async function  get() {
const index  = await MonitorDatabase()
console.log(index)
}
function mind (){
    setInterval(get,  6 * 1000);
}
mind()