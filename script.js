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
            { name: 'Marmox Thermoblock 14/10', manufacturer: 'Marmox Egypt - CMB', image: 'img/bricks/1.png' },
            { name: 'AAC blocks', manufacturer: 'National Industries Company', image: 'img/bricks/2.png' }
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
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', manufacturer: 'Marmox Egypt - CMB', image: 'img/insulation/0.png' },
            { name: 'EPS', manufacturer: 'N/A', image: 'img/insulation/1.png' },
            { name: 'mineral wool', manufacturer: 'Saudi International Insulation manufacturing company (SIIMCO)', image: 'img/insulation/2.png' }
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
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/0.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/1.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/2.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/3.png' },
            { name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/4.png' },
            { name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/5.png' },
            { name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: ' Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo ', image: 'img/glass/6.png' }
        ];
    } else if (classification === 'steel') {
        options = [
            { name: 'Select name of material' },
            { name: 'Reinforcing steel bars', manufacturer: 'Al Ezz Dekheila Steel Co. - Alexandria (EZDK) El Dekheila', image: 'img/steel/0.png' }
        ];
    } else if (classification === 'ceramic') {
        options = [
            { name: 'Select name of material' },
            { name: 'Ceramic tiles', manufacturer: 'ALFANAR FACTORY FOR CERAMIC & PORCELAIN', image: 'img/steel/0.png' }
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
    nameSelect.addEventListener('change', function () {
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
    nameSelect.addEventListener('change', function () {
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
    materialImage.addEventListener('click', function () {
        if (materialImage.src) {
            enlargedImage.src = materialImage.src; // Set enlarged image source
            modal.style.display = 'block'; // Show modal
        }
    });

    // Get the <span> element that closes the modal
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = function () {
        modal.style.display = 'none'; // Close modal
    };

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Close modal
        }
    };
}

// Function to update the second set of material options for first table
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
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
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
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']},
        ];
    } else if (classification === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
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
    subcategorySelect.addEventListener('change', function () {
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




// Function to update the second set of material options for second table
function updateSubcategories_t2() {
    const classification_t2 = document.getElementById('material_t2').value;
    const subcategorySelect_t2 = document.getElementById('subcategory_t2');
    const txtPlace_t2 = document.getElementById('txtPlace_t2');
    const txtUnit_t2 = document.getElementById('txtUnit_t2');
    const txtInd1_t2 = document.getElementById('txtInd1_t2');
    const txtInd2_t2 = document.getElementById('txtInd2_t2');
    const txtInd3_t2 = document.getElementById('txtInd3_t2');
    const txtInd4_t2 = document.getElementById('txtInd4_t2');
    const txtInd5_t2 = document.getElementById('txtInd5_t2');
    const txtInd6_t2 = document.getElementById('txtInd6_t2');
    const txtInd7_t2 = document.getElementById('txtInd7_t2');

    subcategorySelect_t2.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t2 === 'concrete') {
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
    } else if (classification_t2 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t2 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t2 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t2 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t2 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t2 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t2 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t2 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t2 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t2 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t2 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t2.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t2.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t2.value);
        if (selectedOption) {
            txtPlace_t2.value = selectedOption.place;
            txtUnit_t2.value = selectedOption.unit;
            txtInd1_t2.value = selectedOption.indicators[0];
            txtInd2_t2.value = selectedOption.indicators[1];
            txtInd3_t2.value = selectedOption.indicators[2];
            txtInd4_t2.value = selectedOption.indicators[3];
            txtInd5_t2.value = selectedOption.indicators[4];
            txtInd6_t2.value = selectedOption.indicators[5];
            txtInd7_t2.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t2.value = '';
            txtUnit_t2.value = '';
            txtInd1_t2.value = '';
            txtInd2_t2.value = '';
            txtInd3_t2.value = '';
            txtInd4_t2.value = '';
            txtInd5_t2.value = '';
            txtInd6_t2.value = '';
            txtInd7_t2.value = '';
        }
    });
}

function calculateResults_t2() {
    const qty_t2 = parseFloat(document.getElementById("txtQty_t2").value) || 0;
    const dist_t2 = parseFloat(document.getElementById("txtDist_t2").value) || 0;
    const fuelType_t2 = parseFloat(document.getElementById("Fuel_Type_t2").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t2 = parseFloat(document.getElementById(`txtInd${i}_t2`).value) || 0;
        document.getElementById(`ResultInd${i}_t2`).value = indValue_t2 * qty_t2;
    }

    document.getElementById("ResultA4_t2").value = qty_t2 * dist_t2 * fuelType_t2;
}


// Function to update the third set of material options for third table
function updateSubcategories_t3() {
    const classification_t3 = document.getElementById('material_t3').value;
    const subcategorySelect_t3 = document.getElementById('subcategory_t3');
    const txtPlace_t3 = document.getElementById('txtPlace_t3');
    const txtUnit_t3 = document.getElementById('txtUnit_t3');
    const txtInd1_t3 = document.getElementById('txtInd1_t3');
    const txtInd2_t3 = document.getElementById('txtInd2_t3');
    const txtInd3_t3 = document.getElementById('txtInd3_t3');
    const txtInd4_t3 = document.getElementById('txtInd4_t3');
    const txtInd5_t3 = document.getElementById('txtInd5_t3');
    const txtInd6_t3 = document.getElementById('txtInd6_t3');
    const txtInd7_t3 = document.getElementById('txtInd7_t3');

    subcategorySelect_t3.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t3 === 'concrete') {
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
    } else if (classification_t3 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t3 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t3 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t3 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t3 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t3 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t3 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t3 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t3 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t3 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t3 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t3.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t3.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t3.value);
        if (selectedOption) {
            txtPlace_t3.value = selectedOption.place;
            txtUnit_t3.value = selectedOption.unit;
            txtInd1_t3.value = selectedOption.indicators[0];
            txtInd2_t3.value = selectedOption.indicators[1];
            txtInd3_t3.value = selectedOption.indicators[2];
            txtInd4_t3.value = selectedOption.indicators[3];
            txtInd5_t3.value = selectedOption.indicators[4];
            txtInd6_t3.value = selectedOption.indicators[5];
            txtInd7_t3.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t3.value = '';
            txtUnit_t3.value = '';
            txtInd1_t3.value = '';
            txtInd2_t3.value = '';
            txtInd3_t3.value = '';
            txtInd4_t3.value = '';
            txtInd5_t3.value = '';
            txtInd6_t3.value = '';
            txtInd7_t3.value = '';
        }
    });
}

function calculateResults_t3() {
    const qty_t3 = parseFloat(document.getElementById("txtQty_t3").value) || 0;
    const dist_t3 = parseFloat(document.getElementById("txtDist_t3").value) || 0;
    const fuelType_t3 = parseFloat(document.getElementById("Fuel_Type_t3").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t3 = parseFloat(document.getElementById(`txtInd${i}_t3`).value) || 0;
        document.getElementById(`ResultInd${i}_t3`).value = indValue_t3 * qty_t3;
    }

    document.getElementById("ResultA4_t3").value = qty_t3 * dist_t3 * fuelType_t3;
}

// Function to update the fourth set of material options for second table
function updateSubcategories_t4() {
    const classification_t4 = document.getElementById('material_t4').value;
    const subcategorySelect_t4 = document.getElementById('subcategory_t4');
    const txtPlace_t4 = document.getElementById('txtPlace_t4');
    const txtUnit_t4 = document.getElementById('txtUnit_t4');
    const txtInd1_t4 = document.getElementById('txtInd1_t4');
    const txtInd2_t4 = document.getElementById('txtInd2_t4');
    const txtInd3_t4 = document.getElementById('txtInd3_t4');
    const txtInd4_t4 = document.getElementById('txtInd4_t4');
    const txtInd5_t4 = document.getElementById('txtInd5_t4');
    const txtInd6_t4 = document.getElementById('txtInd6_t4');
    const txtInd7_t4 = document.getElementById('txtInd7_t4');

    subcategorySelect_t4.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t4 === 'concrete') {
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
    } else if (classification_t4 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t4 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t4 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t4 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t4 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}        ];
    } else if (classification_t4 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t4 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t4 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t4 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t4 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t4 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t4.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t4.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t4.value);
        if (selectedOption) {
            txtPlace_t4.value = selectedOption.place;
            txtUnit_t4.value = selectedOption.unit;
            txtInd1_t4.value = selectedOption.indicators[0];
            txtInd2_t4.value = selectedOption.indicators[1];
            txtInd3_t4.value = selectedOption.indicators[2];
            txtInd4_t4.value = selectedOption.indicators[3];
            txtInd5_t4.value = selectedOption.indicators[4];
            txtInd6_t4.value = selectedOption.indicators[5];
            txtInd7_t4.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t4.value = '';
            txtUnit_t4.value = '';
            txtInd1_t4.value = '';
            txtInd2_t4.value = '';
            txtInd3_t4.value = '';
            txtInd4_t4.value = '';
            txtInd5_t4.value = '';
            txtInd6_t4.value = '';
            txtInd7_t4.value = '';
        }
    });
}

function calculateResults_t4() {
    const qty_t4 = parseFloat(document.getElementById("txtQty_t4").value) || 0;
    const dist_t4 = parseFloat(document.getElementById("txtDist_t4").value) || 0;
    const fuelType_t4 = parseFloat(document.getElementById("Fuel_Type_t4").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t4 = parseFloat(document.getElementById(`txtInd${i}_t4`).value) || 0;
        document.getElementById(`ResultInd${i}_t4`).value = indValue_t4 * qty_t4;
    }

    document.getElementById("ResultA4_t4").value = qty_t4 * dist_t4 * fuelType_t4;
}


// Function to update the fifth set of material options for second table
function updateSubcategories_t5() {
    const classification_t5 = document.getElementById('material_t5').value;
    const subcategorySelect_t5 = document.getElementById('subcategory_t5');
    const txtPlace_t5 = document.getElementById('txtPlace_t5');
    const txtUnit_t5 = document.getElementById('txtUnit_t5');
    const txtInd1_t5 = document.getElementById('txtInd1_t5');
    const txtInd2_t5 = document.getElementById('txtInd2_t5');
    const txtInd3_t5 = document.getElementById('txtInd3_t5');
    const txtInd4_t5 = document.getElementById('txtInd4_t5');
    const txtInd5_t5 = document.getElementById('txtInd5_t5');
    const txtInd6_t5 = document.getElementById('txtInd6_t5');
    const txtInd7_t5 = document.getElementById('txtInd7_t5');

    subcategorySelect_t5.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t5 === 'concrete') {
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
    } else if (classification_t5 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t5 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t5 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t5 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t5 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}        ];
    } else if (classification_t5 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t5 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t5 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t5 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t5 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t5 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t5.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t5.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t5.value);
        if (selectedOption) {
            txtPlace_t5.value = selectedOption.place;
            txtUnit_t5.value = selectedOption.unit;
            txtInd1_t5.value = selectedOption.indicators[0];
            txtInd2_t5.value = selectedOption.indicators[1];
            txtInd3_t5.value = selectedOption.indicators[2];
            txtInd4_t5.value = selectedOption.indicators[3];
            txtInd5_t5.value = selectedOption.indicators[4];
            txtInd6_t5.value = selectedOption.indicators[5];
            txtInd7_t5.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t5.value = '';
            txtUnit_t5.value = '';
            txtInd1_t5.value = '';
            txtInd2_t5.value = '';
            txtInd3_t5.value = '';
            txtInd4_t5.value = '';
            txtInd5_t5.value = '';
            txtInd6_t5.value = '';
            txtInd7_t5.value = '';
        }
    });
}

function calculateResults_t5() {
    const qty_t5 = parseFloat(document.getElementById("txtQty_t5").value) || 0;
    const dist_t5 = parseFloat(document.getElementById("txtDist_t5").value) || 0;
    const fuelType_t5 = parseFloat(document.getElementById("Fuel_Type_t5").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t5 = parseFloat(document.getElementById(`txtInd${i}_t5`).value) || 0;
        document.getElementById(`ResultInd${i}_t5`).value = indValue_t5 * qty_t5;
    }

    document.getElementById("ResultA4_t5").value = qty_t5 * dist_t5 * fuelType_t5;
}


// Function to update the Sixth set of material options for second table
function updateSubcategories_t6() {
    const classification_t6 = document.getElementById('material_t6').value;
    const subcategorySelect_t6 = document.getElementById('subcategory_t6');
    const txtPlace_t6 = document.getElementById('txtPlace_t6');
    const txtUnit_t6 = document.getElementById('txtUnit_t6');
    const txtInd1_t6 = document.getElementById('txtInd1_t6');
    const txtInd2_t6 = document.getElementById('txtInd2_t6');
    const txtInd3_t6 = document.getElementById('txtInd3_t6');
    const txtInd4_t6 = document.getElementById('txtInd4_t6');
    const txtInd5_t6 = document.getElementById('txtInd5_t6');
    const txtInd6_t6 = document.getElementById('txtInd6_t6');
    const txtInd7_t6 = document.getElementById('txtInd7_t6');

    subcategorySelect_t6.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t6 === 'concrete') {
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
    } else if (classification_t6 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t6 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t6 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t6 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t6 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t6 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t6 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t6 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t6 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t6 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t6 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t6.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t6.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t6.value);
        if (selectedOption) {
            txtPlace_t6.value = selectedOption.place;
            txtUnit_t6.value = selectedOption.unit;
            txtInd1_t6.value = selectedOption.indicators[0];
            txtInd2_t6.value = selectedOption.indicators[1];
            txtInd3_t6.value = selectedOption.indicators[2];
            txtInd4_t6.value = selectedOption.indicators[3];
            txtInd5_t6.value = selectedOption.indicators[4];
            txtInd6_t6.value = selectedOption.indicators[5];
            txtInd7_t6.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t6.value = '';
            txtUnit_t6.value = '';
            txtInd1_t6.value = '';
            txtInd2_t6.value = '';
            txtInd3_t6.value = '';
            txtInd4_t6.value = '';
            txtInd5_t6.value = '';
            txtInd6_t6.value = '';
            txtInd7_t6.value = '';
        }
    });
}

function calculateResults_t6() {
    const qty_t6 = parseFloat(document.getElementById("txtQty_t6").value) || 0;
    const dist_t6 = parseFloat(document.getElementById("txtDist_t6").value) || 0;
    const fuelType_t6 = parseFloat(document.getElementById("Fuel_Type_t6").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t6 = parseFloat(document.getElementById(`txtInd${i}_t6`).value) || 0;
        document.getElementById(`ResultInd${i}_t6`).value = indValue_t6 * qty_t6;
    }

    document.getElementById("ResultA4_t6").value = qty_t6 * dist_t6 * fuelType_t6;
}


// Function to update the seventh set of material options for second table
function updateSubcategories_t7() {
    const classification_t7 = document.getElementById('material_t7').value;
    const subcategorySelect_t7 = document.getElementById('subcategory_t7');
    const txtPlace_t7 = document.getElementById('txtPlace_t7');
    const txtUnit_t7 = document.getElementById('txtUnit_t7');
    const txtInd1_t7 = document.getElementById('txtInd1_t7');
    const txtInd2_t7 = document.getElementById('txtInd2_t7');
    const txtInd3_t7 = document.getElementById('txtInd3_t7');
    const txtInd4_t7 = document.getElementById('txtInd4_t7');
    const txtInd5_t7 = document.getElementById('txtInd5_t7');
    const txtInd6_t7 = document.getElementById('txtInd6_t7');
    const txtInd7_t7 = document.getElementById('txtInd7_t7');

    subcategorySelect_t7.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t7 === 'concrete') {
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
    } else if (classification_t7 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t7 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t7 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t7 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t7 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t7 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t7 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t7 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t7 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t7 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t7 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t7.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t7.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t7.value);
        if (selectedOption) {
            txtPlace_t7.value = selectedOption.place;
            txtUnit_t7.value = selectedOption.unit;
            txtInd1_t7.value = selectedOption.indicators[0];
            txtInd2_t7.value = selectedOption.indicators[1];
            txtInd3_t7.value = selectedOption.indicators[2];
            txtInd4_t7.value = selectedOption.indicators[3];
            txtInd5_t7.value = selectedOption.indicators[4];
            txtInd6_t7.value = selectedOption.indicators[5];
            txtInd7_t7.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t7.value = '';
            txtUnit_t7.value = '';
            txtInd1_t7.value = '';
            txtInd2_t7.value = '';
            txtInd3_t7.value = '';
            txtInd4_t7.value = '';
            txtInd5_t7.value = '';
            txtInd6_t7.value = '';
            txtInd7_t7.value = '';
        }
    });
}

function calculateResults_t7() {
    const qty_t7 = parseFloat(document.getElementById("txtQty_t7").value) || 0;
    const dist_t7 = parseFloat(document.getElementById("txtDist_t7").value) || 0;
    const fuelType_t7 = parseFloat(document.getElementById("Fuel_Type_t7").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t7 = parseFloat(document.getElementById(`txtInd${i}_t7`).value) || 0;
        document.getElementById(`ResultInd${i}_t7`).value = indValue_t7 * qty_t7;
    }

    document.getElementById("ResultA4_t7").value = qty_t7 * dist_t7 * fuelType_t7;
}

// Function to update the eighth set of material options for second table
function updateSubcategories_t8() {
    const classification_t8 = document.getElementById('material_t8').value;
    const subcategorySelect_t8 = document.getElementById('subcategory_t8');
    const txtPlace_t8 = document.getElementById('txtPlace_t8');
    const txtUnit_t8 = document.getElementById('txtUnit_t8');
    const txtInd1_t8 = document.getElementById('txtInd1_t8');
    const txtInd2_t8 = document.getElementById('txtInd2_t8');
    const txtInd3_t8 = document.getElementById('txtInd3_t8');
    const txtInd4_t8 = document.getElementById('txtInd4_t8');
    const txtInd5_t8 = document.getElementById('txtInd5_t8');
    const txtInd6_t8 = document.getElementById('txtInd6_t8');
    const txtInd7_t8 = document.getElementById('txtInd7_t8');

    subcategorySelect_t8.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t8 === 'concrete') {
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
    } else if (classification_t8 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t8 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t8 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t8 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t8 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t8 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t8 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t8.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t8.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t8.value);
        if (selectedOption) {
            txtPlace_t8.value = selectedOption.place;
            txtUnit_t8.value = selectedOption.unit;
            txtInd1_t8.value = selectedOption.indicators[0];
            txtInd2_t8.value = selectedOption.indicators[1];
            txtInd3_t8.value = selectedOption.indicators[2];
            txtInd4_t8.value = selectedOption.indicators[3];
            txtInd5_t8.value = selectedOption.indicators[4];
            txtInd6_t8.value = selectedOption.indicators[5];
            txtInd7_t8.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t8.value = '';
            txtUnit_t8.value = '';
            txtInd1_t8.value = '';
            txtInd2_t8.value = '';
            txtInd3_t8.value = '';
            txtInd4_t8.value = '';
            txtInd5_t8.value = '';
            txtInd6_t8.value = '';
            txtInd7_t8.value = '';
        }
    });
}

function calculateResults_t8() {
    const qty_t8 = parseFloat(document.getElementById("txtQty_t8").value) || 0;
    const dist_t8 = parseFloat(document.getElementById("txtDist_t8").value) || 0;
    const fuelType_t8 = parseFloat(document.getElementById("Fuel_Type_t8").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t8 = parseFloat(document.getElementById(`txtInd${i}_t8`).value) || 0;
        document.getElementById(`ResultInd${i}_t8`).value = indValue_t8 * qty_t8;
    }

    document.getElementById("ResultA4_t8").value = qty_t8 * dist_t8 * fuelType_t8;
}

// Function to update the ninth set of material options for second table
function updateSubcategories_t9() {
    const classification_t8 = document.getElementById('material_t8').value;
    const subcategorySelect_t8 = document.getElementById('subcategory_t8');
    const txtPlace_t8 = document.getElementById('txtPlace_t8');
    const txtUnit_t8 = document.getElementById('txtUnit_t8');
    const txtInd1_t8 = document.getElementById('txtInd1_t8');
    const txtInd2_t8 = document.getElementById('txtInd2_t8');
    const txtInd3_t8 = document.getElementById('txtInd3_t8');
    const txtInd4_t8 = document.getElementById('txtInd4_t8');
    const txtInd5_t8 = document.getElementById('txtInd5_t8');
    const txtInd6_t8 = document.getElementById('txtInd6_t8');
    const txtInd7_t8 = document.getElementById('txtInd7_t8');

    subcategorySelect_t8.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t8 === 'concrete') {
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
    } else if (classification_t8 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t8 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t8 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t8 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t8 === 'glass') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['16', '15.9', '0.0542', '0.00504', '0.145', '0.00000086', '0.0931', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t8 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t8 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t8 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t8.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t8.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t8.value);
        if (selectedOption) {
            txtPlace_t8.value = selectedOption.place;
            txtUnit_t8.value = selectedOption.unit;
            txtInd1_t8.value = selectedOption.indicators[0];
            txtInd2_t8.value = selectedOption.indicators[1];
            txtInd3_t8.value = selectedOption.indicators[2];
            txtInd4_t8.value = selectedOption.indicators[3];
            txtInd5_t8.value = selectedOption.indicators[4];
            txtInd6_t8.value = selectedOption.indicators[5];
            txtInd7_t8.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t8.value = '';
            txtUnit_t8.value = '';
            txtInd1_t8.value = '';
            txtInd2_t8.value = '';
            txtInd3_t8.value = '';
            txtInd4_t8.value = '';
            txtInd5_t8.value = '';
            txtInd6_t8.value = '';
            txtInd7_t8.value = '';
        }
    });
}

function calculateResults_t8() {
    const qty_t8 = parseFloat(document.getElementById("txtQty_t8").value) || 0;
    const dist_t8 = parseFloat(document.getElementById("txtDist_t8").value) || 0;
    const fuelType_t8 = parseFloat(document.getElementById("Fuel_Type_t8").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t8 = parseFloat(document.getElementById(`txtInd${i}_t8`).value) || 0;
        document.getElementById(`ResultInd${i}_t8`).value = indValue_t8 * qty_t8;
    }

    document.getElementById("ResultA4_t8").value = qty_t8 * dist_t8 * fuelType_t8;
}



// Function to update the ninth set of material options for second table
function updateSubcategories_t9() {
    const classification_t9 = document.getElementById('material_t9').value;
    const subcategorySelect_t9 = document.getElementById('subcategory_t9');
    const txtPlace_t9 = document.getElementById('txtPlace_t9');
    const txtUnit_t9 = document.getElementById('txtUnit_t9');
    const txtInd1_t9 = document.getElementById('txtInd1_t9');
    const txtInd2_t9 = document.getElementById('txtInd2_t9');
    const txtInd3_t9 = document.getElementById('txtInd3_t9');
    const txtInd4_t9 = document.getElementById('txtInd4_t9');
    const txtInd5_t9 = document.getElementById('txtInd5_t9');
    const txtInd6_t9 = document.getElementById('txtInd6_t9');
    const txtInd7_t9 = document.getElementById('txtInd7_t9');

    subcategorySelect_t9.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t9 === 'concrete') {
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
    } else if (classification_t9 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t9 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t9 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t9 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t9 === 'glass') {
        suboptions = [
{ name: 'Select name of material' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/0.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/1.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/2.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/3.png' },
            { name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/4.png' },
            { name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/5.png' },
            { name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: ' Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo ', image: 'img/glass/6.png' }
        ];
    } else if (classification_t9 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t9 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t9 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t9 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t9 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t9 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t9.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t9.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t9.value);
        if (selectedOption) {
            txtPlace_t9.value = selectedOption.place;
            txtUnit_t9.value = selectedOption.unit;
            txtInd1_t9.value = selectedOption.indicators[0];
            txtInd2_t9.value = selectedOption.indicators[1];
            txtInd3_t9.value = selectedOption.indicators[2];
            txtInd4_t9.value = selectedOption.indicators[3];
            txtInd5_t9.value = selectedOption.indicators[4];
            txtInd6_t9.value = selectedOption.indicators[5];
            txtInd7_t9.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t9.value = '';
            txtUnit_t9.value = '';
            txtInd1_t9.value = '';
            txtInd2_t9.value = '';
            txtInd3_t9.value = '';
            txtInd4_t9.value = '';
            txtInd5_t9.value = '';
            txtInd6_t9.value = '';
            txtInd7_t9.value = '';
        }
    });
}

function calculateResults_t9() {
    const qty_t9 = parseFloat(document.getElementById("txtQty_t9").value) || 0;
    const dist_t9 = parseFloat(document.getElementById("txtDist_t9").value) || 0;
    const fuelType_t9 = parseFloat(document.getElementById("Fuel_Type_t9").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t9 = parseFloat(document.getElementById(`txtInd${i}_t9`).value) || 0;
        document.getElementById(`ResultInd${i}_t9`).value = indValue_t9 * qty_t9;
    }

    document.getElementById("ResultA4_t9").value = qty_t9 * dist_t9 * fuelType_t9;
}




// Function to update the tenth set of material options for second table
function updateSubcategories_t10() {
    const classification_t10 = document.getElementById('material_t10').value;
    const subcategorySelect_t10 = document.getElementById('subcategory_t10');
    const txtPlace_t10 = document.getElementById('txtPlace_t10');
    const txtUnit_t10 = document.getElementById('txtUnit_t10');
    const txtInd1_t10 = document.getElementById('txtInd1_t10');
    const txtInd2_t10 = document.getElementById('txtInd2_t10');
    const txtInd3_t10 = document.getElementById('txtInd3_t10');
    const txtInd4_t10 = document.getElementById('txtInd4_t10');
    const txtInd5_t10 = document.getElementById('txtInd5_t10');
    const txtInd6_t10 = document.getElementById('txtInd6_t10');
    const txtInd7_t10 = document.getElementById('txtInd7_t10');

    subcategorySelect_t10.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t10 === 'concrete') {
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
    } else if (classification_t10 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t10 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t10 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t10 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t10 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t10 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t10 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t10 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t10 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t10 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t10 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t10.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t10.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t10.value);
        if (selectedOption) {
            txtPlace_t10.value = selectedOption.place;
            txtUnit_t10.value = selectedOption.unit;
            txtInd1_t10.value = selectedOption.indicators[0];
            txtInd2_t10.value = selectedOption.indicators[1];
            txtInd3_t10.value = selectedOption.indicators[2];
            txtInd4_t10.value = selectedOption.indicators[3];
            txtInd5_t10.value = selectedOption.indicators[4];
            txtInd6_t10.value = selectedOption.indicators[5];
            txtInd7_t10.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t10.value = '';
            txtUnit_t10.value = '';
            txtInd1_t10.value = '';
            txtInd2_t10.value = '';
            txtInd3_t10.value = '';
            txtInd4_t10.value = '';
            txtInd5_t10.value = '';
            txtInd6_t10.value = '';
            txtInd7_t10.value = '';
        }
    });
}

function calculateResults_t10() {
    const qty_t10 = parseFloat(document.getElementById("txtQty_t10").value) || 0;
    const dist_t10 = parseFloat(document.getElementById("txtDist_t10").value) || 0;
    const fuelType_t10 = parseFloat(document.getElementById("Fuel_Type_t10").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t10 = parseFloat(document.getElementById(`txtInd${i}_t10`).value) || 0;
        document.getElementById(`ResultInd${i}_t10`).value = indValue_t10 * qty_t10;
    }

    document.getElementById("ResultA4_t10").value = qty_t10 * dist_t10 * fuelType_t10;
}


// Function to update the eleventh set of material options for second table
function updateSubcategories_t11() {
    const classification_t11 = document.getElementById('material_t11').value;
    const subcategorySelect_t11 = document.getElementById('subcategory_t11');
    const txtPlace_t11 = document.getElementById('txtPlace_t11');
    const txtUnit_t11 = document.getElementById('txtUnit_t11');
    const txtInd1_t11 = document.getElementById('txtInd1_t11');
    const txtInd2_t11 = document.getElementById('txtInd2_t11');
    const txtInd3_t11 = document.getElementById('txtInd3_t11');
    const txtInd4_t11 = document.getElementById('txtInd4_t11');
    const txtInd5_t11 = document.getElementById('txtInd5_t11');
    const txtInd6_t11 = document.getElementById('txtInd6_t11');
    const txtInd7_t11 = document.getElementById('txtInd7_t11');

    subcategorySelect_t11.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t11 === 'concrete') {
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
    } else if (classification_t11 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t11 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t11 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t11 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t11 === 'glass') {
        suboptions = [
{ name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', place: 'Ain Sokhna-Egypt', unit: '1 m2', indicators: ['19.3', '19.2', '0.0672', '0.00629', '0.18', '0.00000103', '0.116', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['22.6', '22.5', '0.0802', '0.00753', '0.215', '0.0000012', '0.138', 'A4']},
{ name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.1', '0.106', '0.01', '0.284', '0.00000154', '0.183', 'A4']},
{ name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['29.2', '29.2', '0.0122', '0.00762', '0.159', '0.00000186', '0.102', 'A4']},
{ name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['35.8', '35.8', '0.0148', '0.00952', '0.197', '0.00000228', '0.126', 'A4']},
{ name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['42.4', '42.4', '0.0173', '0.0114', '0.235', '0.0000027', '0.151', 'A4']}
        ];
    } else if (classification_t11 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t11 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t11 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t11 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t11 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t11 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t11.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t11.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t11.value);
        if (selectedOption) {
            txtPlace_t11.value = selectedOption.place;
            txtUnit_t11.value = selectedOption.unit;
            txtInd1_t11.value = selectedOption.indicators[0];
            txtInd2_t11.value = selectedOption.indicators[1];
            txtInd3_t11.value = selectedOption.indicators[2];
            txtInd4_t11.value = selectedOption.indicators[3];
            txtInd5_t11.value = selectedOption.indicators[4];
            txtInd6_t11.value = selectedOption.indicators[5];
            txtInd7_t11.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t11.value = '';
            txtUnit_t11.value = '';
            txtInd1_t11.value = '';
            txtInd2_t11.value = '';
            txtInd3_t11.value = '';
            txtInd4_t11.value = '';
            txtInd5_t11.value = '';
            txtInd6_t11.value = '';
            txtInd7_t11.value = '';
        }
    });
}

function calculateResults_t11() {
    const qty_t11 = parseFloat(document.getElementById("txtQty_t11").value) || 0;
    const dist_t11 = parseFloat(document.getElementById("txtDist_t11").value) || 0;
    const fuelType_t11 = parseFloat(document.getElementById("Fuel_Type_t11").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t11 = parseFloat(document.getElementById(`txtInd${i}_t11`).value) || 0;
        document.getElementById(`ResultInd${i}_t11`).value = indValue_t11 * qty_t11;
    }

    document.getElementById("ResultA4_t11").value = qty_t11 * dist_t11 * fuelType_t11;
}


// Function to update the twelfth set of material options for second table
function updateSubcategories_t12() {
    const classification_t12 = document.getElementById('material_t12').value;
    const subcategorySelect_t12 = document.getElementById('subcategory_t12');
    const txtPlace_t12 = document.getElementById('txtPlace_t12');
    const txtUnit_t12 = document.getElementById('txtUnit_t12');
    const txtInd1_t12 = document.getElementById('txtInd1_t12');
    const txtInd2_t12 = document.getElementById('txtInd2_t12');
    const txtInd3_t12 = document.getElementById('txtInd3_t12');
    const txtInd4_t12 = document.getElementById('txtInd4_t12');
    const txtInd5_t12 = document.getElementById('txtInd5_t12');
    const txtInd6_t12 = document.getElementById('txtInd6_t12');
    const txtInd7_t12 = document.getElementById('txtInd7_t12');

    subcategorySelect_t12.innerHTML = ''; // Clear previous options

    let suboptions = [];

    // Define options for each material classification
    if (classification_t12 === 'concrete') {
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
    } else if (classification_t12 === 'bricks') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Concrete Paving Solid and hollow Bricks', place: 'New Capital, Cairo Egypt', unit: '1 m3', indicators: ['1.36E2', '7.51E‐6', '3.71E‐1', '1.12E‐1', '1.49E‐2', '4,79E‐4', '9.22E2', 'A4'] },
            { name: 'Marmox Thermoblock 14/10', place: 'Egypt', unit: '1 unit of Masonry Block (600 mm useable length x 140 mm Width x 100 mm Hight)', indicators: ['6.15E+00', '6.85E‐07', '3.03E‐02', '0.00054', '2.36E‐02', '6.91E‐05', '1.15E+02', 'A4'] },
            { name: 'red brick (generic data)', place: '', unit: '1 kg', indicators: ['0.24', '', '', '', '', '', '', ''] },
            { name: 'AAC blocks', place: 'Kwait', unit: '1 m3', indicators: ['190', '0.0000111', '0.894', '1.39', '0.44', '0.000113', '1550', 'A4'] }
        ];
    } else if (classification_t12 === 'plaster') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Gypfine almomtaz 120- smoothing compound', place: 'Amreya plant-Borg Alarab -Alexandria- Egypt', unit: '1 kg', indicators: ['0.148', '0.179', '-0.0307', '0.000161', '0.0011', '2.65E-08', '0.000505', 'A4'] },
            { name: 'GYPLAST fix', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['0.487', '0.00158', '8.9E-09', '0.000732', '0.0000159', '9.43E-08', '6.02', 'A4'] },
            { name: 'GYPLAST fill', place: 'SADAT CITY / BPB PLACO EGYPT', unit: '1 kg', indicators: ['4.69E-01', '1.51E-03', '8.86E-09', '7.19E-04', '1.39E-05', '9.31E-08', '5.8', 'A4'] },
            { name: 'Mortar( cement sand mix)', place: '', unit: '1 kg', indicators: ['0.221', '', '', '', '', '', '', ''] },
            { name: 'Mortar (cement, lime mix) ', place: '', unit: '1 kg', indicators: ['0.213', '', '', '', '', '', '', ''] }

        ];
    } else if (classification_t12 === 'insulation') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', place: 'Egypt', unit: '1 m2  of board thickness 12.5 mm', indicators: ['2.28E0', '1.17E‐7', '9.19E‐3', '1.75E‐3', '5.01E‐4', '1.06E‐4', '4.99E1', 'A4'] },
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] },
            { name: 'EPS', place: 'N/A', unit: '1 m3', indicators: ['39', '0.00000034', '0.156', '0.0159', '0.0755', '0.00000601', '959', ''] },
            { name: 'mineral wool', place: 'Saudi Arabia', unit: '1 m2', indicators: ['5,37E+00', '6,87E-07', '1,68E-02', '2,31E-03', '1,42E-03', '1,48E-06', '8,72E+01', ''] }
        ];
    } else if (classification_t12 === 'cement') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'CEM III/A 42,5 N', place: 'Alexandria', unit: '1 kg', indicators: ['821', '1.98', '0.0000602', '1.8', '0.00254', '4490', 'Ind7', 'A4'] },
            { name: 'CEM III/A 42,5 N', place: 'Lafarge Egypt-Kilo 93 Kattameia El Ein El Sokhna Suez, Egypt', unit: '1 kg', indicators: ['0.457', '0.00204', '4.07E-09', '0.00194', '0.00000243', '3.276', 'Ind7', 'A4'] },
            { name: 'portland cement-CEM I 42,5 N', place: 'El Sokhna plant, Bagged', unit: '1000 kg', indicators: ['855', '1.48', '4.92e-6', '5.84', '1.89', '0.00314', '4595', 'A4'] }
        ];
    } else if (classification_t12 === 'glass') {
        suboptions = [
{ name: 'Select name of material' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/0.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-5mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/1.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-6mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/2.png' },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-8mm', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/3.png' },
            { name: 'REFLECTASOL on PARSOL 4 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/4.png' },
            { name: 'REFLECTASOL on PARSOL 5 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: 'Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo', image: 'img/glass/5.png' },
            { name: 'REFLECTASOL on PARSOL 6 mm (Bronze, Green, Grey, Saphire Blue, Dark Blue)', manufacturer: ' Saint-Gobain Glass EGYPT, Building 12B4,Cairo Festival City, 2nd Floor, New Cairo ', image: 'img/glass/6.png' }
        ];
    } else if (classification_t12 === 'steel') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Reinforcing steel bars', place: 'Alexandria', unit: '1 ton', indicators: ['2270', '3.62E-12', '15', '30.4', '8.12', '0.000334', '27100', 'A4'] }
        ];
    } else if (classification_t12 === 'sand') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'sand (generic data)', place: '', unit: '1 kg', indicators: ['0.0051', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t12 === 'paint') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Standard paint', place: '', unit: '1 kg', indicators: ['2.91', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t12 === 'aluminium') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Aluminium', place: '', unit: '1 kg', indicators: ['1.81', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t12 === 'timber') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Timber', place: '', unit: '1 kg', indicators: ['0.72', '', '', '', '', '', '', ''] }
        ];
    } else if (classification_t12 === 'ceramic') {
        suboptions = [
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'Ceramic tiles', place: 'Saudi Arabia', unit: '1 m2', indicators: ['2,01E+01', '0.000000021', '0.11', '0.18', '0.05', '0.000072', '2,98E+02', ''] }
        ];
    }

    // Populate the "Name of material" dropdown with options
    suboptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.name;
        opt.textContent = option.name;
        subcategorySelect_t12.appendChild(opt);
    });

    // Update the fields when a subcategory is selected
    subcategorySelect_t12.addEventListener('change', function () {
        const selectedOption = suboptions.find(opt => opt.name === subcategorySelect_t12.value);
        if (selectedOption) {
            txtPlace_t12.value = selectedOption.place;
            txtUnit_t12.value = selectedOption.unit;
            txtInd1_t12.value = selectedOption.indicators[0];
            txtInd2_t12.value = selectedOption.indicators[1];
            txtInd3_t12.value = selectedOption.indicators[2];
            txtInd4_t12.value = selectedOption.indicators[3];
            txtInd5_t12.value = selectedOption.indicators[4];
            txtInd6_t12.value = selectedOption.indicators[5];
            txtInd7_t12.value = selectedOption.indicators[6];
        } else {
            // Clear fields if nothing is selected
            txtPlace_t12.value = '';
            txtUnit_t12.value = '';
            txtInd1_t12.value = '';
            txtInd2_t12.value = '';
            txtInd3_t12.value = '';
            txtInd4_t12.value = '';
            txtInd5_t12.value = '';
            txtInd6_t12.value = '';
            txtInd7_t12.value = '';
        }
    });
}

function calculateResults_t12() {
    const qty_t12 = parseFloat(document.getElementById("txtQty_t12").value) || 0;
    const dist_t12 = parseFloat(document.getElementById("txtDist_t12").value) || 0;
    const fuelType_t12 = parseFloat(document.getElementById("Fuel_Type_t12").value) || 0;

    for (let i = 1; i <= 7; i++) {
        const indValue_t12 = parseFloat(document.getElementById(`txtInd${i}_t12`).value) || 0;
        document.getElementById(`ResultInd${i}_t12`).value = indValue_t12 * qty_t12;
    }

    document.getElementById("ResultA4_t12").value = qty_t12 * dist_t12 * fuelType_t12;
}




function calculateTotalResults(event) {
    event.preventDefault();

    // الحصول على القيم من جدول 1 (t1)
    var resultInd1_t1 = parseFloat(document.getElementById("ResultInd1-t1").value) || 0;
    var resultInd2_t1 = parseFloat(document.getElementById("ResultInd2-t1").value) || 0;
    var resultInd3_t1 = parseFloat(document.getElementById("ResultInd3-t1").value) || 0;
    var resultInd4_t1 = parseFloat(document.getElementById("ResultInd4-t1").value) || 0;
    var resultInd5_t1 = parseFloat(document.getElementById("ResultInd5-t1").value) || 0;
    var resultInd6_t1 = parseFloat(document.getElementById("ResultInd6-t1").value) || 0;
    var resultInd7_t1 = parseFloat(document.getElementById("ResultInd7-t1").value) || 0;
    var resultA4_t1 = parseFloat(document.getElementById("ResultA4-t1").value) || 0;

    // الحصول على القيم من جدول 2 (t2)
    var resultInd1_t2 = parseFloat(document.getElementById("ResultInd1_t2").value) || 0;
    var resultInd2_t2 = parseFloat(document.getElementById("ResultInd2_t2").value) || 0;
    var resultInd3_t2 = parseFloat(document.getElementById("ResultInd3_t2").value) || 0;
    var resultInd4_t2 = parseFloat(document.getElementById("ResultInd4_t2").value) || 0;
    var resultInd5_t2 = parseFloat(document.getElementById("ResultInd5_t2").value) || 0;
    var resultInd6_t2 = parseFloat(document.getElementById("ResultInd6_t2").value) || 0;
    var resultInd7_t2 = parseFloat(document.getElementById("ResultInd7_t2").value) || 0;
    var resultA4_t2 = parseFloat(document.getElementById("ResultA4_t2").value) || 0;

    // الحصول على القيم من جدول 3 (t3)
    var resultInd1_t3 = parseFloat(document.getElementById("ResultInd1_t3").value) || 0;
    var resultInd2_t3 = parseFloat(document.getElementById("ResultInd2_t3").value) || 0;
    var resultInd3_t3 = parseFloat(document.getElementById("ResultInd3_t3").value) || 0;
    var resultInd4_t3 = parseFloat(document.getElementById("ResultInd4_t3").value) || 0;
    var resultInd5_t3 = parseFloat(document.getElementById("ResultInd5_t3").value) || 0;
    var resultInd6_t3 = parseFloat(document.getElementById("ResultInd6_t3").value) || 0;
    var resultInd7_t3 = parseFloat(document.getElementById("ResultInd7_t3").value) || 0;
    var resultA4_t3 = parseFloat(document.getElementById("ResultA4_t3").value) || 0;

    // حساب المجموع
    var totalInd1 = resultInd1_t1 + resultInd1_t2 + resultInd1_t3;
    var totalInd2 = resultInd2_t1 + resultInd2_t2 + resultInd2_t3;
    var totalInd3 = resultInd3_t1 + resultInd3_t2 + resultInd3_t3;
    var totalInd4 = resultInd4_t1 + resultInd4_t2 + resultInd4_t3;
    var totalInd5 = resultInd5_t1 + resultInd5_t2 + resultInd5_t3;
    var totalInd6 = resultInd6_t1 + resultInd6_t2 + resultInd6_t3;
    var totalInd7 = resultInd7_t1 + resultInd7_t2 + resultInd7_t3;
    var totalA4 = resultA4_t1 + resultA4_t2 + resultA4_t3;

    // عرض النتائج في الحقول الخاصة بالمجموع
    document.getElementById("TotalResultInd1").value = totalInd1.toFixed(2);
    document.getElementById("TotalResultInd2").value = totalInd2.toFixed(2);
    document.getElementById("TotalResultInd3").value = totalInd3.toFixed(2);
    document.getElementById("TotalResultInd4").value = totalInd4.toFixed(2);
    document.getElementById("TotalResultInd5").value = totalInd5.toFixed(2);
    document.getElementById("TotalResultInd6").value = totalInd6.toFixed(2);
    document.getElementById("TotalResultInd7").value = totalInd7.toFixed(2);
    document.getElementById("TotalResultA4").value = totalA4.toFixed(2);
}

function calculateTotalResults_Floor(event) {
    event.preventDefault();

    // الحصول على القيم من جدول 1 (t1)
    var resultInd1_t4 = parseFloat(document.getElementById("ResultInd1_t4").value) || 0;
    var resultInd2_t4 = parseFloat(document.getElementById("ResultInd2_t4").value) || 0;
    var resultInd3_t4 = parseFloat(document.getElementById("ResultInd3_t4").value) || 0;
    var resultInd4_t4 = parseFloat(document.getElementById("ResultInd4_t4").value) || 0;
    var resultInd5_t4 = parseFloat(document.getElementById("ResultInd5_t4").value) || 0;
    var resultInd6_t4 = parseFloat(document.getElementById("ResultInd6_t4").value) || 0;
    var resultInd7_t4 = parseFloat(document.getElementById("ResultInd7_t4").value) || 0;
    var resultA4_t4 = parseFloat(document.getElementById("ResultA4_t4").value) || 0;

    // الحصول على القيم من جدول 2 (t2)
    var resultInd1_t5 = parseFloat(document.getElementById("ResultInd1_t5").value) || 0;
    var resultInd2_t5 = parseFloat(document.getElementById("ResultInd2_t5").value) || 0;
    var resultInd3_t5 = parseFloat(document.getElementById("ResultInd3_t5").value) || 0;
    var resultInd4_t5 = parseFloat(document.getElementById("ResultInd4_t5").value) || 0;
    var resultInd5_t5 = parseFloat(document.getElementById("ResultInd5_t5").value) || 0;
    var resultInd6_t5 = parseFloat(document.getElementById("ResultInd6_t5").value) || 0;
    var resultInd7_t5 = parseFloat(document.getElementById("ResultInd7_t5").value) || 0;
    var resultA4_t5 = parseFloat(document.getElementById("ResultA4_t5").value) || 0;

    // الحصول على القيم من جدول 3 (t3)
    var resultInd1_t6 = parseFloat(document.getElementById("ResultInd1_t6").value) || 0;
    var resultInd2_t6 = parseFloat(document.getElementById("ResultInd2_t6").value) || 0;
    var resultInd3_t6 = parseFloat(document.getElementById("ResultInd3_t6").value) || 0;
    var resultInd4_t6 = parseFloat(document.getElementById("ResultInd4_t6").value) || 0;
    var resultInd5_t6 = parseFloat(document.getElementById("ResultInd5_t6").value) || 0;
    var resultInd6_t6 = parseFloat(document.getElementById("ResultInd6_t6").value) || 0;
    var resultInd7_t6 = parseFloat(document.getElementById("ResultInd7_t6").value) || 0;
    var resultA4_t6 = parseFloat(document.getElementById("ResultA4_t6").value) || 0;

    // حساب المجموع
    var totalInd1 = resultInd1_t4 + resultInd1_t5 + resultInd1_t6;
    var totalInd2 = resultInd2_t4 + resultInd2_t5 + resultInd2_t6;
    var totalInd3 = resultInd3_t4 + resultInd3_t5 + resultInd3_t6;
    var totalInd4 = resultInd4_t4 + resultInd4_t5 + resultInd4_t6;
    var totalInd5 = resultInd5_t4 + resultInd5_t5 + resultInd5_t6;
    var totalInd6 = resultInd6_t4 + resultInd6_t5 + resultInd6_t6;
    var totalInd7 = resultInd7_t4 + resultInd7_t5 + resultInd7_t6;
    var totalA4 = resultA4_t4 + resultA4_t5 + resultA4_t6;

    // عرض النتائج في الحقول الخاصة بالمجموع
    document.getElementById("TotalResultInd1_Floor").value = totalInd1.toFixed(2);
    document.getElementById("TotalResultInd2_Floor").value = totalInd2.toFixed(2);
    document.getElementById("TotalResultInd3_Floor").value = totalInd3.toFixed(2);
    document.getElementById("TotalResultInd4_Floor").value = totalInd4.toFixed(2);
    document.getElementById("TotalResultInd5_Floor").value = totalInd5.toFixed(2);
    document.getElementById("TotalResultInd6_Floor").value = totalInd6.toFixed(2);
    document.getElementById("TotalResultInd7_Floor").value = totalInd7.toFixed(2);
    document.getElementById("TotalResultA4_Floor").value = totalA4.toFixed(2);
}


function calculateTotalResults_Walls(event) {
    event.preventDefault();

    // الحصول على القيم من جدول 7 (t7)
    var resultInd1_t7 = parseFloat(document.getElementById("ResultInd1_t7").value) || 0;
    var resultInd2_t7 = parseFloat(document.getElementById("ResultInd2_t7").value) || 0;
    var resultInd3_t7 = parseFloat(document.getElementById("ResultInd3_t7").value) || 0;
    var resultInd4_t7 = parseFloat(document.getElementById("ResultInd4_t7").value) || 0;
    var resultInd5_t7 = parseFloat(document.getElementById("ResultInd5_t7").value) || 0;
    var resultInd6_t7 = parseFloat(document.getElementById("ResultInd6_t7").value) || 0;
    var resultInd7_t7 = parseFloat(document.getElementById("ResultInd7_t7").value) || 0;
    var resultA4_t7 = parseFloat(document.getElementById("ResultA4_t7").value) || 0;

    // الحصول على القيم من جدول 8 (t8)
    var resultInd1_t8 = parseFloat(document.getElementById("ResultInd1_t8").value) || 0;
    var resultInd2_t8 = parseFloat(document.getElementById("ResultInd2_t8").value) || 0;
    var resultInd3_t8 = parseFloat(document.getElementById("ResultInd3_t8").value) || 0;
    var resultInd4_t8 = parseFloat(document.getElementById("ResultInd4_t8").value) || 0;
    var resultInd5_t8 = parseFloat(document.getElementById("ResultInd5_t8").value) || 0;
    var resultInd6_t8 = parseFloat(document.getElementById("ResultInd6_t8").value) || 0;
    var resultInd7_t8 = parseFloat(document.getElementById("ResultInd7_t8").value) || 0;
    var resultA4_t8 = parseFloat(document.getElementById("ResultA4_t8").value) || 0;

    // الحصول على القيم من جدول 9 (t9)
    var resultInd1_t9 = parseFloat(document.getElementById("ResultInd1_t9").value) || 0;
    var resultInd2_t9 = parseFloat(document.getElementById("ResultInd2_t9").value) || 0;
    var resultInd3_t9 = parseFloat(document.getElementById("ResultInd3_t9").value) || 0;
    var resultInd4_t9 = parseFloat(document.getElementById("ResultInd4_t9").value) || 0;
    var resultInd5_t9 = parseFloat(document.getElementById("ResultInd5_t9").value) || 0;
    var resultInd6_t9 = parseFloat(document.getElementById("ResultInd6_t9").value) || 0;
    var resultInd7_t9 = parseFloat(document.getElementById("ResultInd7_t9").value) || 0;
    var resultA4_t9 = parseFloat(document.getElementById("ResultA4_t9").value) || 0;

    // حساب المجموع
    var totalInd1 = resultInd1_t7 + resultInd1_t8 + resultInd1_t9;
    var totalInd2 = resultInd2_t7 + resultInd2_t8 + resultInd2_t9;
    var totalInd3 = resultInd3_t7 + resultInd3_t8 + resultInd3_t9;
    var totalInd4 = resultInd4_t7 + resultInd4_t8 + resultInd4_t9;
    var totalInd5 = resultInd5_t7 + resultInd5_t8 + resultInd5_t9;
    var totalInd6 = resultInd6_t7 + resultInd6_t8 + resultInd6_t9;
    var totalInd7 = resultInd7_t7 + resultInd7_t8 + resultInd7_t9;
    var totalA4 = resultA4_t7 + resultA4_t8 + resultA4_t9;

    // عرض النتائج في الحقول الخاصة بالمجموع
    document.getElementById("TotalResultInd1_Walls").value = totalInd1.toFixed(2);
    document.getElementById("TotalResultInd2_Walls").value = totalInd2.toFixed(2);
    document.getElementById("TotalResultInd3_Walls").value = totalInd3.toFixed(2);
    document.getElementById("TotalResultInd4_Walls").value = totalInd4.toFixed(2);
    document.getElementById("TotalResultInd5_Walls").value = totalInd5.toFixed(2);
    document.getElementById("TotalResultInd6_Walls").value = totalInd6.toFixed(2);
    document.getElementById("TotalResultInd7_Walls").value = totalInd7.toFixed(2);
    document.getElementById("TotalResultA4_Walls").value = totalA4.toFixed(2);
}



function calculateTotalResults_Window(event) {
    event.preventDefault();

    // الحصول على القيم من جدول 10 (t10)
    var resultInd1_t10 = parseFloat(document.getElementById("ResultInd1_t10").value) || 0;
    var resultInd2_t10 = parseFloat(document.getElementById("ResultInd2_t10").value) || 0;
    var resultInd3_t10 = parseFloat(document.getElementById("ResultInd3_t10").value) || 0;
    var resultInd4_t10 = parseFloat(document.getElementById("ResultInd4_t10").value) || 0;
    var resultInd5_t10 = parseFloat(document.getElementById("ResultInd5_t10").value) || 0;
    var resultInd6_t10 = parseFloat(document.getElementById("ResultInd6_t10").value) || 0;
    var resultInd7_t10 = parseFloat(document.getElementById("ResultInd7_t10").value) || 0;
    var resultA4_t10 = parseFloat(document.getElementById("ResultA4_t10").value) || 0;

    // الحصول على القيم من جدول 11 (t11)
    var resultInd1_t11 = parseFloat(document.getElementById("ResultInd1_t11").value) || 0;
    var resultInd2_t11 = parseFloat(document.getElementById("ResultInd2_t11").value) || 0;
    var resultInd3_t11 = parseFloat(document.getElementById("ResultInd3_t11").value) || 0;
    var resultInd4_t11 = parseFloat(document.getElementById("ResultInd4_t11").value) || 0;
    var resultInd5_t11 = parseFloat(document.getElementById("ResultInd5_t11").value) || 0;
    var resultInd6_t11 = parseFloat(document.getElementById("ResultInd6_t11").value) || 0;
    var resultInd7_t11 = parseFloat(document.getElementById("ResultInd7_t11").value) || 0;
    var resultA4_t11 = parseFloat(document.getElementById("ResultA4_t11").value) || 0;

    // الحصول على القيم من جدول 12 (t12)
    var resultInd1_t12 = parseFloat(document.getElementById("ResultInd1_t12").value) || 0;
    var resultInd2_t12 = parseFloat(document.getElementById("ResultInd2_t12").value) || 0;
    var resultInd3_t12 = parseFloat(document.getElementById("ResultInd3_t12").value) || 0;
    var resultInd4_t12 = parseFloat(document.getElementById("ResultInd4_t12").value) || 0;
    var resultInd5_t12 = parseFloat(document.getElementById("ResultInd5_t12").value) || 0;
    var resultInd6_t12 = parseFloat(document.getElementById("ResultInd6_t12").value) || 0;
    var resultInd7_t12 = parseFloat(document.getElementById("ResultInd7_t12").value) || 0;
    var resultA4_t12 = parseFloat(document.getElementById("ResultA4_t12").value) || 0;

    // حساب المجموع
    var totalInd1 = resultInd1_t10 + resultInd1_t11 + resultInd1_t12;
    var totalInd2 = resultInd2_t10 + resultInd2_t11 + resultInd2_t12;
    var totalInd3 = resultInd3_t10 + resultInd3_t11 + resultInd3_t12;
    var totalInd4 = resultInd4_t10 + resultInd4_t11 + resultInd4_t12;
    var totalInd5 = resultInd5_t10 + resultInd5_t11 + resultInd5_t12;
    var totalInd6 = resultInd6_t10 + resultInd6_t11 + resultInd6_t12;
    var totalInd7 = resultInd7_t10 + resultInd7_t11 + resultInd7_t12;
    var totalA4 = resultA4_t10 + resultA4_t11 + resultA4_t12;

    // عرض النتائج في الحقول الخاصة بالمجموع
    document.getElementById("TotalResultInd1_Window").value = totalInd1.toFixed(2);
    document.getElementById("TotalResultInd2_Window").value = totalInd2.toFixed(2);
    document.getElementById("TotalResultInd3_Window").value = totalInd3.toFixed(2);
    document.getElementById("TotalResultInd4_Window").value = totalInd4.toFixed(2);
    document.getElementById("TotalResultInd5_Window").value = totalInd5.toFixed(2);
    document.getElementById("TotalResultInd6_Window").value = totalInd6.toFixed(2);
    document.getElementById("TotalResultInd7_Window").value = totalInd7.toFixed(2);
    document.getElementById("TotalResultA4_Window").value = totalA4.toFixed(2);
}



// حساب القيم في آخر صف الخاص بالـ Total Impact
document.getElementById("btnTotalImpact").addEventListener("click", function (event) {
    event.preventDefault();
    // Function to calculate the total for a given set of IDs
    function calculateTotal(impactId, resultIds) {
        let total = 0;
        resultIds.forEach(id => {
            let value = parseFloat(document.getElementById(id).value) || 0; // Default to 0 if value is empty
            total += value;
        });
        document.getElementById(impactId).value = total.toFixed(2); // Update the TotalImpact field
    }

    // Define the mappings of TotalImpact fields and their related input fields
    const mappings = {
        TotalImpact1: ["TotalResultInd1", "TotalResultInd1_Floor", "TotalResultInd1_Walls", "TotalResultInd1_Window"],
        TotalImpact2: ["TotalResultInd2", "TotalResultInd2_Floor", "TotalResultInd2_Walls", "TotalResultInd2_Window"],
        TotalImpact3: ["TotalResultInd3", "TotalResultInd3_Floor", "TotalResultInd3_Walls", "TotalResultInd3_Window"],
        TotalImpact4: ["TotalResultInd4", "TotalResultInd4_Floor", "TotalResultInd4_Walls", "TotalResultInd4_Window"],
        TotalImpact5: ["TotalResultInd5", "TotalResultInd5_Floor", "TotalResultInd5_Walls", "TotalResultInd5_Window"],
        TotalImpact6: ["TotalResultInd6", "TotalResultInd6_Floor", "TotalResultInd6_Walls", "TotalResultInd6_Window"],
        TotalImpact7: ["TotalResultInd7", "TotalResultInd7_Floor", "TotalResultInd7_Walls", "TotalResultInd7_Window"],
        TotalImpactA4: ["TotalResultA4", "TotalResultA4_Floor", "TotalResultA4_Walls", "TotalResultA4_Window"]
    };

    // Iterate over the mappings and calculate totals
    for (const [impactId, resultIds] of Object.entries(mappings)) {
        calculateTotal(impactId, resultIds);
    }
});







// منع فتح أدوات المطورين
document.addEventListener("keydown", function (e) {
    // منع F12 (أدوات المطور)
    if (e.keyCode === 123) {
        e.preventDefault();
    }

    // منع Ctrl+Shift+I (أدوات المطور)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }

    // منع Ctrl+U (عرض الصفحة المصدر)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});

// منع استخدام زر الماوس الأيمن
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
