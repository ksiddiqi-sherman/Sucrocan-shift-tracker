// ============================================================
//  SUCROCAN CANADA INC — SHIFT TRACKER CONFIGURATION
//  Edit the values below to match current rates and prices.
// ============================================================

const CONFIG = {

  company: "Sucrocan Canada Inc.",
  plant:   "Sherman Refinery",

  // ----------------------------------------------------------
  //  LABOUR — Hourly rates (CAD $)
  //  Each shift is fixed at 12 hours.
  //  Shippers and Maintenance Techs have individual rates.
  // ----------------------------------------------------------
  labourRates: {
    operatingSupervisor:  37.00,   // 1 per shift
    stationaryEngineer:   40.00,   // 1 per shift
    centrifugeOperator:   30.00,   // 1 per shift
    refineryOperator:     27.00,   // 1 per shift
    qualityControlTech:   25.00,   // 1 per shift
    rawSugarLoader:       25.00,   // 1 per shift
    shipper1:             27.00,   // Shipper 1
    shipper2:             23.50,   // Shipper 2
    maintenanceTech1:     27.00,   // Maintenance Tech 1
    maintenanceTech2:     24.00,   // Maintenance Tech 2
  },

  // Headcount per shift — each entry is exactly 1 person
  labourHeadcount: {
    operatingSupervisor:  1,
    stationaryEngineer:   1,
    centrifugeOperator:   1,
    refineryOperator:     1,
    qualityControlTech:   1,
    rawSugarLoader:       1,
    shipper1:             1,
    shipper2:             1,
    maintenanceTech1:     1,
    maintenanceTech2:     1,
  },

  // ----------------------------------------------------------
  //  FORKLIFTS — 5 units in plant, fixed monthly rental
  //  Per-shift cost = (monthlyRate × quantity) ÷ (30 days × 2 shifts)
  // ----------------------------------------------------------
  forklifts: {
    quantity:      5,
    monthlyRateEach: 1125.00,   // CAD $ / forklift / month
    // Auto-calculated: 5 × $1,125 ÷ 60 shifts = $93.75 / shift
    get perShiftTotal() {
      return (this.quantity * this.monthlyRateEach) / (30 * 2);
    },
  },

  // ----------------------------------------------------------
  //  ENERGY PRICES
  // ----------------------------------------------------------
  energyPrices: {
    waterPerM3:          0.85,   // $ / m³
    naturalGasPerM3:     0.42,   // $ / m³
    electricityPerKwh:   0.095,  // $ / kWh
  },

  // ----------------------------------------------------------
  //  PROCESSING AIDS & CONSUMABLES
  // ----------------------------------------------------------
  materialPrices: {
    dePerKg:       1.80,   // $ / kg  (each bag = 20 kg)
    bagFilterEach: 12.50,  // $ / bag filter
    toteBagEach:    8.00,  // $ / tote bag
  },

  // ----------------------------------------------------------
  //  SILOS — names and capacities (MT)
  //  Add or rename silos to match your facility.
  // ----------------------------------------------------------
  silos: {
    liquid: [
      { id: "LS_N", label: "North Liquid Silo", capacity: 350, unit: "m³" },
      { id: "LS_S", label: "South Liquid Silo", capacity: 350, unit: "m³" },
    ],
    dry: [
      { id: "DS_N", label: "North Dry Silo",    capacity: 980, unit: "MT" },
      { id: "DS_S", label: "South Dry Silo",    capacity: 980, unit: "MT" },
    ],
    molasses: [
      // Add molasses silo details when available
      // { id: "MS1", label: "Final Molasses Silo 1", capacity: 300, unit: "MT" },
    ],
  },

  // ----------------------------------------------------------
  //  GOOGLE APPS SCRIPT WEB APP URL
  //  Paste your deployed Apps Script URL here after setup.
  // ----------------------------------------------------------
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzL1chy1CMPpzV0lKnGg4MOhIau6ZekYBJB7TpKFGjxbW-ptpUSS-Wd6eRZvWnvrt9YBw/exec",

};
