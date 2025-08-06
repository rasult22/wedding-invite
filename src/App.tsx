import first_block from '@/../public/first_block.webp'
import second_block from '@/../public/second_block.webp'
import third_block from '@/../public/third_block.webp'
import calendar from '@/../public/calendar.webp'
import plan from '@/../public/plan.webp'
import location from '@/../public/location.webp'

function App() {
  return (
    <main className="space-y-10 py-4 max-w-[500px] mx-auto">
      <div className="w-full flex justify-end px-4">
        <img className="w-[90%]" src={first_block} alt="" />
      </div>
      <div className="w-full flex">
        <img className="w-full" src={second_block} alt="" />
      </div>
      <div className="w-full flex pl-4 pr-1">
        <img className="w-full" src={third_block} alt="" />
      </div>
      <div className="w-full justify-center flex px-4">
        <img className="w-[80%]" src={calendar} alt="" />
      </div>
      <div className="w-full justify-center flex px-4">
        <img className="w-[80%]" src={plan} alt="" />
      </div>
      <div className="w-full justify-center flex flex-col items-center px-4">
        <img className="w-[70%]" src={location} alt="" />
        <div className="shadow-md" style={{ position: "relative", overflow: "hidden", width: "100%", marginTop: 24, borderRadius: 16 }}>
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=78.207544%2C43.578301&mode=search&oid=213943132849&ol=biz&z=17.65"
            width="100%"
            style={{ position: "relative", height: '40vh' }}
           />
        </div>
      </div>
    </main>
  );
}

export default App;
