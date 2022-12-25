import { useState } from "react";
import Attribution from "./components/Attribution";
import Card from "./components/Card";

import { Toggle } from "./components/Toggle";

function App() {
  const [showAnnual, toggle] = useState(true);

  const callback = () => {
    toggle(!showAnnual);
  };

  const data = [
    {
      type: "Basic",
      monthlyPrice: "19.99",
      annualPrice: "199.99",
      storage: "500 GB",
      users: "2",
      FUP: "3 GB",
    },
    {
      type: "Professional",
      monthlyPrice: "24.99",
      annualPrice: "249.99",
      storage: "1 TB",
      users: "5",
      FUP: "10 GB",
    },
    {
      type: "Master",
      monthlyPrice: "39.99",
      annualPrice: "399.99",
      storage: "2 TB",
      users: "10",
      FUP: "20 GB",
    },
  ];

  return (
    <div className="bg-backgroundBottom bg-no-repeat bg-left-bottom ">
      <div className="font-montserrat text-[15px] w-full h-full max-w-[1440px] mx-auto bg-backgroundTop bg-no-repeat bg-right-top pb-[10%]">
        <div className="flex flex-col items-center  ">
          <h1 className="text-grayishBlue text-3xl mt-16">Our Pricing</h1>
          <Toggle
            labelLeft="Annually"
            labelRight="Monthly"
            toggled={false}
            onClick={callback}
          />
        </div>

        <div className="grid md:grid-cols-3 mx-[10%]">
          <Card monthly={!showAnnual} data={data[0]} />
          <Card monthly={!showAnnual} data={data[1]} inverted={true} />
          <Card monthly={!showAnnual} data={data[2]} />
        </div>

        <Attribution />
      </div>
    </div>
  );
}

export default App;
