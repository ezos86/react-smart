import * as React from 'react';
import InputText from '../components/InputText.component';
import '../styles/components/contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="view-content">
                <div className="view-content">
                    <h2>Eric Cavazos</h2>
                </div>
                <InputText />
            </div>
        );
    }
}

export default Contact;
