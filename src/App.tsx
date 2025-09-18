import first_block from '@/../public/first_block.webp'
import second_block from '@/../public/second_block.webp'
import third_block from '@/../public/third_block.webp'
import calendar from '@/../public/calendar.webp'
import story_block from '@/../public/story_block.webp'
import location from '@/../public/location.webp'
import tg_text from '@/../public/tg_text.webp'
import { useState, useEffect } from 'react'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-11-01T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="space-y-10 py-4 max-w-[500px] mx-auto">
      <div className="w-full flex justify-end px-4">
        <img className="w-[90%]" src={first_block} alt="" />
      </div>
      <div className="w-full flex">
        <img className="w-full" src={second_block} alt="" />
      </div>
         {/* Countdown Timer Block */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-md bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-pink-100">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
            До свадьбы осталось:
          </h2>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-purple-600">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-600 mt-1">дней</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-purple-600">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-600 mt-1">часов</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-purple-600">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-600 mt-1">минут</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-purple-600">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-600 mt-1">секунд</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex pl-4 pr-1">
        <img className="w-full" src={third_block} alt="" />
      </div>
      
   

      <div className="w-full justify-center flex overflow-hidden px-4">
        <img className="w-[80%] -mt-10" src={calendar} alt="" />
      </div>
      <div className="w-full justify-center flex px-4">
        <img className="w-[80%]" src={story_block} alt="" />
      </div>
      <div className="w-full justify-center flex flex-col items-center px-4">
        <img className="w-[70%]" src={location} alt="" />
        <div className="shadow-md" style={{ position: "relative", overflow: "hidden", width: "100%", marginTop: 24, borderRadius: 16 }}>
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=77.328240%2C43.368003&mode=poi&poi%5Bpoint%5D=77.304900%2C43.368590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D111975538931&z=15.06"
            width="100%"
            style={{ position: "relative", height: '40vh' }}
           />
        </div>
      </div>
      <div className='w-full justify-center flex flex-col items-center px-4'>
        <img className='max-w-[60%]' src={tg_text} alt="" />
        {/*
          Дорогие гости, свадебные фотографии и видео сможете получить в этом Телеграм канале
        */}
        <a 
          className='mt-4 flex items-center gap-3 px-6 py-3 rounded-[20px]
            bg-gradient-to-r from-[#F5EBFF] to-[#E8D5FF]
            active:from-[#E8D5FF] active:to-[#F5EBFF]
            transition-all duration-300 ease-in-out
            shadow-md active:shadow-lg
            transform active:-translate-y-1
            border border-[#F5EBFF] active:border-[#E8D5FF]'
          href='https://t.me/weddingabdurakhman'
          target='_blank'
        >
          Перейти на канал
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g clip-path="url(#clip0_409_426)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 12.0054C24.5 18.6328 19.1274 24.0054 12.5 24.0054C5.87258 24.0054 0.5 18.6328 0.5 12.0054C0.5 5.37795 5.87258 0.00537109 12.5 0.00537109C19.1274 0.00537109 24.5 5.37795 24.5 12.0054ZM12.93 8.8643C11.7628 9.34977 9.43014 10.3546 5.93189 11.8787C5.36383 12.1046 5.06626 12.3256 5.03917 12.5417C4.99339 12.9069 5.45071 13.0507 6.07347 13.2465C6.15818 13.2731 6.24595 13.3007 6.33594 13.33C6.94864 13.5291 7.77283 13.7621 8.20129 13.7714C8.58994 13.7798 9.02373 13.6196 9.50264 13.2907C12.7712 11.0844 14.4584 9.96918 14.5643 9.94514C14.639 9.92818 14.7426 9.90685 14.8128 9.96922C14.8829 10.0316 14.876 10.1497 14.8686 10.1814C14.8233 10.3745 13.0281 12.0435 12.0991 12.9071C11.8095 13.1764 11.6041 13.3674 11.5621 13.411C11.468 13.5087 11.3721 13.6011 11.28 13.69C10.7108 14.2387 10.2839 14.6502 11.3036 15.3222C11.7936 15.6451 12.1858 15.9121 12.577 16.1785C13.0042 16.4695 13.4303 16.7596 13.9816 17.121C14.1221 17.2131 14.2562 17.3087 14.3869 17.4019C14.8841 17.7563 15.3307 18.0748 15.8826 18.024C16.2032 17.9945 16.5345 17.693 16.7027 16.7937C17.1002 14.6685 17.8816 10.0638 18.0622 8.16634C18.078 8.0001 18.0581 7.78734 18.0422 7.69395C18.0262 7.60055 17.9928 7.46748 17.8714 7.36897C17.7276 7.25231 17.5056 7.22771 17.4064 7.22945C16.955 7.23741 16.2626 7.47819 12.93 8.8643Z" fill="#25262B"/>
            </g>
            <defs>
              <clipPath id="clip0_409_426">
                <rect width="24" height="24" fill="white" transform="translate(0.5 0.00537109)"/>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </main>
  );
}

export default App;
