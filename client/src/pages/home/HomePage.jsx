import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='bg-[#f6f6f4] h-screen min-h-screen overflow-hidden'>
      <section className='grid grid-rows-reg h-full overflow-hidden'>
        <Navbar />
        <main className='grid w-full h-full overflow-hidden mt-4'>
          <div className='grid container w-full lg:w-1/2 mx-auto overflow-hidden px-2 lg:px-8 grid-rows-reg h-full pb-24'>
            <div className='grid grid-rows-2 h-full overflow-hidden bg-white rounded-xl'>
              <section className='grid w-full overflow-hidden h-2/3'>
                <div className='bg-white w-full h-full grid p-4'>
                  <img
                    src='https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-91e9d5e3-5dd7-43a8-8085-304071862f63/banner'
                    className='object-cover w-full object-top'
                    alt='im'
                  />
                </div>
              </section>
              <section className='grid h-full px-4 -mt-16 lg:-mt-24'>
                <div className='bg-[#f6f6f4] h-fit py-4'>
                  <h1 className='text-center text-5xl'>
                    <span className='font-corgs'>Timber Ark Textiles</span>
                  </h1>
                  <div className='text-center'>
                    <h3>“Handcrafted Original Designs Inspired By Nature.”</h3>
                  </div>
                  <div className='text-center mt-4'>
                    <h4 className='text-xl'>
                      <span>CRAFT</span> ~ <span>NEEDLE</span> ~{' '}
                      <span>STITCH</span>
                    </h4>
                  </div>
                </div>
                <section>
                  <div>
                    <div>
                      <span>Nic Harman</span>
                    </div>
                    <div>
                      <span>Launceston Cornwall</span>
                    </div>
                  </div>
                  {/* cta */}
                  <div className='grid grid-cols-3 px-2 gap-6 mt-4'>
                    <button
                      id='/contact'
                      onClick={navigateToPage}
                      className='w-full outline outline-2 outline-black rounded py-1 bg-[#f6f6f4] hover:bg-[#f0efeb] no__highlights active:scale-95'
                    >
                      Contact
                    </button>
                    <a
                      href='https://folksy.com/shops/NicHarman'
                      className='w-full text-center outline outline-2 outline-black rounded py-1 bg-[#f6f6f4] hover:bg-[#f0efeb] no__highlights active:scale-95'
                    >
                      Go To Store
                    </a>
                    <button
                      id='/gallery'
                      onClick={navigateToPage}
                      className='w-full outline outline-2 outline-black rounded py-1 bg-[#f6f6f4] hover:bg-[#f0efeb] no__highlights active:scale-95'
                    >
                      Gallery
                    </button>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default HomePage;
