import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
    const [excelData, setExcelData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryStr = e.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });

            // Assuming the first sheet contains the data
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Convert to JSON
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
        };

        reader.readAsBinaryString(file);
    };

    return (
        <div>
            <h2>Upload Excel File</h2>
            <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} />
            <h3>Data from Excel:</h3>
            {excelData.length > 0 ? (
                <pre>{JSON.stringify(excelData, null, 2)}</pre>
            ) : (
                <p>No data to display</p>
            )}
        </div>
    );
};

export default ExcelReader;
