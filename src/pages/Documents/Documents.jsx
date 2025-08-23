import React, { useState } from 'react'
import styles from './styles.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { IoDocumentTextOutline } from "react-icons/io5";

function Documents() {
    const [searchTerm, setSearchTerm] = useState("");

    const documents = [
    { id: 1, title: "Software Requirements Specification", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 2, title: "Sprint 3 planning", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 3, title: "Test Case Repository", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 4, title: "Deployment Checklist", version: "v2.1", status: "Approved", modified: "2023-01-01" },
  ];

    const filteredDocs = documents.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.container1}>
            <div className={styles.headings}>
            <h1 className={styles.heading}>Documentation Center</h1>
            
            <div className={styles.buttons}>
                <div className={styles.searchBox}>
                    <span className={styles.searchIcon}>🔍</span>
                    <input 
                        type="text" 
                        placeholder="Search documents..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput} 
                    />
                </div>
                <button className={styles.newTaskBtn}>
                + New Document
                </button>
            </div>
            </div>

            <div className={styles.documents}>
                {filteredDocs.length > 0 ? (
                    filteredDocs.map(doc => (
                    <div key={doc.id} className={styles.document}>
                        <div className={styles.icons}>
                        <IoDocumentTextOutline className={styles.icon} />
                        </div>
                        <div className={styles.details}>
                        <p className={styles.docTitle}>{doc.title}</p>
                        <div className={styles.versionRow}>
                            <span>{doc.version}</span>
                            <button className={styles.detBtn}>{doc.status}</button>
                        </div>
                        <p className={styles.para}>Last modified: {doc.modified}</p>
                        <div className={styles.actions}>
                            <button>Edit</button>
                            <button>Export</button>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p className={styles.noResult}>No documents found</p>
                )}
                </div>
            </div>
        </div>
  )
}

export default Documents
