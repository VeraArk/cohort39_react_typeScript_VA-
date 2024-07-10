import Button from "../../components/Button/Button";
import Counter from "components/Counter/Counter";
import { useState } from "react";
import {PageWrapper} from "./styles";

function Lesson07() {
  enum WEATHER_CODES {
    SQ = "SQW",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (weatherCode: WEATHER_CODES): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };

  const showWeather = (
    weatherCode: WEATHER_CODES,
    decodeFunc: (weatherCode: WEATHER_CODES) => string
  ) => {
    console.log(decodeFunc(weatherCode));
  };

  showWeather(WEATHER_CODES.FC, decode);
  showWeather(WEATHER_CODES.BR, decode);
  showWeather(WEATHER_CODES.FC, decode);

  // Generic

  type ArrayGenerator<ValueType> = ValueType[];

  const someStringAr: ArrayGenerator<string> = ["a", "b", "c"];
  const someStringAr2: ArrayGenerator<number> = [1, 2, 3, 4, 5];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  // Можно прокидывать не только 1 дженерик аргумент, а сколько угодно через запятую
  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1235346245,
  };

  const item2: ShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const item3: ShopItems<ValueForMac> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 1231241352345,
    },
  };

  const [count, setCount] = useState<number>(0);

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const sendCountToServer = async () => {
    //тут мне нужно отправить запрос на сервер с значение count
    // const response = await fetch("someURL", {
    //   method: "POST",
    //   body: JSON.stringify({ count: count }),
    // });
  };

  return (
    <PageWrapper>
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      <Button name="Send count" onClick={sendCountToServer} />
    </PageWrapper>
  );
}

export default Lesson07;
