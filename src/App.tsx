//import {AppWrapper} from "./appStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/EmploeeyApp/Home/Home";
import About from "pages/EmploeeyApp/About/About";
import ContactUs from "pages/EmploeeyApp/ContactUs/ContactUs";
import Login from "pages/EmploeeyApp/Login/Login";
import Clients from "pages/EmploeeyApp/Clients/Clients";

import GlobalStyles from "styles/GlobalStyles";

import Homework07 from "homework/Homework07/Homework07";
import Homework06 from "./homework/Homework06/Homework06";
import Homework08 from "homework/Homework08/Homework08";
import Homework09 from "homework/Homework09/Homework09";
import Homework10 from "homework/Homework10/Homework10";
import Homework11 from "homework/Homework11/Homework11";

import Lesson06 from "./lessons/Lesson06/Lesson06";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "lessons/Lesson08/Lesson08";
import Layout from "components/Layout/Layout";
import Facebook from "pages/EmploeeyApp/Clients/Facebook/Facebook";
import Instagram from "pages/EmploeeyApp/Clients/Instagram/Instagram";
import Telegram from "pages/EmploeeyApp/Clients/Telegram/Telegram";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <></>
      {/*< Homework06/>*/}
      {/*<Homework07 />*/}
      {/*<Homework08 />*/}
      {/*<Homework09 />*/}

      {/*<Lesson07/>*/}
      {/*<Lesson08 />*/}

      <Layout>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          // элементы - это страницы
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element="Page not found!" />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/instagram" element={<Instagram />} />
          <Route path="/clients/telegram" element={<Telegram/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
