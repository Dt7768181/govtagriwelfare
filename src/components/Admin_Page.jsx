import "../assets/Admin_Page.css";
import React, { useState, useEffect } from 'react';
import { db } from '../main'; 
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default function Admin_Page() {
    const [schemeName, setSchemeName] = useState('');
    const [schemeDescription, setSchemeDescription] = useState('');
    const [schemes, setSchemes] = useState([]);

    // For editing
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // Fetch schemes on component mount
    useEffect(() => {
        fetchSchemes();
    }, []);

    const fetchSchemes = async () => {
        const querySnapshot = await getDocs(collection(db, "schemes"));
        const schemesData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setSchemes(schemesData);
    };

    const handleSubmit = async () => {
        const newScheme = {
            name: schemeName,
            description: schemeDescription
        };

        try {
            await addDoc(collection(db, "schemes"), newScheme);
            alert('Scheme added successfully!');
            setSchemeName('');
            setSchemeDescription('');
            fetchSchemes(); // Refresh list
        } catch (e) {
            console.error("Error adding document: ", e);
            alert('Error adding scheme.');
        }
    };

    const startEdit = (scheme) => {
        setEditingId(scheme.id);
        setEditName(scheme.name);
        setEditDescription(scheme.description);
    };

    const handleSaveEdit = async (id) => {
        try {
            const schemeRef = doc(db, "schemes", id);
            await updateDoc(schemeRef, {
                name: editName,
                description: editDescription
            });
            alert('Scheme updated successfully!');
            setEditingId(null);
            fetchSchemes();
        } catch (e) {
            console.error("Error updating document: ", e);
            alert('Error updating scheme.');
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this scheme?");
        if (confirmDelete) {
            try {
                const schemeRef = doc(db, "schemes", id);
                await deleteDoc(schemeRef);
                alert('Scheme deleted successfully!');
                setSchemes((prevSchemes) => prevSchemes.filter((scheme) => scheme.id !== id));
            } catch (e) {
                console.error("Error deleting document: ", e);
                alert('Error deleting scheme.');
            }
        }
    };
    

    return (
        <div className="Admin-Page">
            <div className="Admin-Container">
                <h1>Want to add a new scheme</h1>
                <p>Scheme Name:</p>
                <input
                    id="scheme-name"
                    value={schemeName}
                    onChange={(e) => setSchemeName(e.target.value)}
                />
                <p>Scheme Description:</p>
                <textarea
                    rows="10"
                    cols="50"
                    placeholder="Enter Description"
                    value={schemeDescription}
                    onChange={(e) => setSchemeDescription(e.target.value)}
                /><br />
                <button onClick={handleSubmit} className="Admin-Button">Submit</button>

                <hr />
                <h2>Existing Schemes</h2>
                {schemes.length > 0 ? (
                    <ul>
                        {schemes.map((scheme) => (
                            <li key={scheme.id}>
                                {editingId === scheme.id ? (
                                    <>
                                        <input
                                            value={editName}
                                            onChange={(e) => setEditName(e.target.value)}
                                        />
                                        <br />
                                        <textarea
                                            rows="5"
                                            cols="50"
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                        />
                                        <br />
                                        <button onClick={() => handleSaveEdit(scheme.id)}className="Admin-Button">Save</button><br/><br/>
                                        <button onClick={() => setEditingId(null)}className="Admin-Button">Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <h3>{scheme.name}</h3>
                                        <p>{scheme.description}</p>
                                        <button onClick={() => startEdit(scheme)}className="Admin-Button">Modify</button><br/><br/>
                                        <button onClick={() => handleDelete(scheme.id)}className="Admin-Button">Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No schemes available yet.</p>
                )}
            </div>
        </div>
    );
}
