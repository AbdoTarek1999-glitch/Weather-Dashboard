import React, { useState } from 'react';

// أيقونة البحث
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

// المكون الرئيسي لشريط البحث
// يستقبل onSearch كدالة يتم تمريرها من App.jsx
const SearchBar = ({ onSearch }) => {
    // حالة محلية لتخزين قيمة الإدخال (اسم المدينة)
    const [inputValue, setInputValue] = useState('');

    // دالة تنفيذ البحث
    const handleSearchClick = () => {
        // التحقق من أن النص ليس فارغاً قبل إرساله
        if (inputValue.trim()) {
            onSearch(inputValue);
            // اختياري: مسح حقل الإدخال بعد البحث
            // setInputValue(''); 
        }
    };
    
    // دالة تنفيذ البحث عند الضغط على مفتاح Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="flex mb-8">
            <input
                type="text"
                placeholder="أدخل اسم المدينة (مثال: London)"
                className="flex-grow p-3 border-2 border-gray-200 rounded-l-xl focus:outline-none focus:border-blue-600 text-gray-700 placeholder-gray-400 text-right"
                
                // 1. ربط قيمة الإدخال بحالة inputValue
                value={inputValue}
                // 2. تحديث حالة inputValue عند الكتابة
                onChange={(e) => setInputValue(e.target.value)}
                // 3. تفعيل البحث عند الضغط على Enter
                onKeyPress={handleKeyPress}
            />
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-xl transition duration-200 flex items-center justify-center"
                
                // 4. تفعيل البحث عند الضغط على الزر
                onClick={handleSearchClick}
            >
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchBar;