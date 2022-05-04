import React from 'react';

function Contact(props) {
    return (
        <div className="contact">
                <div className="contact_us">
                    <div className="contact_us_right">
                        <form className="contact_post" method="post">
                            <label className="margin_contact " htmlFor='fname'>Fullname</label>
                            <input className="input_contact focus_contact" name="name"  type="text" id='fname' placeholder="Sirojbek Allanazarov"/>
                            <label className="margin_contact " htmlFor='email'>Email</label>
                            <input className="input_contact focus_contact "  name="email" type="email" id='email'
                                   placeholder="ziyo.scientific@bk.ru"/>
                            <label className="margin_contact " htmlFor='text'>Message</label> <br/>
                            <input className="input_message focus_contact  " type="text" id='text'
                                   placeholder="Doe Type your message"/>
                        </form>

                    </div>

                </div>

                <div className="contact_submit">
                    <button type="submit">Submit</button>
                </div>
        </div>
    );
}

export default Contact;