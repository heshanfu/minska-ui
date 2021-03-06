import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    silentTranslationWarn: process.env.NODE_ENV === 'development',
    messages: {

        en: {
            alerts: {
                empty: {
                    title: "No Data found",
                    text: "Some functions need more Data",
                    short: "Needs more data"
                },
                error: {
                    title: "Error while execution",
                    text: "There was an Error while executing this task. Changes may not be saved or the Application is in Error."
                },
                success: {
                    title: "Success",
                    text: "Changes successfully saved"
                },
                expired: {
                    title: 'Session expired',
                    text: 'Your Session expired. Please login again.'
                }
            },
            views: {
                dashboard: 'Dashboard',
                weight: 'Weight',
                calories: 'Calories',
                templates: 'Templates',
                help: 'Help',
                settings: 'Settings',
                login: 'Login',
                register: 'Register',
                home: 'Home'
            },
            errors: {
                valid: 'Value has to be valid',
                required: 'Value is required'
            }
        },

        de: {
            alerts: {
                empty: {
                    title: "Noch keine Einträge",
                    text: "Einige Funktionen benötigen mehr Daten",
                    short: "Benötigt mehr Daten"
                },
                error: {
                    title: "Problem bei der Ausführung",
                    text: "Bei der Ausführung ist ein Problem aufgetreten. Neue Daten wurden möglicherweise nicht gespeichert, oder die Anwendung weisst nun Fehler auf."
                },
                success: {
                    title: "Erfolg",
                    text: "Änderungen wurden gespeichert"
                },
                expired: {
                    title: 'Sitzung abgelaufen',
                    text: 'Deine Sitzung ist abgelaufen. Logge dich erneut ein.'
                }
            },
            views: {
                dashboard: 'Dashboard',
                weight: 'Gewicht',
                calories: 'Kalorien',
                templates: 'Vorlagen',
                help: 'Hilfe',
                settings: 'Einstellungen',
                login: 'Anmelden',
                register: 'Registrieren',
                home: 'Start'
            },
            errors: {
                valid: 'Ungültige Eingabe',
                required: 'Eingabe wird benötigt'
            }
        }

    },

})
