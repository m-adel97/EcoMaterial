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
            { name: 'GYPLAST fix', manufacturer: 'SAINT-GOBAIN GYPROC EGYPT-Egyptian Gypsum Company Building #12b04, Cairo Festival City, second floor New Cairo • Egypt', image: 'img/plaster/2.jpg' },
            { name: 'GYPLAST fill', manufacturer: 'SAINT-GOBAIN GYPROC EGYPT-Egyptian Gypsum Company Building #12b04, Cairo Festival City, second floor New Cairo • Egypt', image: 'img/plaster/1.png' }
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
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforced horizontal concrete for slabs and beams grade C40 ready mix concrete', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['4.02E2', '1.61E‐5', '9.06E‐1', '2.82E‐1', '3.67E‐2', '1.65E‐3', '2.21E3', 'A4'] },
            { name: 'Reinforced Structure elements of substructure grade C40 Raft Foundation (Ready-mix concrete)', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['3.95E2', '1.74E‐5', '9.44E‐1', '2.92E‐1', '3.97E‐2', '1.68E‐3', '2.36E3', 'A4'] },
            { name: 'Vertical elements superstructure (Columns) Grade C50 (Ready-mix Concrete)', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['4.46E2', '1.75E‐5', '1', '3.12E‐1', '4.06E‐2', '1.85E‐3', '2.43E3', 'A4'] },
            { name: 'Vertical superstructure Durable Concrete grade C50 MPA (Ready Mix Concrete)', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['3.68E2', '1.83E‐5', '1.09E0', '3.31E‐1', '4.36E‐2', '2.85E‐2', '2.73E3', 'A4'] },
            { name: '45_MPA_Early strength concrete', place: 'Cairo', unit: '1 m3', indicators: ['501', '2.48E‐5', '1.17', '3.22E‐1', '4.67E‐2', '4.31E‐2', '3230', 'A4'] },
            { name: 'Foundations and Columns', place: 'Cairo', unit: '1 m3', indicators: ['458', '2.36E‐5', '1.08', '2.96E‐1', '4.35E‐2', '3.87E‐2', '3070', 'A4'] },
            { name: 'Slab production', place: 'El Gouna, Egypt', unit: '1 m3', indicators: ['2.53E2', '1.68E‐5', '6.22E‐1', '1.82E‐1', '2.66E‐2', '2.32E‐2', '2.4E3', 'A4'] },
            { name: 'Foundation and Piles', place: 'El Gouna, Egypt', unit: '1 m3', indicators: ['3.74E2', '8.87E‐1', '2.05E‐5', '2.59E‐1', '3.73E‐2', '3.43E‐2', '3.51E3', 'A4'] }
        ];
    } else if (classification === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },            
        ];
    } else if (classification === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification === 'glass') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['16', '15.9', '0.0542', '0.00504', '0.145', '0.00000086', '0.0931', 'A4'] }
        ];
    } else if (classification === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', '']  },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
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

function calculateResults() {
    const qty = parseFloat(document.getElementById("txtQty").value) || 0;
    const dist = parseFloat(document.getElementById("txtDist").value) || 0;
    const fuelType = parseFloat(document.getElementById("Fuel_Type").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue = parseFloat(document.getElementById(`txtInd${i}`).value) || 0;
        document.getElementById(`ResultInd${i}-t1`).value = indValue * qty;
    }

    document.getElementById("ResultA4-t1").value = qty * dist * fuelType;
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
