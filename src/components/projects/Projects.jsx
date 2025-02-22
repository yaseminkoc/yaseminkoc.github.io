import Frontend from '../../assets/frontend.jpeg'
import PropTypes from 'prop-types'; 

const ProjectCard = ({ image, title, description }) => (
    <div className="p-4 md:w-1/3">
        <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Resim Alanı */}
            <img 
                src={image} 
                alt="Project" 
                className="object-cover object-center h-52 w-full transition-opacity duration-300 hover:opacity-50"
            />

            {/* Başlık (Her Zaman Görünür) ve Açıklama (Hover'da Görünür) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-40 transition-opacity duration-300">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
            </div>
        </div>
    </div>
);


export default function Projects() {
    const projects = [
        {title:'Portfolio',image: Frontend, description: "sfsf"},
        // {title:'site web ecommerce',image: Frontend_1},
        // {title:'site web ecommerce',image: Frontend_2},
    ];
  return (
    <section id='projects' className='text-gray-400 bg-[#624F82] body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempore aperiam atque inventore qui et eius quis ratione accusantium. Maxime unde dolores quasi dicta quibusdam ipsam optio vero accusantium nobis.
                    </p>
                    <button type='button' data-aos='fade-up' data-aos-delay='300' className='text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center'>
                        View all
                    </button>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes
}