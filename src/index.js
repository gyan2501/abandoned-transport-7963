
import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
console.log(footer)

console.log(navbar)

let home_nav = document.getElementById("gpnavbar")
console.log(home_nav)
home_nav.innerHTML = navbar();

let home_footer = document.getElementById("gpfooter")
console.log(home_nav)
home_footer.innerHTML = footer();


let uuuu = document.getElementById("uuuu")
let ww = document.querySelector(".ww")
let qq = document.querySelector(".qq")

uuuu.onclick=()=>{
    ww.classList.toggle("yyy")
    qq.classList.toggle("nb")
}


let z = document.getElementById("z")
let aa = document.querySelector(".aa")

z.onclick=()=>{
    aa.classList.toggle("yyy")
}



let zz = document.getElementById("zz")
let www = document.querySelector(".www")

zz.onclick=()=>{
    www.classList.toggle("yyy")
}



let zzz = document.getElementById("zzz")
let wwww = document.querySelector(".wwww")

zzz.onclick=()=>{
    wwww.classList.toggle("yyy")
}



let zzzz = document.getElementById("zzzz")
let wwwww = document.querySelector(".wwwww")

zzzz.onclick=()=>{
    wwwww.classList.toggle("yyy")
}



let zzzzz = document.getElementById("zzzzz")
let c = document.querySelector(".c")

zzzzz.onclick=()=>{
    c.classList.toggle("yyy")
}




let ee = document.getElementById("sd")
let we = document.querySelector(".we")

ee.onclick=()=>{
    we.classList.toggle("yyy")
}


// data search

let city = [
    {
        "city": "Delhi",
        "lat": "28.6600",
        "lng": "77.2300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Delhi",
        "capital": "admin",
        "population": "29617000",
        "population_proper": "16753235"
    },
    {
        "city": "Mumbai",
        "lat": "18.9667",
        "lng": "72.8333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "admin",
        "population": "23355000",
        "population_proper": "12478447"
    },
    {
        "city": "Kolkāta",
        "lat": "22.5411",
        "lng": "88.3378",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "admin",
        "population": "17560000",
        "population_proper": "4496694"
    },
    {
        "city": "Bangalore",
        "lat": "12.9699",
        "lng": "77.5980",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "admin",
        "population": "13707000",
        "population_proper": "8443675"
    },
    {
        "city": "Chennai",
        "lat": "13.0825",
        "lng": "80.2750",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "admin",
        "population": "11324000",
        "population_proper": "6727000"
    },
    {
        "city": "Hyderābād",
        "lat": "17.3667",
        "lng": "78.4667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "admin",
        "population": "9746000",
        "population_proper": "6993262"
    },
    {
        "city": "Pune",
        "lat": "18.5196",
        "lng": "73.8553",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "7764000",
        "population_proper": "3124458"
    },
    {
        "city": "Ahmedabad",
        "lat": "23.0300",
        "lng": "72.5800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "minor",
        "population": "7410000",
        "population_proper": "5570585"
    },
    {
        "city": "Sūrat",
        "lat": "21.1700",
        "lng": "72.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "5807000",
        "population_proper": "4466826"
    },
    {
        "city": "Lucknow",
        "lat": "26.8470",
        "lng": "80.9470",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "admin",
        "population": "3382000",
        "population_proper": "3382000"
    },
    {
        "city": "Jaipur",
        "lat": "26.9167",
        "lng": "75.8667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "admin",
        "population": "3073350",
        "population_proper": "3073350"
    },
    {
        "city": "Cawnpore",
        "lat": "26.4725",
        "lng": "80.3311",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "2701324",
        "population_proper": "2701324"
    },
    {
        "city": "Mirzāpur",
        "lat": "25.1500",
        "lng": "82.5800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "2496970",
        "population_proper": "2496970"
    },
    {
        "city": "Nāgpur",
        "lat": "21.1539",
        "lng": "79.0831",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "2405665",
        "population_proper": "2405665"
    },
    {
        "city": "Ghāziābād",
        "lat": "28.6667",
        "lng": "77.4167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "2381452",
        "population_proper": "2381452"
    },
    {
        "city": "Indore",
        "lat": "22.7206",
        "lng": "75.8472",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "2201927",
        "population_proper": "2201927"
    },
    {
        "city": "Vadodara",
        "lat": "22.3000",
        "lng": "73.2000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "2065771",
        "population_proper": "2065771"
    },
    {
        "city": "Vishākhapatnam",
        "lat": "17.7333",
        "lng": "83.3167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "2035922",
        "population_proper": "2035922"
    },
    {
        "city": "Bhopāl",
        "lat": "23.2500",
        "lng": "77.4167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "admin",
        "population": "1883381",
        "population_proper": "1883381"
    },
    {
        "city": "Chinchvad",
        "lat": "18.6278",
        "lng": "73.8131",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1729320",
        "population_proper": "1729320"
    },
    {
        "city": "Patna",
        "lat": "25.6100",
        "lng": "85.1414",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "admin",
        "population": "1684222",
        "population_proper": "1684222"
    },
    {
        "city": "Ludhiāna",
        "lat": "30.9083",
        "lng": "75.8486",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "1649000",
        "population_proper": "1545368"
    },
    {
        "city": "Āgra",
        "lat": "27.1800",
        "lng": "78.0200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1585705",
        "population_proper": "1585705"
    },
    {
        "city": "Kalyān",
        "lat": "19.2502",
        "lng": "73.1602",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1576614",
        "population_proper": "1576614"
    },
    {
        "city": "Madurai",
        "lat": "9.9197",
        "lng": "78.1194",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "minor",
        "population": "1561129",
        "population_proper": "1561129"
    },
    {
        "city": "Jamshedpur",
        "lat": "22.8000",
        "lng": "86.1833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jharkhand",
        "capital": "",
        "population": "1558000",
        "population_proper": "1558000"
    },
    {
        "city": "Nāsik",
        "lat": "20.0000",
        "lng": "73.7833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1486053",
        "population_proper": "1486053"
    },
    {
        "city": "Farīdābād",
        "lat": "28.4333",
        "lng": "77.3167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "1394000",
        "population_proper": "1394000"
    },
    {
        "city": "Aurangābād",
        "lat": "19.8800",
        "lng": "75.3200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1371330",
        "population_proper": "1371330"
    },
    {
        "city": "Rājkot",
        "lat": "22.2969",
        "lng": "70.7984",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "1335397",
        "population_proper": "1335397"
    },
    {
        "city": "Meerut",
        "lat": "28.9900",
        "lng": "77.7000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1305429",
        "population_proper": "1305429"
    },
    {
        "city": "Jabalpur",
        "lat": "23.1667",
        "lng": "79.9333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "1267564",
        "population_proper": "1267564"
    },
    {
        "city": "Thāne",
        "lat": "19.1800",
        "lng": "72.9633",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1261517",
        "population_proper": "1261517"
    },
    {
        "city": "Dhanbād",
        "lat": "23.7928",
        "lng": "86.4350",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jharkhand",
        "capital": "",
        "population": "1246000",
        "population_proper": "219636"
    },
    {
        "city": "Allahābād",
        "lat": "25.4550",
        "lng": "81.8400",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1201000",
        "population_proper": "1073438"
    },
    {
        "city": "Vārānasi",
        "lat": "25.3189",
        "lng": "83.0128",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1198491",
        "population_proper": "1198491"
    },
    {
        "city": "Srīnagar",
        "lat": "34.0911",
        "lng": "74.8061",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "admin",
        "population": "1180570",
        "population_proper": "1180570"
    },
    {
        "city": "Amritsar",
        "lat": "31.6167",
        "lng": "74.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "1132383",
        "population_proper": "1132383"
    },
    {
        "city": "Alīgarh",
        "lat": "27.8800",
        "lng": "78.0800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1131160",
        "population_proper": "1131160"
    },
    {
        "city": "Bhiwandi",
        "lat": "19.3000",
        "lng": "73.0667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "1125898",
        "population_proper": "1125898"
    },
    {
        "city": "Gwalior",
        "lat": "26.2150",
        "lng": "78.1931",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "1101981",
        "population_proper": "1101981"
    },
    {
        "city": "Bhilai",
        "lat": "21.2167",
        "lng": "81.4333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Chhattīsgarh",
        "capital": "",
        "population": "1097000",
        "population_proper": "1097000"
    },
    {
        "city": "Hāora",
        "lat": "22.5900",
        "lng": "88.3100",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "1077075",
        "population_proper": "1077075"
    },
    {
        "city": "Rānchi",
        "lat": "23.3556",
        "lng": "85.3347",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jharkhand",
        "capital": "admin",
        "population": "1073440",
        "population_proper": "1073440"
    },
    {
        "city": "Bezwāda",
        "lat": "16.5167",
        "lng": "80.6167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "1048240",
        "population_proper": "1048240"
    },
    {
        "city": "Chandīgarh",
        "lat": "30.7353",
        "lng": "76.7911",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Chandīgarh",
        "capital": "admin",
        "population": "1026459",
        "population_proper": "1026459"
    },
    {
        "city": "Mysore",
        "lat": "12.3086",
        "lng": "76.6531",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "1014227",
        "population_proper": "1014227"
    },
    {
        "city": "Raipur",
        "lat": "21.2379",
        "lng": "81.6337",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Chhattīsgarh",
        "capital": "admin",
        "population": "1010087",
        "population_proper": "1010087"
    },
    {
        "city": "Kota",
        "lat": "25.1800",
        "lng": "75.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "1001694",
        "population_proper": "1001694"
    },
    {
        "city": "Bareilly",
        "lat": "28.3640",
        "lng": "79.4150",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "1000000",
        "population_proper": "1000000"
    },
    {
        "city": "Jodhpur",
        "lat": "26.2918",
        "lng": "73.0168",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "995000",
        "population_proper": "921476"
    },
    {
        "city": "Coimbatore",
        "lat": "11.0000",
        "lng": "76.9667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "959823",
        "population_proper": "959823"
    },
    {
        "city": "Dispur",
        "lat": "26.1500",
        "lng": "91.7700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "admin",
        "population": "957352",
        "population_proper": "957352"
    },
    {
        "city": "Guwāhāti",
        "lat": "26.1667",
        "lng": "91.7667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "957352",
        "population_proper": "957352"
    },
    {
        "city": "Solāpur",
        "lat": "17.6833",
        "lng": "75.9167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "951558",
        "population_proper": "951558"
    },
    {
        "city": "Trichinopoly",
        "lat": "10.8269",
        "lng": "78.6928",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "916857",
        "population_proper": "916857"
    },
    {
        "city": "Hubli",
        "lat": "15.3600",
        "lng": "75.1250",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "890000",
        "population_proper": "792804"
    },
    {
        "city": "Jalandhar",
        "lat": "31.3256",
        "lng": "75.5792",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "873725",
        "population_proper": "873725"
    },
    {
        "city": "Bhubaneshwar",
        "lat": "20.2644",
        "lng": "85.8281",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "admin",
        "population": "837737",
        "population_proper": "837737"
    },
    {
        "city": "Bhayandar",
        "lat": "19.3000",
        "lng": "72.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "814655",
        "population_proper": "814655"
    },
    {
        "city": "Morādābād",
        "lat": "28.8418",
        "lng": "78.7568",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "787000",
        "population_proper": "721139"
    },
    {
        "city": "Kolhāpur",
        "lat": "16.7000",
        "lng": "74.2333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "750000",
        "population_proper": "561841"
    },
    {
        "city": "Thiruvananthapuram",
        "lat": "8.5000",
        "lng": "76.8997",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "admin",
        "population": "743691",
        "population_proper": "743691"
    },
    {
        "city": "Sahāranpur",
        "lat": "29.9640",
        "lng": "77.5460",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "705478",
        "population_proper": "705478"
    },
    {
        "city": "Warangal",
        "lat": "17.9756",
        "lng": "79.6011",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "704570",
        "population_proper": "704570"
    },
    {
        "city": "Salem",
        "lat": "11.6500",
        "lng": "78.1667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "693236",
        "population_proper": "693236"
    },
    {
        "city": "Mālegaon",
        "lat": "20.5500",
        "lng": "74.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "690844",
        "population_proper": "435362"
    },
    {
        "city": "Kochi",
        "lat": "9.9667",
        "lng": "76.2833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "677381",
        "population_proper": "677381"
    },
    {
        "city": "Gorakhpur",
        "lat": "26.7611",
        "lng": "83.3667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "673446",
        "population_proper": "673446"
    },
    {
        "city": "Shimoga",
        "lat": "13.9304",
        "lng": "75.5600",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "654055",
        "population_proper": "319550"
    },
    {
        "city": "Tiruppūr",
        "lat": "11.1075",
        "lng": "77.3398",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "650000",
        "population_proper": "444543"
    },
    {
        "city": "Guntūr",
        "lat": "16.3000",
        "lng": "80.4500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "647508",
        "population_proper": "647508"
    },
    {
        "city": "Raurkela",
        "lat": "22.2492",
        "lng": "84.8828",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "625831",
        "population_proper": "483629"
    },
    {
        "city": "Mangalore",
        "lat": "12.8703",
        "lng": "74.8806",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "623841",
        "population_proper": "623841"
    },
    {
        "city": "Nānded",
        "lat": "19.1500",
        "lng": "77.3333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "623708",
        "population_proper": "550564"
    },
    {
        "city": "Cuttack",
        "lat": "20.4500",
        "lng": "85.8667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "606007",
        "population_proper": "606007"
    },
    {
        "city": "Chānda",
        "lat": "19.9500",
        "lng": "79.3000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "595118",
        "population_proper": "328351"
    },
    {
        "city": "Dehra Dūn",
        "lat": "30.3180",
        "lng": "78.0290",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttarakhand",
        "capital": "admin",
        "population": "578420",
        "population_proper": "578420"
    },
    {
        "city": "Durgāpur",
        "lat": "23.5500",
        "lng": "87.3200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "566517",
        "population_proper": "566517"
    },
    {
        "city": "Āsansol",
        "lat": "23.6833",
        "lng": "86.9667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "563917",
        "population_proper": "563917"
    },
    {
        "city": "Bhāvnagar",
        "lat": "21.7650",
        "lng": "72.1369",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "554978",
        "population_proper": "464602"
    },
    {
        "city": "Amrāvati",
        "lat": "20.9333",
        "lng": "77.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "549370",
        "population_proper": "549370"
    },
    {
        "city": "Nellore",
        "lat": "14.4333",
        "lng": "79.9667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "547621",
        "population_proper": "547621"
    },
    {
        "city": "Ajmer",
        "lat": "26.4680",
        "lng": "74.6390",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "542321",
        "population_proper": "542321"
    },
    {
        "city": "Tinnevelly",
        "lat": "8.7289",
        "lng": "77.7081",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "542200",
        "population_proper": "435844"
    },
    {
        "city": "Bīkaner",
        "lat": "28.0181",
        "lng": "73.3169",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "529007",
        "population_proper": "529007"
    },
    {
        "city": "Agartala",
        "lat": "23.8333",
        "lng": "91.2667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tripura",
        "capital": "admin",
        "population": "522613",
        "population_proper": "522613"
    },
    {
        "city": "Ujjain",
        "lat": "23.1828",
        "lng": "75.7772",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "515215",
        "population_proper": "515215"
    },
    {
        "city": "Jhānsi",
        "lat": "25.4486",
        "lng": "78.5696",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "507000",
        "population_proper": "507000"
    },
    {
        "city": "Ulhāsnagar",
        "lat": "19.2167",
        "lng": "73.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "506098",
        "population_proper": "506098"
    },
    {
        "city": "Davangere",
        "lat": "14.4667",
        "lng": "75.9167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "503564",
        "population_proper": "435125"
    },
    {
        "city": "Jammu",
        "lat": "32.7333",
        "lng": "74.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "502197",
        "population_proper": "502197"
    },
    {
        "city": "Belgaum",
        "lat": "15.8667",
        "lng": "74.5000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "488157",
        "population_proper": "488157"
    },
    {
        "city": "Gulbarga",
        "lat": "17.3333",
        "lng": "76.8333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "483615",
        "population_proper": "481478"
    },
    {
        "city": "Jāmnagar",
        "lat": "22.4700",
        "lng": "70.0700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "479920",
        "population_proper": "479920"
    },
    {
        "city": "Dhūlia",
        "lat": "20.9000",
        "lng": "74.7833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "479073",
        "population_proper": "366980"
    },
    {
        "city": "Gaya",
        "lat": "24.7500",
        "lng": "85.0167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "474093",
        "population_proper": "474093"
    },
    {
        "city": "Jalgaon",
        "lat": "21.0167",
        "lng": "75.5667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "460468",
        "population_proper": "460468"
    },
    {
        "city": "Kurnool",
        "lat": "15.8222",
        "lng": "78.0350",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "457633",
        "population_proper": "457633"
    },
    {
        "city": "Udaipur",
        "lat": "24.5833",
        "lng": "73.6833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "451100",
        "population_proper": "451100"
    },
    {
        "city": "Bellary",
        "lat": "15.1500",
        "lng": "76.9150",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "445388",
        "population_proper": "336681"
    },
    {
        "city": "Sāngli",
        "lat": "16.8667",
        "lng": "74.5667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "436639",
        "population_proper": "436639"
    },
    {
        "city": "Tuticorin",
        "lat": "8.7833",
        "lng": "78.1333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "436094",
        "population_proper": "436094"
    },
    {
        "city": "Calicut",
        "lat": "11.2500",
        "lng": "75.7667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "minor",
        "population": "431560",
        "population_proper": "431560"
    },
    {
        "city": "Akola",
        "lat": "20.7333",
        "lng": "77.0000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "425817",
        "population_proper": "425817"
    },
    {
        "city": "Bhāgalpur",
        "lat": "25.2500",
        "lng": "87.0167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "410210",
        "population_proper": "410210"
    },
    {
        "city": "Sīkar",
        "lat": "27.6119",
        "lng": "75.1397",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "400000",
        "population_proper": "237579"
    },
    {
        "city": "Tumkūr",
        "lat": "13.3300",
        "lng": "77.1000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "399606",
        "population_proper": "307359"
    },
    {
        "city": "Quilon",
        "lat": "8.8853",
        "lng": "76.5864",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "397419",
        "population_proper": "397419"
    },
    {
        "city": "Muzaffarnagar",
        "lat": "29.4708",
        "lng": "77.7033",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "392451",
        "population_proper": "392451"
    },
    {
        "city": "Bhīlwāra",
        "lat": "25.3500",
        "lng": "74.6333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "389911",
        "population_proper": "326431"
    },
    {
        "city": "Nizāmābād",
        "lat": "18.6704",
        "lng": "78.1000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "388505",
        "population_proper": "305438"
    },
    {
        "city": "Bhātpāra",
        "lat": "22.8667",
        "lng": "88.4167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "386019",
        "population_proper": "386019"
    },
    {
        "city": "Kākināda",
        "lat": "16.9333",
        "lng": "82.2167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "384182",
        "population_proper": "384182"
    },
    {
        "city": "Parbhani",
        "lat": "19.2704",
        "lng": "76.7600",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "378326",
        "population_proper": "289629"
    },
    {
        "city": "Pānihāti",
        "lat": "22.6900",
        "lng": "88.3700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "377347",
        "population_proper": "377347"
    },
    {
        "city": "Lātūr",
        "lat": "18.4004",
        "lng": "76.5700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "374394",
        "population_proper": "348967"
    },
    {
        "city": "Rohtak",
        "lat": "28.9000",
        "lng": "76.5667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "374292",
        "population_proper": "374292"
    },
    {
        "city": "Rājapālaiyam",
        "lat": "9.4204",
        "lng": "77.5800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "369991",
        "population_proper": "307959"
    },
    {
        "city": "Ahmadnagar",
        "lat": "19.0833",
        "lng": "74.7333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "350859",
        "population_proper": "350859"
    },
    {
        "city": "Cuddapah",
        "lat": "14.4667",
        "lng": "78.8167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "344893",
        "population_proper": "344893"
    },
    {
        "city": "Rājahmundry",
        "lat": "16.9833",
        "lng": "81.7833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "341831",
        "population_proper": "341831"
    },
    {
        "city": "Alwar",
        "lat": "27.5667",
        "lng": "76.6167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "341422",
        "population_proper": "341422"
    },
    {
        "city": "Muzaffarpur",
        "lat": "26.1200",
        "lng": "85.3833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "333200",
        "population_proper": "333200"
    },
    {
        "city": "Bilāspur",
        "lat": "22.1500",
        "lng": "82.0167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Chhattīsgarh",
        "capital": "",
        "population": "331030",
        "population_proper": "331030"
    },
    {
        "city": "Mathura",
        "lat": "27.4833",
        "lng": "77.6833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "330511",
        "population_proper": "330511"
    },
    {
        "city": "Kāmārhāti",
        "lat": "22.6700",
        "lng": "88.3700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "330211",
        "population_proper": "330211"
    },
    {
        "city": "Patiāla",
        "lat": "30.3204",
        "lng": "76.3850",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "329224",
        "population_proper": "329224"
    },
    {
        "city": "Saugor",
        "lat": "23.8504",
        "lng": "78.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "328240",
        "population_proper": "247333"
    },
    {
        "city": "Bijāpur",
        "lat": "16.8244",
        "lng": "75.7154",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "327427",
        "population_proper": "327427"
    },
    {
        "city": "Brahmapur",
        "lat": "19.3200",
        "lng": "84.8000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "324726",
        "population_proper": "324726"
    },
    {
        "city": "Shāhjānpur",
        "lat": "27.8804",
        "lng": "79.9050",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "320434",
        "population_proper": "320434"
    },
    {
        "city": "Trichūr",
        "lat": "10.5200",
        "lng": "76.2100",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "315596",
        "population_proper": "315596"
    },
    {
        "city": "Barddhamān",
        "lat": "23.2500",
        "lng": "87.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "314265",
        "population_proper": "314265"
    },
    {
        "city": "Kulti",
        "lat": "23.7300",
        "lng": "86.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "313809",
        "population_proper": "313809"
    },
    {
        "city": "Sambalpur",
        "lat": "21.4704",
        "lng": "83.9701",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "310852",
        "population_proper": "162887"
    },
    {
        "city": "Purnea",
        "lat": "25.7800",
        "lng": "87.4700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "310817",
        "population_proper": "310817"
    },
    {
        "city": "Hisar",
        "lat": "29.1489",
        "lng": "75.7367",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "307024",
        "population_proper": "307024"
    },
    {
        "city": "Fīrozābād",
        "lat": "27.1500",
        "lng": "78.3949",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "306409",
        "population_proper": "306409"
    },
    {
        "city": "Bīdar",
        "lat": "17.9229",
        "lng": "77.5175",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "300136",
        "population_proper": "204071"
    },
    {
        "city": "Rāmpur",
        "lat": "28.8154",
        "lng": "79.0250",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "296418",
        "population_proper": "296418"
    },
    {
        "city": "Shiliguri",
        "lat": "26.7200",
        "lng": "88.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "294546",
        "population_proper": "294546"
    },
    {
        "city": "Bāli",
        "lat": "22.6500",
        "lng": "88.3400",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "293373",
        "population_proper": "293373"
    },
    {
        "city": "Pānīpat",
        "lat": "29.4004",
        "lng": "76.9700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "292808",
        "population_proper": "292808"
    },
    {
        "city": "Karīmnagar",
        "lat": "18.4333",
        "lng": "79.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "289821",
        "population_proper": "289821"
    },
    {
        "city": "Bhuj",
        "lat": "23.2504",
        "lng": "69.8100",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "289429",
        "population_proper": "289429"
    },
    {
        "city": "Ichalkaranji",
        "lat": "16.7000",
        "lng": "74.4700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "287570",
        "population_proper": "287570"
    },
    {
        "city": "Tirupati",
        "lat": "13.6500",
        "lng": "79.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "287482",
        "population_proper": "287482"
    },
    {
        "city": "Hospet",
        "lat": "15.2667",
        "lng": "76.4000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "286007",
        "population_proper": "197846"
    },
    {
        "city": "Āīzawl",
        "lat": "23.7104",
        "lng": "92.7200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mizoram",
        "capital": "admin",
        "population": "283021",
        "population_proper": "265331"
    },
    {
        "city": "Sannai",
        "lat": "24.1600",
        "lng": "80.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "283004",
        "population_proper": "283004"
    },
    {
        "city": "Bārāsat",
        "lat": "22.2333",
        "lng": "88.4500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "278435",
        "population_proper": "278435"
    },
    {
        "city": "Ratlām",
        "lat": "23.3167",
        "lng": "75.0667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "273892",
        "population_proper": "273892"
    },
    {
        "city": "Handwāra",
        "lat": "34.4000",
        "lng": "74.2800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "269311",
        "population_proper": "269311"
    },
    {
        "city": "Drug",
        "lat": "21.1900",
        "lng": "81.2800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Chhattīsgarh",
        "capital": "",
        "population": "268806",
        "population_proper": "268806"
    },
    {
        "city": "Imphāl",
        "lat": "24.8200",
        "lng": "93.9500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Manipur",
        "capital": "admin",
        "population": "268243",
        "population_proper": "268243"
    },
    {
        "city": "Anantapur",
        "lat": "14.6833",
        "lng": "77.6000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "267161",
        "population_proper": "267161"
    },
    {
        "city": "Etāwah",
        "lat": "26.7855",
        "lng": "79.0150",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "257448",
        "population_proper": "257448"
    },
    {
        "city": "Rāichūr",
        "lat": "16.2104",
        "lng": "77.3550",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "255240",
        "population_proper": "225962"
    },
    {
        "city": "Ongole",
        "lat": "15.5000",
        "lng": "80.0500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "252739",
        "population_proper": "252739"
    },
    {
        "city": "Bharatpur",
        "lat": "27.2172",
        "lng": "77.4900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "252342",
        "population_proper": "252342"
    },
    {
        "city": "Begusarai",
        "lat": "25.4200",
        "lng": "86.1300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "252008",
        "population_proper": "252008"
    },
    {
        "city": "Sonīpat",
        "lat": "28.9958",
        "lng": "77.0114",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "250521",
        "population_proper": "250521"
    },
    {
        "city": "Rāmgundam",
        "lat": "18.8000",
        "lng": "79.4500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "242979",
        "population_proper": "242979"
    },
    {
        "city": "Hāpur",
        "lat": "28.7437",
        "lng": "77.7628",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "242920",
        "population_proper": "242920"
    },
    {
        "city": "Uluberiya",
        "lat": "22.4700",
        "lng": "88.1100",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "235345",
        "population_proper": "235345"
    },
    {
        "city": "Porbandar",
        "lat": "21.6425",
        "lng": "69.6047",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "234684",
        "population_proper": "138872"
    },
    {
        "city": "Pāli",
        "lat": "25.7725",
        "lng": "73.3233",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "229956",
        "population_proper": "229956"
    },
    {
        "city": "Vizianagaram",
        "lat": "18.1167",
        "lng": "83.4167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "228720",
        "population_proper": "228720"
    },
    {
        "city": "Puducherry",
        "lat": "11.9300",
        "lng": "79.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Puducherry",
        "capital": "admin",
        "population": "227411",
        "population_proper": "227411"
    },
    {
        "city": "Karnāl",
        "lat": "29.6804",
        "lng": "76.9700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "225049",
        "population_proper": "225049"
    },
    {
        "city": "Nāgercoil",
        "lat": "8.1700",
        "lng": "77.4300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "224329",
        "population_proper": "213858"
    },
    {
        "city": "Tanjore",
        "lat": "10.8000",
        "lng": "79.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "222943",
        "population_proper": "222943"
    },
    {
        "city": "Sambhal",
        "lat": "28.5800",
        "lng": "78.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "220813",
        "population_proper": "220813"
    },
    {
        "city": "Naihāti",
        "lat": "22.9000",
        "lng": "88.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "217900",
        "population_proper": "217900"
    },
    {
        "city": "Secunderābād",
        "lat": "17.4500",
        "lng": "78.5000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "213698",
        "population_proper": "213698"
    },
    {
        "city": "Kharagpur",
        "lat": "22.3302",
        "lng": "87.3237",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "207604",
        "population_proper": "207604"
    },
    {
        "city": "Dindigul",
        "lat": "10.3500",
        "lng": "77.9500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "207327",
        "population_proper": "207327"
    },
    {
        "city": "Shimla",
        "lat": "31.1033",
        "lng": "77.1722",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Himāchal Pradesh",
        "capital": "admin",
        "population": "206575",
        "population_proper": "206575"
    },
    {
        "city": "Ingrāj Bāzār",
        "lat": "25.0000",
        "lng": "88.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "205521",
        "population_proper": "205521"
    },
    {
        "city": "Ellore",
        "lat": "16.7000",
        "lng": "81.1000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "203780",
        "population_proper": "203780"
    },
    {
        "city": "Puri",
        "lat": "19.8000",
        "lng": "85.8167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "201026",
        "population_proper": "201026"
    },
    {
        "city": "Haldia",
        "lat": "22.0257",
        "lng": "88.0583",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "200762",
        "population_proper": "200762"
    },
    {
        "city": "Nandyāl",
        "lat": "15.4800",
        "lng": "78.4800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "200516",
        "population_proper": "200516"
    },
    {
        "city": "Bulandshahr",
        "lat": "28.4104",
        "lng": "77.8484",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "198612",
        "population_proper": "198612"
    },
    {
        "city": "Chakradharpur",
        "lat": "22.7000",
        "lng": "85.6300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jharkhand",
        "capital": "",
        "population": "197953",
        "population_proper": "197953"
    },
    {
        "city": "Bhiwāni",
        "lat": "28.7833",
        "lng": "76.1333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "197662",
        "population_proper": "197662"
    },
    {
        "city": "Gurgaon",
        "lat": "28.4500",
        "lng": "77.0200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "197340",
        "population_proper": "197340"
    },
    {
        "city": "Burhānpur",
        "lat": "21.3004",
        "lng": "76.1300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "197233",
        "population_proper": "197233"
    },
    {
        "city": "Khammam",
        "lat": "17.2500",
        "lng": "80.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "196283",
        "population_proper": "196283"
    },
    {
        "city": "Madhyamgram",
        "lat": "22.7000",
        "lng": "88.4500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "196127",
        "population_proper": "196127"
    },
    {
        "city": "Ghāndīnagar",
        "lat": "23.2200",
        "lng": "72.6800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "admin",
        "population": "195891",
        "population_proper": "195891"
    },
    {
        "city": "Baharampur",
        "lat": "24.1000",
        "lng": "88.2500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "195223",
        "population_proper": "195223"
    },
    {
        "city": "Mahbūbnagar",
        "lat": "16.7333",
        "lng": "77.9833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "190400",
        "population_proper": "190400"
    },
    {
        "city": "Mahesāna",
        "lat": "23.6000",
        "lng": "72.4000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "184991",
        "population_proper": "184991"
    },
    {
        "city": "Ādoni",
        "lat": "15.6300",
        "lng": "77.2800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "184625",
        "population_proper": "184625"
    },
    {
        "city": "Rāiganj",
        "lat": "25.6167",
        "lng": "88.1167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "183612",
        "population_proper": "183612"
    },
    {
        "city": "Bhusāval",
        "lat": "21.0200",
        "lng": "75.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "183001",
        "population_proper": "172366"
    },
    {
        "city": "Bahraigh",
        "lat": "27.6204",
        "lng": "81.6699",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "182218",
        "population_proper": "182218"
    },
    {
        "city": "Shrīrāmpur",
        "lat": "22.7500",
        "lng": "88.3400",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "181842",
        "population_proper": "181842"
    },
    {
        "city": "Tonk",
        "lat": "26.1505",
        "lng": "75.7900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "181734",
        "population_proper": "151331"
    },
    {
        "city": "Sirsa",
        "lat": "29.4904",
        "lng": "75.0300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "181639",
        "population_proper": "160129"
    },
    {
        "city": "Jaunpur",
        "lat": "25.7333",
        "lng": "82.6833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "180362",
        "population_proper": "180362"
    },
    {
        "city": "Madanapalle",
        "lat": "13.5500",
        "lng": "78.5000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "180180",
        "population_proper": "180180"
    },
    {
        "city": "Hugli",
        "lat": "22.9000",
        "lng": "88.3900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "179931",
        "population_proper": "179931"
    },
    {
        "city": "Vellore",
        "lat": "12.9204",
        "lng": "79.1500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "177081",
        "population_proper": "177081"
    },
    {
        "city": "Alleppey",
        "lat": "9.5004",
        "lng": "76.3700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "176783",
        "population_proper": "176783"
    },
    {
        "city": "Cuddalore",
        "lat": "11.7500",
        "lng": "79.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "173676",
        "population_proper": "173676"
    },
    {
        "city": "Deo",
        "lat": "24.6561",
        "lng": "84.4356",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "173216",
        "population_proper": "173216"
    },
    {
        "city": "Chīrāla",
        "lat": "15.8200",
        "lng": "80.3500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "172826",
        "population_proper": "172826"
    },
    {
        "city": "Machilīpatnam",
        "lat": "16.1667",
        "lng": "81.1333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "169892",
        "population_proper": "169892"
    },
    {
        "city": "Medinīpur",
        "lat": "22.4333",
        "lng": "87.3333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "169264",
        "population_proper": "169264"
    },
    {
        "city": "Bāramūla",
        "lat": "34.2000",
        "lng": "74.3400",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "167986",
        "population_proper": "167986"
    },
    {
        "city": "Chandannagar",
        "lat": "22.8667",
        "lng": "88.3833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "166867",
        "population_proper": "166867"
    },
    {
        "city": "Fatehpur",
        "lat": "25.8804",
        "lng": "80.8000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "166480",
        "population_proper": "166480"
    },
    {
        "city": "Udipi",
        "lat": "13.3322",
        "lng": "74.7461",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "165401",
        "population_proper": "165401"
    },
    {
        "city": "Tenāli",
        "lat": "16.2430",
        "lng": "80.6400",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "164937",
        "population_proper": "164937"
    },
    {
        "city": "Sitalpur",
        "lat": "27.6300",
        "lng": "80.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "164435",
        "population_proper": "164435"
    },
    {
        "city": "Conjeeveram",
        "lat": "12.8308",
        "lng": "79.7078",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "164384",
        "population_proper": "164384"
    },
    {
        "city": "Proddatūr",
        "lat": "14.7300",
        "lng": "78.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "163970",
        "population_proper": "163970"
    },
    {
        "city": "Navsāri",
        "lat": "20.8504",
        "lng": "72.9200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "163000",
        "population_proper": "163000"
    },
    {
        "city": "Godhra",
        "lat": "22.7755",
        "lng": "73.6149",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "161925",
        "population_proper": "161925"
    },
    {
        "city": "Budaun",
        "lat": "28.0300",
        "lng": "79.0900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "161555",
        "population_proper": "161555"
    },
    {
        "city": "Chittoor",
        "lat": "13.2000",
        "lng": "79.1167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "160722",
        "population_proper": "160722"
    },
    {
        "city": "Harīpur",
        "lat": "31.5200",
        "lng": "75.9800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "158142",
        "population_proper": "158142"
    },
    {
        "city": "Saharsa",
        "lat": "25.8800",
        "lng": "86.6000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "156540",
        "population_proper": "156540"
    },
    {
        "city": "Vidisha",
        "lat": "23.5239",
        "lng": "77.8061",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "155959",
        "population_proper": "155959"
    },
    {
        "city": "Pathānkot",
        "lat": "32.2689",
        "lng": "75.6497",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "155909",
        "population_proper": "155909"
    },
    {
        "city": "Nalgonda",
        "lat": "17.0500",
        "lng": "79.2700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "154326",
        "population_proper": "154326"
    },
    {
        "city": "Dibrugarh",
        "lat": "27.4833",
        "lng": "95.0000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "154019",
        "population_proper": "154019"
    },
    {
        "city": "Bālurghāt",
        "lat": "25.2167",
        "lng": "88.7667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "153279",
        "population_proper": "153279"
    },
    {
        "city": "Krishnanagar",
        "lat": "23.4000",
        "lng": "88.5000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "153062",
        "population_proper": "153062"
    },
    {
        "city": "Fyzābād",
        "lat": "26.7504",
        "lng": "82.1700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "153047",
        "population_proper": "153047"
    },
    {
        "city": "Silchar",
        "lat": "24.7904",
        "lng": "92.7900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "152393",
        "population_proper": "152393"
    },
    {
        "city": "Shāntipur",
        "lat": "23.2500",
        "lng": "88.4300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "151777",
        "population_proper": "151777"
    },
    {
        "city": "Hindupur",
        "lat": "13.8300",
        "lng": "77.4900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "151677",
        "population_proper": "151677"
    },
    {
        "city": "Erode",
        "lat": "11.3408",
        "lng": "77.7172",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "151184",
        "population_proper": "151184"
    },
    {
        "city": "Jāmuria",
        "lat": "23.7000",
        "lng": "87.0800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "149220",
        "population_proper": "149220"
    },
    {
        "city": "Hābra",
        "lat": "22.8300",
        "lng": "88.6300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "147221",
        "population_proper": "147221"
    },
    {
        "city": "Ambāla",
        "lat": "30.3786",
        "lng": "76.7725",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "",
        "population": "146787",
        "population_proper": "146787"
    },
    {
        "city": "Mauli",
        "lat": "30.7194",
        "lng": "76.7181",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "146213",
        "population_proper": "146213"
    },
    {
        "city": "Kolār",
        "lat": "13.1333",
        "lng": "78.1333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "144625",
        "population_proper": "126441"
    },
    {
        "city": "Shillong",
        "lat": "25.5744",
        "lng": "91.8789",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Meghālaya",
        "capital": "admin",
        "population": "143229",
        "population_proper": "143229"
    },
    {
        "city": "Bhīmavaram",
        "lat": "16.5333",
        "lng": "81.5333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "142184",
        "population_proper": "142184"
    },
    {
        "city": "New Delhi",
        "lat": "28.7000",
        "lng": "77.2000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Delhi",
        "capital": "primary",
        "population": "142004",
        "population_proper": "142004"
    },
    {
        "city": "Mandsaur",
        "lat": "24.0300",
        "lng": "75.0800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "141667",
        "population_proper": "141667"
    },
    {
        "city": "Kumbakonam",
        "lat": "10.9805",
        "lng": "79.4000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "139264",
        "population_proper": "139264"
    },
    {
        "city": "Tiruvannāmalai",
        "lat": "12.2604",
        "lng": "79.1000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "138243",
        "population_proper": "138243"
    },
    {
        "city": "Chicacole",
        "lat": "18.3000",
        "lng": "83.9000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "137944",
        "population_proper": "137944"
    },
    {
        "city": "Bānkura",
        "lat": "23.2500",
        "lng": "87.0667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "137386",
        "population_proper": "137386"
    },
    {
        "city": "Mandya",
        "lat": "12.5242",
        "lng": "76.8958",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "137358",
        "population_proper": "137358"
    },
    {
        "city": "Hassan",
        "lat": "13.0050",
        "lng": "76.1028",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "133436",
        "population_proper": "133436"
    },
    {
        "city": "Yavatmāl",
        "lat": "20.4000",
        "lng": "78.1333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "132000",
        "population_proper": "132000"
    },
    {
        "city": "Pīlibhīt",
        "lat": "28.6400",
        "lng": "79.8100",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "131008",
        "population_proper": "131008"
    },
    {
        "city": "Pālghāt",
        "lat": "10.7792",
        "lng": "76.6547",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "130955",
        "population_proper": "130955"
    },
    {
        "city": "Abohar",
        "lat": "30.1204",
        "lng": "74.2900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "130603",
        "population_proper": "130603"
    },
    {
        "city": "Pālakollu",
        "lat": "16.5333",
        "lng": "81.7333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "129717",
        "population_proper": "129717"
    },
    {
        "city": "Kānchrāpāra",
        "lat": "22.9700",
        "lng": "88.4300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "129576",
        "population_proper": "129576"
    },
    {
        "city": "Port Blair",
        "lat": "11.6667",
        "lng": "92.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andaman and Nicobar Islands",
        "capital": "admin",
        "population": "127562",
        "population_proper": "112050"
    },
    {
        "city": "Alīpur Duār",
        "lat": "26.4837",
        "lng": "89.5667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "127342",
        "population_proper": "127342"
    },
    {
        "city": "Hāthras",
        "lat": "27.6000",
        "lng": "78.0500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "126882",
        "population_proper": "126882"
    },
    {
        "city": "Guntakal",
        "lat": "15.1700",
        "lng": "77.3800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "126270",
        "population_proper": "126270"
    },
    {
        "city": "Navadwīp",
        "lat": "23.4088",
        "lng": "88.3657",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "125543",
        "population_proper": "125543"
    },
    {
        "city": "Basīrhat",
        "lat": "22.6572",
        "lng": "88.8942",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "125254",
        "population_proper": "125254"
    },
    {
        "city": "Hālīsahar",
        "lat": "22.9500",
        "lng": "88.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "124939",
        "population_proper": "124939"
    },
    {
        "city": "Rishra",
        "lat": "22.7100",
        "lng": "88.3500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "124577",
        "population_proper": "124577"
    },
    {
        "city": "Dharmavaram",
        "lat": "14.4142",
        "lng": "77.7150",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "121874",
        "population_proper": "121874"
    },
    {
        "city": "Baidyabāti",
        "lat": "22.7900",
        "lng": "88.3200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "121110",
        "population_proper": "121110"
    },
    {
        "city": "Darjeeling",
        "lat": "27.0417",
        "lng": "88.2631",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "118805",
        "population_proper": "118805"
    },
    {
        "city": "Sopur",
        "lat": "34.3000",
        "lng": "74.4700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "118608",
        "population_proper": "118608"
    },
    {
        "city": "Gudivāda",
        "lat": "16.4300",
        "lng": "80.9900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "118167",
        "population_proper": "118167"
    },
    {
        "city": "Adilābād",
        "lat": "19.6667",
        "lng": "78.5333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "117167",
        "population_proper": "117167"
    },
    {
        "city": "Titāgarh",
        "lat": "22.7400",
        "lng": "88.3700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "116541",
        "population_proper": "116541"
    },
    {
        "city": "Chittaurgarh",
        "lat": "24.8894",
        "lng": "74.6239",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "116406",
        "population_proper": "116406"
    },
    {
        "city": "Narasaraopet",
        "lat": "16.2360",
        "lng": "80.0540",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "116250",
        "population_proper": "116250"
    },
    {
        "city": "Dam Dam",
        "lat": "22.6200",
        "lng": "88.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "114786",
        "population_proper": "114786"
    },
    {
        "city": "Vālpārai",
        "lat": "10.3204",
        "lng": "76.9700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "114308",
        "population_proper": "90353"
    },
    {
        "city": "Osmānābād",
        "lat": "18.1667",
        "lng": "76.0500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "112085",
        "population_proper": "112085"
    },
    {
        "city": "Champdani",
        "lat": "22.8000",
        "lng": "88.3700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "111251",
        "population_proper": "111251"
    },
    {
        "city": "Bangaon",
        "lat": "23.0700",
        "lng": "88.8200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "108864",
        "population_proper": "108864"
    },
    {
        "city": "Khardah",
        "lat": "22.7200",
        "lng": "88.3800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "108496",
        "population_proper": "108496"
    },
    {
        "city": "Tādpatri",
        "lat": "14.9200",
        "lng": "78.0200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "108171",
        "population_proper": "108171"
    },
    {
        "city": "Jalpāiguri",
        "lat": "26.5167",
        "lng": "88.7333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "107341",
        "population_proper": "107341"
    },
    {
        "city": "Suriāpet",
        "lat": "17.1500",
        "lng": "79.6167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "106805",
        "population_proper": "106805"
    },
    {
        "city": "Tādepallegūdem",
        "lat": "16.8333",
        "lng": "81.5000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "104032",
        "population_proper": "104032"
    },
    {
        "city": "Bānsbāria",
        "lat": "22.9700",
        "lng": "88.4000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "103920",
        "population_proper": "103920"
    },
    {
        "city": "Negapatam",
        "lat": "10.7667",
        "lng": "79.8333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "102905",
        "population_proper": "102905"
    },
    {
        "city": "Bhadreswar",
        "lat": "22.8200",
        "lng": "88.3500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "101477",
        "population_proper": "101477"
    },
    {
        "city": "Chilakalūrupet",
        "lat": "16.0892",
        "lng": "80.1672",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "101398",
        "population_proper": "101398"
    },
    {
        "city": "Kalyani",
        "lat": "22.9750",
        "lng": "88.4344",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "100575",
        "population_proper": "100575"
    },
    {
        "city": "Gangtok",
        "lat": "27.3300",
        "lng": "88.6200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Sikkim",
        "capital": "admin",
        "population": "100286",
        "population_proper": "100286"
    },
    {
        "city": "Kohīma",
        "lat": "25.6667",
        "lng": "94.1194",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Nāgāland",
        "capital": "admin",
        "population": "99039",
        "population_proper": "99039"
    },
    {
        "city": "Khambhāt",
        "lat": "22.3131",
        "lng": "72.6194",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "98700",
        "population_proper": "98700"
    },
    {
        "city": "Aurangābād",
        "lat": "24.7704",
        "lng": "84.3800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "95929",
        "population_proper": "95929"
    },
    {
        "city": "Emmiganūr",
        "lat": "15.7333",
        "lng": "77.4833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "95149",
        "population_proper": "95149"
    },
    {
        "city": "Rāyachoti",
        "lat": "14.0500",
        "lng": "78.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "91234",
        "population_proper": "91234"
    },
    {
        "city": "Kāvali",
        "lat": "14.9123",
        "lng": "79.9944",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "90099",
        "population_proper": "90099"
    },
    {
        "city": "Mancherāl",
        "lat": "18.8679",
        "lng": "79.4639",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "89935",
        "population_proper": "89935"
    },
    {
        "city": "Kadiri",
        "lat": "14.1200",
        "lng": "78.1700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "89429",
        "population_proper": "89429"
    },
    {
        "city": "Ootacamund",
        "lat": "11.4086",
        "lng": "76.6939",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "88430",
        "population_proper": "88430"
    },
    {
        "city": "Anakāpalle",
        "lat": "17.6800",
        "lng": "83.0200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "86519",
        "population_proper": "86519"
    },
    {
        "city": "Sirsilla",
        "lat": "18.3800",
        "lng": "78.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "83186",
        "population_proper": "83186"
    },
    {
        "city": "Kāmāreddipet",
        "lat": "18.3167",
        "lng": "78.3500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "80315",
        "population_proper": "80315"
    },
    {
        "city": "Pāloncha",
        "lat": "17.5815",
        "lng": "80.6765",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "80199",
        "population_proper": "80199"
    },
    {
        "city": "Kottagūdem",
        "lat": "17.5500",
        "lng": "80.6300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "79819",
        "population_proper": "79819"
    },
    {
        "city": "Tanuku",
        "lat": "16.7500",
        "lng": "81.7000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "77962",
        "population_proper": "77962"
    },
    {
        "city": "Bodhan",
        "lat": "18.6700",
        "lng": "77.9000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "77573",
        "population_proper": "77573"
    },
    {
        "city": "Karūr",
        "lat": "10.9504",
        "lng": "78.0833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "76915",
        "population_proper": "76915"
    },
    {
        "city": "Mangalagiri",
        "lat": "16.4300",
        "lng": "80.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "73613",
        "population_proper": "73613"
    },
    {
        "city": "Kairāna",
        "lat": "29.4000",
        "lng": "77.2000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "73046",
        "population_proper": "73046"
    },
    {
        "city": "Mārkāpur",
        "lat": "15.7350",
        "lng": "79.2700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "71092",
        "population_proper": "71092"
    },
    {
        "city": "Malaut",
        "lat": "30.1900",
        "lng": "74.4990",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Punjab",
        "capital": "",
        "population": "70958",
        "population_proper": "70958"
    },
    {
        "city": "Bāpatla",
        "lat": "15.8889",
        "lng": "80.4700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "70777",
        "population_proper": "70777"
    },
    {
        "city": "Badvel",
        "lat": "14.7500",
        "lng": "79.0500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "70626",
        "population_proper": "70626"
    },
    {
        "city": "Jorhāt",
        "lat": "26.7500",
        "lng": "94.2167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "69033",
        "population_proper": "69033"
    },
    {
        "city": "Koratla",
        "lat": "18.8200",
        "lng": "78.7200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "66504",
        "population_proper": "66504"
    },
    {
        "city": "Pulivendla",
        "lat": "14.4167",
        "lng": "78.2333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "65706",
        "population_proper": "65706"
    },
    {
        "city": "Jaisalmer",
        "lat": "26.9167",
        "lng": "70.9167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "65471",
        "population_proper": "65471"
    },
    {
        "city": "Tādepalle",
        "lat": "16.4667",
        "lng": "80.6000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "64149",
        "population_proper": "64149"
    },
    {
        "city": "Armūr",
        "lat": "18.7900",
        "lng": "78.2900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "64023",
        "population_proper": "64023"
    },
    {
        "city": "Jatani",
        "lat": "20.1700",
        "lng": "85.7000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Odisha",
        "capital": "",
        "population": "63697",
        "population_proper": "63697"
    },
    {
        "city": "Gadwāl",
        "lat": "16.2300",
        "lng": "77.8000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "63177",
        "population_proper": "63177"
    },
    {
        "city": "Nagari",
        "lat": "13.3300",
        "lng": "79.5800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "62253",
        "population_proper": "62253"
    },
    {
        "city": "Wanparti",
        "lat": "16.3610",
        "lng": "78.0627",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "60949",
        "population_proper": "60949"
    },
    {
        "city": "Ponnūru",
        "lat": "16.0667",
        "lng": "80.5667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "59913",
        "population_proper": "59913"
    },
    {
        "city": "Vinukonda",
        "lat": "16.0500",
        "lng": "79.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "59725",
        "population_proper": "59725"
    },
    {
        "city": "Itānagar",
        "lat": "27.1000",
        "lng": "93.6200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Arunāchal Pradesh",
        "capital": "admin",
        "population": "59490",
        "population_proper": "59490"
    },
    {
        "city": "Tezpur",
        "lat": "26.6338",
        "lng": "92.8000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "58851",
        "population_proper": "58851"
    },
    {
        "city": "Narasapur",
        "lat": "16.4333",
        "lng": "81.6833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "58770",
        "population_proper": "58770"
    },
    {
        "city": "Kothāpet",
        "lat": "19.3333",
        "lng": "79.4833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "57583",
        "population_proper": "57583"
    },
    {
        "city": "Mācherla",
        "lat": "16.4800",
        "lng": "79.4300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "57290",
        "population_proper": "57290"
    },
    {
        "city": "Kandukūr",
        "lat": "15.2165",
        "lng": "79.9042",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "57246",
        "population_proper": "57246"
    },
    {
        "city": "Sāmalkot",
        "lat": "17.0531",
        "lng": "82.1695",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "56864",
        "population_proper": "56864"
    },
    {
        "city": "Bobbili",
        "lat": "18.5667",
        "lng": "83.4167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "56819",
        "population_proper": "56819"
    },
    {
        "city": "Sattenapalle",
        "lat": "16.3962",
        "lng": "80.1497",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "56721",
        "population_proper": "56721"
    },
    {
        "city": "Vrindāvan",
        "lat": "27.5806",
        "lng": "77.7006",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "56618",
        "population_proper": "56618"
    },
    {
        "city": "Mandapeta",
        "lat": "16.8700",
        "lng": "81.9300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "56063",
        "population_proper": "56063"
    },
    {
        "city": "Belampalli",
        "lat": "19.0558",
        "lng": "79.4931",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "55841",
        "population_proper": "55841"
    },
    {
        "city": "Bhīmunipatnam",
        "lat": "17.8864",
        "lng": "83.4471",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "55082",
        "population_proper": "55082"
    },
    {
        "city": "Nāndod",
        "lat": "21.8704",
        "lng": "73.5026",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "54923",
        "population_proper": "54923"
    },
    {
        "city": "Pithāpuram",
        "lat": "17.1167",
        "lng": "82.2667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "54859",
        "population_proper": "54859"
    },
    {
        "city": "Punganūru",
        "lat": "13.3667",
        "lng": "78.5833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "54746",
        "population_proper": "54746"
    },
    {
        "city": "Puttūr",
        "lat": "13.4500",
        "lng": "79.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "54092",
        "population_proper": "54092"
    },
    {
        "city": "Jalor",
        "lat": "25.3500",
        "lng": "72.6167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "54081",
        "population_proper": "54081"
    },
    {
        "city": "Palmaner",
        "lat": "13.2000",
        "lng": "78.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "54035",
        "population_proper": "54035"
    },
    {
        "city": "Dholka",
        "lat": "22.7200",
        "lng": "72.4700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "53792",
        "population_proper": "53792"
    },
    {
        "city": "Jaggayyapeta",
        "lat": "16.8920",
        "lng": "80.0976",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "53530",
        "population_proper": "53530"
    },
    {
        "city": "Tuni",
        "lat": "17.3500",
        "lng": "82.5500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "53425",
        "population_proper": "53425"
    },
    {
        "city": "Amalāpuram",
        "lat": "16.5833",
        "lng": "82.0167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "53231",
        "population_proper": "53231"
    },
    {
        "city": "Jagtiāl",
        "lat": "18.8000",
        "lng": "78.9300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "53213",
        "population_proper": "53213"
    },
    {
        "city": "Vikārābād",
        "lat": "17.3300",
        "lng": "77.9000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "53143",
        "population_proper": "53143"
    },
    {
        "city": "Venkatagiri",
        "lat": "13.9667",
        "lng": "79.5833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "52688",
        "population_proper": "52688"
    },
    {
        "city": "Sihor",
        "lat": "21.7000",
        "lng": "71.9700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "52603",
        "population_proper": "52603"
    },
    {
        "city": "Jangaon",
        "lat": "17.7200",
        "lng": "79.1800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "52394",
        "population_proper": "52394"
    },
    {
        "city": "Mandamāri",
        "lat": "18.9822",
        "lng": "79.4811",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "52352",
        "population_proper": "52352"
    },
    {
        "city": "Metpalli",
        "lat": "18.8297",
        "lng": "78.5878",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "50902",
        "population_proper": "50902"
    },
    {
        "city": "Repalle",
        "lat": "16.0200",
        "lng": "80.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "50866",
        "population_proper": "50866"
    },
    {
        "city": "Bhainsa",
        "lat": "19.1000",
        "lng": "77.9667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "49764",
        "population_proper": "49764"
    },
    {
        "city": "Jasdan",
        "lat": "22.0300",
        "lng": "71.2000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "48483",
        "population_proper": "48483"
    },
    {
        "city": "Jammalamadugu",
        "lat": "14.8500",
        "lng": "78.3800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "46069",
        "population_proper": "46069"
    },
    {
        "city": "Rāmeswaram",
        "lat": "9.2800",
        "lng": "79.3000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "44856",
        "population_proper": "44856"
    },
    {
        "city": "Addanki",
        "lat": "15.8110",
        "lng": "79.9738",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "43850",
        "population_proper": "43850"
    },
    {
        "city": "Nidadavole",
        "lat": "16.9200",
        "lng": "81.6700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "43809",
        "population_proper": "43809"
    },
    {
        "city": "Bodupāl",
        "lat": "17.4139",
        "lng": "78.5783",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "43692",
        "population_proper": "43692"
    },
    {
        "city": "Rājgīr",
        "lat": "25.0300",
        "lng": "85.4200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Bihār",
        "capital": "",
        "population": "41587",
        "population_proper": "41587"
    },
    {
        "city": "Rajaori",
        "lat": "33.3800",
        "lng": "74.3000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "41552",
        "population_proper": "41552"
    },
    {
        "city": "Naini Tal",
        "lat": "29.3919",
        "lng": "79.4542",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttarakhand",
        "capital": "",
        "population": "41377",
        "population_proper": "41377"
    },
    {
        "city": "Channarāyapatna",
        "lat": "12.9000",
        "lng": "76.3900",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "40400",
        "population_proper": "40400"
    },
    {
        "city": "Maihar",
        "lat": "24.2700",
        "lng": "80.7500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "40192",
        "population_proper": "40192"
    },
    {
        "city": "Panaji",
        "lat": "15.4800",
        "lng": "73.8300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Goa",
        "capital": "admin",
        "population": "40017",
        "population_proper": "40017"
    },
    {
        "city": "Junnar",
        "lat": "19.2000",
        "lng": "73.8800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "40000",
        "population_proper": "40000"
    },
    {
        "city": "Amudālavalasa",
        "lat": "18.4167",
        "lng": "83.9000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "39799",
        "population_proper": "39799"
    },
    {
        "city": "Damān",
        "lat": "20.4170",
        "lng": "72.8500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "admin",
        "population": "39737",
        "population_proper": "39737"
    },
    {
        "city": "Kovvūr",
        "lat": "17.0167",
        "lng": "81.7333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "39667",
        "population_proper": "39667"
    },
    {
        "city": "Solan",
        "lat": "30.9200",
        "lng": "77.1200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Himāchal Pradesh",
        "capital": "",
        "population": "39256",
        "population_proper": "39256"
    },
    {
        "city": "Dwārka",
        "lat": "22.2403",
        "lng": "68.9686",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "38873",
        "population_proper": "38873"
    },
    {
        "city": "Pathanāmthitta",
        "lat": "9.2647",
        "lng": "76.7872",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "37802",
        "population_proper": "37802"
    },
    {
        "city": "Kodaikānal",
        "lat": "10.2300",
        "lng": "77.4800",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Tamil Nādu",
        "capital": "",
        "population": "36501",
        "population_proper": "36501"
    },
    {
        "city": "Udhampur",
        "lat": "32.9300",
        "lng": "75.1300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "35507",
        "population_proper": "35507"
    },
    {
        "city": "Giddalūr",
        "lat": "15.3784",
        "lng": "78.9265",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "35150",
        "population_proper": "35150"
    },
    {
        "city": "Yellandu",
        "lat": "17.6000",
        "lng": "80.3300",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "35056",
        "population_proper": "35056"
    },
    {
        "city": "Shrīrangapattana",
        "lat": "12.4181",
        "lng": "76.6947",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Karnātaka",
        "capital": "",
        "population": "34135",
        "population_proper": "34135"
    },
    {
        "city": "Angamāli",
        "lat": "10.1960",
        "lng": "76.3860",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Kerala",
        "capital": "",
        "population": "33424",
        "population_proper": "33424"
    },
    {
        "city": "Umaria",
        "lat": "23.5245",
        "lng": "80.8365",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "33114",
        "population_proper": "33114"
    },
    {
        "city": "Fatehpur Sīkri",
        "lat": "27.0911",
        "lng": "77.6611",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Uttar Pradesh",
        "capital": "",
        "population": "32905",
        "population_proper": "32905"
    },
    {
        "city": "Mangūr",
        "lat": "17.9373",
        "lng": "80.8185",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "32091",
        "population_proper": "32091"
    },
    {
        "city": "Pedana",
        "lat": "16.2667",
        "lng": "81.1667",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "30721",
        "population_proper": "30721"
    },
    {
        "city": "Uran",
        "lat": "18.8900",
        "lng": "72.9500",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Mahārāshtra",
        "capital": "",
        "population": "30439",
        "population_proper": "30439"
    },
    {
        "city": "Chimākurti",
        "lat": "15.5819",
        "lng": "79.8680",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "30279",
        "population_proper": "30279"
    },
    {
        "city": "Devarkonda",
        "lat": "16.7000",
        "lng": "78.9333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "",
        "population": "29731",
        "population_proper": "29731"
    },
    {
        "city": "Bandipura",
        "lat": "34.4225",
        "lng": "74.6375",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "27482",
        "population_proper": "27482"
    },
    {
        "city": "Silvassa",
        "lat": "20.2666",
        "lng": "73.0166",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Dādra and Nagar Haveli",
        "capital": "",
        "population": "27359",
        "population_proper": "27359"
    },
    {
        "city": "Pāmidi",
        "lat": "14.9500",
        "lng": "77.5833",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "26886",
        "population_proper": "26886"
    },
    {
        "city": "Narasannapeta",
        "lat": "18.4151",
        "lng": "84.0447",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "26280",
        "population_proper": "26280"
    },
    {
        "city": "Jaynagar-Majilpur",
        "lat": "22.1772",
        "lng": "88.4258",
        "country": "India",
        "iso2": "IN",
        "admin_name": "West Bengal",
        "capital": "",
        "population": "25922",
        "population_proper": "25922"
    },
    {
        "city": "Khed Brahma",
        "lat": "24.0299",
        "lng": "73.0463",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Gujarāt",
        "capital": "",
        "population": "25001",
        "population_proper": "25001"
    },
    {
        "city": "Khajurāho",
        "lat": "24.8500",
        "lng": "79.9333",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Madhya Pradesh",
        "capital": "",
        "population": "24481",
        "population_proper": "24481"
    },
    {
        "city": "Koilkuntla",
        "lat": "15.2333",
        "lng": "78.3167",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Andhra Pradesh",
        "capital": "",
        "population": "23859",
        "population_proper": "23859"
    },
    {
        "city": "Diu",
        "lat": "20.7197",
        "lng": "70.9904",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Damān and Diu",
        "capital": "",
        "population": "23779",
        "population_proper": "23779"
    },
    {
        "city": "Kulgam",
        "lat": "33.6400",
        "lng": "75.0200",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Jammu and Kashmīr",
        "capital": "",
        "population": "23584",
        "population_proper": "23584"
    },
    {
        "city": "Gauripur",
        "lat": "26.0800",
        "lng": "89.9700",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Assam",
        "capital": "",
        "population": "23477",
        "population_proper": "23477"
    },
    {
        "city": "Abu",
        "lat": "24.5925",
        "lng": "72.7083",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Rājasthān",
        "capital": "",
        "population": "22943",
        "population_proper": "22943"
    },
    {
        "city": "Curchorem",
        "lat": "15.2500",
        "lng": "74.1000",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Goa",
        "capital": "",
        "population": "22730",
        "population_proper": "22730"
    },
    {
        "city": "Kavaratti",
        "lat": "10.5626",
        "lng": "72.6369",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Lakshadweep",
        "capital": "admin",
        "population": "10688",
        "population_proper": "10688"
    },
    {
        "city": "Panchkula",
        "lat": "30.6915",
        "lng": "76.8537",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Haryāna",
        "capital": "minor",
        "population": "",
        "population_proper": ""
    },
    {
        "city": "Kagaznāgār",
        "lat": "19.3316",
        "lng": "79.4661",
        "country": "India",
        "iso2": "IN",
        "admin_name": "Telangana",
        "capital": "minor",
        "population": "",
        "population_proper": ""
    }
]

// search function 

let going_btn = document.getElementById("aj_go_btn")
    let go_inp = document.getElementById("aj_go_inp")
    going_btn.onclick = () => {
        let go_btn_div = document.getElementById("aj_go_btn_div")
        go_btn_div.style.display = "block";

    }

    go_inp.oninput = () => {
        debouncing(go_inp, 2000)

    }

    go_inp = () => {
        let go_inp = document.getElementById("aj_go_inp")
        let Search_city = go_inp.value
        let similar_city;
        let filter_city = city.filter((el) => {
            if (el.city.toLowerCase().includes(Search_city.toLowerCase())) {
                localStorage.setItem("filter_city", JSON.stringify(el))

                similar_city = city.filter((ele) => {
                    if (ele.admin_name == el.admin_name) {
                        return ele

                    }
                })
                let aj_similar_city = document.getElementById("aj_div2")
                aj_similar_city.innerHTML = null
                for (let i = 0; i < 5; i++) {
                    let div = document.createElement("div")

                    let p1 = document.createElement("p");
                    p1.id = "aj_p1"
                    p1.innerText = `City ${similar_city[i].city} ,`;
                    let p2 = document.createElement("p");
                    p2.id = "aj_p2"
                    p2.innerText = `State ${similar_city[i].admin_name}`
                    div.append(p1, p2)
                    aj_similar_city.append(div)
                    div.onclick = () => {
                        let aj_go_btn = document.getElementById("aj_go_btn")
                        aj_go_btn.innerHTML = ""

                        aj_go_btn.innerText = p1.innerText
                        localStorage.setItem("place", p1.innerText)
                        let go_btn_div = document.getElementById("aj_go_btn_div")
                        let aj_go_inp = document.getElementById("aj_go_inp")
                        aj_go_inp.innerText = ""
                        go_btn_div.style.display = "none";
                    }
                }
            }
        })
    }
    let id;
    function debouncing(func) {
        if (id) {
            clearTimeout(id);

        }

        id = setTimeout(function () {

            func();
        }, 1000)
    }
    // -----------------------------travel S code-----------------
    let aj_travel = document.getElementById("aj_travel")
    aj_travel.onclick = () => {
        let aj_go_btn_div1 = document.getElementById("aj_go_btn_div1")
        aj_go_btn_div1.style.display = "block"
    }

    let span1 = document.getElementById("aj_t_span1");
    let span2 = document.getElementById("aj_t_span2")
    let s_plus = document.getElementById("aj_adult_+")
    let Adult_span = document.getElementById("aj_adult_span")
    let Child_span = document.getElementById("aj_child_span")
    let s_child_plus = document.getElementById("aj_child_+")
    s_child_plus.onclick = () => {
        plusForChildrens()
    }
    let s_child_minus = document.getElementById("aj_child_-")
    s_child_minus.onclick = () => {
        minusForChildrens()
    }
    s_plus.onclick = () => {
        plusForAdults()
    }
    let s_minus = document.getElementById("aj_adult_-")
    s_minus.onclick = () => {
        minusForAdults()
    }
    let i = 2
    function plusForAdults() {
        if (i < 3) {
            i++
            Adult_span.innerText = i;
        }
        else if (i > 2) {
            alert(" more than 3 Adults not allowed")
            // i=3
        }

    }

    function minusForAdults() {
        console.log(i)
        i--;
        console.log(i)
        Adult_span.innerText = i;

        if (i < 1) {
            alert("not possible")
            Adult_span.innerText = 1
            i = 1;
            window.location.reload();
        }
    }

    // 2
    let j = 0
    function plusForChildrens() {
        if (j < 3) {
            j++
            Child_span.innerText = j;
        }
        else if (j > 2) {
            alert("You cant carry more than 3 childrens")
            Child_span.innerText = 3
        }
    }

    function minusForChildrens() {
        j--;
        Child_span.innerText = j;

        if (j < 1) {
            alert("not possible")
            Child_span.innerText = 1;

            j = 1;
            window.location.reload("sorry you ");

        }
    }

    let aj_done_btn = document.getElementById("aj_done_btn")
    aj_done_btn.onclick = () => {
        let span1 = document.getElementById("aj_t_span1");
        let span2 = document.getElementById("aj_t_span2");

        aj_adult_span.innerText
        span2.innerText = (+aj_child_span.innerText) + (+aj_adult_span.innerText)


        let aj_go_btn_div1 = document.getElementById("aj_go_btn_div1")
        aj_go_btn_div1.style.display = "none"

    }
    let aj_search_btn = document.getElementById("aj_search_btn")
    aj_search_btn.onclick = () => {
        let aj_d1 = document.getElementById("aj_d1")
        console.log(aj_d1.innerText)
        let aj_d2 = document.getElementById("aj_d2")
        let obj = {
            d1: aj_d1.value,
            d2: aj_d2.value,

        }
        localStorage.setItem("obj", JSON.stringify(obj))
        window.location.href = "./top_search_page.html"
    }



    document.getElementById("stays").addEventListener("click",function(){
        window.location.href=""
    })

    document.getElementById("flight").addEventListener("click",function(){
        window.location.href="search_flight.html"
    })

    document.getElementById("cars").addEventListener("click",function(){
        window.location.href=""
    })

    document.getElementById("package").addEventListener("click",function(){
        window.location.href=""
    })

    document.getElementById("ttdo").addEventListener("click",function(){
        window.location.href=""
    })

    document.getElementById("cruise").addEventListener("click",function(){
        window.location.href=""
    })
    