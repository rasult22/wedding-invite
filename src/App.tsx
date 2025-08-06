import first_block from '@/../public/first_block.webp'
import second_block from '@/../public/second_block.webp'
import third_block from '@/../public/third_block.webp'
import calendar from '@/../public/calendar.webp'
import plan from '@/../public/plan.webp'
import location from '@/../public/location.webp'
import confirm from '@/../public/confirm.webp'
import { useState, useEffect } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    option: 'attending'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const submissionMarker = localStorage.getItem('wedding_invite_submitted');
    if (submissionMarker) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.option) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Form submitted:', formData);
      const keys = {
        'attending': 'Приду',
        'attending-with-spouse': 'Приду с супругой',
        'cannot-attend': 'Не приду'
      }
      
      await fetch('https://rasult22.pockethost.io/api/collections/wedding_invite/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          option: keys[formData.option as keyof typeof keys] || 'empty'
        }),
      });

      // Mark as submitted in localStorage
      localStorage.setItem('wedding_invite_submitted', 'true');
      localStorage.setItem('wedding_invite_data', JSON.stringify({
        name: formData.name,
        option: formData.option,
        submittedAt: new Date().toISOString()
      }));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to reset form (for testing purposes)
  // const resetForm = () => {
  //   localStorage.removeItem('wedding_invite_submitted');
  //   localStorage.removeItem('wedding_invite_data');
  //   setIsSubmitted(false);
  //   setFormData({ name: '', option: '' });
  // };

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
            src="https://yandex.kz/map-widget/v1/?azimuth=6.095276961544309&ll=77.215845%2C43.404279&mode=search&oid=53647128720&ol=biz&tilt=0.07860122354563986&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=16.33"
            width="100%"
            style={{ position: "relative", height: '40vh' }}
           />
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <img className="w-[80%]" src={confirm} alt="" />
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Имя и фамилия (Если придете с парой, то укажите оба)
              </label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Введите ваше имя"
                disabled={isLoading}
                required
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="attending"
                  name="attendance"
                  type="radio"
                  value="attending"
                  checked={formData.option === 'attending'}
                  onChange={(e) => setFormData({...formData, option: e.target.value})}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  disabled={isLoading}
                />
                <label htmlFor="attending" className="ml-3 text-sm text-gray-700">
                  Приду
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="attending-with-spouse"
                  name="attendance"
                  type="radio"
                  value="attending-with-spouse"
                  checked={formData.option === 'attending-with-spouse'}
                  onChange={(e) => setFormData({...formData, option: e.target.value})}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  disabled={isLoading}
                />
                <label htmlFor="attending-with-spouse" className="ml-3 text-sm text-gray-700">
                  Приду с супругой
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="cannot-attend"
                  name="attendance"
                  type="radio"
                  value="cannot-attend"
                  checked={formData.option === 'cannot-attend'}
                  onChange={(e) => setFormData({...formData, option: e.target.value})}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  disabled={isLoading}
                />
                <label htmlFor="cannot-attend" className="ml-3 text-sm text-gray-700">
                  К сожалению не смогу прийти
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-full transition-colors duration-200 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#E5C8C0] hover:bg-[#D3B8B0]'
              } text-[#2C2A2A]`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Отправляется...
                </div>
              ) : (
                'Отправить'
              )}
            </button>
          </form>
        ) : (
          <div className="w-full max-w-md mt-6 text-center">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-lg">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="text-lg font-semibold mb-2">Спасибо!</h3>
              <p className="text-sm">Ваш ответ успешно отправлен. Мы получили вашу информацию о присутствии на свадьбе.</p>
            </div>
            
            {/* Reset button for testing - remove in production */}
            {/* <button
              onClick={resetForm}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Изменить ответ (для тестирования)
            </button> */}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
