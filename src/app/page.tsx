'use client';

import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select'
import {recipients} from './recipients';
import {topicTexts} from './texts';
import {CopyToClipboard} from 'react-copy-to-clipboard';

let topicNamesSet = new Set(topicTexts.map((topicText) => topicText.topicName)).values();
let topicNames : Array<string> = Array.from(topicNamesSet);

export default function Home() {
    const [recipient, setRecipient] = useState<any>(null);
    const [topic, setTopic] = useState<string>('');
    const [privacyChecked, setPrivacyChecked] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    // Funktion zur Generierung des Textes basierend auf der Auswahl
    const generateText = () => {
        if (recipient && topic) {
            let texts = topicTexts.filter((topicText) => topicText.topicName === topic);
            if (texts.length === 0) {
                return '';
            }

            return `${recipient.salutation} ${recipient.chairman}

${texts[0].text}

[Dein Name]`
        } else {
            return ''
        }
    };

    let nameOptions = recipients.map((otherRecipient) => {
        return {
            value: JSON.stringify(otherRecipient),
            label: otherRecipient.chairman + ", " + otherRecipient.postalCode + " " + otherRecipient.city
        }
    });
    nameOptions.unshift({
        value: "",
        label: "Bitte wählen"
    });

    let topicOptions = topicNames.map((topicName) => {
        return {
            value: topicName,
            label: topicName
        }
    });

    topicOptions.unshift({
        value: "",
        label: "Bitte wählen"
    });

    if (recipient && topic) {
        if (!text) {
            setText(generateText());
        } else {
            let realText = generateText();
            if (realText != text) {
                setText(realText);
            }
        }
    } else {
        if (text) {
            setText('');
        }
    }

  return (
    <main className='main'>
        {!recipient &&!topic && <div className='hero'>
            <div className='container'>
                <p>Willkommen bei Wählerbriefe! Bitte wählen Sie den Adressaten und das Thema Ihres Briefes aus. Ein Text wird daraufhin für Sie generiert.</p>
            </div>
        </div>}
        {recipient && !topic && <div className='hero'>
            <div className='container'>
                <p>Wählen Sie nun das Thema Ihres Briefes aus. Ein Text wird daraufhin für Sie generiert.</p>
            </div>
        </div>}
        {/* Formular mit zwei Select-Elementen */}
        <div className='container'>
            <form>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='select-wrap'>
                            <label className='label' htmlFor="recipientSelect">An wen soll der Brief adressiert sein?</label>
                            <div className='select-box'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                                <Select
                                    id={Date.now().toString() + "-recepient"}
                                    isSearchable={true}
                                    defaultValue={""}
                                    isMulti={false}
                                    options={nameOptions}
                                    placeholder="Bitte wählen"
                                    onChange={(newValue: any) => {
                                        setRecipient(newValue.value ? JSON.parse(newValue.value) : null);
                                    }}
                                />
                            </div>
                        </div>

                        {recipient && <div className='select-wrap'>
                            <label className='label' htmlFor="topicSelect">Wählen Sie ein Thema:</label>
                            <div className='select-box'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                                <Select
                                    isSearchable={true}
                                    id={Date.now().toString() + "-topic"}
                                    defaultValue={""}
                                    isMulti={false}
                                    options={topicOptions}
                                    placeholder="Bitte wählen"
                                    onChange={(newValue: any) => {
                                        setTopic(newValue.value);
                                    }}
                                />
                            </div>
                        </div>}
                    </div>
                    {recipient && topic && <div className='col-lg-6'>

                        {/* Generierter Textcontainer */}
                        <div className='textarea-wrap'>
                            <label className='label'>Generierter Brief: <CopyToClipboard text={text}
          onCopy={() => alert("Text wurde kopiert!")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
        </svg>
        </CopyToClipboard>


                            </label>
                            <textarea
                                className='textarea'
                                value={text}
                                readOnly
                                rows={14}
                                style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                            />
                        </div>
                        {/* Absenden Button, der deaktiviert ist, wenn die Checkbox nicht angehakt ist */}
                        <div style={{ marginBottom: '30px', marginTop: '-10px' }}>
                                <input
                                id="privacyCheckbox"
                                className='checkbox'
                                type="checkbox"
                                checked={privacyChecked}
                                onChange={() => setPrivacyChecked(!privacyChecked)}
                                />
                            <label className='checkbox-label' htmlFor="privacyCheckbox">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                </svg>
                                Ich habe den Text abgeschrieben, ausgedruckt oder kopiert.
                            </label>
                        </div>
                        <div>
                            <a
                                href={recipient.website} 
                                style={{
                                pointerEvents: privacyChecked ? 'auto' : 'none',
                                backgroundColor: privacyChecked ? 'blue' : 'gray',
                                color: 'white',
                                padding: '10px 20px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontWeight: '700',
                                }}
                            >
                                Weiter zur Adresse
                            </a>
                        </div>
                    </div>}
                </div>
            </form>
        </div>
    </main>
  );
}
