import React from 'react';
import Navpage from './Navpage';
import Image from 'next/image';
import Link from 'next/link';
import Darkswitch from '@/Components/DarkSwitch';
import  Searchbox  from '@/Components/Searchbox'

const Navmenue: React.FC = () => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-6xl'>
      <Link href='/'>
        <Image className='h-auto w-auto' height={80} width={80} priority src='/logo.png' alt='image' />
      </Link>
      <span className='hidden lg:inline md:inline'>
        <Searchbox  /> 
      </span>
       
      <div className='flex gap-12 lg:text-xl md:text-sm text-xs font-semibold'>
        <Darkswitch />
        <Navpage title="Home" address="/" />
        <Navpage title="About" address="/about" />
      </div>
    </div>
  );
};

export default Navmenue;
