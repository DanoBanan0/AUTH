'use client';
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Register from '../components/register';
import Login from '../components/login';


export default function Page() {
    return (
        <div>
            <Login></Login>
            <Register></Register>
        </div>
    );
}