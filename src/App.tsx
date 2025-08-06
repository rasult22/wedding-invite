function App() {
  return (
    <main className="space-y-10 py-4 max-w-[500px] mx-auto">
      <div className="w-full flex justify-end px-4">
        <img className="w-[90%]" src="/first_block.png" alt="" />
      </div>
      <div className="w-full flex">
        <img className="w-full" src="/second_block.png" alt="" />
      </div>
      <div className="w-full flex pl-4 pr-1">
        <img className="w-full" src="/third_block.png" alt="" />
      </div>
      <div className="w-full justify-center flex px-4">
        <img className="w-[80%]" src="/calendar.png" alt="" />
      </div>
      <div className="w-full justify-center flex px-4">
        <img className="w-[80%]" src="/plan.png" alt="" />
      </div>
      <div className="w-full justify-center flex flex-col items-center px-4">
        <img className="w-[70%]" src="/location.png" alt="" />
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
