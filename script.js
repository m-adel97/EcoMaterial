<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <title>Eco Metric</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }

        img {
            max-width: 100%;
            height: auto;
            transition: transform 0.2s ease;
            /* Smooth transition for zoom effect */
            cursor: pointer;
            /* Change cursor to pointer */
        }

        img:hover {
            transform: scale(1.1);
            /* Slightly increase size on hover */
        }

        /* Modal styles */
        .modal {
            display: none;
            /* Hidden by default */
            position: fixed;
            /* Stay in place */
            z-index: 1000;
            /* Sit on top */
            left: 0;
            top: 0;
            width: 100%;
            /* Full width */
            height: 100%;
            /* Full height */
            overflow: auto;
            /* Enable scroll if needed */
            background-color: rgba(0, 0, 0, 0.8);
            /* Black with opacity */
        }

        .modal-content {
            margin: 15% auto;
            /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            /* Could be more or less, depending on screen size */
            text-align: center;
        }

        .close {
            color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
        }

        .zoomed {
            max-width: 100%;
            height: auto;
        }

        button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            align-items: center;
        }

        button:hover {
            background-color: #0056b3;
        }

        button:active {
            background-color: #003d80;
            transform: scale(0.98);
        }

        .btnClear {
            background: rgba(255, 0, 60, 1);
        }

        .btnClear:hover {
            background: maroon;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Phase One<br>(Classification or Filter)</h2>
        <form>
            <label for="classification">Classification of material</label>
            <select id="classification" onchange="updateMaterialOptions()">
                <option value="none">Select classification</option>
                <option value="concrete">Concrete</option>
                <option value="bricks">Bricks</option>
                <option value="plaster">Plaster</option>
                <option value="insulation">Insulation</option>
                <option value="cement">Cement</option>
                <option value="glass">Glass</option>
                <option value="steel">Steel</option>
            </select>

            <label for="name">Name of material</label>
            <select id="name">
                <option value="none">Select name of material</option>
            </select>

            <h3>Result:</h3>
            <p>1- Name of manufacture</p>
            <input type="text" id="manufacture" placeholder="Manufacturer" readonly />
            <p>2- life cycle & environmental impact indicator:</p>
            <center><img id="material-image" src="" alt="Material Image"
                    style="display:none; width: 200px; height: auto;"></center>

            <!-- Modal for enlarged image -->
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" id="closeBtn">&times;</span>
                    <img id="enlarged-image" src="" alt="Enlarged Material Image" class="zoomed">
                </div>
            </div>
        </form>

        <h2>Phase Two</h2>
        <form>
            <div class="indicators">
                <h3>LCA Indicator A1-A3</h3>
                <ul>
                    <li>(GWP): Global warming potential</li>
                    <li>(ODP): Ozone Depletion Potential</li>
                    <li>(AP): Acidification potential</li>
                    <li>(EP): Eutrophication potential</li>
                    <li>(POPC): Photochemical ozone creation</li>
                    <li>(ADP): Abiotic depletion potential for non-fossil ressources</li>
                    <li>(ADP-fossil fuels): Abiotic depletion potential for fossil ressources</li>
                </ul>
            </div>

            <div>
                <!-- <label>Google Map Link</label> -->
                <!-- <input type="text" id="google-map-link" placeholder="Google Map Link" disabled="disabled"> -->
                <a href="https://www.google.com/maps/@29.9859968,30.916608,13z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank" style="margin-right: 20px;">Google Maps to calculate distance below</a>
                <a href="Distances.pdf" target="_blank">Distance Guide</a>
                <!--<a href="Distances.XLSX" target="_blank">Download Distance Guide</a>-->
                <h3>1) Foundation of material</h3>

                <!-- First Table -->
                <form>
                    <label for="material">Classification of material</label>
                    <select id="material" onchange="updateSubcategories()">
                        <option value="none">Select classification</option>
                        <option value="concrete">Concrete</option>
                        <option value="bricks">Bricks</option>
                        <option value="plaster">Plaster</option>
                        <option value="insulation">Insulation</option>
                        <option value="cement">Cement</option>
                        <option value="glass">Glass</option>
                        <option value="steel">Steel</option>
                        <option value="sand">Sand</option>
                        <option value="paint">Paint</option>
                        <option value="aluminium">Aluminium</option>
                        <option value="timber">Timber</option>
                    </select>

                    <label for="subcategory">Name of material</label>
                    <select id="subcategory">
                        <option value="">Select name of material</option>
                    </select>

                </form>

                <div class="quantity-table">
                    <p>Quantity, Unit, Distance (m), Indicator values:</p>
                    <div style="overflow-x: auto">
                        <table>
                            <tr>
                                <th>Qty</th>
                                <th>Dist (m)</th>
                                <th>Fuel Type</th>
                                <th>Place of production</th>
                                <th>Unit</th>
                                <th>(GWP)</th>
                                <th>(ODP)</th>
                                <th>(AP)</th>
                                <th>(EP)</th>
                                <th>(POPC)</th>
                                <th>(ADP)</th>
                                <th>(ADP-fossil fuels)</th>
                                <th>A4</th>
                            </tr>

                            <tr>
                                <td><input id="txtQty" type="text" placeholder="Qty" oninput="calculateResults()"></td>
                                <td><input id="txtDist" type="text" placeholder="Distance" oninput="calculateResults()">
                                </td>
                                <td>
                                    <select id="Fuel_Type" onchange="calculateResults()">
                                        <option value="0.26">Light Oil</option>
                                        <option value="0.18">Natural Gas</option>
                                        <option value="2.6">Diesel</option>
                                    </select>
                                </td>
                                <td><input id="txtPlace" type="text" placeholder="PlaceOfProduction"
                                        disabled="disabled"></td>
                                <td><input id="txtUnit" type="text" placeholder="Unit" disabled="disabled"></td>
                                <td><input id="txtInd1" type="text" placeholder="Ind(1)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd2" type="text" placeholder="Ind(2)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd3" type="text" placeholder="Ind(3)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd4" type="text" placeholder="Ind(4)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd5" type="text" placeholder="Ind(5)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd6" type="text" placeholder="Ind(6)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td><input id="txtInd7" type="text" placeholder="Ind(7)" disabled="disabled"
                                        oninput="calculateResults()"></td>
                                <td class="blankCell"></td>
                            </tr>
                            <tr>
                                <td colspan="5"><label>Result:</label></td>
                                <td><input id="ResultInd1-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd2-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd3-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd4-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd5-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd6-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultInd7-t1" type="text" placeholder="Result" disabled="disabled"></td>
                                <td><input id="ResultA4-t1" type="text" placeholder="Result" disabled="disabled"></td>
                            </tr>
                        </table>
                    </div>

                    <!-- Second Table -->
                    <label for="material_t2">Classification of material</label>
                    <select id="material_t2" onchange="updateSubcategories_t2()">
                        <option value="none">Select classification</option>
                        <option value="concrete">Concrete</option>
                        <option value="bricks">Bricks</option>
                        <option value="plaster">Plaster</option>
                        <option value="insulation">Insulation</option>
                        <option value="cement">Cement</option>
                        <option value="glass">Glass</option>
                        <option value="steel">Steel</option>
                        <option value="sand">Sand</option>
                        <option value="paint">Paint</option>
                        <option value="aluminium">Aluminium</option>
                        <option value="timber">Timber</option>
                    </select>

                    <label for="subcategory_t2">Name of material</label>
                    <select id="subcategory_t2">
                        <option value="">Select name of material</option>
                    </select>

                    <div class="quantity-table">
                        <p>Quantity, Unit, Distance (m), Indicator values:</p>
                        <div style="overflow-x: auto">
                            <table>
                                <tr>
                                    <th>Qty</th>
                                    <th>Dist (m)</th>
                                    <th>Fuel Type</th>
                                    <th>Place of production</th>
                                    <th>Unit</th>
                                    <th>(GWP)</th>
                                    <th>(ODP)</th>
                                    <th>(AP)</th>
                                    <th>(EP)</th>
                                    <th>(POPC)</th>
                                    <th>(ADP)</th>
                                    <th>(ADP-fossil fuels)</th>
                                    <th>A4</th>
                                </tr>

                                <tr>
                                    <td><input id="txtQty_t2" type="text" placeholder="Qty"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtDist_t2" type="text" placeholder="Distance"
                                            oninput="calculateResults_t2()"></td>
                                    <td>
                                        <select id="Fuel_Type_t2" onchange="calculateResults_t2()">
                                            <option value="0.26">Light Oil</option>
                                            <option value="0.18">Natural Gas</option>
                                            <option value="2.6">Diesel</option>
                                        </select>
                                    </td>
                                    <td><input id="txtPlace_t2" type="text" placeholder="PlaceOfProduction"
                                            disabled="disabled"></td>
                                    <td><input id="txtUnit_t2" type="text" placeholder="Unit" disabled="disabled"></td>
                                    <td><input id="txtInd1_t2" type="text" placeholder="Ind(1)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd2_t2" type="text" placeholder="Ind(2)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd3_t2" type="text" placeholder="Ind(3)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd4_t2" type="text" placeholder="Ind(4)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd5_t2" type="text" placeholder="Ind(5)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd6_t2" type="text" placeholder="Ind(6)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td><input id="txtInd7_t2" type="text" placeholder="Ind(7)" disabled="disabled"
                                            oninput="calculateResults_t2()"></td>
                                    <td class="blankCell"></td>
                                </tr>
                                <tr>
                                    <td colspan="5"><label>Result:</label></td>
                                    <td><input id="ResultInd1_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd2_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd3_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd4_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd5_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd6_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd7_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultA4_t2" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <!-- Third Table -->
                    <label for="material_t3">Classification of material</label>
                    <select id="material_t3" onchange="updateSubcategories_t3()">
                        <option value="none">Select classification</option>
                        <option value="concrete">Concrete</option>
                        <option value="bricks">Bricks</option>
                        <option value="plaster">Plaster</option>
                        <option value="insulation">Insulation</option>
                        <option value="cement">Cement</option>
                        <option value="glass">Glass</option>
                        <option value="steel">Steel</option>
                        <option value="sand">Sand</option>
                        <option value="paint">Paint</option>
                        <option value="aluminium">Aluminium</option>
                        <option value="timber">Timber</option>
                    </select>

                    <label for="subcategory_t3">Name of material</label>
                    <select id="subcategory_t3">
                        <option value="">Select name of material</option>
                    </select>

                    <div class="quantity-table">
                        <p>Quantity, Unit, Distance (m), Indicator values:</p>
                        <div style="overflow-x: auto">
                            <table>
                                <tr>
                                    <th>Qty</th>
                                    <th>Dist (m)</th>
                                    <th>Fuel Type</th>
                                    <th>Place of production</th>
                                    <th>Unit</th>
                                    <th>(GWP)</th>
                                    <th>(ODP)</th>
                                    <th>(AP)</th>
                                    <th>(EP)</th>
                                    <th>(POPC)</th>
                                    <th>(ADP)</th>
                                    <th>(ADP-fossil fuels)</th>
                                    <th>A4</th>
                                </tr>

                                <tr>
                                    <td><input id="txtQty_t3" type="text" placeholder="Qty"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtDist_t3" type="text" placeholder="Distance"
                                            oninput="calculateResults_t3()"></td>
                                    <td>
                                        <select id="Fuel_Type_t3" onchange="calculateResults_t3()">
                                            <option value="0.26">Light Oil</option>
                                            <option value="0.18">Natural Gas</option>
                                            <option value="2.6">Diesel</option>
                                        </select>
                                    </td>
                                    <td><input id="txtPlace_t3" type="text" placeholder="PlaceOfProduction"
                                            disabled="disabled"></td>
                                    <td><input id="txtUnit_t3" type="text" placeholder="Unit" disabled="disabled"></td>
                                    <td><input id="txtInd1_t3" type="text" placeholder="Ind(1)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd2_t3" type="text" placeholder="Ind(2)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd3_t3" type="text" placeholder="Ind(3)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd4_t3" type="text" placeholder="Ind(4)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd5_t3" type="text" placeholder="Ind(5)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd6_t3" type="text" placeholder="Ind(6)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td><input id="txtInd7_t3" type="text" placeholder="Ind(7)" disabled="disabled"
                                            oninput="calculateResults_t3()"></td>
                                    <td class="blankCell"></td>
                                </tr>
                                <tr>
                                    <td colspan="5"><label>Result:</label></td>
                                    <td><input id="ResultInd1_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd2_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd3_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd4_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd5_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd6_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultInd7_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                    <td><input id="ResultA4_t3" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                </tr>
                            </table>
                            <center><button onclick="calculateTotalResults(event)">Calculate</button></center>

                            <table>
                                <tr style="background-color: white;">
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                    <td style="border:0;"></td>
                                </tr>
                                <tr>
                                    <td colspan="5"><label>Total LCA for Foundation:</label></td>
                                    <td><input id="TotalResultInd1" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd2" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd3" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd4" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd5" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd6" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultInd7" type="text" placeholder="Result"
                                            disabled="disabled">
                                    </td>
                                    <td><input id="TotalResultA4" type="text" placeholder="Result" disabled="disabled">
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <h3>2) Floor & Roofs</h3>
        <!-- Fourth Table -->
        <label for="material_t4">Classification of material</label>
        <select id="material_t4" onchange="updateSubcategories_t4()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t4">Name of material</label>
        <select id="subcategory_t4">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t4" type="text" placeholder="Qty" oninput="calculateResults_t4()"></td>
                        <td><input id="txtDist_t4" type="text" placeholder="Distance" oninput="calculateResults_t4()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t4" onchange="calculateResults_t4()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t4" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t4" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t4" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd2_t4" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd3_t4" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd4_t4" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd5_t4" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd6_t4" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td><input id="txtInd7_t4" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t4()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd2_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd3_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd4_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd5_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd6_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd7_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultA4_t4" type="text" placeholder="Result" disabled="disabled">
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Fifth Table -->
        <label for="material_t5">Classification of material</label>
        <select id="material_t5" onchange="updateSubcategories_t5()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t5">Name of material</label>
        <select id="subcategory_t5">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t5" type="text" placeholder="Qty" oninput="calculateResults_t5()"></td>
                        <td><input id="txtDist_t5" type="text" placeholder="Distance" oninput="calculateResults_t5()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t5" onchange="calculateResults_t5()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t5" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t5" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t5" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd2_t5" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd3_t5" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd4_t5" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd5_t5" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd6_t5" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td><input id="txtInd7_t5" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t5()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd2_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd3_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd4_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd5_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd6_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd7_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultA4_t5" type="text" placeholder="Result" disabled="disabled">
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Sixth Table -->
        <label for="material_t6">Classification of material</label>
        <select id="material_t6" onchange="updateSubcategories_t6()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t6">Name of material</label>
        <select id="subcategory_t6">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t6" type="text" placeholder="Qty" oninput="calculateResults_t6()"></td>
                        <td><input id="txtDist_t6" type="text" placeholder="Distance" oninput="calculateResults_t6()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t6" onchange="calculateResults_t6()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t6" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t6" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t6" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd2_t6" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd3_t6" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd4_t6" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd5_t6" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd6_t6" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td><input id="txtInd7_t6" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t6()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd2_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd3_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd4_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd5_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd6_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                        <td><input id="ResultInd7_t6" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t6" type="text" placeholder="Result" disabled="disabled">
                        </td>
                    </tr>
                </table>
                <form>
                    <center><button onclick="calculateTotalResults_Floor(event)">Calculate</button></center>

                    <table>
                        <tr style="background-color: white;">
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                        </tr>
                        <tr>
                            <td colspan="5"><label>Total LCA for Floor & Roofs:</label></td>
                            <td><input id="TotalResultInd1_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd2_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd3_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd4_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd5_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd6_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd7_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultA4_Floor" type="text" placeholder="Result" disabled="disabled">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

        <h3>3) Walls</h3>
        <!-- Seventh Table -->
        <label for="material_t7">Classification of material</label>
        <select id="material_t7" onchange="updateSubcategories_t7()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t7">Name of material</label>
        <select id="subcategory_t7">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t7" type="text" placeholder="Qty" oninput="calculateResults_t7()"></td>
                        <td><input id="txtDist_t7" type="text" placeholder="Distance" oninput="calculateResults_t7()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t7" onchange="calculateResults_t7()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t7" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t7" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t7" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd2_t7" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd3_t7" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd4_t7" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd5_t7" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd6_t7" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td><input id="txtInd7_t7" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t7()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t7" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t7" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Eighth Table -->
        <label for="material_t8">Classification of material</label>
        <select id="material_t8" onchange="updateSubcategories_t8()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t8">Name of material</label>
        <select id="subcategory_t8">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t8" type="text" placeholder="Qty" oninput="calculateResults_t8()"></td>
                        <td><input id="txtDist_t8" type="text" placeholder="Distance" oninput="calculateResults_t8()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t8" onchange="calculateResults_t8()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t8" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t8" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t8" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd2_t8" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd3_t8" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd4_t8" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd5_t8" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd6_t8" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td><input id="txtInd7_t8" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t8()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t8" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t8" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Ninth Table -->
        <label for="material_t9">Classification of material</label>
        <select id="material_t9" onchange="updateSubcategories_t9()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t9">Name of material</label>
        <select id="subcategory_t9">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t9" type="text" placeholder="Qty" oninput="calculateResults_t9()"></td>
                        <td><input id="txtDist_t9" type="text" placeholder="Distance" oninput="calculateResults_t9()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t9" onchange="calculateResults_t9()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t9" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t9" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t9" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd2_t9" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd3_t9" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd4_t9" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd5_t9" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd6_t9" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td><input id="txtInd7_t9" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t9()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t9" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t9" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>
                <form>
                    <center><button onclick="calculateTotalResults_Walls(event)">Calculate</button></center>

                    <table>
                        <tr style="background-color: white;">
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                        </tr>
                        <tr>
                            <td colspan="5"><label>Total LCA for Walls:</label></td>
                            <td><input id="TotalResultInd1_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd2_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd3_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd4_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd5_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd6_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd7_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultA4_Walls" type="text" placeholder="Result" disabled="disabled">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

        <h3>4) Window</h3>
        <!-- Tenth Table -->
        <label for="material_t10">Classification of material</label>
        <select id="material_t10" onchange="updateSubcategories_t10()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t10">Name of material</label>
        <select id="subcategory_t10">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t10" type="text" placeholder="Qty" oninput="calculateResults_t10()"></td>
                        <td><input id="txtDist_t10" type="text" placeholder="Distance" oninput="calculateResults_t10()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t10" onchange="calculateResults_t10()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t10" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t10" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t10" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd2_t10" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd3_t10" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd4_t10" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd5_t10" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd6_t10" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td><input id="txtInd7_t10" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t10()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t10" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t10" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Eleventh Table -->
        <label for="material_t11">Classification of material</label>
        <select id="material_t11" onchange="updateSubcategories_t11()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t11">Name of material</label>
        <select id="subcategory_t11">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t11" type="text" placeholder="Qty" oninput="calculateResults_t11()"></td>
                        <td><input id="txtDist_t11" type="text" placeholder="Distance" oninput="calculateResults_t11()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t11" onchange="calculateResults_t11()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t11" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t11" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t11" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd2_t11" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd3_t11" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd4_t11" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd5_t11" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd6_t11" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td><input id="txtInd7_t11" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t11()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t11" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t11" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Twelfth Table -->
        <label for="material_t12">Classification of material</label>
        <select id="material_t12" onchange="updateSubcategories_t12()">
            <option value="none">Select classification</option>
            <option value="concrete">Concrete</option>
            <option value="bricks">Bricks</option>
            <option value="plaster">Plaster</option>
            <option value="insulation">Insulation</option>
            <option value="cement">Cement</option>
            <option value="glass">Glass</option>
            <option value="steel">Steel</option>
            <option value="sand">Sand</option>
            <option value="paint">Paint</option>
            <option value="aluminium">Aluminium</option>
            <option value="timber">Timber</option>
        </select>

        <label for="subcategory_t12">Name of material</label>
        <select id="subcategory_t12">
            <option value="">Select name of material</option>
        </select>

        <div class="quantity-table">
            <p>Quantity, Unit, Distance (m), Indicator values:</p>
            <div style="overflow-x: auto">
                <table>
                    <tr>
                        <th>Qty</th>
                        <th>Dist (m)</th>
                        <th>Fuel Type</th>
                        <th>Place of production</th>
                        <th>Unit</th>
                        <th>(GWP)</th>
                        <th>(ODP)</th>
                        <th>(AP)</th>
                        <th>(EP)</th>
                        <th>(POPC)</th>
                        <th>(ADP)</th>
                        <th>(ADP-fossil fuels)</th>
                        <th>A4</th>
                    </tr>

                    <tr>
                        <td><input id="txtQty_t12" type="text" placeholder="Qty" oninput="calculateResults_t12()"></td>
                        <td><input id="txtDist_t12" type="text" placeholder="Distance" oninput="calculateResults_t12()">
                        </td>
                        <td>
                            <select id="Fuel_Type_t12" onchange="calculateResults_t12()">
                                <option value="0.26">Light Oil</option>
                                <option value="0.18">Natural Gas</option>
                                <option value="2.6">Diesel</option>
                            </select>
                        </td>
                        <td><input id="txtPlace_t12" type="text" placeholder="PlaceOfProduction" disabled="disabled">
                        </td>
                        <td><input id="txtUnit_t12" type="text" placeholder="Unit" disabled="disabled"></td>
                        <td><input id="txtInd1_t12" type="text" placeholder="Ind(1)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd2_t12" type="text" placeholder="Ind(2)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd3_t12" type="text" placeholder="Ind(3)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd4_t12" type="text" placeholder="Ind(4)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd5_t12" type="text" placeholder="Ind(5)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd6_t12" type="text" placeholder="Ind(6)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td><input id="txtInd7_t12" type="text" placeholder="Ind(7)" disabled="disabled"
                                oninput="calculateResults_t12()"></td>
                        <td class="blankCell"></td>
                    </tr>
                    <tr>
                        <td colspan="5"><label>Result:</label></td>
                        <td><input id="ResultInd1_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd2_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd3_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd4_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd5_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd6_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultInd7_t12" type="text" placeholder="Result" disabled="disabled"></td>
                        <td><input id="ResultA4_t12" type="text" placeholder="Result" disabled="disabled"></td>
                    </tr>
                </table>

                <form>
                    <center><button onclick="calculateTotalResults_Window(event)">Calculate</button></center>

                    <table>
                        <tr style="background-color: white;">
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                        </tr>
                        <tr>
                            <td colspan="5"><label>Total LCA for Window:</label></td>
                            <td><input id="TotalResultInd1_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd2_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd3_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd4_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd5_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd6_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultInd7_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalResultA4_Window" type="text" placeholder="Result" disabled="disabled">
                            </td>
                        </tr>
                    </table>
    
                    <button id="btnTtotalImpact">Calculate Total Impact</button>

                    <table>
                        <tr style="background-color: white;">
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                            <td style="border:0;"></td>
                        </tr>
                        <tr>
                            <td colspan="5"><label>Total environmental impacts of the building:</label></td>
                            <td><input id="TotalImpact1" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact2" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact3" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact4" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact5" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact6" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpact7" type="text" placeholder="Result" disabled="disabled">
                            </td>
                            <td><input id="TotalImpactA4" type="text" placeholder="Result" disabled="disabled">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

        <button id="updateChartBtn">Update Charts</button>
        <button id="btnClear" class="btnClear" onclick="Clear()">Clear</button>
        <h2>Phase Three</h2>
        <div class="charts">
            <div class="chart-container">
                <canvas id="chart1"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="chart2"></canvas>
            </div>
        </div>
    </div>

    <script>
        // Sample data for charts (initially zeroed)
        const data1 = {
            labels: ['Foundation', 'Floor', 'Walls', 'Window'],
            datasets: [{
                label: 'Design 1',
                data: [0, 0, 0, 0], // Starting with zeros
                backgroundColor: 'rgba(0, 162, 255, 0.2)',
                borderColor: 'rgba(0, 162, 255, 1)',
                borderWidth: 1
            }]
        };

        const data2 = {
            labels: ['Foundation', 'Floor', 'Walls', 'Window'],
            datasets: [{
                label: 'Design 2',
                data: [0, 0, 0, 0], // Starting with zeros
                backgroundColor: 'rgba(0, 255, 132, 0.2)',
                borderColor: 'rgba(0, 255, 132, 1)',
                borderWidth: 1
            }]
        };

        // Initialize charts
        const ctx1 = document.getElementById('chart1').getContext('2d');
        const ctx2 = document.getElementById('chart2').getContext('2d');

        const chart1 = new Chart(ctx1, {
            type: 'bar',
            data: data1,
            options: {
                responsive: true,
                maintainAspectRatio: false, // Important for responsiveness
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,  // Adjust step size if needed
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top', // Set the legend position
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                    }
                }
            }
        });

        const chart2 = new Chart(ctx2, {
            type: 'bar',
            data: data2,
            options: {
                responsive: true,
                maintainAspectRatio: false, // Important for responsiveness
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,  // Adjust step size if needed
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top', // Set the legend position
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                    }
                }
            }
        });

        // Function to update charts based on the values from the input boxes
        document.getElementById('updateChartBtn').addEventListener('click', function () {
            // Get values from the textboxes
            const totalResultInd1 = parseFloat(document.getElementById('TotalResultInd1').value) || 0;
            const totalResultInd1_Floor = parseFloat(document.getElementById('TotalResultInd1_Floor').value) || 0;
            const totalResultInd1_Walls = parseFloat(document.getElementById('TotalResultInd1_Walls').value) || 0;
            const totalResultInd1_Window = parseFloat(document.getElementById('TotalResultInd1_Window').value) || 0;

            const newValues = [totalResultInd1, totalResultInd1_Floor, totalResultInd1_Walls, totalResultInd1_Window];

            // Check if all values in chart1 are zero
            const isChart1Empty = chart1.data.datasets[0].data.every(value => value === 0);

            if (isChart1Empty) {
                // If chart1 is empty, update chart1 with the new values
                chart1.data.datasets[0].data = newValues;
                chart1.update();
            } else {
                // If chart1 already has values, update chart2 with the new values
                chart2.data.datasets[0].data = newValues;
                chart2.update();
            }
        });


        function Clear() {
            // مسح كل القيم في الـ TextBoxes
            const textboxes = document.querySelectorAll('input[type="text"]');
            textboxes.forEach(box => box.value = '');

            // تحديث القوائم المنسدلة
            const selectElements = document.querySelectorAll('select');
            selectElements.forEach(select => {
                // تحديد الخيار "Select classification" إذا موجود
                const classificationOption = [...select.options].find(opt => opt.textContent === 'Select classification');
                if (classificationOption) {
                    select.value = classificationOption.value;  // تحديد الخيار المطلوب
                }

                // تحديد الخيار "Select name of material" إذا موجود
                const materialOption = [...select.options].find(opt => opt.textContent === 'Select name of material');
                if (materialOption) {
                    select.value = materialOption.value;  // تحديد الخيار المطلوب
                }
            });

            // إخفاء الصور الظاهرة في الصفحة
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                if (img.style.display !== 'none') {
                    img.setAttribute('data-src', img.src); // حفظ مصدر الصورة مؤقتاً
                    img.style.display = 'none';  // إخفاء الصورة
                }
            });

        }


    </script>

    <script src="script.js"></script>
</body>

</html>
