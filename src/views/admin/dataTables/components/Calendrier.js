import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DropdownCalendar(props) {
    const [selectedDate1, setSelectedDate1] = useState(null); // State pour stocker la date sélectionnée
    const [selectedDate2, setSelectedDate2] = useState(null); // State pour stocker la date sélectionnée

    const handleDate1Change = (date) => {
        setSelectedDate1(date); // Met à jour la date sélectionnée lorsqu'une nouvelle date est choisie
    };
    const handleDate2Change = (date) => {
        setSelectedDate2(date); // Met à jour la date sélectionnée lorsqu'une nouvelle date est choisie
    };
    return (
        <div> {/* Encapsulez les éléments JSX dans un conteneur parent */}
            <DatePicker
                selected={selectedDate1} // Propriété pour définir la date sélectionnée
                onChange={handleDate1Change} // Callback appelé lorsque la date est changée
                dateFormat="dd/MM/yyyy" // Format de date à afficher
                placeholderText="Date de début" // Texte d'invite dans le calendrier déroulant
            />
            <DatePicker
                selected={selectedDate2} // Propriété pour définir la date sélectionnée
                onChange={handleDate2Change} // Callback appelé lorsque la date est changée
                dateFormat="dd/MM/yyyy" // Format de date à afficher
                placeholderText="Date de fin" // Texte d'invite dans le calendrier déroulant
            />
            {/* Affiche la date sélectionnée si elle existe */}
            {selectedDate1 && (
                <p></p>
            )}
            {selectedDate2 && (
                <p></p>
            )}
        </div>
    );
}