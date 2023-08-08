import React, { useState } from 'react'
import { useRef } from 'react'
import Hoc from './Hoc'
const SliderCrud = () => {
    let [array, setarray] = useState([])
    let profile = useState()
    const fileRef = useRef()

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }
    const Change = async (e) => {
        profile = await toBase64(e.target.files[0])
    }
    const Save = () => {
        array = [...array, profile]
        setarray(array)
        fileRef.current.value = ""
    }
    return (
        <div>
            <h1 className='text-center'>Home</h1>
            <form action="" className='rounded-2 p-3'>
                <div className='py-2'>
                    <label htmlFor="" className="form-label">Upload Slider Image</label>
                    <input type="file" name="name" className="form-control" ref={fileRef} onChange={Change} />
                </div>
                <div className="text-center py-2">
                    <button type='buttoN' className="btn btn-outline-primary" onClick={Save}>
                        Upload
                    </button>
                </div>
            </form>
            <div>
                <div className="row">
                    {array.map((x, i) => {
                        return (
                            <div className='col-2'>
                                <img src={x} alt="" style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Hoc(SliderCrud)
