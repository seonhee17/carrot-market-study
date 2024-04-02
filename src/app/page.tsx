
/* modifiers
     : 콜론 앞의 내용이 충족된다면 콜론뒤의 내용이 적용
     ex) hover:  객체에 마우스를 가져다 댔을 때 
         dark :  화면모드가 다크모드일때
         active: 마우스 클릭 시 

*/

export default function Home(){
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
          <div className="bg-white w-full shadow-lg p-5 rounded-2xl max-w-screen-sm dark:bg-gray-500 ">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">In transit</span>
                <span className="text-4xl font-semibold">Coolblue</span>
              </div>
              <div className="size-12 bg-orange-400 rounded-full">
                  <span>Coolblue</span>
              </div>
            </div>
            
            <div className="my-2 flex items-center gap-2">
              <span className="bg-green-400 mr-2 text-white 
              uppercase rounded-full px-2.5 py-1.5 text-xs 
              font-medium transition hover:bg-green-500 hover:scale-125">Today</span>
              <span className="dark:text-white">9:30-10:30</span>
            </div>  
            
            <div className="relative">
              <div className="bg-gray-200 absolute
                                rounded-full w-full h-2" />
              <div className="bg-green-400 absolute 
                              w-2/3 h-2 rounded-full" />
            </div>
            
            <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-500">
              <span>Expected</span>
              <span>Sorting center</span>
              <span>In transit</span>
              <span className="text-gray-400">Delivered</span>
            </div>
          </div>
      </main>
    );
};