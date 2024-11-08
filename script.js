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
    const txtA4_t12 = document.getElementById('txtA4_t12');

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
            { name: 'Bitumen', place: '', unit: '1 kg', indicators: ['0.55', '', '', '', '', '', '', ''] }
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
            { name: 'Select name of material', place: '', unit: '', indicators: ['', '', '', '', '', '', '', ''] },
            { name: 'REFLECTASOL Clear (on PLANILUX)-Pyrolytic CVD coated glass-4mm', place: 'El Sokhna plant, Bagged', unit: '1 m2', indicators: ['16', '15.9', '0.0542', '0.00504', '0.145', '0.00000086', '0.0931', 'A4'] }
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
            txtA4_t12.value = selectedOption.indicators[7];
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
            txtA4_t12.value = '';
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
