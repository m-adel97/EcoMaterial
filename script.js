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
            { name: 'Reinforced horizontal concrete for slabs and beams grade C40 ready mix concrete', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/con.png' },
            { name: 'Reinforced Structure elements of substructure grade C40 Raft Foundation (Ready-mix concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/con.png' },
            { name: 'Vertical elements superstructure (Columns) Grade C50 (Ready-mix Concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/con.png' },
            { name: 'Vertical superstructure Durable Concrete grade C50 MPA (Ready Mix Concrete)', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/con.png' },
            { name: 'Concrete Paving Solid and hollow Bricks', manufacturer: 'Alfalah Ready Mix LLC', image: 'img/con.png' },
            { name: '45_MPA_Early strength concrete', manufacturer: 'Ghrghar Group -Al wafaa W Amal City, Cairo ghrghar.com/group-company', image: 'img/con.png' },
            { name: 'Foundations and Columns', manufacturer: 'Ghrghar Group -Al wafaa W Amal City, Cairo ghrghar.com/group-company', image: 'img/con.png' },
            { name: 'Slab production', manufacturer: 'Red Sea Ready Mix (Orascom) - Head Office: 2005 A Corniche El Nil, Ramlet Boulaq, Nile City Towers, North Tower, 14th Floor – Cairo EGYPT - http://www.rsc.com.eg/', image: 'img/con.png' },
            { name: 'Foundation and Piles', manufacturer: 'Red Sea Ready Mix (Orascom) - Head Office: 2005 A Corniche El Nil, Ramlet Boulaq, Nile City Towers, North Tower, 14th Floor – Cairo EGYPT - http://www.rsc.com.eg/', image: 'img/con.png' }
        ];
    } else if (classification === 'bricks') {
        options = [
            { name: 'Select name of material' },
            { name: 'Marmox Thermoblock 14/10', manufacturer: 'Marmox Egypt - CMB', image: 'img/con.png' }
        ];
    } else if (classification === 'plaster') {
        options = [
            { name: 'Select name of material' }
        ];
    } else if (classification === 'insulation') {
        options = [
            { name: 'Select name of material' },
            { name: 'Marmox Tile Backer Board-insulation board 12.5 thickness', manufacturer: 'Marmox Egypt - CMB', image: 'img/con.png' }
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
