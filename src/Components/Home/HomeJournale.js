import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import copy from '../../Assets/Images/12.png'
import {useDispatch, useSelector} from "react-redux";

function HomeJournale(props) {
    const dispatch = useDispatch()
    const location = useHistory();
    const reduserJournale = useSelector(state => state.homejournal.journals)

    const SetProduct = (item) => {
        location.push('/journale', { item})
    }

    useEffect(() =>{
        // dispatch(setjournale(location.pathname.split("/")[2]))
    },[dispatch])

    return (
        <div className="home_journale">
             <div className='lox'>
                 <div className='header__mg'>
                   <a>
                    <img src={copy} alt='banner' className='copy__img' />
                    </a>
                   </div>
              
                <div className="home">
                    <div className="header__title">
                        <p>Ziyo Scientific Center</p>
                    </div>

                    <div className="header__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere <br/> nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.</p>
                    </div>

                    <div className="header__btn">
                       <a> <button>Boshlash</button></a>
                    </div>
                </div>
             </div>
            <div className="container">
            
                <div className="home_journale-start">
                    <div className="home_jorunale-left">
                        <div className="home_journale-left_generek-text">
                            <h3>Jurnallar</h3>
                        </div>
                            {
                                reduserJournale?.map(item=> {
                                    return(
                                        <div  className="home_journale-left_books-start" key={item?.id}>
                                            <div className="home_journale-left_book">
                                                <img src={item?.img} alt="book" className='book'/>
                                            </div>
                                            <div className="home_journale-left_description-start">
                                                <div className="home_journale-left_description-generel_text">
                                                    <h3>{item?.generel_text}</h3>
                                                </div>

                                                <div className="home_journale-left_description-text">
                                                    <p>{item.paragraph}</p>
                                                </div>

                                                <div className="home_journale-left_description-btn">
                                                    <button onClick={() => SetProduct(item)}>Jurnalni Ko'rish</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>

                    <div className="home_journale-right">
                        <div className="home_journale-right_top">
                            <button>Sertifikatlar</button>
                            <button>Maqola Yuborish</button>

                        </div>
                        <div className="home_journale-right_bottom">
                            <div className="home_journale-right_text">
                                <h3>Homiylar</h3>
                            </div>

                            <div className="home_journale-right_sponsor">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default HomeJournale;