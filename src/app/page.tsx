
/* modifiers
     : 콜론 앞의 내용이 충족된다면 콜론뒤의 내용이 적용
     ex) hover:  객체에 마우스를 가져다 댔을 때 
         dark :  화면모드가 다크모드일때
         active: 마우스 클릭 시 
         placeholder : 가상요소 
sm:bg-red-100 작은화면부터 그이후의 화면은 배경색을 가진다는 소리


#3.6 Form modifier

미디어쿼리
sm:bg-red-100
md:bg-green-100
lg:bg-cyan-100
xl:bg-orange-300
2xl:bg-purple-300

그라데이션
bg-gradient-to-tr
from-cyan-500 via-yellow-400 to-purple-400"

 invalid:bg-red-100 유효하지않은값
required 필수요구값

peer 형제 이화면에서 input 과 button은 형제이다.
peer-invalid:bg-red-100" 형제가 유효하지 않다면 ,



outline-none 아래 input과 button이 같은 속성을 사용하고 있을경우
지우고 *:outline-none 처리를 두객체를 감싸고 있는 div에 준다면,
자식객체에 모두 적용된다.


#3.7 State Modifiers

has-[]: 해당컨테이너에서 특정조건을 만족하는 자식을 확인할수 있음.


#3.8 List and Animation
odd(홀수) : 1,3,5,...
even(짝수) : 2,4,6,...
last(마지막) : 마지막 element

animate-none
animate-spin
animate-ping
animate-pulse
animate-bounce

#3.9 Group Modifiers
아버지의 state에 따라서 자식을 변경하는 것을 도와준다.
container에 group class를 넣고 
children 객체에 group-hover: text-red-500를 둔다면 
container 객체에 마우스를 올려두면 자식의 상태를 변화시킬수있다. (글자가 빨간색으로 변함) 

group-hover: 
group-focus-within:block
*/

export default function Home(){
  return (
    <main className="bg-gray-300 
                    sm:bg-red-100
                    md:bg-green-100
                    lg:bg-cyan-100
                    xl:bg-orange-300
                    2xl:bg-purple-300
                    h-screen flex items-center justify-center p-5">
          <div  className="bg-white  shadow-lg p-5
                          rounded-3xl w-full max-w-screen-sm 
                          flex flex-col gap-4">
                    {["nico","Me","You","Yourself",""].map((person,index)=>
                      <div key={index} 
                           className="flex items-center gap-5 group">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <span className="text-lg font-medium empty:w-24 empty:h-5 
                                          empty:rounded-full empty:animate-pulse
                                           empty:bg-gray-300 group-hover:text-red-500">{person}</span>
                        <div className="size-7 bg-red-500 text-white 
                                        flex items-center justify-center 
                                        rounded-full animate-spin">
                          <span>⌛️</span>
                          {/* 가장자리가 터지는 효과 원두개가 있고 나머지 하나를 animate-ping처리 해주면됨 */}
                          <div className="size-6 bg-red-500 rounded-full absolute
                          animate-ping"></div>
                        </div>
                      </div>
                    )}
                    <div className="group flex flex-col">
                    <input className="bg-gray-100 w-full"
                      placeholder="Write your email"/>
                      <span className="group-focus-within:block hidden">
                        Make sure it is a valid email...
                      </span>
                    <button>Submit</button>
                    </div>
                    {/* {["nico","Me","You","Yourself"].map((person,index)=>
                      <div key={index} 
                           className="flex items-center gap-5 odd:bg-gray-100 
                                      p-2.5 rounded-xl even:bg-cyan-100 border-b-2 pb-5 
                                      last:border-0">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <span className="text-lg font-medium">{person}</span>
                        <div className="size-7 bg-red-500 text-white 
                                        flex items-center justify-center 
                                        rounded-full">
                          <span>{index}</span>
                        </div>
                      </div>
                    )} */}

          </div>
      </main>
    );
};





function Homework(){
  return(
       <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="/img/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative bg-white px-4 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-[50px] sm:px-10 border-black border-[20px] border-solid">
              <div className="mx-auto max-w-md *:font-sans">
                
                
                    <div className="divide-y-2 text-gray-500">
                      <div className="flex flex-row">
                        <span> March 2021</span>
                        <div className="ml-2">
                          <svg className="size-5" data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="my-2">
                        <div className="mt-5 text-center text-black font-medium">
                          <span>Hello,Bruno!</span><br />
                          <span>Your medicines for today</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-row *:px-5 justify-center *:items-center mt-7 w-full">
                      <div className="flex flex-col">
                        <span className="text-2xl">16</span>
                        <span className="text-sm">Mon</span>
                      </div>  
                      <div className="flex flex-col">
                        <span className="text-2xl">17</span>
                        <span className="text-sm">Tue</span>
                      </div> 
                      <div className="flex flex-col bg-blue-400 rounded-[35px] w-12 h-16  items-center text-center">
                        <span className="text-2xl">18</span>
                        <span className="text-sm">Wed</span>
                      </div> 
                      <div className="flex flex-col">
                        <span className="text-2xl">19</span>
                        <span className="text-sm">Thu</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl">20</span>
                        <span className="text-sm">Fri</span>
                      </div> 
                      <div className="flex flex-col">
                        <span className="text-2xl">21</span>
                        <span className="text-sm">Sat</span>
                      </div>  
                    </div> 
                

                      <div className="grid-flow-col justify-between">
                          <div className="mt-24 relative w-full h-[288px]">
                            <div className="bg-blue-400 w-full h-72 rounded-2xl p-5 absolute grid justify-end items-center">
                              <svg className="size-7 float-right " data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"></path>
                              </svg>
                            </div>
                            <div className="bg-yellow-300 w-10/12 h-72 rounded-2xl p-5 absolute">
                              <div className="">
                                <span className="text-2xl">
                                  Nora - BE
                                </span> 
                                <span className="block text-xs">
                                  Norenthindrome-0.35mg
                                </span>
                                <span className="block absolute bottom-5">7h30AM</span>
                              </div>
                            </div>
                          </div>    
                      
                          <div className="mt-2 h-full">
                            <div className="bg-green-400 w-full h-72 rounded-t-2xl pt-5 px-5">
                              <span className="text-2xl">Feosol</span> 
                              <span className="block text-xs">Ferrous Sulfate-600mg</span>
                            </div>
                          </div>
                      </div>

              </div>
            </div>
        </div>
  );




};