const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const invoicesDir = path.join(__dirname, 'INVOICE_17489_25.03.2026');

async function readInvoices() {
  const files = fs.readdirSync(invoicesDir).filter(f => f.endsWith('.pdf'));
  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(invoicesDir, file));
    try {
      const data = await pdf(dataBuffer);
      console.log(`--- ${file} ---`);
      const lines = data.text.split('\n').filter(l => l.trim().length > 0);
      // Try to find client name (e.g. after 'Billed To' or in the first few lines)
      console.log(lines.slice(0, 15).join('\n'));
    } catch (e) {
      console.error(`Error reading ${file}:`, e);
    }
  }
}

readInvoices();
