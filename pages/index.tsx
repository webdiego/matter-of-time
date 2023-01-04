import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <>
      <Head>
        <title>matter-of-time</title>
        <meta name="description" content="matter of time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center text-xs mt-10">
        <p className="h-2 w-2 rounded-full animate-pulse bg-green-500 mr-1" />
        <p>You are in {Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'space ?'}</p>
      </div>
      <div className="max-w-sm md:max-w-7xl flex lg:flex-row mx-auto items-center justify-start flex-col pb-10 lg:pb-0 min-h-screen ">
        <Image
          src={'/2.jpeg'}
          width={400}
          height={400}
          alt="logo"
          className="lg:w-1/2 w-auto"
          priority
        />
        <div className="flex items-center justify-center flex-col lg:w-1/2">
          <p className="text-3xl font-bold ">matter-of-time</p>
          <p className="text-lg">When did you born?🔮</p>
          <DatePicker />
        </div>
      </div>
    </>
  );
}
