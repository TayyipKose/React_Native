import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})

/**
 * Redux store nedir ve neden kullanıyoruz?
 * 
 * - Store, uygulamanın "tek" global veri deposudur. Tüm uygulamanın paylaştığı ve sakladığı veriler burada tutulur.
 * - Burada configureStore ile store'umuzu oluşturuyoruz. İçinde reducer'ları belirtiyoruz.
 * - reducer: state'i güncelleyen fonksiyonların toplandığı yer. Biz burada 'user' adlı slice için userSlice'ı tanımlıyoruz.
 * - Böylece uygulamanın her yerinden bu store'a erişip user bilgilerine (email, password, isLoading gibi) ulaşabilir ve güncelleyebiliriz.
 * - Redux ile global state yönetimi kolaylaşır; farklı componentler arasında props geçişi yapmak zorunda kalmayız.
 * - Bu store, React uygulamasına <Provider> ile verilir ve tüm componentler useSelector ve useDispatch ile store'daki verilere erişip güncelleme yapabilir.
 */