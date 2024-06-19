import img1 from '../assets/respaldado/emprendimiento.png';
import img2 from '../assets/respaldado/tecnologico-monterrey.png';
import img3 from '../assets/respaldado/tuti.png';
import img4 from '../assets/respaldado/uanl.png';

const images = [img1, img2, img3, img4];


export function Respaldado() {
  return (
    <>
      <div className='mt-12 z-10'>
        <h4 className="text-3xl lg:text-4xl font-semibold text-center mb-2">Respaldado</h4>
        <p className='text-center'>Por nuestros usuarios y asociados </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center mt-11 gap-8 md:gap-6 max-w-7xl mx-auto'>
            {
                images.map(img => <img key={img} src={img} className='object-contain max-w-44 w-full h-full mx-auto' />)
            }
        </div>
      </div>
    </>
  );
}
