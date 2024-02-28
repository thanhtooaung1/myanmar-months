import React from "react";
import festival from "../img/festival-image.png";
import useFetch from "../useFetch";
import { API_URL } from "../constants";
import MonthList from "../components/MonthList";

const Home = () => {
  const { data: months, isPending, error } = useFetch(API_URL);

  console.log(months);

  return (
    <div className="">
      <div className="header-image">
        <div className="opacity-bg"></div>
        <div className="header">
          <div className="container py-3">
            <div>
              <div className="text-center">
                <h2>Myanmar Calcendar</h2>
              </div>
              <div className="row py-5 align-items-center">
                <div className="col-lg-6">
                  <h2>
                    <span>မြန်မာလများ</span>
                  </h2>
                  <p className="my-5">
                    မြန်မာဘာသာပြန်သူများအတွက် ညာဘက် အပေါ်ထောင့်ရှိ
                    "ဆောင်ရွက်ချက်များ" အောက်မှ "ဘာသာပြန်များ"​ ကို အသုံးပြု၍
                    Translation Tool ၏ အကူအညီရယူ၍ ဘာသာပြန်နိုင်ပါသည်။
                  </p>
                </div>
                <div className="col-lg-6">
                  <img src={festival} alt="" width={"70%"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MonthList />
    </div>
  );
};

export default Home;
