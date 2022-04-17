import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getJournal} from "../../Store/Reducers/Reducer_journal";
import pdf from "../../Assets/Images/1.jpg"

function Journals() {

    const dispatch = useDispatch()
    const location = useLocation()
    // const reduserJournals = useSelector(state => state.homejournal.journal)

    useEffect(() => {
        dispatch(getJournal(location.state.item))
    }, [location])


console.log(location.state.item)

    return (
        <div className="journals">
            <div className="container">

                <div className="journale_start">
                    <div  className="home_journale-left_books-start" >
                        <div className="home_journale-left_book">
                            <img src={location.state.item.img} alt="book" className='book'/>
                        </div>
                        <div className="home_journale-left_description-start">
                            <div className="home_journale-left_description-generel_text">
                                <h3>{location.state.item.generel_text}</h3>
                            </div>

                            <div className="home_journale-left_description-text">
                                <p>{location.state.item.paragraph}</p>
                            </div>

                            <div className="home_journale-left_description-btn">
                                <a href={pdf} download >
                                    <button >Yuklash</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

);

}


export default Journals;