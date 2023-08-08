import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Hoc from './Crud/Hoc'

const CoursesCrud = () => {
    let [array, setarray] = useState([])
    let [obj, setobj] = useState([])
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
        if (e.target.name === "img") {
            obj[e.target.name] = await toBase64(e.target.files[0])
        }
        else {
            obj[e.target.name] = e.target.value
        }
    }
    const Save = () => {
        array = [...array, obj]
        setarray(array)
        obj = {}
        console.log(obj)
        fileRef.current.value = ""
    }
    return (

        <div>
            {obj}
            <h1 className='text-center'>Home</h1>
            <form action="" className='rounded-2 p-3'>
                <div className='py-2'>
                    <label htmlFor="" className="form-label">Upload Slider Image</label>
                    <input type="text" name="a" className="form-control" onChange={Change} value={obj.a} />
                </div>
                <div className='py-2'>
                    <label htmlFor="" className="form-label">Upload Slider Image</label>
                    <input type="text" name="to" className="form-control" onChange={Change} value={obj.to} />
                </div>
                <div className='py-2'>
                    <label htmlFor="" className="form-label">Upload Slider Image</label>
                    <input type="file" name="img" className="form-control" ref={fileRef} onChange={Change} />
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
                            <div className='col-2' key={i}>
                                <h1>{x.a}</h1>
                                <h1>{x.to}</h1>
                                <img src={x.img} alt="" style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Hoc(CoursesCrud)
