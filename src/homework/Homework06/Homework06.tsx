import "./styles.css";

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
      <div className="card-control">
        <p className="card-item">Brand: {value.brand}</p>
        <p className="card-item">Price: {value.price}</p>
        <p className="card-item">Petrol: {petrol}</p>
      </div>
    );
  });

  return <div className="page-wrapper">{cards}</div>;
}

export default Homework06;
