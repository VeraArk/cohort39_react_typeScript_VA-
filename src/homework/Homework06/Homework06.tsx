import {PageWrapper, CardControl, CardItem} from "./styles";
import { v4 } from "uuid";

function Homework06() {

    interface Venicle {
        brand: string;
        price: number;
        isDiesel: boolean;
      }
    
  let cars: Venicle[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  let cards = cars.map((value: Venicle) => {
    let petrol: string = value.isDiesel ? "Diesel" : "notDiesel";
    return (
      <CardControl key ={v4()} >
        <CardItem>Brand: {value.brand}</CardItem>
        <CardItem>Price: {value.price}</CardItem>
        <CardItem>Fuel type: {petrol}</CardItem>
      </CardControl>
    );
  });

  return <PageWrapper>{cards}</PageWrapper>;
}

export default Homework06;
