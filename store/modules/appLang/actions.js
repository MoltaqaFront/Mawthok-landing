// START:: IMPORTING I18N
// import i18n from "i18n";
// END:: IMPORTING I18N

export default {
    // START:: SET APP LOCALE
    setAppLocale(context, payload) {
        if (process.browser) {
            localStorage.setItem("starter_app_lang", payload);
        }
        context.commit("setAppLocale", payload);
    },
    // END:: SET APP LOCALE
};