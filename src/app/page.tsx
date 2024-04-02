
/* modifiers
     : 콜론 앞의 내용이 충족된다면 콜론뒤의 내용이 적용
     ex) hover:  객체에 마우스를 가져다 댔을 때 
         dark :  화면모드가 다크모드일때
         active: 마우스 클릭 시 
         placeholder : 가상요소 

*/

export default function Home(){
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
          <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm dark:bg-gray-500 ">
            <input className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring
            ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow
            placeholder:drop-shadow"
            type="text" placeholder="Search here..."
            />
            <button className="bg-black w-full text-white py-2
            rounded-full active:scale-90 mt-2
            transition-transform font-medium outline-none">
            Search
            </button>
          </div>
      </main>
    );
};