import React from "react";

const WorldGlobe = ({ coordinates }) => {
  // إحداثيات الموقع
  const lat = coordinates?.lat || 30.0444;
  const lon = coordinates?.lon || 31.2357;

  // استخدام رابط صورة القمر الصناعي من خادم Yandex Maps Satellite
  // هذا الرابط يعطي صورة قمر صناعي حقيقية (Satellite) ولا يحتاج Iframe
  const satelliteImageUrl = `https://static-maps.yandex.ru/1.x/?ll=${lon},${lat}&z=9&l=sat&size=600,450`;

  return (
    <div className="w-full h-80 bg-slate-900 rounded-[2.5rem] border border-white/20 overflow-hidden relative shadow-2xl group">
      
      {/* شريط معلومات القمر الصناعي */}
      <div className="absolute top-4 left-6 z-10 flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full border border-red-500/30 backdrop-blur-md">
         <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]"></span>
         <span className="text-white text-[10px] font-black uppercase tracking-widest">Live Satellite View</span>
      </div>

      {/* عرض الصورة الحقيقية */}
      <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700">
        <img 
          src={satelliteImageUrl} 
          alt="Live Satellite View" 
          className="w-full h-full object-cover contrast-125 saturate-110"
          // في حالة فشل التحميل لأي سبب، نعرض صورة احتياطية لكوكب الأرض
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000'; }}
        />
        
        {/* طبقة (Grid) لتعطي إيحاء التكنولوجيا والرادار */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none"></div>
        
        {/* نقطة الهدف (Target) في منتصف الخريطة */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-16 h-16 border border-red-500/40 rounded-full animate-ping absolute -top-8 -left-8"></div>
            <div className="w-8 h-8 border border-white/20 rounded-full absolute -top-4 -left-4"></div>
            <div className="w-1 h-8 bg-red-500/60 absolute -top-4 left-0"></div>
            <div className="w-8 h-1 bg-red-500/60 absolute top-0 -left-4"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
        </div>
      </div>

      {/* تأثير الظل الداخلي لإعطاء عمق */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] rounded-[2.5rem]"></div>
    </div>
  );
};

export default WorldGlobe;