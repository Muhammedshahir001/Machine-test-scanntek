// import React from 'react'
import Charts from "../../utils/Charts";
import Navbar from "../../utils/Navabr";
import { TEChart } from "tw-elements-react";

function Dashboard() {
  return (
    <>
      <div className="relative bg-gray-100 w-screen min-h-screen flex flex-col items-start justify-start p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-3 box-border gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-left text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-poppins">
        <Navbar />
        <div className="self-stretch lg:flex flex-row items-start justify-start gap-[0.56rem] text-[0.44rem]">
          <div className="flex-1 lg:flex flex-col items-start justify-start gap-[0.56rem]">
            <div className="self-stretch h-[5rem] flex flex-row  items-start justify-start gap-[0.56rem]">
              <div className="rounded-xl bg-gray-500 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="self-stretch shrink-0 lg:flex flex-row items-center justify-start gap-[1.06rem]">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative">Today sales</div>
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/calendar-month-fill0-wght200-grad0-opsz24-1@2x.png"
                  />
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-aqua">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] shrink-0">
                      365.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-white">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center p-[0.56rem] gap-[0.22rem] text-[0.56rem] text-lime">
                  <img
                    className="relative w-[0.42rem] h-[0.21rem] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                  <div className="relative">8 %</div>
                  <div className="relative text-[0.33rem]">than yesterday</div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-500 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="self-stretch shrink-0 flex flex-row items-center justify-start gap-[1.06rem]">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative">Top sale time</div>
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover opacity-[0]"
                    alt=""
                  />
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-gold">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-white">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem] text-[0.56rem]">
                  <div className="relative">12 pm - 3 pm</div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-500 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="self-stretch shrink-0 flex flex-row items-center justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative">Door delivery sales</div>
                  </div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-darkorange-100">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-white">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem] text-[0.56rem]">
                  <div className="relative">Bills 08</div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-500 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="self-stretch shrink-0 flex flex-row items-center justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative">{`Bills & Pax`}</div>
                  </div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-crimson-100">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[2.61rem] h-[1.5rem] shrink-0">
                      11/25
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem] text-[0.56rem]">
                  <div className="relative opacity-[0]">Bills 08</div>
                </div>
              </div>

              <div className="flex-1 rounded-xl bg-gray-500 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0rem] px-[1.11rem] sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative">Void</div>
                  </div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-cornflowerblue">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[2.61rem] h-[1.5rem] shrink-0">
                      0/0
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[0.56rem] px-[0rem] text-[0.56rem]">
                  <div className="relative">Bills/Items</div>
                </div>
              </div>
            </div>
            <div className="self-stretch md:flex flex-row items-start justify-start gap-[0.56rem] text-[0.56rem] text-whitesmoke">
              <div className="rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] md:w-[18.33rem] w-full md:h-[14.39rem] flex flex-col items-start justify-between py-[0rem] px-[1.11rem] box-border text-[0.67rem] text-white">
                <div className="self-stretch flex flex-col md:flex-row items-center justify-between">
                  <div className="shrink-0 flex flex-row items-center justify-center p-[0.56rem]">
                    <div className="relative font-semibold">
                      Sales wise comparison
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center p-[0.56rem] gap-[0.56rem] text-[0.56rem] text-lime">
                    <img
                      className="relative w-[0.42rem] h-[0.21rem] object-cover"
                      alt=""
                      src="/vector@2x.png"
                    />
                    <div className="relative">3 %</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col md:flex-row items-start justify-start">
                  <div className="flex-1 md:shrink-0 flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="md:w-[3.5rem] md:shrink-0 flex flex-row items-center justify-end py-[0.56rem] px-[0rem] box-border">
                      <div className="relative font-medium">{`Dining `}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0.56rem] px-[0rem] relative gap-[0.56rem] text-[0.56rem]">
                      <div className="self-stretch relative bg-darkorchid h-[0.78rem] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[0.51rem] left-[3.44rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                        99 AED
                      </div>
                    </div>
                  </div>
                  <div className="md:shrink-0 flex flex-row items-center justify-center p-[0.56rem]">
                    <div className="relative font-medium">30%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 shrink-0 flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="shrink-0 flex flex-row items-center  justify-center py-[0.56rem] px-[0rem]">
                      <div className="relative font-medium mr-3 ">Takeaway</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0.56rem] px-[0rem] relative gap-[0.56rem] text-[0.56rem]">
                      <div className="self-stretch relative bg-mediumorchid h-[0.78rem] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[0.52rem] left-[3.06rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                        86 AED
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] pr-[2.22rem] pl-[0.56rem]">
                    <div className="relative font-medium">18%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 shrink-0 flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="w-[3.5rem] shrink-0 flex flex-row items-center justify-end py-[0.56rem] px-[0rem] box-border">
                      <div className="relative font-medium">Delivery</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0.56rem] px-[0rem] relative gap-[0.56rem] text-[0.56rem]">
                      <div className="self-stretch relative bg-hotpink h-[0.78rem] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[0.53rem] left-[2.78rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                        68 AED
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] pr-[2.78rem] pl-[0.56rem]">
                    <div className="relative font-medium">16%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 shrink-0 flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="w-[3.5rem] shrink-0 flex flex-row items-center justify-end py-[0.56rem] px-[0rem] box-border">
                      <div className="relative font-medium">Talabat</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start text-[0.56rem]">
                      <div className="self-stretch flex flex-col items-start justify-start py-[0.56rem] px-[0rem] relative gap-[0.56rem]">
                        <div className="self-stretch relative bg-khaki-200 h-[0.78rem] z-[0]" />
                        <div className="absolute my-0 mx-[!important] top-[0.54rem] left-[2.5rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                          55 AED
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] pr-[3.33rem] pl-[0.56rem]">
                    <div className="relative font-medium">14%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 shrink-0 flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="w-[3.5rem] shrink-0 flex flex-row items-center justify-end py-[0.56rem] px-[0rem] box-border">
                      <div className="relative font-medium">Zomato</div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-[0.56rem] px-[0rem] relative gap-[0.56rem] text-[0.56rem]">
                      <div className="self-stretch relative bg-sandybrown h-[0.78rem] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[0.54rem] left-[2.28rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                        51 AED
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] pr-[3.89rem] pl-[0.56rem]">
                    <div className="relative font-medium">12%</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[0.56rem]">
                    <div className="w-[3.5rem] shrink-0 flex flex-row items-center justify-end py-[0.56rem] px-[0rem] box-border">
                      <div className="relative font-medium">Swiggy</div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-center justify-center py-[0.56rem] px-[0rem] relative gap-[0.56rem] text-[0.56rem]">
                      <div className="self-stretch relative bg-lightcoral h-[0.78rem] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[0.67rem] left-[1.67rem] [text-shadow:0px_0px_4px_rgba(0,_0,_0,_0.5)] z-[1]">
                        45 AED
                      </div>
                    </div>
                  </div>
                  <div className="w-[6.78rem] shrink-0 flex flex-row items-center justify-start p-[0.56rem] box-border">
                    <div className="relative font-medium">10%</div>
                  </div>
                </div>
              </div>

              <div className="self-stretch flex-1 rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0.56rem] px-[1.11rem]">
                <div className="self-stretch flex flex-col md:flex-row items-center md:justify-start gap-[1.06rem]">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative font-semibold">Total purchase</div>
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden md:shrink-0 object-cover opacity-[0]"
                    alt=""
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                  <div className="relative">Cash / 23</div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-darkorchid">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-whitesmoke">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start opacity-[0] text-[1.11rem]">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem]">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                  <div className="relative">Credit / 11</div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-mediumorchid">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-whitesmoke">
                    <div className="relative">AED</div>
                  </div>
                </div>
              </div>

              <div className="self-stretch flex-1 rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] flex flex-col items-start justify-start py-[0.56rem] px-[1.11rem]">
                <div className="self-stretch flex flex-col md:flex-row items-center md:justify-start gap-[1.06rem]">
                  <div className="shrink-0 flex flex-row items-center justify-start py-[0.56rem] px-[0rem]">
                    <div className="relative font-semibold">Total payments</div>
                  </div>
                  <img
                    className="relative w-[1rem] h-[1rem] overflow-hidden md:shrink-0 object-cover opacity-[0]"
                    alt=""
                  />
                </div>
                <div className="flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                  <div className="relative">Cash / 12</div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-lightcoral">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-whitesmoke">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start opacity-[0] text-[1.11rem]">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem]">
                    <div className="relative">AED</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                  <div className="relative">Cheque / 2</div>
                </div>
                <div className="h-[1.28rem] flex flex-row items-end justify-start text-[1.11rem] text-sandybrown">
                  <div className="flex flex-row items-end justify-center">
                    <div className="relative inline-block w-[3.39rem] h-[1.5rem] md:shrink-0">
                      322.61
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-center text-[0.67rem] text-whitesmoke">
                    <div className="relative">AED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Charts />
        </div>

        <div className="self-stretch lg:flex flex-row items-center justify-start md:gap-[0.56rem] text-[0.67rem]">
          <div className="rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] md:w-[23.83rem] w-full shrink-0 flex flex-col md:flex-row items-center justify-center py-[0.56rem] px-[1.11rem] box-border gap-[1.11rem] text-[0.78rem] font-inter">
            <div className="shrink-0 flex flex-col items-start justify-start py-[0.83rem] px-[0rem]">
              <div className="shrink-0 flex flex-col items-start justify-start">
                <div className="shrink-0 flex flex-row items-center justify-center p-[0.56rem]">
                  <div className="relative font-semibold">
                    Collection distribution
                  </div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.56rem] text-[0.67rem]">
                  <div className="relative">Total amount</div>
                </div>
                <div className="shrink-0 flex flex-row items-center justify-center py-[0rem] px-[0.56rem] text-[1.11rem]">
                  <div className="relative">
                    <span className="font-semibold">365.61</span>
                    <span> AED</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start text-[0.56rem]">
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="shrink-0 flex flex-row items-start justify-start p-[0.56rem]">
                      <div className="relative rounded-sm bg-darkturquoise w-[0.56rem] h-[0.56rem]" />
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                      <div className="relative font-semibold">Cash 40%</div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="shrink-0 flex flex-row items-start justify-start p-[0.56rem]">
                      <div className="relative rounded-sm bg-coral w-[0.56rem] h-[0.56rem]" />
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                      <div className="relative font-semibold">
                        Credit card 30%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="shrink-0 flex flex-row items-start justify-start p-[0.56rem]">
                      <div className="relative rounded-sm bg-khaki-100 w-[0.56rem] h-[0.56rem]" />
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                      <div className="relative font-semibold">
                        Google pay 25%
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="shrink-0 flex flex-row items-start justify-start p-[0.56rem]">
                      <div className="relative rounded-sm bg-mediumvioletred w-[0.56rem] h-[0.56rem]" />
                    </div>
                    <div className="shrink-0 flex flex-row items-center justify-center py-[0.56rem] px-[0rem]">
                      <div className="relative font-semibold">Credit 15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" relative"
              style={{ width: "50%", maxWidth: "300px" }}
            >
              <TEChart
                type="doughnut"
                data={{
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985],
                      backgroundColor: [
                        "rgba(255, 242, 0, 0.5)",
                        "rgba(77, 182, 172, 0.5)",
                        "rgb(255, 95, 31)",
                        "rgba(156, 39, 176, 0.5)",
                        "rgba(233, 30, 99, 0.5)",
                        "rgba(66, 73, 244, 0.4)",
                      ],
                    },
                  ],
                }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold">
                Cash 900 AED
              </div>
            </div>
          </div>

          <div className="sm:flex-1 rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] sm:h-[10.94rem] flex flex-col items-start justify-between pt-[0rem] px-[1.11rem] pb-[1.11rem] box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className=" flex flex-row items-center justify-start p-[0.56rem]">
                <div className="relative font-semibold">
                  Top 5 selling product
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Chicken si..</div>
                </div>
                <div className="sm:flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-dodgerblue h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] px-[0.56rem]">
                <div className="relative font-medium">55.5 AED/5 pc</div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Special b..</div>
                </div>
                <div className="sm:flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-orange h-[0.44rem]" />
                </div>
              </div>
              <div className="sm:shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium whitespace-pre-wrap">
                  35 AED/2 pc
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">beef bico..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-darkorange-200 h-[0.44rem]" />
                </div>
              </div>
              <div className="sm:shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium">29.75 AED/3pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">beef ka..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-none bg-crimson-200 h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium">29.75 AED/3pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Beef br..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-none bg-darkmagenta h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium">29.75 AED/3pc</div>
              </div>
            </div>
          </div>
          <div className="sm:flex-1 rounded-xl bg-gray-100 shadow-[0px_0px_20px_rgba(255,_255,_255,_0.08)] sm:h-[10.94rem] flex flex-col items-start justify-between pt-[0rem] px-[1.11rem] pb-[1.11rem] box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="shrink-0 flex flex-row items-center justify-start p-[0.56rem]">
                <div className="relative font-semibold">
                  Least 5 selling product
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Open item</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-none bg-darkmagenta h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-center sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium">55 AED/1 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Delivery ch..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-non bg-crimson-200 h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-start sm:py-[0.22rem] pr-[3.89rem] pl-[0.56rem]">
                <div className="relative font-medium">60 AED/5 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Sprite</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-non bg-darkorange-200 h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-start sm:py-[0.22rem] pr-[3.33rem] pl-[0.56rem]">
                <div className="relative font-medium">70 AED/11 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Budget m..</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-non bg-orange h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-start sm:py-[0.22rem] pr-[2.78rem] pl-[0.56rem]">
                <div className="relative font-medium">44 AED/15 pc</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="sm:flex-1 shrink-0 flex flex-row items-center justify-center gap-[0.56rem]">
                <div className="w-[4.72rem] sm:w-[6rem] shrink-0 flex flex-row items-center justify-end py-[0.22rem] px-[0rem] box-border">
                  <div className="relative font-medium">Goto ser...</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-tl-none rounded-tr-md rounded-dr-md rounded-bl-non bg-dodgerblue h-[0.44rem]" />
                </div>
              </div>
              <div className="shrink-0 flex flex-row items-center justify-start sm:py-[0.22rem] pr-[2.22rem] pl-[0.56rem]">
                <div className="relative font-medium">33 AED/22 pc</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
