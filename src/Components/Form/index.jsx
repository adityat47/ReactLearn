import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [subject, setSubject] = useState({
        english: false,
        math: false,
        science: true,
    })
    const [resume, setResume] = useState('');
    const [url, setUrl] = useState('');

    //function to handle input change
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, phone, gender, subject, resume, url);
    }

    const handleSubjectChange = (sub) => {
        setSubject((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }))
    }

    const handleReset = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setGender('');
        setSubject(
            {
                english: false,
                math: false,
                science: true,
            }
        );
        setResume('');
        setUrl('');
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <fieldset className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                    <legend className="text-2xl font-bold text-gray-700 mb-6">Form</legend>
                    <form action="#" method='get'>
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor='name' className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Enter your name'
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor='LastName' className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Enter your Last Name'
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    placeholder='Enter your email'
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='Enter your phone number'
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value='male'
                                            checked={gender === 'male'}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="accent-blue-500"
                                        />
                                        <span>Male</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value='female'
                                            checked={gender === 'female'}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="accent-pink-500"
                                        />
                                        <span>Female</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value='other'
                                            checked={gender === 'other'}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="accent-gray-500"
                                        />
                                        <span>Other</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                                >Submit</button>
                                <button
                                    type="reset"
                                    onClick={handleReset}
                                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
                                >Reset</button>
                            </div>
                        </div>
                    </form>
                </fieldset>
                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700">Value we got in forms are <b>{name} {lastName}</b></p>
                </div>
            </div>

        </>
    )
}

export default Form