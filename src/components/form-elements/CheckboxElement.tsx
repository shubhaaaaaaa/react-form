import React from 'react'
import Checkbox from '@mui/joy/Checkbox';
import { useField, useFormikContext } from 'formik'
import { FormLabel, FormControl } from "@mui/material";
import { useState } from 'react';

export const CheckboxElement = ({ name }) => {
    const [field] = useField(name);
    const [list, setList] = useState<string[]>([]);
    const {setFieldValue} = useFormikContext()

    const handleClick = (e) => {
        setList((prevList) => {
            const updatedList = [...prevList, e.target.value]

            setTimeout(() => {
                setFieldValue(name, updatedList)
            }, 0)
            
            return updatedList
        })     
    }

    return (
        <>
            <FormControl {...field}
            sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px 6rem 10px 16px ',
                position: 'relative',
            }}>

                <FormLabel sx={{
                    fontSize:  '0.7rem',
                    position: 'absolute',
                    top: '-10px',
                    left: '16px',
                    background: '#fff',
                    padding: '0 4px',
                }}>
                Areas of Interest
                </FormLabel>
                
                <Checkbox name={`${name}[0]`} onClick={(e) => handleClick(e)} value="Technology" label="Technology" variant="soft" className='mb-2'/>
                <Checkbox name={`${name}[1]`} onClick={(e) => handleClick(e)} value="Science" label="Science" variant="soft" className='mb-2'/>
                <Checkbox name={`${name}[2]`} onClick={(e) => handleClick(e)} value="Business" label="Business" variant="soft" className='mb-2'/>
                <Checkbox name={`${name}[3]`} onClick={(e) => handleClick(e)} value="Architecture" label="Architecture" variant="soft" className='mb-2'/>

            </FormControl>
        </>
  )
}
