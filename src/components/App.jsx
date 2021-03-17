import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NoteItem from './NoteItem';
import InputArea from './InputArea';

function App() {
    const [items, setItems] = useState([]);

    function addItem(newNote) {
        setItems((prevItems) => {
            return [...prevItems, newNote];
        });
    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <InputArea add={addItem} />
            {items.map((noteItem, index) => (
                <NoteItem
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteItem}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
