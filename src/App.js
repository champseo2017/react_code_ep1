import { useRef, useEffect } from "react";

import logo from "./logo.svg";
import animal from "./data";
import AnimalCard from "./components/AnimalCard/AnimalCard";
import "./App.css";
import RefsArray from './components/RefsArray'

const showAdditional = (additional) => {
  if (additional) {
    const alertInformation = Object.entries(additional)
      .map((information) => {
        return `${information[0]}: ${information[1]}`;
      })
      .join("\n");
    alert(alertInformation);
  }
};

function App() {
 
  /* 


   Array Destructuring
   let [a, b, c] = [1, 2, 3]
   console.log(a)
   console.log(b)
   console.log(c)

   การแทนส่วนที่เหลือด้วย Spread Operator(...)
    - ป้องกันกรณีที่มีจำนวนสมาชิกในอาร์เรย์ไม่ครบตามจำนวนตัวแปร
    - การกำหนดค่าดีฟอลต์แทนค่าที่อาจขาดหายไป


  */

    let [a, b] = [1, 2, 3, 4, 5]
    // a = 1, b = 2

    let [c, d, ...e] = [6, 7, 8, 9]
    // c = 6, d = 7, e = [8, 9], e[0] = 8, e[1] = 9

    let [f, g, h = 12, i] = [10, 11]
    // f = 10, g = 11, h = 12, i = undefined



  return (
    <>
     <RefsArray />
    </>
    // <div className="wrapper">
    //   {animal.map(animal =>
    //   <AnimalCard
    //     diet={animal.diet}
    //     key={animal.name}
    //     name={animal.name}
    //     size={animal.size}
    //     scientificName={animal.scientificName}
    //   />)}
    // </div>
  );
}

export default App;
