import { error } from "console";
import React from "react";

interface Props {
    name: string;
    value:string;
    type?:string;
    erro?:string;
    label:string;
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function Input({name, erro="", value, onChange, label="", type="text"}: Props) {
    return (
        <div>
        <label className="text-gray-900 mb-1">
            {label}
        <input
        type={type}
        className="bg-gray-700 border border-gray-200" 
        name={name} value={value} onChange={onChange}/>
        </label>
        
      {erro && <span className="text-red-800">{erro}</span>}

        </div>
    )
}