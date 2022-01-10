import React from 'react'
import Book from '../Book/Book'
import './BookList.css'
export default function BookList() {
    return (
        <div className='parent'>
            <div className='div1'> <Book/></div>
            <div className='div2'> <Book/></div>
            <div className='div3'> <Book/></div>
            <div className='div4'> <Book/></div>
            <div className='div5'> <Book/></div>
        </div>
    )
}
