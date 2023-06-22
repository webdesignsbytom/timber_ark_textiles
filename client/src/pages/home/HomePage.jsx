import React from 'react';
import Navbar from '../../components/nav/Navbar';

function HomePage() {
  return (
    <div className=' bg-[#f6f6f4] h-screen min-h-screen'>
      <section className='grid grid-rows-reg h-full'>
        <Navbar />
        <main className='grid w-full h-full'>
          <div className='grid container w-full mx-auto bg-yellow-300 px-6 grid-rows-reg h-full pb-6'>
            <div>WELCOME</div>
            <div className='grid grid-rows-2 h-full bg-blue-200'>
              <section className='grid w-full'>
                <div className='overflow-hidden'>a</div>
              </section>
              <section className='grid h-full'>b</section>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
