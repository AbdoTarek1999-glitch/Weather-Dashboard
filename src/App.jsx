import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorView from './components/ErrorView';

// المتغيرات الثابتة لـ API
// يتم الوصول للمفتاح عبر import.meta.env
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
    // 1. حالات إدارة التطبيق
    const [weatherData, setWeatherData] = useState(null); // لتخزين بيانات الطقس
    const [city, setCity] = useState('Cairo');             // المدينة التي يتم البحث عنها
    const [isLoading, setIsLoading] = useState(false);      // حالة التحميل
    const [error, setError] = useState(null);               // رسالة الخطأ
    
    // 2. دالة جلب البيانات
    const fetchWeatherData = async (cityName) => {
        if (!cityName || !API_KEY) {
            setError("يرجى إدخال اسم المدينة أو التحقق من مفتاح API.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setWeatherData(null);

        try {
            // q=${cityName} للبحث باسم المدينة
            // units=metric للحصول على درجة الحرارة بالمئوية
            const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
            
            const response = await fetch(url);
            
            if (!response.ok) {
                // التعامل مع الأخطاء مثل 404 (لم يتم العثور على المدينة)
                throw new Error("عذراً، لم يتم العثور على هذه المدينة.");
            }
            
            const data = await response.json();
            
            // تحديث حالة البيانات والمدينة
            setWeatherData(data);
            setCity(cityName);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // 3. useEffect لجلب بيانات مدينة افتراضية عند التحميل
    useEffect(() => {
        // يجلب الطقس للقاهرة عند فتح التطبيق لأول مرة
        fetchWeatherData('Cairo'); 
    }, []); 

    // 4. دالة لمعالجة البحث من مكون SearchBar
    const handleSearch = (searchTerm) => {
        if (searchTerm.trim()) {
            fetchWeatherData(searchTerm.trim());
        }
    };

    // 5. تحديد المكون الذي سيتم عرضه
    const displayContent = () => {
        if (isLoading) {
            // عرض حالة التحميل
            return <p className="text-center text-xl p-8">جارٍ تحميل البيانات...</p>; // يجب استبدالها بمكون التحميل الفعلي
        }
        if (error) {
            // عرض مكون الخطأ مع تمرير الرسالة
            return <ErrorView errorMessage={error} />;
        }
        if (weatherData) {
            // عرض مكون الطقس مع تمرير البيانات
            return <WeatherCard data={weatherData} />;
        }
        // حالة افتراضية
        return <p className="text-center text-gray-500 p-8">يرجى البحث عن مدينة لعرض الطقس.</p>;
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-lg lg:max-w-4xl transition-all duration-300">
                
                {/* تمرير دالة البحث إلى مكون SearchBar */}
                <SearchBar onSearch={handleSearch} />
                
                {/* عرض المحتوى حسب حالة التطبيق */}
                {displayContent()}
                
            </div>
        </div>
    );
}

export default App;