import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AdminPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/admin');
  }, []);

  return (
    <div className='bg-[#f6f6f4] h-screen overflow-hidden'>
      <section className='grid grid-rows-reg h-full overflow-hidden'>
        <Navbar />
        <main className='grid w-full h-full overflow-hidden mt-4'>
          AdminPage
        </main>
      </section>
    </div>
  );
}

export default AdminPage;
