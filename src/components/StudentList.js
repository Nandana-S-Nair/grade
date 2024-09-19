import React, { useState } from 'react';
import './StudentList.css'; 

const StudentList = () => {
    const studentData = [
        { id: 1, student_name: 'John Doe', grade: 85.00, remarks: 'PASS' },
        { id: 2, student_name: 'Jane Doe', grade: 72.50, remarks: 'FAIL' },
        { id: 3, student_name: 'Mark Smith', grade: 90.00, remarks: 'PASS' },
        { id: 4, student_name: 'Lucy Brown', grade: 65.00, remarks: 'FAIL' }
    ];

    const [students] = useState(studentData); 
    const [filter, setFilter] = useState('all'); 
    const [searchTerm, setSearchTerm] = useState(''); 

    const filteredStudents = students.filter(student => {
        const matchesFilter = filter === 'all' || student.remarks === filter.toUpperCase();
        const matchesSearch = student.student_name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>Student Grade Application</h1>
            
            <div style={{ marginBottom: '20px', marginLeft:'10px' }}>
                <input 
                    type="text"
                    placeholder="Search by student name" 
                    style={{ padding: '5px', marginRight: '10px' }} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <select 
                    style={{ padding: '5px' }} 
                    onChange={(e) => setFilter(e.target.value)} 
                    value={filter}
                >
                    <option value="all">All</option>
                    <option value="PASS">PASS</option>
                    <option value="FAIL">FAIL</option>
                </select>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto' }}>
                <thead>
                    <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                        <th style={tableHeaderStyle}>Student Name</th>
                        <th style={tableHeaderStyle}>Grade</th>
                        <th style={tableHeaderStyle}>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id} style={student.remarks === 'PASS' ? passStyle : failStyle}>
                            <td style={tableCellStyle}>{student.student_name}</td>
                            <td style={tableCellStyle}>{student.grade}</td>
                            <td style={tableCellStyle}>{student.remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left'
};

const tableCellStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left'
};

const passStyle = {
    backgroundColor: '#d4edda' 
};

const failStyle = {
    backgroundColor: '#f8d7da' 
};

export default StudentList;
