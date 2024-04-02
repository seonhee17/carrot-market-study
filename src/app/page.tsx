
/* modifiers
     : 콜론 앞의 내용이 충족된다면 콜론뒤의 내용이 적용
     ex) hover:  객체에 마우스를 가져다 댔을 때 
         dark :  화면모드가 다크모드일때
         active: 마우스 클릭 시 
         placeholder : 가상요소 
sm:bg-red-100 작은화면부터 그이후의 화면은 배경색을 가진다는 소리

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

has-[]: 해당컨테이너에서 특정조건을 만족하는 자식을 확인할수 있음.

odd(홀수) : 1,3,5,...
even(짝수) : 2,4,6,...
last(마지막) : 마지막 element

animate-none
animate-spin
animate-ping
animate-pulse
animate-bounce


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
                           className="flex items-center gap-5">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">{person}</span>
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