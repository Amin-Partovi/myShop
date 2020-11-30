import React from 'react';
import axios from 'axios';

export const jsonServer=axios.create({
    baseURL: "http://localhost:3001"
})