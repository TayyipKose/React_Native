import { createSlice } from "@reduxjs/toolkit";

/** 
 * Kullanıcıya ait başlangıç durumu (initial state)
 * Burada email, password ve isLoading değerleri tutuluyor.
 */
const loginState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  users: {
    userEmail: 'admin',
    userPassword: '123',
  }
};

/** 
 * Redux slice: 'user' ile ilgili state ve reducer'ları yönetmek için kullanılır.
 * createSlice, state ve state'i değiştirecek fonksiyonları (reducers) bir arada tanımlar.
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: loginState,  // Başlangıç durumunu belirtiyoruz
  reducers: {
    /** 
     * Email bilgisini güncellemek için action
     * state.email = action.payload (gönderilen yeni email)
     */
    setEmail(state, action) {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLogin(state) {//unutma bunu kullancığımız yer olan loginPage.js içinde import etmeliyim
      if (state.email === state.users.userEmail && state.password === state.users.userPassword) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
    logout(state) {
      state.isAuth = false;
      state.email = null;
      state.password = null;
    }
  }
});

/** 
 * Action creator'ları dışa aktarıyoruz,
 * böylece componentlerde dispatch ile çağırabiliriz.
 */
export const { setEmail, setPassword, setIsLoading, setLogin, logout  } = userSlice.actions; // yeni eklenleri buraya eklemek zorundayımmm!!!

/** 
 * Reducer'ı dışa aktarıyoruz,
 * bu reducer store içine eklenerek state yönetimini sağlar.
 */
export default userSlice.reducer;


/** 
 * Bu dosyanın amacı:
 * Login ve signup sayfalarında kullanılan kullanıcıya ait (email, password, loading durumu vb.) 
 * tüm state verilerini merkezi bir yerde (Redux store) toplamak.
 * Böylece farklı componentler arasında props ile veri taşıma gereği kalmaz,
 * state yönetimi daha düzenli, kontrollü ve okunabilir olur.
 */
