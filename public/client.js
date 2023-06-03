const rowsContainer = document.getElementById('rows-container');

// Sample data representing rows of vegetables
const rowsData = [
  { id: 1, name: 'Kartoffeln', lastWatered: 1, giessen: 'Zweimal die Woche' },
  { id: 2, name: 'Kartoffeln', lastWatered: 1, giessen: 'Zweimal die Woche' },
  { id: 3, name: 'Wirsing', lastWatered: 1 , giessen: 'Täglich'},
  { id: 4, name: 'Mangold', lastWatered: 1 , giessen:'wenn die oberste Erdschicht abgetrocknet ist'},
  { id: 5, name: 'Mairübe', lastWatered: 1, giessen:'Regelmäßiges Gießen und Hacken' },
  { id: 6, name: 'Kürbis', lastWatered: 1, giessen:' Einmal in der Woche'},
  { id: 7, name: 'Leerreihe', lastWatered: 1 ,giessen:'Täglich' },
  { id: 8, name: 'Leerreihe', lastWatered: 1 ,giessen:'Täglich'},
  { id: 9, name: 'Radies', lastWatered: 1 ,giessen:'Täglich'},
  { id: 10, name: 'Vespergurke', lastWatered: 1,giessen:' zwischen 2 und 4-mal gießen pro Woche' },
  { id: 11, name: 'Buschbohnen grün', lastWatered: 1,giessen:'einmal in der Woche' },
  { id: 12, name: 'Buschbohnen lila', lastWatered: 1 ,giessen:'einmal in der Woche'},
  { id: 13, name: 'leere Reihe', lastWatered: 1 ,giessen:'Täglich'},
  { id: 14, name: 'Schnittsalat', lastWatered: 1 ,giessen:'alle paar Tage'},
  { id: 15, name: 'Zuckererbse', lastWatered: 1 ,giessen:'2 und 4-mal gießen, Bei Hitze und Trockenheit gut gießen'},
  { id: 16, name: 'Zucchini', lastWatered: 1 ,giessen:'ein- bis zweimal pro Woche'},
  { id: 17, name: 'leere Reihe zur Selbstgestaltung', lastWatered: 1,giessen:'Täglich' },
  { id: 18, name: 'Steckzwiebel', lastWatered: 1 ,giessen:'relativ wenig Wasser. Am Anfang  noch gelegentlich gießen'},
  { id: 19, name: 'Möhre frühreifend', lastWatered: 1 ,giessen:'bei Trockenheit'},
  { id: 20, name: 'Möhre spätreifend (lagerfähig)', lastWatered: 1 ,giessen:'bei Trockenheit'},
  { id: 21, name: 'Pflanzzwiebeln', lastWatered: 1 ,giessen:'wenn sich die Erde trocknen anfühlt.'},
  { id: 22, name: 'Pastinake', lastWatered: 1 ,giessen:'von Mitte Juni bis zur Ernte im Oktober sehr regelmäßig'},
  { id: 23, name: 'Rettich', lastWatered: 1 ,giessen:'zwei bis dreimal pro Wochen'},
  { id: 24, name: 'Kürbis', lastWatered: 1,giessen:'Einmal in der Woche' },
  { id: 25, name: 'Eigenes Kompostbeet für eigene Grünabfälle als Mulchmaterial', lastWatered: 1,giessen:'Täglich' },
  { id: 26, name: 'Knollensellerie+ Lauch', lastWatered: 1 ,giessen:'ein- bis zweimal täglich'},
  { id: 27, name: 'Knollenfenchel+ Kopfsalat rot', lastWatered: 1 ,giessen:'Täglich'},
  { id: 28, name: 'Kohlrabi + Kopfsalat grün', lastWatered: 1 ,giessen:'mehrmals am Tag gießen.'},
  { id: 29, name: 'Weißkohl / Rotkohl', lastWatered: 1 ,giessen:'Täglich'},
  { id: 30, name: 'Essbare Blüten', lastWatered: 1 ,giessen:'Täglich'},
  // Add more rows here
];

// Render the rows and their status icons
function renderRows() {
  rowsContainer.innerHTML = '';

  rowsData.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = row.name;
    rowDiv.appendChild(nameSpan);

    const statusIcon = document.createElement('span');
    statusIcon.classList.add('status-icon');
    setStatusIcon(statusIcon, row.lastWatered);
    rowDiv.appendChild(statusIcon);

    const note = document.createElement('span');
    note.textContent = row.giessen;
    rowDiv.appendChild(note); 

    const waterButton = document.createElement('button');
    waterButton.textContent = 'Water';
    waterButton.addEventListener('click', () => {
      waterRow(row);

   
    });

    
    rowDiv.appendChild(waterButton);

    rowsContainer.appendChild(rowDiv);
  });
}

// Set the status icon based on the number of days since last watering
function setStatusIcon(iconElement, daysSinceWatered) {
  if (daysSinceWatered <= 0) {
    iconElement.classList.add('watered');
    iconElement.textContent = '✔';
  } else if (daysSinceWatered <= 2) {
    iconElement.classList.add('not-watered');
    iconElement.textContent = '⚠';
  } else {
    iconElement.classList.add('not-watered');
    iconElement.textContent = '✗';
  }
}

// Handle watering of a row
function waterRow(row) {
  row.lastWatered = 0;
  renderRows();
}

// Initial rendering of rows
renderRows();
