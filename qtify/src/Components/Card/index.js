import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';


export default ({
    imgSrc,
    followersCount,
    label,
    songs
}) => {

    return (
        <>
            <Tooltip title={`${songs && Object.keys(songs).length} songs`} placement="top-start">
                <div className="card-wrapper" >
                    <div className="card" >
                        <div className='card-img-frame'>
                            <img src={imgSrc} className='card-img'/>
                        </div>
                        <div className='card-content'>
                            <div className="card-content-pill">
                                <span>{followersCount} follows</span>
                            </div>
                        </div>
                    </div>
                    <p className="card-label">{label}</p>
                </div>
            </Tooltip>
     </>
    )
}