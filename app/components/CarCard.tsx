'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { Button } from '.'

interface CarCardProps {
    car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
    const { 
        city_mpg,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        make,
        highway_mpg,
        model,
        transmission,
        fuel_type,
        year,
    } = car;
    return (<div>CarCard</div>
    )
}

export default CarCard