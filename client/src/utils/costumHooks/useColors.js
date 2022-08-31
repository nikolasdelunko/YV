import React from 'react';


const useColors = () => {
	const colorsHendler = (max) => {
        const color =  Math.floor(Math.random()*max)
        const colors = ['#20FF94','#FFE920', '#20D7FF', '#FF2055', '#FF20E9', '#7520FF', '#20FFD7', '#20D7FF', '#7520FF', '#FF2D20']
        return colors[color]
	}


	return {colorsHendler}
};

export default useColors;