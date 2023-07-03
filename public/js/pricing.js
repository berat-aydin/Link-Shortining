var tableBody = document.getElementById('tabloBody');
  for (let i = 0; i < 50; i++) {
    var tableRow = document.createElement('tr');
      
    var countryCell = document.createElement('td');
    var countryImage = document.createElement('img');
    countryImage.className = 'flags';
    countryImage.src = '../../images/flags/tr.svg';
    var countryName = document.createElement('span');
    countryName.textContent = 'Turkey';
    countryCell.appendChild(countryImage);
    countryCell.appendChild(countryName);
    tableRow.appendChild(countryCell);
    
    var cpmCell = document.createElement('td');
    cpmCell.textContent = '40.24 TL';
    tableRow.appendChild(cpmCell);
    
    tableBody.appendChild(tableRow);
  }