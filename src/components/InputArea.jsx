import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fade, Zoom, Fab } from '@material-ui/core';

function InputArea(props) {
    const [inputTilte, setInputTitle] = React.useState('');
    const [inputContent, setInputContent] = React.useState('');
    const [animate, setAnimation] = React.useState(false);

    function handleTitle(event) {
        const newValue = event.target.value;
        setInputTitle(newValue);
    }

    function handleContent(event) {
        const newValue = event.target.value;
        setInputContent(newValue);
    }

    return (
        <div className="creator">
            {animate ? (
                <input
                    onChange={handleTitle}
                    type="text"
                    placeholder="Title"
                    value={inputTilte}
                />
            ) : null}
            <textarea
                onChange={handleContent}
                type="text"
                rows={animate ? '3' : '1'}
                placeholder="Take a note"
                value={inputContent}
                onClick={() => {
                    setAnimation(true);
                }}
            />

            <Zoom in={animate}>
                <Fab
                    onClick={() => {
                        props.add({
                            title: inputTilte,
                            content: inputContent,
                        });
                        setInputTitle('');
                        setInputContent('');
                        setAnimation(false);
                    }}
                >
                    <AddIcon />
                </Fab>
            </Zoom>
        </div>
    );
}

export default InputArea;
