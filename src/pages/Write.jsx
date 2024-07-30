import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='Title' />
                <div className="editorContainer">
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>publish</h1>
                    <span>
                        <b>status:</b>draft
                    </span>
                    <span>
                        <b>visibility:</b>public
                    </span>
                    <input style={{display:"none"}} type="file" id='file' name='' />
                    <label className='file' htmlFor="file">上传图片</label>
                    <div className="buttons">
                        <button>保存为草稿</button>
                        <button>更新</button>
                    </div>
                </div>
                <div className="item">
                    <h1>category</h1>
                    <input type="radip" name='cat' value="art" id='art' />
                    <label htmlFor="art"></label>
                    <input type="radip" name='cat' value="art" id='art2' />
                    <label htmlFor="art2"></label>
                    <input type="radip" name='cat' value="art" id='art3' />
                    <label htmlFor="art3"></label>
                </div>
            </div>
        </div>
    )
}

export default Write
