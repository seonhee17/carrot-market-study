
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
                          rounded-3xl w-full max-w-screen-sm flex flex-col
                          md:flex-row gap-2 *:outline-none
                          has-[.peer]:bg-green-100">
            <input  className="w-full rounded-full h-10 
                              bg-gray-200 pl-5  ring
                              ring-transparent focus:ring-orange-500 
                              focus:ring-offset-2 transition-shadow
                              placeholder:drop-shadow invalid:focus:ring-red-600 peer
                              "
                    type="email"
                    required 
                    placeholder="Email address" />
            <span className="text-red-500 font-medium hidden peer-invalid:block">
              Email is required
            </span>
            <button className="bg-black text-white py-2
                                rounded-full active:scale-90 mt-2
                                transition-transform font-medium
                                md:px-10 bg-gradient-to-tr
                                from-cyan-500 via-yellow-400 to-purple-400
                                peer-invalid:bg-red-100"
                                >Search
            </button>
          </div>
      </main>
    );
};