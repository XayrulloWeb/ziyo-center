import book1 from "../../Images/book1.png";
import book3 from "../../Images/book3.png";
import book2 from "../../Images/book2.png";
import {getItem} from "../../helpers";

const set_journale = "set_journale"
const GET_JOURNAL = 'GET_JOURNAL'

const redusjournale =  {
    journals: [
        {
            id:1,
            paragraph: "O‘zbekiston Respublikasi Prezidentining 2020-yil 29-oktabrda qabul qilingan “Ilm-fanni 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida”gi Farmonida ko‘zda tutilgan vazifalar ijrosini ta’minlash maqsadida tashkil etilgan bo‘lib, aniq, tabiiy va texnika fan ixtisosliklari bo‘yicha maqolalarni qabul qiladi. Jurnalning davriyligi 1 oyni tashkil etadi. Jurnalda keng ilmiy jamoatchilikning tadqiqot natijalari e’lon qilinadi. Mazkur jurnal bir nechta xalqaro bazalarda indeksiyalanadi.",
            generel_text: "“O‘zbekistonda ilmiy tadqiqotlar va innovatsiyalar” ilmiy jurnali",
            img: book1
        },
        {
            id:2,
            paragraph: "O‘zbekiston Respublikasi Prezidentining 2020-yil 29-oktabrda qabul qilingan “Ilm-fanni 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida”gi Farmonida ko‘zda tutilgan vazifalar ijrosini ta’minlash maqsadida tashkil etilgan bo‘lib, aniq, tabiiy va texnika fan ixtisosliklari bo‘yicha maqolalarni qabul qiladi. Jurnalning davriyligi 1 oyni tashkil etadi. Jurnalda keng ilmiy jamoatchilikning tadqiqot natijalari e’lon qilinadi. Mazkur jurnal bir nechta xalqaro bazalarda indeksiyalanadi.",
            generel_text: "“O‘zbekiston olimlarining ilmiy-amaliy tadqiqotlari” ilmiy-ommabop jurnali ",
            img: book3
        },
        {
            id:3,
            paragraph: "O‘zbekiston Respublikasi Prezidentining 2020-yil 29-oktabrda qabul qilingan “Ilm-fanni 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida”gi Farmonida ko‘zda tutilgan vazifalar ijrosini ta’minlash maqsadida tashkil etilgan bo‘lib,fan sohasining barcha tarmoqlari bo'yicha maqolalarni qabul qiladi. Jurnalning davriyligi 1 oyni tashkil etadi. Jurnalda keng ilmiy jamoatchilikning tadqiqot natijalari e’lon qilinadi. Mazkur jurnal bir nechta xalqaro bazalarda indeksiyalanadi.",
            generel_text: "International journal of science and education",
            img: book2
        }
    ],
    journal: {}
}


 export const Reducer_journal = (state = redusjournale,action) => {
    switch (action.type) {
        case set_journale:
            state = action.reduserJournale
            return state

        case GET_JOURNAL:
            state.journal = getItem(state.journals, action.id)
            return state
        default:
            return state
    }

}

export const setjournale = (id) => ({type:set_journale,reduserJournale: id })
export const getJournal = (id) => ({type:GET_JOURNAL, id})