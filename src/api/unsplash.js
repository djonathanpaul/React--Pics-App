import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com/',
    headers:{Authorization: 'Client-ID Pi8hXZhcleSTxbaX5q_3QMoFvLl1Nhcv-Dp_4COmyso'}
});