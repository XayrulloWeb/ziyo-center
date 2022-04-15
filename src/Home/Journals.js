import React, {useEffect} from 'react';
import HomeBanner from "./HomeBanner";
import img from "../Images/1.jpg"
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getJournal} from "../Store/Reducers/Reducer_journal";


function Journals() {

    const dispatch = useDispatch()
    const location = useLocation()
    const reduserJournals = useSelector(state => state.homejournal.journal)

    useEffect(() => {
        dispatch(getJournal(location.state.id))
    }, [location])

console.log(location.state.item)

    return (
        <div className="journals">
            <div className="container">
                <div className="journale_start">
                    <div className="journale_left">
                        <img src={img}/>
                    </div>
                    <div className="journale_right">
                        <div className="journale_right-text">
                            <div className="journale_right-text_generel">
                                <h3>dhgkdfhgksdgfkdfghkkd</h3>
                            </div>
                            <div className="journale_right-text_paraghph">
                                <p>qilingan “Ilm-fanni 2030-yilgacha rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida”gi Farmonida ko‘zda tutilgan vazifalar ijrosini ta’minlash maqsadida tashkil etilgan bo‘lib, aniq, tabiiy va texnika fan ixtisosliklari bo‘yicha maqolalarni qabul qiladi. Jurnalning davriyligi 1 oyni tashkil etadi. Jurnalda keng ilmiy jamoatchilikning tadqiqot natijalari e’lon qilinadi. Mazkur jurnal bir nechta xalqaro bazalarda indeksiyalanadi</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}

export default Journals;