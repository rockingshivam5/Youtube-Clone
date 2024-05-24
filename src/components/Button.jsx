import React from 'react'

const Button = ({ name }) => {
    return (
        <div >
            <button className="bg-slate-200 rounded-xl  min-w-20 p-2">{name}</button>
        </div>
    )
}

export default Button
