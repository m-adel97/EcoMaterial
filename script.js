// Function to update the options for "Name of material"
function updateMaterialOptions() {
    const classification = document.getElementById('classification').value;
    const nameSelect = document.getElementById('name');
    const manufactureInput = document.getElementById('manufacture');
    const materialImage = document.getElementById('material-image');
    const enlargedImage = document.getElementById('enlarged-image');
    const modal = document.getElementById('myModal');

    nameSelect.innerHTML = ''; // Clear previous options
    manufactureInput.value = ''; // Clear the manufacturer name
    materialImage.src = ''; // Clear previous image
    materialImage.style.display = 'none'; // Hide image

    let options = [];

    // Define options for each material classification
    if (classification === 'concrete') {
        options = [
            { name: 'Select name of material' },
            { name: 'Reinforced horizontal concrete for slabs and beams grade C40 ready mix concrete', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/concrete/0.png' },
            { name: 'Reinforced Structure elements of substructure grade C40 Raft Foundation (Ready-mix concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/concrete/1.png' },
            { name: 'Vertical elements superstructure (Columns) Grade C50 (Ready-mix Concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/concrete/2.png' },
            { name: 'Vertical superstructure Durable Concrete grade C50 MPA (Ready Mix Concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/concrete/3.png' },
            { name: 'Concrete Paving Solid and hollow Bricks', manufacturer: 'Alfalah Ready Mix LLC', image: '' },
            { name: '45_MPA_Early strength concrete', manufacturer: 'Ghrghar Group -Al wafaa W Amal City, Cairo ghrghar.com/group-company', image: 'img/concrete/5.png' },
            { name: 'Foundations and Columns', manufacturer: 'Ghrghar Group -Al wafaa W Amal City, Cairo ghrghar.com/group-company', image: 'img/concrete/6.png' },
            { name: 'Slab production', manufacturer: 'Red Sea Ready Mix (Orascom) - Head Office: 2005 A Corniche El Nil, Ramlet Boulaq, Nile City Towers, North Tower, 14th Floor – Cairo EGYPT - http://www.rsc.com.eg/', image: 'img/concrete/7.png' },
            { name: 'Foundation and Piles', manufacturer: 'Red Sea Ready Mix (Orascom) - Head Office: 2005 A Corniche El Nil, Ramlet Boulaq, Nile City Towers, North Tower, 14th Floor – Cairo EGYPT - http://www.rsc.com.eg/', image: 'img/concrete/8.png' }
        ];
    } else if (classification === 'bricks') {
        options = [
            { name: 'Select name of material' },
            { name: 'Concrete Paving Solid and hollow Bricks', manufacturer: 'ERTEKAA (The enhancement of integrated services and waste recycling company)-Www.ertekaa.org', image: 'img/bricks/0.png' },
            { name: 'Marmox Thermoblock 14/10', manufacturer: 'Marmox Egypt - CMB', image: 'img/bricks/1.png' }
        ];
    } else if (classification === 'plaster') {
        options = [
            { name: 'Select name of material' },
            { name: 'Gypfine almomtaz 120- smoothing compound', manufacturer: 'Sain Gobain Gybrco', image: 'img/plaster/0.png' },
            { name: 'GYPLAST fix', manufacturer: 'SAINT-GOBAIN GYPROC EGYPT-Egyptian Gypsum Company Building #12b04, Cairo Festival City, second floor New Cairo • Egypt', image: 'img/plaster/1.png' },
            { name: 'GYPLAST fix', manufacturer: 'SAINT-GOBAIN GYPROC EGYPT-Egyptian Gypsum Company Building #12b04, Cairo Festival City, second floor New Cairo • Egypt', image: 'img/plaster/2.png' }
        ];
    } else if (classification === 'insulation') {
        options = [
            { name: 'Select name of material' },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', manufacturer: 'Marmox Egypt - CMB', image: 'img/insulation/0.png' }
        ];
    } else if (classification === 'cement') {
        options = [
            { name: 'Select name of material' },
            { name: 'CEM III/A 42,5 N', manufacturer: 'Amreyah cement company', image: 'img/cement/0.png' },
            { name: 'CEM III/A 42,5 N', manufacturer: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', image: 'img/cement/1.png' },
            { name: 'portland cement-CEM I 42,5 N', manufacturer: 'Lafarge Egypt-kilo 93 kattameia', image: 'img/cement/2.png' }
        ];
    } else if (classification === 'glass') {
        options = [
            { name: 'Select name of material' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/0.png' }
        ];
    }  else if (classification === 'steel') {
        options = [
            { name: 'Select name of material' },
            { name: 'Reinforcing steel bars', manufacturer: 'Al Ezz Dekheila Steel Co. - Alexandria (EZDK) El Dekheila', image: 'img/steel/0.png' }
        ];
    }

    // Populate the "Name of material" dropdown with options
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        nameSelect.appendChild(opt);
    });

    // Update the manufacturer field and image when a material is selected
    nameSelect.addEventListener('change', function() {
        const selectedOption = options.find(opt => opt.name === nameSelect.value);
        manufactureInput.value = selectedOption ? selectedOption.manufacturer : '';
        if (selectedOption && selectedOption.image) {
            materialImage.src = selectedOption.image;
            materialImage.style.display = 'block'; // Show image
        } else {
            materialImage.src = '';
            materialImage.style.display = 'none'; // Hide image
        }
    });

    // Populate the "Name of material" dropdown with options
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        nameSelect.appendChild(opt);
    });

    // Update the manufacturer field and image when a material is selected
    nameSelect.addEventListener('change', function() {
        const selectedOption = options.find(opt => opt.name === nameSelect.value);
        manufactureInput.value = selectedOption ? selectedOption.manufacturer : '';
        if (selectedOption && selectedOption.image) {
            materialImage.src = selectedOption.image;
            materialImage.style.display = 'block'; // Show image
        } else {
            materialImage.src = '';
            materialImage.style.display = 'none'; // Hide image
        }
    });

    // Add event listener to show modal with enlarged image on click
    materialImage.addEventListener('click', function() {
        if (materialImage.src) {
            enlargedImage.src = materialImage.src; // Set enlarged image source
            modal.style.display = 'block'; // Show modal
        }
    });

    // Get the <span> element that closes the modal
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = function() {
        modal.style.display = 'none'; // Close modal
    };

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Close modal
        }
    };
}

// Function to update the second set of material options
function updateSubcategories() {
    const classification = document.getElementById('material').value;
    const subcategorySelect = document.getElementById('subcategory');
    const txtPlace = document.getElementById('txtPlace');
    const txtUnit = document.getElementById('txtUnit');
    const txtInd1 = document.getElementById('txtInd1');
    const txtInd2 = document.getElementById('txtInd2');
    const txtInd3 = document.getElementById('txtInd3');
    const txtInd4 = document.getElementById('txtInd4');
    const txtInd5 = document.getElementById('txtInd5');
    const txtInd6 = document.getElementById('txtInd6');
    const txtInd7 = document.getElementById('txtInd7');
    const txtA4 = document.getElementById('txtA4');

    subcategorySelect.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification === 'concrete') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'Reinforced horizontal concrete for slabs and beams grade C40 ready mix concrete', place: 'New Capital, Cairo Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Reinforced Structure elements of substructure grade C40 Raft Foundation (Ready-mix concrete)', place: 'New Capital, Cairo Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Vertical elements superstructure (Columns) Grade C50 (Ready-mix Concrete)', place: 'New Capital, Cairo Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Vertical superstructure Durable Concrete grade C50 MPA (Ready Mix Concrete)', place: 'New Capital, Cairo Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: '45_MPA_Early strength concrete', place: 'Cairo', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Foundations and Columns', place: 'Cairo', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Slab production', place: 'El Gouna, Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Foundation and Piles', place: 'El Gouna, Egypt', unit: 'm3', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'bricks') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'plaster') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'insulation') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'cement') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'glass') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', place: 'El Sokhna plant, Bagged', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    } else if (classification === 'steel') {
        suboptions = [
            { name: 'Select name of material' },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: 'pcs', indicators: ['Ind1', 'Ind2', 'Ind3', 'Ind4', 'Ind5', 'Ind6', 'Ind7', 'A4'] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect.addEventListener('change', function() {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect.value);
        if (selectedOption) {
            txtPlace.value = selectedOption.place;
            txtUnit.value = selectedOption.unit;
            txtInd1.value = selectedOption.indicators[0];
            txtInd2.value = selectedOption.indicators[1];
            txtInd3.value = selectedOption.indicators[2];
            txtInd4.value = selectedOption.indicators[3];
            txtInd5.value = selectedOption.indicators[4];
            txtInd6.value = selectedOption.indicators[5];
            txtInd7.value = selectedOption.indicators[6];
            txtA4.value = selectedOption.indicators[7];
        } else {
            // Clear fields if nothing is selected
            txtPlace.value = '';
            txtUnit.value = '';
            txtInd1.value = '';
            txtInd2.value = '';
            txtInd3.value = '';
            txtInd4.value = '';
            txtInd5.value = '';
            txtInd6.value = '';
            txtInd7.value = '';
            txtA4.value = '';
        }
    });
}

// Sample data for charts
const data1 = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [{
        label: 'Design 1',
        data: [12, 19, 3],
        backgroundColor: 'rgba(0, 162, 255, 0.2)',
        borderColor: 'rgba(0, 162, 255, 1)',
        borderWidth: 1
    }]
};

const data2 = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [{
        label: 'Design 2',
        data: [9, 16, 7],
        backgroundColor: 'rgba(0, 255, 132, 0.2)',
        borderColor: 'rgba(0, 255, 132, 1)',
        borderWidth: 1
    }]
};

// Initialize charts
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');

new Chart(ctx1, {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
